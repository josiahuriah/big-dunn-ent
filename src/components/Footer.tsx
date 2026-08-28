import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const explore = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/events", label: "Events" },
    { href: "/services/wedding-packages", label: "Wedding Packages" },
    { href: "/services/event-packages", label: "Event Packages" },
    { href: "/services/equipment", label: "Equipment" },
    { href: "/quote", label: "Build a Quote" },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ background: "#100c1c", color: "#cfc9dd" }}>
      {/* Gradient top rule */}
      <div style={{ height: "3px", width: "100%", background: "linear-gradient(90deg,#6a26c9 0%,#2f39e8 55%,#6a26c9 100%)" }} />

      <div className="max-w-[1240px] mx-auto px-6 pt-[72px]">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1.2fr] gap-14">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex no-underline">
              <Image src="/images/logo-long.png" alt="Big Dunn Entertainment" width={1200} height={200} className="h-11 w-auto brightness-0 invert" />
            </Link>
            <div className="flex items-center gap-2.5 mt-1.5 mb-[22px]">
              <span style={{ height: "1px", width: "34px", background: "linear-gradient(90deg,transparent,#6a26c9)" }} />
              <span className="italic text-[12.5px] tracking-[0.24em]" style={{ color: "#6a26c9" }}>
                IDEAS FOR LIFE
              </span>
            </div>
            <p className="text-sm leading-[1.7] max-w-[320px] m-0" style={{ color: "#9a94ac" }}>
              One production partner for professional audio, lighting, staging, visuals, power, and event rentals across The Bahamas.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="bd-display text-white text-[13px] tracking-[0.08em] mb-[22px]">EXPLORE</h4>
            <div className="flex flex-col gap-[13px]">
              {explore.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm no-underline transition-colors"
                  style={{ color: "#9a94ac" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Get in touch */}
          <div>
            <h4 className="bd-display text-white text-[13px] tracking-[0.08em] mb-[22px]">GET IN TOUCH</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={17} style={{ color: "#8b7fd6" }} className="flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-[1.5]" style={{ color: "#9a94ac" }}>
                  Carew Street, Nassau, Bahamas
                </span>
              </div>
              <a href="tel:+12424493010" className="flex items-center gap-3 no-underline" style={{ color: "#9a94ac" }}>
                <Phone size={17} style={{ color: "#8b7fd6" }} className="flex-shrink-0" />
                <span className="text-sm">1-242-449-3010</span>
              </a>
              <a
                href="mailto:info@bigdunnentertainment.com"
                className="flex items-center gap-3 no-underline"
                style={{ color: "#9a94ac" }}
              >
                <Mail size={17} style={{ color: "#8b7fd6" }} className="flex-shrink-0" />
                <span className="text-sm">info@bigdunnentertainment.com</span>
              </a>
              <div className="flex gap-3 mt-2">
                {[
                  { href: "https://www.facebook.com/bigdunnentertainment", Icon: Facebook, label: "Facebook" },
                  { href: "https://www.instagram.com/bigdunnentertainment", Icon: Instagram, label: "Instagram" },
                  { href: "https://twitter.com/bigdunnent", Icon: Twitter, label: "Twitter" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] no-underline transition-all hover:-translate-y-0.5"
                    style={{ border: "1px solid rgba(255,255,255,0.14)", color: "#cfc9dd" }}
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 py-[26px] flex justify-between items-center flex-wrap gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <span className="text-[13px]" style={{ color: "#6f6980" }}>
            © {year} Big Dunn Entertainment. All rights reserved.
          </span>
          <span className="text-[13px]" style={{ color: "#6f6980" }}>
            Nassau · The Bahamas
          </span>
        </div>
      </div>
    </footer>
  );
}
