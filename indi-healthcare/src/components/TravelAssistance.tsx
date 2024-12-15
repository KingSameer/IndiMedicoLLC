import { GlobeAltIcon, DocumentCheckIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/24/outline';

interface Service {
  title: string;
  description: string;
}

interface TravelAssistanceProps {
  title: string;
  services: Service[];
  quote: string;
}

export default function TravelAssistance({ title, services, quote }: TravelAssistanceProps) {
  const getIcon = (title: string) => {
    switch (title) {
      case "Medical Visa Support":
        return DocumentCheckIcon;
      case "Travel Assistance":
        return GlobeAltIcon;
      case "Affordable Accommodation":
        return HomeIcon;
      default:
        return UserGroupIcon;
    }
  };

  return (
    <section id="travel" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-primary-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-lg mb-4">
            <GlobeAltIcon className="h-6 w-6 text-primary-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {quote}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {services.map((service) => {
            const Icon = getIcon(service.title);
            
            return (
              <div
                key={service.title}
                className="group relative bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                {/* Service Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="h-6 w-6 text-primary-600" />
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 h-24 w-24 bg-primary-50 rounded-bl-[64px] rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Support Features */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-primary-50 rounded-xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-shrink-0">
                <UserGroupIcon className="h-8 w-8 text-primary-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary-900">24/7 Support</h4>
                <p className="mt-2 text-primary-700">
                  Our dedicated team is available round the clock to assist you with any queries or concerns.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-secondary-50 rounded-xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-shrink-0">
                <GlobeAltIcon className="h-8 w-8 text-secondary-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-secondary-900">Local Assistance</h4>
                <p className="mt-2 text-secondary-700">
                  Get help from our local representatives who understand both Indian and American cultures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Need immediate assistance?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Call Us Now
            </a>
            <a
              href="mailto:travel@indianmedicaltourism.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 hover:bg-primary-50 transition-colors duration-200"
            >
              Email Support
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-primary-600">100+</div>
            <div className="mt-2 text-sm text-gray-500">Partner Hotels</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary-600">24/7</div>
            <div className="mt-2 text-sm text-gray-500">Travel Support</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary-600">50+</div>
            <div className="mt-2 text-sm text-gray-500">Cities Covered</div>
          </div>
        </div>
      </div>
    </section>
  );
}
