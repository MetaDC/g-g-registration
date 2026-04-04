import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

// ─── CONFIG — update before going live ───────────────────────────────────
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbxxKcCOA-mDfAnRm_GTGEz4eThy-I_JHodbi4wTW74xrYWDEEEknjPu2XRQ466d5OZowQ/exec";
const MAILER_URL        = "https://mailer-5x4h33dpla-uc.a.run.app/";
const NOTIFY_EMAIL   = ["gromminggurus@gmail.com", "frenyzsalon@gmail.com"];

// ✅ Must be an absolute path — file lives at /public/sponsorship-ppt.pdf
const SPONSORSHIP_PDF_URL = "/sponsorship-ppt.pdf";
// ─────────────────────────────────────────────────────────────────────────

const SponsorshipPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = SPONSORSHIP_PDF_URL;
    link.download = "Grooming_Gurus_Sponsorship_Packages.pdf";
    link.target = "_blank"; // fallback: opens in new tab if browser blocks download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleaned = phone.replace(/\s+/g, "");
    if (!/^[+]?\d{10,15}$/.test(cleaned)) {
      toast.error("Please enter a valid phone number");
      return;
    }

    setIsSubmitting(true);

    const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const payload = {
      submittedAt,
      phone:       cleaned,
      notifyEmail: NOTIFY_EMAIL,
      formType:    "sponsorship",
    };

    const emailData = {
      emails: NOTIFY_EMAIL,
      subject: "New Sponsorship Brochure Request",
      message: `
        <h3>Sponsorship Brochure Download Request</h3>
        <strong>Phone</strong>: ${cleaned}<br/>
        <strong>Submitted At</strong>: ${submittedAt}
      `,
    };

    try {
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

      setSubmitted(true);
      toast.success("Thank you! Your download is starting…");

      // Small delay so success UI renders first, then download fires
      setTimeout(() => {
        triggerDownload();
        setTimeout(() => setIsOpen(false), 2000);
      }, 800);

    } catch (err) {
      console.error("Sponsorship submission error:", err);
      toast.error("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-card border border-border rounded-2xl shadow-2xl max-w-md w-full p-8 z-10"
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Download className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-2xl tracking-wider text-primary mb-2">
                BECOME A SPONSOR
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Interested in sponsoring the Grooming Gurus Cricket Tournament?
                Check out our sponsorship packages! Enter your phone number to
                download the brochure.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full font-display tracking-wider"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "SUBMITTING…" : "DOWNLOAD PACKAGES PDF"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  We'll only use your number to share sponsorship details.
                </p>
              </form>
            ) : (
              <div className="text-center py-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3"
                >
                  <span className="text-green-500 text-2xl">✓</span>
                </motion.div>
                <p className="text-foreground font-medium">Your download is starting…</p>
                <p className="text-muted-foreground text-xs mt-1">Thank you for your interest!</p>
                {/* Manual fallback if auto-download doesn't trigger */}
                <button
                  onClick={triggerDownload}
                  className="mt-3 text-xs text-secondary underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  Click here if download doesn't start
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SponsorshipPopup;