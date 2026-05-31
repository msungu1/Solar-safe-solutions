import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CountUp } from 'countup.js';import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Zap, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoo from '../image/Copilot_20260531_120149.png';


const stats = [
  { icon: Zap, value: 10, label: 'Installations', suffix: '+' },
  { icon: Users, value: 50, label: 'Happy Customers', suffix: '+' },
  { icon: Award, value: 98, label: 'Satisfaction Rate', suffix: '%' },
  { icon: TrendingUp, value: 50, label: 'people Saved', suffix: '+' }
];

const faqItems = [
  {
    question: 'How much does solar installation cost?',
    answer: 'Solar installation costs vary based on system size and your property. A typical residential system ranges from 500,000 to 2,000,000 Naira. We offer financing options to make solar accessible.'
  },
  {
    question: 'How long do solar batteries last?',
    answer: 'Modern lithium-ion batteries typically last 10-15 years. We provide comprehensive warranties and maintenance support to ensure optimal performance.'
  },
  {
    question: 'How long does installation take?',
    answer: 'Most residential installations are completed within 1-3 days. Commercial projects may take longer depending on system size and complexity.'
  },
  {
    question: 'Do you offer maintenance services?',
    answer: 'Yes, we provide comprehensive maintenance plans including regular inspections, cleaning, and emergency support. Our 24/7 support team is always available.'
  },
  {
    question: 'Can solar work during cloudy weather?',
    answer: 'Yes, solar panels generate power even on cloudy days, though at reduced efficiency. Battery storage ensures you have power when needed.'
  },
  {
    question: 'Do you provide commercial systems?',
    answer: 'Absolutely! We specialize in large-scale commercial installations for businesses, schools, hospitals, and government institutions.'
  }
];

export default function Home() {
  const [calculatorData, setCalculatorData] = useState({
    monthlyBill: 10000,
    propertyType: 'residential',
    usage: 'medium'
  });

  const calculateSavings = () => {
    const billMultiplier = calculatorData.monthlyBill / 10000;
    const usageMultiplier = calculatorData.usage === 'low' ? 0.7 : calculatorData.usage === 'high' ? 1.3 : 1;
    const systemSize = 3 * billMultiplier * usageMultiplier;
    const annualSavings = calculatorData.monthlyBill * 12 * 0.75;
    const roi = (systemSize * 1000000) / annualSavings;

    return {
      systemSize: Math.round(systemSize * 10) / 10,
      annualSavings: Math.round(annualSavings),
      roi: Math.round(roi * 10) / 10
    };
  };

  const results = calculateSavings();

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Powering Kenya With Smart Solar Energy"
        subtitle="Affordable, reliable, and sustainable solar solutions for homes and businesses. Join thousands of Kenyans saving money and embracing clean energy."
        primaryCTA={{ label: 'Get Free Quote', path: '/contact' }}
        secondaryCTA={{ label: 'Explore Services', path: '/services' }}
        floatingStats={[
          { value: '10+', label: 'Installations' },
          { value: '24/7', label: 'Support' },
          { value: 'Certified', label: 'Experts' },
          { value: '98%', label: 'Satisfaction' }
        ]}
      />

      

      <section className="relative section-padding overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white text-slate-900">

  {/* Soft blue ambient glow */}
  <div className="absolute inset-0">
    <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-200/40 blur-[140px]" />
    <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-sky-300/30 blur-[140px]" />
  </div>

  <div className="container mx-auto px-4 relative z-10">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
    >

      {/* TEXT SIDE */}
      <div>

        <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-blue-50 border border-blue-100">
          <span className="text-xs tracking-widest uppercase text-blue-600 font-semibold">
            About SolarSafe Solutions
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Powering Kenya with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
            Clean Solar Energy
          </span>
        </h2>

        <p className="text-lg text-slate-600 mb-5 leading-relaxed">
          We are Kenya's leading solar energy company, dedicated to providing affordable, reliable, and sustainable renewable energy solutions to homes and businesses across the nation.
        </p>

        <p className="text-lg text-slate-500 mb-10 leading-relaxed">
          With over 15 successful installations and a 98% customer satisfaction rate, we've helped thousands of Kenyans reduce electricity costs and transition to clean energy.
        </p>

        <Link to="/about">
          <Button className="h-14 px-8 bg-blue-600 text-white hover:bg-blue-700 transition-all rounded-full font-semibold shadow-lg group">
            Learn Our Story
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>

      </div>

      {/* IMAGE SIDE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-blue-100 bg-white"
      >

        {/* REAL SOLAR IMAGE */}
        <img
          src={logoo}
          alt="Solar Panels Installation"
          className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
        />

        {/* Soft blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-blue-500/10 to-transparent" />

        {/* Light glass border */}
        <div className="absolute inset-0 rounded-3xl ring-1 ring-blue-100" />

        {/* Floating badge */}
        <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-blue-100">
          <p className="text-xs text-blue-700 font-medium tracking-widest">
            15 Installations Across Kenya
          </p>
        </div>

      </motion.div>

    </motion.div>
  </div>
</section>

      

<section className="relative section-padding overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white">

  {/* Ambient energy glow */}
  <div className="absolute inset-0">
    <div className="absolute top-[-180px] left-[-180px] w-[500px] h-[500px] bg-blue-200/40 blur-[150px]" />
    <div className="absolute bottom-[-180px] right-[-180px] w-[500px] h-[500px] bg-sky-300/30 blur-[150px]" />
  </div>

  {/* subtle grid energy layer */}
  <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
    <div className="h-full w-full bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:45px_45px]" />
  </div>

  <div className="container mx-auto px-4 relative z-10">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >

      {/* Badge */}
      <div className="inline-flex items-center px-5 py-2 mb-6 rounded-full bg-white border border-blue-100 shadow-sm backdrop-blur-md">
        <span className="text-xs tracking-[0.25em] uppercase text-blue-600 font-semibold">
          What We Offer
        </span>
      </div>

      <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
        Our Solar Solutions
      </h2>

      <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
        Comprehensive solar energy systems designed for homes, businesses, and large-scale infrastructure across Kenya — built for performance, reliability, and sustainability.
      </p>

      {/* subtle divider line */}
      <div className="mt-10 flex justify-center">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40" />
      </div>

    </motion.div>

    {/* SERVICES GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {services.slice(0, 6).map((service, index) => (
        <div
          key={service.id}
          className="group transform hover:-translate-y-2 transition-all duration-300"
        >
          <ServiceCard service={service} index={index} />
        </div>
      ))}
    </div>

    {/* CTA SECTION */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center"
    >

      <Link to="/services">
        <Button className="h-14 px-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg group transition-all">
          Explore All Services
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>

      {/* small trust note */}
      <p className="mt-5 text-sm text-slate-500">
        Trusted by 15+ installations across Kenya
      </p>

    </motion.div>

  </div>
</section>


<section className="relative section-padding overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white">

  {/* Ambient glow */}
  <div className="absolute inset-0">
    <div className="absolute top-[-200px] left-[-200px] w-[550px] h-[550px] bg-blue-200/40 blur-[160px]" />
    <div className="absolute bottom-[-200px] right-[-200px] w-[550px] h-[550px] bg-sky-300/30 blur-[160px]" />
  </div>

  {/* subtle grid */}
  <div className="absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
    <div className="h-full w-full bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:50px_50px]" />
  </div>

  <div className="container mx-auto px-4 relative z-10">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >

      <div className="inline-flex items-center px-5 py-2 mb-6 rounded-full bg-white border border-blue-100 shadow-sm">
        <span className="text-xs tracking-[0.25em] uppercase text-blue-600 font-semibold">
          Our Impact
        </span>
      </div>

      <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-5">
         Solar Excellence
      </h2>

      <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
        Delivering measurable clean energy impact across Kenya through reliable solar installations.
      </p>

    </motion.div>

    {/* STATS GRID */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group relative text-center p-8 rounded-3xl bg-white/80 border border-blue-100 backdrop-blur-md shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >

            {/* top glow line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* icon */}
            <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform duration-300">
              <Icon size={24} />
            </div>

            {/* number */}
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">
              <StatCounter value={stat.value} suffix={stat.suffix} />
            </h3>

            {/* label */}
            <p className="text-slate-600 text-sm md:text-base font-medium">
              {stat.label}
            </p>

            {/* hover glow */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />

          </motion.div>
        );
      })}

    </div>

  </div>
</section>

     

   <section className="relative section-padding overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white">

  {/* Ambient Glow */}
  <div className="absolute inset-0">
    <div className="absolute top-[-220px] left-[-220px] w-[600px] h-[600px] bg-blue-200/40 blur-[180px]" />
    <div className="absolute bottom-[-220px] right-[-220px] w-[600px] h-[600px] bg-sky-300/30 blur-[180px]" />
  </div>

  <div className="container mx-auto px-4 relative z-10">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <div className="inline-flex items-center px-6 py-2 mb-6 rounded-full bg-white border border-blue-100 shadow-sm">
        <span className="text-xs tracking-[0.3em] uppercase text-blue-600 font-semibold">
          Why Solar Energy
        </span>
      </div>

      <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
        Why Switch To Solar?
      </h2>

      <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
        Solar energy gives you lower electricity costs, greater energy
        independence, and a cleaner future for your home or business.
      </p>
    </motion.div>

    {/* Benefits Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          icon: "💰",
          title: "Reduce Energy Bills",
          desc: "Cut electricity expenses and protect yourself from rising utility costs."
        },
        {
          icon: "🔋",
          title: "Reliable Backup Power",
          desc: "Stay powered during outages with solar batteries and hybrid systems."
        },
        {
          icon: "🌍",
          title: "Clean Renewable Energy",
          desc: "Reduce your carbon footprint and support a sustainable future."
        },
        {
          icon: "📈",
          title: "Increase Property Value",
          desc: "Solar-equipped properties are more attractive and valuable."
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          <div className="text-5xl mb-5">
            {item.icon}
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-3">
            {item.title}
          </h3>

          <p className="text-slate-600 leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Bottom Banner */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-16"
    >
      <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-sky-500 p-10 text-center text-white shadow-2xl">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Start Saving With Solar Today
        </h3>

        <p className="text-blue-100 max-w-2xl mx-auto mb-8">
          Join homeowners and businesses across Kenya who are already
          enjoying reliable, affordable clean energy.
        </p>

        <Link to="/contact">
          <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 font-semibold">
            Request Free Consultation
          </Button>
        </Link>
      </div>
    </motion.div>

  </div>
</section>

    <section className="section-padding bg-gradient-to-b from-white via-blue-50 to-white">

  <div className="container mx-auto px-4">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="inline-flex px-5 py-2 mb-6 rounded-full bg-white border border-blue-100">
        <span className="text-xs tracking-[0.3em] uppercase text-blue-600 font-semibold">
          Success Stories
        </span>
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
        Featured Solar Installations
      </h2>

      <p className="text-xl text-slate-600 max-w-2xl mx-auto">
        Real projects delivering clean energy, lower costs, and energy independence across Kenya.
      </p>
    </motion.div>

    {/* CASE STUDIES */}
    <div className="space-y-16">

      {projects.slice(0, 3).map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
            index % 2 === 1 ? 'lg:grid-flow-dense' : ''
          }`}
        >

          {/* IMAGE */}
          <div className="relative h-[350px] rounded-3xl overflow-hidden shadow-xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-sm text-blue-300 uppercase tracking-wider">
                {project.category || "Solar Project"}
              </p>
              <h3 className="text-xl font-bold">
                {project.title}
              </h3>
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-5">

            <h3 className="text-3xl font-bold text-slate-900">
              {project.title}
            </h3>

            <p className="text-slate-600 leading-relaxed">
              {project.description ||
                "A high-performance solar installation designed to reduce energy costs and provide reliable clean power."}
            </p>

            {/* HIGHLIGHTS */}
            <div className="grid grid-cols-2 gap-4 mt-6">

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
                <p className="text-sm text-slate-500">System Size</p>
                <p className="text-xl font-bold text-slate-900">50kW+</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-blue-100">
                <p className="text-sm text-slate-500">Savings</p>
                <p className="text-xl font-bold text-blue-600">60–80%</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-blue-100">
                <p className="text-sm text-slate-500">Location</p>
                <p className="text-xl font-bold text-slate-900">Kenya</p>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50 border border-blue-100">
                <p className="text-sm text-slate-500">Status</p>
                <p className="text-xl font-bold text-sky-600">Completed</p>
              </div>

            </div>

          </div>

        </motion.div>
      ))}

    </div>

    {/* CTA */}
    <div className="text-center mt-20">
      <Link to="/projects">
        <button className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg transition-all">
          View All Projects
        </button>
      </Link>

      <p className="text-sm text-slate-500 mt-4">
        See how we’re powering homes and businesses across Kenya
      </p>
    </div>

  </div>
</section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Real stories from satisfied customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/testimonials">
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                Read More Testimonials
                <ArrowRight size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-foreground/70">
              Find answers to common questions about our services
            </p>
          </motion.div>

          <FAQAccordion faqs={faqItems} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/faq">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg font-semibold">
                View All FAQs
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    <section className="relative section-padding overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white">

  {/* Premium ambient glow */}
  <div className="absolute inset-0">
    <div className="absolute top-[-250px] left-[-250px] w-[700px] h-[700px] bg-blue-200/50 blur-[180px] rounded-full" />
    <div className="absolute bottom-[-250px] right-[-250px] w-[700px] h-[700px] bg-sky-300/40 blur-[180px] rounded-full" />
    <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-blue-100/30 blur-[140px] rounded-full" />
  </div>

  {/* refined grid overlay */}
  <div className="absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
    <div className="h-full w-full bg-[linear-gradient(to_right,#2563eb12_1px,transparent_1px),linear-gradient(to_bottom,#2563eb12_1px,transparent_1px)] bg-[size:60px_60px]" />
  </div>

  {/* floating decorative lines */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 left-10 w-40 h-40 border border-blue-100/40 rounded-full blur-sm" />
    <div className="absolute bottom-20 right-10 w-52 h-52 border border-sky-100/40 rounded-full blur-sm" />
  </div>

  <div className="container mx-auto px-4 relative z-10">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto text-center"
    >

      {/* premium badge */}
      <div className="inline-flex items-center gap-2 px-6 py-2 mb-7 rounded-full 
                      bg-white/70 border border-blue-100 shadow-md backdrop-blur-xl">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        <span className="text-xs tracking-[0.35em] uppercase text-blue-700 font-semibold">
          Clean Energy Future
        </span>
      </div>

      {/* headline */}
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
        Power Your Future with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
          Solar Energy
        </span>
      </h2>

      {/* description */}
      <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
        Join thousands of Kenyans reducing electricity bills and switching to reliable,
        sustainable solar solutions. Get expert guidance and a tailored installation plan today.
      </p>

      {/* CTA container */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

        {/* primary CTA */}
        <a href="/contact">
          <button className="relative px-12 py-4 rounded-full bg-blue-600 text-white font-semibold
                             shadow-xl hover:shadow-blue-300/40 transition-all duration-300
                             hover:bg-blue-700 hover:scale-[1.03]">
            Get Free Quote
          </button>
        </a>

        {/* secondary CTA */}
        <a href="/services">
          <button className="px-12 py-4 rounded-full bg-white/80 backdrop-blur-md border border-blue-100
                             text-slate-700 font-semibold shadow-sm
                             hover:bg-blue-50 hover:border-blue-200 transition-all duration-300
                             hover:scale-[1.03]">
            Explore Solutions
          </button>
        </a>

      </div>

      {/* trust indicator */}
      <div className="mt-10 flex flex-col items-center gap-3">
        <p className="text-sm text-slate-500">
          ⚡ Trusted by homeowners, businesses & institutions across Kenya
        </p>

        {/* subtle rating style line */}
        <div className="flex items-center gap-1 text-blue-500 text-xs">
          ★★★★★
          <span className="text-slate-400 ml-2">5.0 average client satisfaction</span>
        </div>
      </div>

    </motion.div>

  </div>
</section>

    </div>
  );
}

function StatCounter({ value, suffix }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const counter = new CountUp('stat-' + value, 0, value, 0, 2);
    counter.start();
    setDisplayValue(value);
  }, [value]);

  return <>{displayValue}{suffix}</>;
}
