import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-foreground tracking-wide">
            OVIS
          </div>

          <div className="hidden md:flex gap-8">
            {Object.entries(t.nav).map(([key, label]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === key
                    ? "text-[#1C2A39]"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <LanguageSwitcher />
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/ink-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-[#F5F3EF]/45"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-foreground">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center text-center">
              
              {/* LOGO */}
              <img
                src="/logo.svg"
                alt="OVIS logo"
                className="w-[70px] mb-4 opacity-90"
              />

              {/* 品牌名 */}
              <h1 className="text-6xl font-serif mb-4">
                OVIS
              </h1>

              {/* slogan */}
              <h2 className="text-2xl text-gray-600 mb-6">
                {(t.hero as any).slogan}
              </h2>

            </div>

            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-foreground/75 leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-[#1C2A39] hover:bg-[#16202c] text-white rounded-md border-0 shadow-none"
                onClick={() => scrollToSection("contact")}
                style={{
                  fontSize: "14px",
                  padding: "20px 28px",
                  fontWeight: "500",
                  width: "190px",
                  height: "48px",
                }}
              >
                {"cta" in t.hero ? (t.hero as any).cta : "Contact OVIS →"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            {t.services.title}
          </h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {t.services.items.map((service, idx) => (
              <div
                key={idx}
                className="bg-card p-8 rounded-lg border border-border hover:border-[#1C2A39]/40 transition-colors"
              >
                <div className="w-12 h-12 bg-[#1C2A39]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#1C2A39] font-bold text-lg">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.name}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section id="scenarios" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {t.scenarios.title}
            </h2>
            <p className="text-lg text-foreground/70">
              {t.scenarios.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.scenarios.items.map((item, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-sm bg-[#EDEAE4] h-[160px] group">
                <img
                  src={
                    idx === 0
                      ? "/industry-semiconductor.png"
                      : idx === 1
                      ? "/industry-pcb.png"
                      : idx === 2
                      ? "/industry-ai-supply-chain.png"
                      : "/industry-precision-imaging.png"
                  }
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/28 transition-colors"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {item.name}
                  </h3>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            {t.methodology.title}
          </h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            {t.methodology.subtitle}
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {t.methodology.steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-card border border-border p-6 rounded-lg h-full">
                  <div className="text-4xl font-bold text-[#1C2A39] mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why OVIS Section */}
      <section id="why" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              {t.why.sectionLabel}
            </h2>
            <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto">
              {t.why.title}
            </p>
            <p className="text-base text-foreground/65 mt-4 max-w-3xl mx-auto">
              {t.why.subtitle}
            </p>
          </div>

          {/* Three Trust Points */}
          <div className="grid md:grid-cols-3 gap-10 text-center mb-14">
            {t.why.trustPoints.map((point, idx) => (
              <div key={idx}>
                <div className="text-6xl font-bold text-[#1C2A39] mb-4">{point.value}</div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/65 max-w-xs mx-auto">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-12">
            
            <div className="grid md:grid-cols-[220px_minmax(0,1fr)] gap-14 items-start max-w-4xl mx-auto">

              {/* Image */}
              <div className="flex justify-center md:justify-start">
                <img
                  src="/oscar-emva.jpg"
                  alt={t.why.founderAlt}
                  className="w-[200px] h-[300px] rounded-md object-cover shadow-sm"
                />
              </div>

              {/* Text */}
              <div className="pt-1 md:pt-2">
                
                <p className="text-sm tracking-[0.18em] uppercase text-[#1C2A39]/55 mb-3">
                  {t.why.founderLabel}
                </p>

                <h3 className="text-3xl font-bold text-foreground mb-6">
                  {t.why.founderName}
                </h3>

                <div className="space-y-5 text-foreground/75 leading-relaxed">
                  {t.why.founderParagraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Latest Updates Subsection */}
          <div className="mt-16 bg-secondary/10 p-8 rounded-3xl border border-border">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="text-sm uppercase tracking-[0.18em] text-[#1C2A39]/55 mb-3">
                {t.latestUpdates.title}
              </p>
              <h3 className="text-2xl font-semibold text-foreground">
                {t.latestUpdates.subtitle}
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-card p-6 rounded-lg border border-border hover:border-[#1C2A39]/40 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#1C2A39]/10 rounded-full flex items-center justify-center">
                      <span className="text-[#1C2A39] font-bold">O</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">OVIS</p>
                      <p className="text-xs text-foreground/50">2 days ago</p>
                    </div>
                  </div>

                  <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                    Latest insights and updates from our team on machine vision and supply chain optimization.
                  </p>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1C2A39] hover:opacity-80 text-sm font-medium"
                  >
                    Read on LinkedIn →
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t.contact.title}
          </h2>

          <p className="text-lg text-foreground/70 mb-14 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Email */}
            <div className="border border-border bg-background px-8 py-10 text-center">
              <div className="flex justify-center mb-6">
                <Mail className="w-12 h-12 text-foreground stroke-[1.8]" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t.contact.email}
              </h3>
              <a
                href="mailto:ovis@ovis-partner.com"
                className="text-lg text-foreground/70 hover:text-[#1C2A39] transition-colors"
              >
                ovis@ovis-partner.com
              </a>
            </div>

            {/* WhatsApp */}
            <div className="border border-border bg-background px-8 py-10 text-center">
              <div className="flex justify-center mb-6">
                <MessageCircle className="w-12 h-12 text-foreground stroke-[1.8]" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t.contact.whatsapp}
              </h3>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-foreground/70 hover:text-[#1C2A39] transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>

            {/* LinkedIn */}
            <div className="border border-border bg-background px-8 py-10 text-center">
              <div className="flex justify-center mb-6">
                <Linkedin className="w-12 h-12 text-foreground stroke-[1.8]" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t.contact.linkedin}
              </h3>
              <a
                href="https://linkedin.com/in/oscar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-foreground/70 hover:text-[#1C2A39] transition-colors"
              >
                OVIS
              </a>
            </div>
          </div>
        </div>
      </section>

       {/* Footer */}
       <footer className="bg-background border-t border-border py-8">
         <div className="container mx-auto px-6 text-center">
           <p className="text-sm text-foreground/60">
             {t.contact.footer}
           </p>
         </div>
       </footer>
    </div>
  );
}

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const languages: Array<{ code: string; label: string }> = [
    { code: "en", label: "EN" },
    { code: "zh-TW", label: "繁" },
    { code: "zh-CN", label: "简" },
  ];

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code as any)}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            language === lang.code
              ? "bg-[#1C2A39] text-white"
              : "bg-secondary text-foreground/70 hover:bg-secondary/80"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}