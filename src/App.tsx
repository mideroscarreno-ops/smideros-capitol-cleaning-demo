import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection, HeritageSection } from './components/HeritageAndAbout';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { CredibilityAndProcess } from './components/CredibilityAndProcess';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import {
  EstimateSection,
  type EstimatePrefill,
} from './components/EstimateSection';
import { ContactAndFooter } from './components/ContactAndFooter';

export default function App() {
  const [estimatePrefill, setEstimatePrefill] = useState<EstimatePrefill>({
    nonce: 0,
  });

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRequestEstimate = (overrides?: Partial<EstimatePrefill>) => {
    if (overrides) {
      setEstimatePrefill((prev) => ({
        ...overrides,
        nonce: prev.nonce + 1,
      }));
    }
    scrollToSection('estimate');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F4] text-[#263238]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#14243A] focus:text-white focus:rounded-md focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar
        onNavigateSection={scrollToSection}
        onRequestEstimate={() => handleRequestEstimate()}
      />

      <main id="main-content" className="flex-1">
        <Hero
          onRequestEstimate={() => handleRequestEstimate()}
          onExploreServices={() => scrollToSection('services')}
        />

        <HeritageSection />

        <ServicesSection
          onSelectServiceForEstimate={(serviceOption) =>
            handleRequestEstimate({ serviceOption })
          }
        />

        <IndustriesSection
          onSelectFacilityForEstimate={(facilityType) =>
            handleRequestEstimate({ facilityType })
          }
        />

        <CredibilityAndProcess
          onRequestEstimate={() => handleRequestEstimate()}
        />

        <AboutSection
          onRequestEstimate={() => handleRequestEstimate()}
        />

        <TestimonialsSection />

        <ServiceAreasSection
          onRequestAreaEstimate={(cityOrZip) =>
            handleRequestEstimate({ cityOrZip })
          }
        />

        <EstimateSection prefill={estimatePrefill} />
      </main>

      <ContactAndFooter
        onNavigateSection={scrollToSection}
        onRequestEstimate={() => handleRequestEstimate()}
      />
    </div>
  );
}
