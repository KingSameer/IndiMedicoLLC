import { ShieldCheckIcon, CheckCircleIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface SafetyAssuranceProps {
  title: string;
  points: string[];
  quote: string;
}

export default function SafetyAssurance({ title, points, quote }: SafetyAssuranceProps) {
  return (
    <section id="safety" className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 scroll-mt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <span className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-lg">
                <ShieldCheckIcon className="h-6 w-6 text-primary-600" />
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              {title}
            </h2>
            <div className="mt-6">
              <blockquote className="relative bg-primary-50 rounded-lg p-6 border-l-4 border-primary-600">
                <p className="text-base sm:text-lg text-gray-700 italic">
                  {quote}
                </p>
              </blockquote>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center">
                  <BuildingOffice2Icon className="h-8 w-8 text-primary-600" />
                  <div className="ml-3">
                    <div className="text-xl sm:text-2xl font-bold text-primary-600">40+</div>
                    <div className="text-sm text-gray-500">JCI-Accredited Hospitals</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center">
                  <ShieldCheckIcon className="h-8 w-8 text-secondary-600" />
                  <div className="ml-3">
                    <div className="text-xl sm:text-2xl font-bold text-secondary-600">95%+</div>
                    <div className="text-sm text-gray-500">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="mt-8 lg:mt-0 lg:col-span-7">
            <div className="space-y-6 sm:space-y-8">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-md bg-green-100">
                      <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-base sm:text-lg leading-6 font-medium text-gray-900">
                      {point}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certification Logos */}
            <div className="mt-12 bg-gray-50 rounded-xl p-6 sm:p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 items-center">
                <div className="flex items-center justify-center p-4">
                  <Image
                    src="/images/jci-logo.svg"
                    alt="JCI Accredited"
                    width={120}
                    height={60}
                    className="h-8 sm:h-12 w-auto"
                  />
                </div>
                <div className="flex items-center justify-center p-4">
                  <Image
                    src="/images/nabh-logo.svg"
                    alt="NABH Certified"
                    width={120}
                    height={60}
                    className="h-8 sm:h-12 w-auto"
                  />
                </div>
                <div className="flex items-center justify-center p-4 col-span-2 md:col-span-1">
                  <Image
                    src="/images/iso-logo.svg"
                    alt="ISO Certified"
                    width={120}
                    height={60}
                    className="h-8 sm:h-12 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h4 className="text-lg font-semibold text-gray-900">International Standards</h4>
            <p className="mt-2 text-sm sm:text-base text-gray-500">
              Our hospitals follow strict global healthcare protocols
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h4 className="text-lg font-semibold text-gray-900">Quality Assurance</h4>
            <p className="mt-2 text-sm sm:text-base text-gray-500">
              Regular audits and quality checks by international bodies
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900">Patient Safety</h4>
            <p className="mt-2 text-sm sm:text-base text-gray-500">
              Advanced infection control and safety protocols
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
        <div className="w-[600px] h-[600px] bg-primary-600/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="w-[400px] h-[400px] bg-secondary-600/10 rounded-full mix-blend-multiply filter blur-3xl -translate-x-20"></div>
      </div>
    </section>
  );
}
