import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How much improvement can I realistically expect?',
    answer: 'For acne scars and deeper texture, improvements of 40 to 70% are common after a full course, depending on individual factors.'
  },
  {
    question: 'How often should I get it done?',
    answer: 'Once a month is typically effective as a maintenance routine, though specific treatments may have their own schedules.'
  },
  {
    question: 'Can pigmentation be permanently removed?',
    answer: 'Epidermal pigmentation such as sun spots and mild post-inflammatory marks can often be cleared effectively with long-lasting results when sun protection is maintained. Melasma and deeper dermal pigmentation require ongoing management due to their chronic and reactive nature.'
  },
  {
    question: 'Will my face look frozen?',
    answer: 'No. Our approach prioritizes natural expression. Treatments like Microtox work superficially and do not affect facial movement or expression.'
  },
  {
    question: 'Where do the exosomes come from?',
    answer: 'The exosomes used in clinical treatments are derived from carefully sourced and processed cells under controlled laboratory conditions. They are not taken from your own blood. They come prepared as part of the treatment solution.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-champagne-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-4">Clarity</span>
          <h2 className="text-4xl md:text-5xl font-serif text-obsidian-charcoal mb-4">
            Common questions about
            <br className="hidden md:block" />
            <span className="text-obsidian-charcoal/70">Skin Department</span>
          </h2>
        </div>

        <div className="border-t border-platinum-slate/30">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-platinum-slate/30">
              <button
                className="w-full py-6 md:py-8 flex items-center justify-between text-left group"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg md:text-xl font-serif text-obsidian-charcoal group-hover:text-champagne-gold transition-colors duration-300 pr-8">
                  {faq.question}
                </span>
                <span className="text-obsidian-charcoal/50 flex-shrink-0">
                  {openIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-obsidian-charcoal/70 font-sans font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
