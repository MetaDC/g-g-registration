import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

// ─── CONFIG — update before going live ────────────────────────────────────
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbz7RjA7e5fpyVfAG0OMb0ewAEfn4qIfCm8HAogQv1CxA59ahjrH8qAyXiqJG2lT3hPvBw/exec";
const MAILER_URL        = "https://mailer-5x4h33dpla-uc.a.run.app/";
const NOTIFY_EMAIL      = ["gromminggurus@gmail.com", "frenyzsalon@gmail.com"]; // receives email on each registration
// ──────────────────────────────────────────────────────────────────────────

const RegistrationForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [playerCount, setPlayerCount] = useState(8);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    salonName: "",
    ownerName: "",
    teamName: "",
    mobile: "",
    email: "",
  });

  const totalCost = 5000 + playerCount * 2000;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlayerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 8 && val <= 15) {
      setPlayerCount(val);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.salonName || !formData.ownerName || !formData.teamName || !formData.mobile || !formData.email) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(formData.mobile)) {
      toast({ title: "Please enter a valid 10-digit mobile number", variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({ title: "Please enter a valid email address", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const payload = {
      submittedAt,
      salonName:   formData.salonName,
      ownerName:   formData.ownerName,
      teamName:    formData.teamName,
      mobile:      formData.mobile,
      email:       formData.email,
      players:     playerCount,
      totalAmount: `₹${totalCost.toLocaleString("en-IN")}`,
      notifyEmail: NOTIFY_EMAIL,
    };

    const emailData = {
      emails: [NOTIFY_EMAIL],
      subject: "New Salon Tournament Registration",
      message: `
        <h3>New Team Registration</h3>
        <strong>Salon Name</strong>: ${formData.salonName}<br/>
        <strong>Owner Name</strong>: ${formData.ownerName}<br/>
        <strong>Team Name</strong>: ${formData.teamName}<br/>
        <strong>Mobile</strong>: ${formData.mobile}<br/>
        <strong>Email</strong>: ${formData.email}<br/>
        <strong>Players</strong>: ${playerCount}<br/>
        <strong>Total Amount</strong>: ₹${totalCost.toLocaleString("en-IN")}<br/>
        <strong>Submitted At</strong>: ${submittedAt}
      `,
    };

    try {
      // Send to Google Sheets and mailer simultaneously (same pattern as Document 2)
      const [emailResponse] = await Promise.all([
        fetch(MAILER_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(emailData),
        }),
        fetch(GOOGLE_SHEETS_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }),
      ]);

      if (!emailResponse.ok) throw new Error("Failed to send email notification");

      navigate("/thank-you");
    } catch (err) {
      console.error("Submission error:", err);
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-md bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all font-body text-sm";

  return (
    <section id="register" className="py-20 px-4" style={{ background: "var(--gradient-hero)" }}>
      <div className="container max-w-xl mx-auto">
        <motion.h2
          className="font-display text-4xl md:text-6xl text-center text-primary-foreground tracking-wider mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          REGISTER YOUR TEAM
        </motion.h2>
        <p className="text-center text-secondary/70 mb-10 text-sm">
          Fill in the details below to register your salon team
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-card rounded-xl p-6 md:p-10 shadow-2xl space-y-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">Salon Name</label>
            <input name="salonName" value={formData.salonName} onChange={handleChange} placeholder="Enter salon name" className={inputClasses} maxLength={100} />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">Name of Salon Owner</label>
            <input name="ownerName" value={formData.ownerName} onChange={handleChange} placeholder="Enter owner name" className={inputClasses} maxLength={100} />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">Team Name</label>
            <input name="teamName" value={formData.teamName} onChange={handleChange} placeholder="Enter team name" className={inputClasses} maxLength={100} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">Mobile Number</label>
              <input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="10-digit number" className={inputClasses} maxLength={10} />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">Email</label>
              <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email address" className={inputClasses} maxLength={255} />
            </div>
          </div>

          {/* Player count */}
          <div className="bg-muted rounded-lg p-5 space-y-3">
            <label className="block text-sm font-medium text-foreground">
              How many players do you want to register?
            </label>
            <p className="text-xs text-muted-foreground">
              ₹2,000 per player · Min 8, Max 15 · 8 players play at a time
            </p>
            <input
              type="range"
              min={8}
              max={15}
              value={playerCount}
              onChange={handlePlayerChange}
              className="w-full accent-secondary cursor-pointer"
            />
            <div className="flex justify-between items-center">
              <span className="text-2xl font-display text-primary tracking-wider">{playerCount} PLAYERS</span>
              <span className="text-xs text-muted-foreground">8 — 15</span>
            </div>
          </div>

          {/* Cost summary */}
          <div className="border border-border rounded-lg p-5 space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Salon Registration</span>
              <span>₹5,000</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Players ({playerCount} × ₹2,000)</span>
              <span>₹{(playerCount * 2000).toLocaleString("en-IN")}</span>
            </div>
            <div className="border-t border-border pt-2 flex justify-between font-bold text-foreground">
              <span>Total</span>
              <span className="font-display text-xl tracking-wider">₹{totalCost.toLocaleString("en-IN")}</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-md font-display text-xl tracking-wider text-primary hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            style={{ background: "var(--gradient-gold)" }}
          >
            {isSubmitting ? "SUBMITTING…" : "SUBMIT"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default RegistrationForm;