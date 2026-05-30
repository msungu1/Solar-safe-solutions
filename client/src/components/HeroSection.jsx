import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Globe } from 'lucide-react';

export default function HeroSection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  floatingStats
}) {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white">

      {/* Ambient blue energy */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-200/40 blur-[140px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-sky-300/30 blur-[140px]" />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={
            backgroundImage ||
            "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=2400&q=80"
          }
          alt="Solar Infrastructure"
          className="w-full h-full object-cover opacity-90 brightness-105 saturate-110"
        />

        {/* Soft overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-blue-100/20" />
      </div>

      {/* CONTENT */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 relative z-10"
      >
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-100 backdrop-blur-md mb-8 shadow-sm"
          >
            <ShieldCheck size={16} className="text-blue-600" />
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-700">
              Certified Renewable Energy Provider
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mb-12 leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-5 mb-20"
          >
            <Link to={primaryCTA?.path || "#"}>
              <Button className="h-14 px-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg group transition-all">
                {primaryCTA?.label}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link to={secondaryCTA?.path || "#"}>
              <Button className="h-14 px-10 bg-white text-blue-700 border border-blue-100 hover:bg-blue-50 rounded-full font-semibold shadow-sm">
                <Globe className="mr-2" size={18} />
                Investor Relations
              </Button>
            </Link>
          </motion.div>

          {/* STATS */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-6xl grid grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {floatingStats?.map((stat, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-white/80 border border-blue-100 backdrop-blur-md shadow-sm hover:shadow-md transition-all"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />

                <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </p>

                <p className="text-xs uppercase tracking-widest text-slate-500 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20" />
    </section>
  );
}