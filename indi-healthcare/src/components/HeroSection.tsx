interface CTAButton {
  text: string;
  link: string;
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  cta: CTAButton[];
}

export default function HeroSection({ title, subtitle, description, cta }: HeroSectionProps) {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/70 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {/* Mobile-optimized content */}
          <div className="space-y-4 sm:space-y-6">
            {/* Subtitle */}
            <p className="text-base sm:text-lg text-primary-600 font-semibold">
              {subtitle}
            </p>

            {/* Title - Reduced size on mobile */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              {title}
            </h1>

            {/* Description - Improved readability */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>

            {/* CTA Buttons - Stacked on mobile */}
            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 sm:gap-6 mt-8">
              {cta.map((button, index) => (
                <a
                  key={button.text}
                  href={button.link}
                  className={`
                    inline-flex items-center justify-center px-6 py-4 sm:py-3 rounded-xl sm:rounded-lg
                    text-base sm:text-lg font-medium transition-all duration-200
                    touch-target ${
                      index === 0
                        ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm hover:shadow-md'
                        : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
                    }
                  `}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>

          {/* Trust Indicators - Grid on mobile */}
          <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-600">40+</div>
              <div className="text-sm sm:text-base text-gray-600 mt-1">JCI Hospitals</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-600">80%</div>
              <div className="text-sm sm:text-base text-gray-600 mt-1">Cost Savings</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-600">24/7</div>
              <div className="text-sm sm:text-base text-gray-600 mt-1">Support</div>
            </div>
          </div>

          {/* Mobile-optimized image */}
          <div className="mt-8 sm:mt-12">
            <div className="relative aspect-[4/3] sm:aspect-[16/9] bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/modern-hospital.svg"
                alt="Modern Hospital Facility"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <svg
          className="w-6 h-6 text-primary-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}
