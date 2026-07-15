import { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Priya R.',
      dept: 'Skin & Cosmetology',
      doctor: 'Dr. Aparna Krishna',
      text: 'The aesthetic treatments at ANC are unmatched. Dr. Aparna combined absolute precision with a deep understanding of facial symmetry. The results are incredibly refined and natural.',
      rating: 5,
    },
    {
      name: 'Rajan M.',
      dept: 'Samsara Ayurveda',
      doctor: 'Dr. Sreelatha',
      text: 'The Panchakarma therapy restored a quality of life I had lost. Under Dr. Sreelatha\'s guidance, the custom herbal protocols resolved my chronic inflammation at its source.',
      rating: 5,
    },
    {
      name: 'Ananya K.',
      dept: 'CVN Kalari',
      doctor: 'Sivakumar Gurukkal',
      text: 'Gurukkal\'s mastery of Marma therapy recovered my spinal mobility within weeks of a severe athletic injury. The clinical flow here represents traditional medicine at its zenith.',
      rating: 5,
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-32 bg-clinical-white border-t border-platinum-slate/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <span className="text-champagne-gold uppercase tracking-widest text-xs font-semibold">
          Patient Chronicles
        </span>
        <h2 className="text-4xl font-serif text-obsidian-charcoal mt-2 mb-16">Stories of Harmonization</h2>

        <div className="relative min-h-[300px] flex flex-col justify-between items-center">
          
          {/* Large Elegant Quotation Marks */}
          <span className="text-8xl font-serif text-champagne-gold/25 select-none absolute -top-12 left-1/2 -translate-x-1/2">
            “
          </span>

          {/* Testimonial Active Slide with smooth fade transition */}
          <div className="relative z-10 transition-opacity duration-500 ease-in-out px-4 md:px-12">
            <p className="text-xl md:text-2xl font-serif text-obsidian-charcoal/80 leading-relaxed italic mb-8">
              {testimonials[activeIndex].text}
            </p>

            {/* Structured Professional Metadata Tags */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-sans">
              <span className="text-obsidian-charcoal font-bold tracking-wide">
                {testimonials[activeIndex].name}
              </span>
              <div className="w-[1px] h-3 bg-platinum-slate" />
              <span className="text-obsidian-charcoal/50 uppercase tracking-widest font-semibold">
                Unit: {testimonials[activeIndex].dept}
              </span>
              <div className="w-[1px] h-3 bg-platinum-slate" />
              <span className="text-champagne-gold uppercase tracking-widest font-semibold">
                Consultant: {testimonials[activeIndex].doctor}
              </span>
            </div>
          </div>

          {/* Carousel Navigation Micro-interactions */}
          <div className="flex justify-center items-center gap-6 mt-12 z-20">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-platinum-slate text-obsidian-charcoal/60 hover:border-obsidian-charcoal hover:text-obsidian-charcoal flex items-center justify-center transition-all duration-300 hover:shadow-sm"
              aria-label="Previous chronicle"
            >
              ←
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                    activeIndex === idx ? 'w-6 bg-champagne-gold' : 'bg-platinum-slate'
                  }`}
                  aria-label={`Go to chronicle ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-platinum-slate text-obsidian-charcoal/60 hover:border-obsidian-charcoal hover:text-obsidian-charcoal flex items-center justify-center transition-all duration-300 hover:shadow-sm"
              aria-label="Next chronicle"
            >
              →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
