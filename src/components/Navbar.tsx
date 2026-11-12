import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/capitolData';

interface NavbarProps {
  onNavigateSection: (sectionId: string) => void;
  onRequestEstimate: () => void;
}

const NAV_LINKS = [
  { id: 'services', label: 'Services' },
  { id: 'industries', label: 'Industries' },
  { id: 'about', label: 'About' },
  { id: 'service-areas', label: 'Service Areas' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ onNavigateSection, onRequestEstimate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileOpen(false);
    onNavigateSection(id);
  };

  const handleEstimateClick = () => {
    setMobileOpen(false);
    onRequestEstimate();
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F9F8F4]/95 backdrop-blur-sm border-b border-[#14243A]/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-[#14243A] whitespace-nowrap shrink-0 hover:text-[#1C6659] transition-colors duration-150"
        >
          {COMPANY_INFO.name}
        </a>

        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.id);
              }}
              className="text-sm font-medium text-[#263238] hover:text-[#1C6659] underline-offset-8 hover:underline decoration-[#C8A66A] decoration-2 transition-colors duration-150 whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center shrink-0">
          <button
            type="button"
            onClick={handleEstimateClick}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-[#1C6659] hover:bg-[#144E44] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Request a Free Estimate
          </button>
        </div>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] text-[#14243A] hover:text-[#1C6659] rounded-md transition-colors duration-150 cursor-pointer"
        >
          {mobileOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#F9F8F4] border-b border-[#14243A]/15 px-4 pt-3 pb-6"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col divide-y divide-[#14243A]/10">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('home');
              }}
              className="min-h-[44px] flex items-center text-base font-medium text-[#14243A] hover:text-[#1C6659]"
            >
              Home
            </a>
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                className="min-h-[44px] flex items-center text-base font-medium text-[#14243A] hover:text-[#1C6659]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 flex flex-col gap-3">
            <button
              type="button"
              onClick={handleEstimateClick}
              className="w-full min-h-[48px] px-5 py-3 text-sm font-semibold text-white bg-[#1C6659] hover:bg-[#144E44] rounded-md transition-colors duration-150 cursor-pointer"
            >
              Request a Free Estimate
            </button>
            <a
              href={COMPANY_INFO.phoneHref}
              className="w-full min-h-[48px] px-5 py-3 inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#14243A] bg-[#EAEDE9] hover:bg-[#dfe4de] border border-[#14243A]/15 rounded-md transition-colors duration-150 tabular-nums"
            >
              <Phone className="w-4 h-4 text-[#1C6659]" aria-hidden="true" />
              Call {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
