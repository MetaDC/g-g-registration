import logo from "@/assets/gg-logo.webp";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-primary text-primary-foreground/60 text-center text-sm">
      <div className="container flex flex-col items-center gap-3">
        <img src={logo} alt="Grooming Gurus" className="w-12 h-12 object-contain opacity-60" />
        <p>© Grooming Gurus. Powered by <a href="https://diwizon.com" target="_blank" style={{ textDecoration: "underline" }}>Diwizon</a></p>
      </div>
    </footer>
  );
};

export default Footer;
