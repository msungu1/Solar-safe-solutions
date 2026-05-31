import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';
import { projects } from '../data/projects';

const categories = ['All'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 bg-white">

      {/* HERO */}
     <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-blue-950">

  {/* 🌄 cinematic solar background image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80"
      alt="solar kenya"
      className="w-full h-full object-cover opacity-40"
    />
  </div>

  {/* 🔵 deep blue energy overlay (main Tesla feel layer) */}
  <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-900/70 to-blue-950/95" />

  {/* ⚡ glowing energy atmosphere */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-[-250px] left-[-250px] w-[650px] h-[650px] bg-blue-500/30 blur-[200px] rounded-full" />
    <div className="absolute bottom-[-250px] right-[-250px] w-[650px] h-[650px] bg-sky-400/20 blur-[200px] rounded-full" />
    <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-blue-400/10 blur-[160px] rounded-full" />
  </div>

  {/* subtle grid (engineering precision layer) */}
  <div className="absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
    <div className="h-full w-full bg-[linear-gradient(to_right,#60a5fa20_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa20_1px,transparent_1px)] bg-[size:80px_80px]" />
  </div>

  {/* CONTENT */}
  <div className="container mx-auto px-4 relative z-10">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-4xl mx-auto"
    >

      {/* badge */}
      <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
        <span className="text-xs tracking-[0.35em] uppercase text-blue-200 font-semibold">
    Solar-Safe Powering A Cleaner Tomorrow        </span>
      </div>

      {/* headline */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
        Solar Projects Across
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-200">
          {" "}Kenya
        </span>
      </h1>

      {/* description */}
      <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
        Explore precision-engineered solar installations powering homes, schools,
        hospitals, NGOs, and businesses with reliable clean energy across Kenya.
      </p>

      {/* minimal Tesla-style info row */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/60">
        <span>⚡ Residential & Commercial Systems</span>
        <span className="hidden sm:block">•</span>
        <span>🌍 Nationwide Installations</span>
        <span className="hidden sm:block">•</span>
        <span>🔋 High Efficiency Solar Tech</span>
      </div>

    </motion.div>

  </div>
</section>

      {/* FILTER + GRID */}
<section className="relative py-28 overflow-hidden bg-white">

      {/* 🌊 deep energy background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-white" />

      {/* ⚡ controlled energy glow (Tesla-style subtle atmosphere) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-300/30 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-sky-300/20 blur-[180px] rounded-full" />
      </div>

      {/* 📐 engineering grid */}
      <div className="absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#2563eb12_1px,transparent_1px),linear-gradient(to_bottom,#2563eb12_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all border ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-[1.05]'
                  : 'bg-white text-slate-700 border-blue-100 hover:bg-blue-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group transform hover:-translate-y-2 transition-all duration-300"
            >

              {/* PRODUCT CARD */}
              <div className="relative bg-white border border-blue-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition">

                {/* IMAGE (NEW ONLINE IMAGE LOGIC) */}
                <div className="relative h-56 overflow-hidden bg-slate-50">
               <img
  src={
    // Home systems (residential solar)
    item.category === "Home System"
      ? item.image

    // Farm / Agriculture systems
    : item.category === "Agriculture"
      ? item.image

    // Commercial / Irrigation business systems
    : item.category === "Commercial"
      ? item.image

    // Water pumps
    : item.category === "Water pumps"
      ? item.image

    // fallback
    : item.image || image14
  }
  alt={item.title}
  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
/>

                  {/* energy overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />

                  {/* category badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-semibold">
                    {item.category}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* TESLA-STYLE TECH SPECS */}
                  <div className="space-y-2 text-xs text-slate-500">
                    {item.power && (
                      <div className="flex justify-between">
                        <span>Power</span>
                        <span className="font-semibold text-slate-700">{item.power}</span>
                      </div>
                    )}
                    {item.capacity && (
                      <div className="flex justify-between">
                        <span>Capacity</span>
                        <span className="font-semibold text-slate-700">{item.capacity}</span>
                      </div>
                    )}
                    {item.useCase && (
                      <div className="flex justify-between">
                        <span>Use Case</span>
                        <span className="font-semibold text-slate-700">{item.useCase}</span>
                      </div>
                    )}
                  </div>

                  {/* energy progress bar */}
                  <div className="mt-5 h-1 w-full bg-blue-50 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full" />
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-b from-sky-50 via-white to-sky-50">

  {/* 🌄 background glow image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80"
      alt="solar background"
      className="w-full h-full object-cover opacity-25"
    />
  </div>

  {/* 🌊 strong readability overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/90" />

  {/* 🔵 blue energy glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-300/40 blur-[160px] rounded-full" />
    <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-sky-400/30 blur-[160px] rounded-full" />
  </div>

  <div className="relative z-10 container mx-auto px-4">

    {/* CTA card */}
    <div className="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-xl border border-blue-100 rounded-3xl p-12 shadow-xl">

      {/* badge */}
      <div className="inline-flex items-center px-5 py-2 mb-6 rounded-full bg-blue-50 border border-blue-100">
        <span className="text-xs tracking-[0.35em] uppercase text-blue-700 font-semibold">
          Clean Energy Movement
        </span>
      </div>

      {/* title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5">
        Join the Solar Revolution
      </h2>

      {/* description */}
      <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
        Be part of Kenya’s clean energy future. Save money, reduce carbon emissions,
        and power your home or business with reliable solar solutions.
      </p>

      {/* buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

        <a href="/contact">
          <button className="px-10 py-4 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:scale-[1.03] transition">
            Get Started
          </button>
        </a>

        <a href="/services">
          <button className="px-10 py-4 rounded-full bg-white border border-blue-200 text-slate-700 font-semibold hover:bg-blue-50 hover:scale-[1.03] transition">
            Explore Services
          </button>
        </a>

      </div>

    </div>

  </div>
</section>

    </div>
  );
}