import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { services } from '../data/services';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">

      {/* ⚡ HERO (Tesla-style cinematic section) */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-black">

        {/* background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80"
            className="w-full h-full object-cover opacity-30"
            alt="solar"
          />
        </div>

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-white" />

        {/* glow effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-500/20 blur-[180px] rounded-full" />
          <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-sky-400/20 blur-[180px] rounded-full" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >

            <div className="inline-flex px-5 py-2 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="text-xs tracking-[0.35em] uppercase text-blue-200">
                Clean Energy Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Power Everything with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                {" "}Solar Energy
              </span>
            </h1>

            <p className="text-white/70 text-xl">
              Intelligent solar systems designed for homes, businesses, and the future.
            </p>

          </motion.div>
        </div>
      </section>

      {/* ⚡ SERVICES GRID */}
      <section className="relative py-28 bg-white">
  <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-white" />

  <div className="relative z-10 container mx-auto px-4">

    <div className="text-center max-w-3xl mx-auto mb-20">
      <h2 className="text-5xl font-bold text-slate-900 mb-6">
        Our Solar Solutions
      </h2>

      <p className="text-slate-600 text-lg">
        Tailored solar energy systems for homes, businesses, and large-scale
        energy generation projects.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-10">

      {/* Residential Solar */}
      <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500">
        <div className="relative h-72 overflow-hidden">
          <img
src="https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=1200&q=80"/>
          <h3 className="absolute bottom-6 left-6 text-white text-3xl font-bold">
            Residential Solar
          </h3>
        </div>

        <div className="p-8">
          <p className="text-slate-600 leading-relaxed">
            Reliable solar power solutions for homes, helping families reduce
            electricity costs and gain energy independence.
          </p>
        </div>
      </div>

      {/* Commercial Solar */}
      <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500">
        <div className="relative h-72 overflow-hidden">
          <img
src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <h3 className="absolute bottom-6 left-6 text-white text-3xl font-bold">
            Commercial Solar
          </h3>
        </div>

        <div className="p-8">
          <p className="text-slate-600 leading-relaxed">
            High-performance solar systems for businesses, reducing operating
            costs while supporting sustainability goals.
          </p>
        </div>
      </div>

      {/* Solar Farms */}
      <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500">
        <div className="relative h-72 overflow-hidden">
          <img
src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80"            alt="Solar Farms"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <h3 className="absolute bottom-6 left-6 text-white text-3xl font-bold">
            Solar Farms
          </h3>
        </div>

        <div className="p-8">
          <p className="text-slate-600 leading-relaxed">
            Utility-scale solar farm development designed to generate clean,
            renewable energy at large capacity.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="py-32 bg-slate-50">
  <div className="container mx-auto px-4">

    <div className="text-center mb-20">
      <h2 className="text-5xl font-bold text-slate-900 mb-6">
        Your Path To Solar Energy
      </h2>

      <p className="text-slate-600 text-lg max-w-3xl mx-auto">
        A simple and transparent process that takes you from the first
        consultation to a fully operational solar energy system.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6">
          1
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Consultation & Site Analysis
        </h3>

        <p className="text-slate-600">
          We evaluate your property, energy usage, and solar potential to
          identify the most effective solution.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6">
          2
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Custom Design & Quoting
        </h3>

        <p className="text-slate-600">
          Our engineers design a system tailored to your energy needs and
          provide a clear project quotation.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6">
          3
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Seamless Installation & Activation
        </h3>

        <p className="text-slate-600">
          Our certified installers complete the project efficiently and safely,
          ensuring your system is ready to perform.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6">
          4
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Monitoring & Support
        </h3>

        <p className="text-slate-600">
          Ongoing monitoring and technical support ensure optimal performance
          and long-term savings.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* ⚡ TESLA-STYLE CTA */}
      <section className="relative py-32 overflow-hidden bg-black">

  {/* 🌄 cinematic solar background */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80"
      className="w-full h-full object-cover opacity-25"
      alt="solar energy"
    />
  </div>

  {/* 🌊 dark + blue gradient overlay (Tesla feel) */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

  {/* ⚡ energy glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-500/20 blur-[180px] rounded-full" />
    <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-sky-400/20 blur-[180px] rounded-full" />
  </div>

  <div className="relative z-10 container mx-auto px-4">

    {/* premium CTA card */}
    <div className="max-w-4xl mx-auto text-center">

      <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-14 shadow-2xl">

        {/* badge */}
        <div className="inline-flex items-center px-5 py-2 mb-6 rounded-full bg-white/10 border border-white/20">
          <span className="text-xs tracking-[0.35em] uppercase text-blue-200 font-medium">
            Clean Energy Revolution
          </span>
        </div>

        {/* headline */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Power Your Future
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
            {" "}Today
          </span>
        </h2>

        {/* description */}
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of Kenyans switching to clean, reliable solar energy systems
          designed for performance, savings, and long-term independence.
        </p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

          <a href="/contact">
            <button className="px-10 py-4 rounded-full bg-blue-600 text-white font-semibold
                               shadow-lg hover:bg-blue-700 hover:scale-[1.03] transition">
              Get Started
            </button>
          </a>

          <a href="/about">
            <button className="px-10 py-4 rounded-full bg-white/10 border border-white/20
                               text-white font-semibold hover:bg-white/20 hover:scale-[1.03]
                               transition backdrop-blur-md">
              Explore More
            </button>
          </a>

        </div>

      </div>
    </div>

  </div>
</section>

    </div>
  );
}