'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface Question {
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  questions: Question[];
  cta: {
    text: string;
    link: string;
  };
}

export default function FAQ({ title, questions, cta }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container-mobile">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          {title}
        </h2>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {questions.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 overflow-hidden"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full min-h-[64px] px-5 py-4 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 gap-4 touch-target"
            >
              <span className="text-left text-base sm:text-lg font-medium text-gray-900">
                {faq.question}
              </span>
              <ChevronDownIcon
                className={`flex-shrink-0 h-6 w-6 text-gray-500 transition-transform duration-200 ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`transition-all duration-200 ease-in-out ${
                openIndex === index
                  ? 'max-h-[500px] opacity-100'
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-5 pb-4 text-base text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-8 text-center">
        <a
          href={cta.link}
          className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200 shadow-sm hover:shadow-md touch-target w-full sm:w-auto"
        >
          {cta.text}
        </a>
      </div>

      {/* Additional Support Section */}
      <div className="mt-12 bg-gray-50 rounded-2xl p-6 max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
          Still have questions?
        </h3>
        <p className="text-gray-600 text-center mb-6">
          Our healthcare experts are here to help you make the best decision for your medical journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+1234567890"
            className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-secondary-600 hover:bg-secondary-700 transition-colors duration-200 shadow-sm hover:shadow-md touch-target"
          >
            Call Us Now
          </a>
          <a
            href="mailto:support@indianmedicaltourism.com"
            className="inline-flex items-center justify-center px-6 py-4 border border-secondary-600 text-base font-medium rounded-xl text-secondary-700 hover:bg-secondary-50 transition-colors duration-200 touch-target"
          >
            Email Support
          </a>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="text-2xl font-bold text-primary-600">24/7</div>
          <div className="mt-2 text-sm text-gray-500">Expert Support</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="text-2xl font-bold text-primary-600">100%</div>
          <div className="mt-2 text-sm text-gray-500">Confidential</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="text-2xl font-bold text-primary-600">1M+</div>
          <div className="mt-2 text-sm text-gray-500">Patients Helped</div>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 sm:hidden">
        <a
          href="tel:+1234567890"
          className="bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors duration-200"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
