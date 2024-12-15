import { DocumentTextIcon, ClipboardIcon, PaperAirplaneIcon, PhoneIcon } from '@heroicons/react/24/outline';

interface Step {
  title: string;
  description: string;
}

interface HowItWorksProps {
  title: string;
  steps: Step[];
  cta: {
    text: string;
    link: string;
  };
}

export default function HowItWorks({ title, steps, cta }: HowItWorksProps) {
  const icons = [DocumentTextIcon, ClipboardIcon, PaperAirplaneIcon, PhoneIcon];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = icons[index];
              const isEven = index % 2 === 0;

              return (
                <div key={step.title} className={`relative ${index !== 0 ? 'md:mt-24' : ''}`}>
                  {/* Mobile View */}
                  <div className="md:hidden flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      {Icon && <Icon className="w-5 h-5 text-primary-600" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Step {index + 1}: {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  {/* Desktop View */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-8">
                    <div className={`md:flex ${isEven ? 'md:justify-end' : 'md:col-start-2'}`}>
                      <div className={`relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 max-w-md ${isEven ? 'md:text-right' : ''}`}>
                        {/* Step Number */}
                        <div className={`absolute top-6 ${isEven ? '-right-11' : '-left-11'} w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center z-10`}>
                          <span className="text-sm font-semibold text-primary-600">{index + 1}</span>
                        </div>

                        {/* Icon */}
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 mb-4 ${isEven ? 'ml-auto' : ''}`}>
                          {Icon && <Icon className="w-6 h-6 text-primary-600" />}
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href={cta.link}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base sm:text-lg font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            {cta.text}
          </a>
        </div>

        {/* Additional Info Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h4 className="text-lg font-semibold text-gray-900">Expert Guidance</h4>
            <p className="mt-2 text-gray-600">Our team will guide you through every step of your medical journey</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h4 className="text-lg font-semibold text-gray-900">Fast Response</h4>
            <p className="mt-2 text-gray-600">Get your treatment plan and cost estimate within 24 hours</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h4 className="text-lg font-semibold text-gray-900">Complete Support</h4>
            <p className="mt-2 text-gray-600">From visa assistance to post-treatment care, we've got you covered</p>
          </div>
        </div>
      </div>
    </section>
  );
}
