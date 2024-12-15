interface CTAButton {
  text: string;
  link?: string;
  phone?: string;
  email?: string;
}

interface CallToActionProps {
  title: string;
  description: string;
  cta: CTAButton[];
}

export default function CallToAction({ title, description, cta }: CallToActionProps) {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 via-primary-100 to-white" />

      <div className="relative max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-4 py-8 sm:p-10">
            {/* Content */}
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                {title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 sm:mb-10">
                {description}
              </p>

              {/* CTA Buttons - Stacked on mobile */}
              <div className="space-y-4">
                {cta.map((button) => {
                  if (button.phone) {
                    return (
                      <a
                        key={button.text}
                        href={`tel:${button.phone}`}
                        className="touch-target flex items-center justify-center w-full px-6 py-4 border border-transparent text-base sm:text-lg font-medium rounded-xl text-white bg-primary-600 hover:bg-primary-700 transition-all duration-200 shadow-sm hover:shadow-md space-x-2"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>{button.text}</span>
                        <span className="text-primary-200">{button.phone}</span>
                      </a>
                    );
                  }

                  if (button.email) {
                    return (
                      <a
                        key={button.text}
                        href={`mailto:${button.email}`}
                        className="touch-target flex items-center justify-center w-full px-6 py-4 border border-primary-600 text-base sm:text-lg font-medium rounded-xl text-primary-700 bg-primary-50 hover:bg-primary-100 transition-all duration-200 space-x-2"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>{button.text}</span>
                        <span className="text-primary-500">{button.email}</span>
                      </a>
                    );
                  }

                  return (
                    <a
                      key={button.text}
                      href={button.link}
                      className="touch-target flex items-center justify-center w-full px-6 py-4 border border-transparent text-base sm:text-lg font-medium rounded-xl text-white bg-secondary-600 hover:bg-secondary-700 transition-all duration-200 shadow-sm hover:shadow-md space-x-2"
                    >
                      <span>{button.text}</span>
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-center space-x-3">
                  <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-900">Secure & Safe</div>
                    <div className="text-xs text-gray-500">JCI Accredited Hospitals</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-center space-x-3">
                  <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-900">Best Price</div>
                    <div className="text-xs text-gray-500">Up to 80% Savings</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-center space-x-3">
                  <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-900">Quick Response</div>
                    <div className="text-xs text-gray-500">24/7 Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Quick Actions */}
      <div className="fixed bottom-4 left-4 right-4 z-40 flex gap-2 sm:hidden">
        <a
          href="tel:+1234567890"
          className="flex-1 bg-primary-600 text-white p-4 rounded-xl shadow-lg hover:bg-primary-700 transition-colors duration-200 text-center font-medium"
        >
          Call Now
        </a>
        <a
          href="#contact"
          className="flex-1 bg-secondary-600 text-white p-4 rounded-xl shadow-lg hover:bg-secondary-700 transition-colors duration-200 text-center font-medium"
        >
          Get Quote
        </a>
      </div>
    </div>
  );
}
