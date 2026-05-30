import { motion } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Customer Testimonials</h1>
            <p className="text-xl text-foreground/70">Real stories from satisfied customers</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Join Our Happy Customers" description="Experience the SolarSafe difference today." primaryCTA={{ label: 'Get Started', path: '/contact' }} secondaryCTA={{ label: 'Learn More', path: '/services' }} />
    </div>
  );
}
