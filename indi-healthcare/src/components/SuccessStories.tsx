interface Testimonial {
  quote: string;
  author: string;
}

interface SuccessStoriesProps {
  title: string;
  testimonials: Testimonial[];
}

export default function SuccessStories({ title, testimonials }: SuccessStoriesProps) {
  return (
    <section id="success-stories" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-primary-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-primary-100">
                <svg
                  className="h-8 w-8 transform -translate-x-2 -translate-y-2 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <div className="relative">
                <blockquote className="mt-8">
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {testimonial.quote}
                  </p>
                </blockquote>

                {/* Author */}
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <span className="text-primary-600 font-semibold text-lg">
                        {testimonial.author[0]}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      Patient from USA
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 right-0 h-16 w-16 bg-primary-50 rounded-tl-xl rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary-600">95%</div>
            <div className="mt-2 text-sm sm:text-base text-gray-600">Patient Satisfaction</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary-600">10k+</div>
            <div className="mt-2 text-sm sm:text-base text-gray-600">Successful Procedures</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary-600">50+</div>
            <div className="mt-2 text-sm sm:text-base text-gray-600">Partner Hospitals</div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-green-700 font-medium">Verified Patient Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
