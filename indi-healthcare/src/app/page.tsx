import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import SuccessStories from '@/components/SuccessStories';
import HowItWorks from '@/components/HowItWorks';
import CostCalculator from '@/components/CostCalculator';
import SafetyAssurance from '@/components/SafetyAssurance';
import TravelAssistance from '@/components/TravelAssistance';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import QuickNav from '@/components/QuickNav';
import { content } from '../content/data';

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Quick Navigation */}
      <QuickNav />

      {/* Hero Section - Full height on mobile */}
      <section id="hero" className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
        <HeroSection {...content.HeroSection} />
      </section>

      {/* Main Content - Optimized spacing for mobile */}
      <div className="stack-mobile">
        {/* Features Section */}
        <section id="why-choose-us" className="section-mobile bg-gradient-to-b from-white to-primary-50">
          <WhyChooseUs {...content.WhyChooseUs} />
        </section>

        {/* Success Stories */}
        <section id="success-stories" className="section-mobile bg-white">
          <SuccessStories {...content.SuccessStories} />
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="section-mobile bg-gradient-to-b from-primary-50 to-white">
          <HowItWorks {...content.HowItWorks} />
        </section>

        {/* Cost Calculator */}
        <section id="calculator" className="section-mobile bg-white">
          <CostCalculator {...content.CostCalculator} />
        </section>

        {/* Safety Assurance */}
        <section id="safety" className="section-mobile bg-gradient-to-b from-white to-primary-50">
          <SafetyAssurance {...content.SafetyAssurance} />
        </section>

        {/* Travel Assistance */}
        <section id="travel" className="section-mobile bg-white">
          <TravelAssistance {...content.TravelAssistance} />
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section-mobile bg-gradient-to-b from-primary-50 to-white">
          <FAQ {...content.FAQ} />
        </section>

        {/* Call to Action */}
        <section id="contact" className="section-mobile bg-white">
          <CallToAction {...content.CallToAction} />
        </section>
      </div>

      {/* Footer */}
      <Footer {...content.Footer} />
    </main>
  );
}
