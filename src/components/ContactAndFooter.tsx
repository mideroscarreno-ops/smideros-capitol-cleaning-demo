import { ArrowRight, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/capitolData';

interface ContactAndFooterProps {
  onNavigateSection: (sectionId: string) => void;
  onRequestEstimate: () => void;
}

export function ContactAndFooter({
  onNavigateSection,
  onRequestEstimate,
}: ContactAndFooterProps) {
  return (
    <>
      <section className="bg-[#14243A] text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <p className="text-sm font-medium text-[#C8A66A] mb-3 tracking-wide">
            Oklahoma City Commercial Facility Care
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold leading-tight text-white [text-wrap:balance]">
            Your Business Deserves a Cleaner Standard.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/80 max-w-2xl mx-auto">
            Tell us about your facility and discover a commercial cleaning plan tailored to your needs.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <button
              type="button"
              onClick={onRequestEstimate}
              className="min-h-[48px] px-7 py-3.5 inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white bg-[#1C6659] hover:bg-[#17554a] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Request Your Free Estimate</span>
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </button>

            <a
              href={COMPANY_INFO.phoneHref}
              className="min-h-[48px] px-6 py-3.5 inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white border border-white/30 hover:bg-white/10 rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 tabular-nums"
            >
              <Phone className="w-4 h-4 text-[#C8A66A] shrink-0" aria-hidden="true" />
              <span>Speak With Our Team</span>
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-[#F9F8F4] py-14 sm:py-16 border-b border-[#14243A]/10"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <p className="text-sm font-medium text-[#1C6659] mb-2">
                Contact Information
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#14243A]">
                Connect With Capitol Cleaning
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#263238]">
                Whether you manage a multi-tenant office building, medical suite, retail property, or industrial facility, reach out by phone or email to discuss your commercial cleaning schedule.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <a
                href={COMPANY_INFO.phoneHref}
                className="bg-white border border-[#14243A]/12 hover:border-[#1C6659] rounded-md p-5 transition-colors duration-150 block"
              >
                <Phone className="w-5 h-5 text-[#1C6659] mb-3" aria-hidden="true" />
                <p className="text-xs font-medium text-[#263238]/70">Telephone</p>
                <p className="mt-1 font-display text-lg font-semibold text-[#14243A] tabular-nums">
                  {COMPANY_INFO.phoneDisplay}
                </p>
              </a>

              <a
                href={COMPANY_INFO.emailHref}
                className="bg-white border border-[#14243A]/12 hover:border-[#1C6659] rounded-md p-5 transition-colors duration-150 block"
              >
                <Mail className="w-5 h-5 text-[#1C6659] mb-3" aria-hidden="true" />
                <p className="text-xs font-medium text-[#263238]/70">Email</p>
                <p className="mt-1 font-display text-base font-semibold text-[#14243A] break-all">
                  {COMPANY_INFO.email}
                </p>
              </a>

              <div className="bg-white border border-[#14243A]/12 rounded-md p-5">
                <MapPin className="w-5 h-5 text-[#1C6659] mb-3" aria-hidden="true" />
                <p className="text-xs font-medium text-[#263238]/70">Location</p>
                <p className="mt-1 font-display text-lg font-semibold text-[#14243A]">
                  {COMPANY_INFO.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#F9F8F4] text-[#263238] py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#14243A]/10">
            <div>
              <span className="font-display text-xl font-semibold text-[#14243A]">
                {COMPANY_INFO.name}
              </span>
              <p className="mt-1 text-sm text-[#263238]/75">
                Commercial Cleaning &amp; Janitorial Services · Established {COMPANY_INFO.established} · {COMPANY_INFO.location}
              </p>
            </div>

            <nav
              aria-label="Footer Navigation"
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-[#14243A]"
            >
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'industries', label: 'Industries' },
                { id: 'about', label: 'About' },
                { id: 'service-areas', label: 'Service Areas' },
                { id: 'testimonials', label: 'Reviews' },
                { id: 'estimate', label: 'Request Estimate' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection(item.id);
                  }}
                  className="hover:text-[#1C6659] transition-colors duration-150 py-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#263238]/75">
            <p>Independent website redesign concept by S.Mideros Agency.</p>
            <a
              href={COMPANY_INFO.originalWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[#14243A] hover:text-[#1C6659]"
            >
              <span>Official Business Website: capitolcleaningokc.com</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
