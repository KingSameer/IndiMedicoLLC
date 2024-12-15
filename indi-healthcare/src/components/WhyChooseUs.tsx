interface Example {
  treatment: string;
  usCost: string;
  indiaCost: string;
}

interface Feature {
  title: string;
  description: string;
  examples?: Example[];
  example?: string;
}

interface WhyChooseUsProps {
  title: string;
  features: Feature[];
}

export default function WhyChooseUs({ title, features }: WhyChooseUsProps) {
  return (
    <section id="why-choose-us" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              {/* Feature Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-6">
                {index === 0 && (
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {index === 1 && (
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )}
                {index === 2 && (
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )}
                {index === 3 && (
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>

              {/* Feature Content */}
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                {feature.description}
              </p>

              {/* Cost Examples */}
              {feature.examples && (
                <div className="space-y-4">
                  {feature.examples.map((example) => (
                    <div
                      key={example.treatment}
                      className="bg-gray-50 rounded-lg p-4 space-y-2"
                    >
                      <div className="font-medium text-gray-900">{example.treatment}</div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-gray-500">US Cost:</div>
                          <div className="text-lg font-semibold text-red-600">{example.usCost}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">India Cost:</div>
                          <div className="text-lg font-semibold text-green-600">{example.indiaCost}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Expert Example */}
              {feature.example && (
                <div className="mt-4 bg-primary-50 rounded-lg p-4">
                  <p className="text-sm text-primary-700 italic">{feature.example}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h4>
            <p className="text-gray-600">Our partner hospitals maintain the highest international standards of healthcare</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Cost Transparency</h4>
            <p className="text-gray-600">Clear pricing with no hidden costs or surprise bills</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h4>
            <p className="text-gray-600">Dedicated assistance throughout your medical journey</p>
          </div>
        </div>
      </div>
    </section>
  );
}
