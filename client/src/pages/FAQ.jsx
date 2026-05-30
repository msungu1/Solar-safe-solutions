import { motion } from 'framer-motion';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

const faqItems = [
  { question: 'How much does solar installation cost?', answer: 'Costs vary based on system size. Residential systems range from 500K to 2M Naira. We offer flexible financing.' },
  { question: 'How long do solar batteries last?', answer: 'Modern lithium-ion batteries last 10-15 years with proper maintenance.' },
  { question: 'How long does installation take?', answer: 'Residential installations typically take 1-3 days.' },
  { question: 'Do you offer maintenance services?', answer: 'Yes, we provide comprehensive maintenance plans with 24/7 support.' },
  { question: 'Can solar work during cloudy weather?', answer: 'Yes, panels generate power even on cloudy days, though at reduced efficiency.' },
  { question: 'Do you provide commercial systems?', answer: 'Absolutely! We specialize in large-scale commercial installations.' }
];

export default function FAQ() {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-foreground/70">Find answers to common questions</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-3xl">
          <FAQAccordion faqs={faqItems} />
        </div>
      </section>

      <CTASection title="Still Have Questions?" description="Contact our team for personalized assistance." primaryCTA={{ label: 'Get in Touch', path: '/contact' }} secondaryCTA={{ label: 'Learn More', path: '/services' }} />
    </div>
  );
}
