import { CurrencyDollarIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline';

interface CostCalculatorProps {
  title: string;
  example: {
    treatment: string;
    usCost: string;
    indiaCost: string;
    savings: string;
  };
  cta: {
    text: string;
    link: string;
  };
}

export default function CostCalculator({ title, example, cta }: CostCalculatorProps) {
  return (
    <section id="calculator" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-primary-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Calculator Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
            <CurrencyDollarIcon className="w-8 h-8 text-primary-600" />
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare treatment costs and see how much you could save with Indian medical tourism.
          </p>
        </div>

        {/* Cost Comparison Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-6 sm:p-8">
              {/* Treatment Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">
                {example.treatment}
              </h3>

              {/* Cost Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
                {/* US Cost */}
                <div className="bg-red-50 rounded-xl p-6">
                  <div className="text-sm text-red-600 font-medium mb-2">Cost in USA</div>
                  <div className="text-3xl sm:text-4xl font-bold text-red-700">
                    {example.usCost}
                  </div>
                </div>

                {/* India Cost */}
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="text-sm text-green-600 font-medium mb-2">Cost in India</div>
                  <div className="text-3xl sm:text-4xl font-bold text-green-700">
                    {example.indiaCost}
                  </div>
                </div>
              </div>

              {/* Savings Banner */}
              <div className="bg-primary-100 rounded-xl p-6 flex items-center justify-center space-x-4">
                <ArrowTrendingDownIcon className="w-8 h-8 text-primary-600" />
                <div>
                  <div className="text-sm text-primary-600 font-medium">Total Savings</div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary-700">
                    {example.savings}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 px-6 py-8 sm:px-8">
              <div className="text-center">
                <a
                  href={cta.link}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base sm:text-lg font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200 shadow-sm hover:shadow-md w-full sm:w-auto"
                >
                  {cta.text}
                </a>
                <p className="mt-4 text-sm text-gray-500">
                  Get a personalized cost estimate for your treatment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h4 className="text-lg font-semibold text-gray-900">Quality Assured</h4>
            <p className="mt-2 text-gray-600">Same or better quality as US hospitals</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h4 className="text-lg font-semibold text-gray-900">All-Inclusive Packages</h4>
            <p className="mt-2 text-gray-600">No hidden costs or surprise bills</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900">24/7 Support</h4>
            <p className="mt-2 text-gray-600">Dedicated assistance throughout your journey</p>
          </div>
        </div>
      </div>
    </section>
  );
}
