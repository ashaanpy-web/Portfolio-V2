import { socials } from "../../lib/constants";
import { ExternalLink } from "lucide-react";
import { cn } from "../../lib/cn";

/**
 * Footer - Premium footer with social links and info
 */
export function Footer() {
  const socialIcons = {
    GitHub: "https://github.com",
    LinkedIn: "https://linkedin.com",
    Twitter: "https://twitter.com",
    Email: "mailto:contact@example.com",
  };

  return (
    <footer className="relative bg-base-ink border-t border-white/5">
      {/* Animated gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glow-primary to-transparent" />

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-display font-bold text-xl text-text-light mb-2">
              <span className="text-glow-primary">Dev</span>folio
            </div>
            <p className="text-text-muted text-sm">
              Premium frontend development and UI design services
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-text-light mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Services", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-text-muted hover:text-text-light transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-text-light mb-4">Connect</h3>
            <div className="flex gap-4">
              {Object.entries(socialIcons).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-glow-primary transition-colors group"
                  title={name}
                >
                  <ExternalLink size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-8" />

        {/* Bottom Info */}
        <div className="flex flex-col md:flex-row justify-between items-center text-text-muted text-xs">
          <p>&copy; 2026 Devfolio. All rights reserved.</p>
          <p>Available for freelance projects on Fiverr</p>
        </div>
      </div>
    </footer>
  );
}
