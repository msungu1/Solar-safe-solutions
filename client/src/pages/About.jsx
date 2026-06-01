import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import CTASection from '../components/CTASection';
import image16 from '../image/Copilot_20260531_120149.png';

const coreValues = [
  { title: 'Innovation', description: 'Cutting-edge solar technology solutions.' },
  { title: 'Reliability', description: '24/7 dependable systems and support.' },
  { title: 'Sustainability', description: 'Building a greener future for Kenya.' },
  { title: 'Affordability', description: 'Solar energy accessible to everyone.' }
];


const achievements = [
  { number: '10+', label: 'Installations' },
  { number: '50+', label: 'Happy Customers' },
  { number: '50+', label: 'Saved by Customers' },
  { number: '98%', label: 'Satisfaction Rate' }
];
const timeline = [
  {
    year: "2025",
    event: "Company founded with a mission to deliver affordable clean solar energy solutions in Kenya.",
  },
  {
    year: "Early 2025",
    event: "Completed first pilot installations for residential homes, validating system efficiency and customer savings.",
  },
  {
    year: "Mid 2025",
    event: "Expanded operations to small businesses and institutions, introducing scalable solar packages.",
  },
  {
    year: "Late 2025",
    event: "Built strategic partnerships with suppliers to reduce installation costs and improve accessibility.",
  },
  {
    year: "2026",
    event: "Rapid growth phase: increased installations across multiple counties and launched nationwide service expansion.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-20">

      {/* HERO */}
      <section className="relative overflow-hidden bg-white">

  {/* BACKGROUND IMAGE (CLEAR + VIBRANT) */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2400&q=80"
      alt="Solar panels"
      className="w-full h-full object-cover scale-105"
    />
  </div>

  {/* BLUE TINT OVERLAY (NOT BLOCKING IMAGE) */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-blue-500/20" />

  {/* SOFT WHITE LUXURY GLOW (TOP + BOTTOM FEEL) */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/60" />

  {/* BRAND ACCENT LIGHTS */}
  <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-blue-400/20 blur-[120px]" />
  <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-sky-300/20 blur-[120px]" />

  {/* CONTENT */}
  <div className="container mx-auto px-4 py-28 relative z-10 text-center max-w-3xl">

    {/* BADGE */}
    <div className="inline-flex px-5 py-2 mb-6 rounded-full bg-white/80 backdrop-blur-md border border-blue-100 shadow-sm">
      <span className="text-xs tracking-[0.3em] uppercase text-blue-600 font-semibold">
        About Us
      </span>
    </div>

    {/* TITLE */}
    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
      SolarSafe Solutions
    </h1>

    {/* DESCRIPTION */}
    <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
      Kenya's leading solar energy company delivering affordable, reliable, and sustainable renewable energy solutions.
    </p>

  </div>
</section>

      {/* STORY */}
      <section className="py-28 bg-gradient-to-b from-white via-blue-50/40 to-white relative overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0">
    <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-blue-200/40 blur-[120px]" />
    <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-sky-300/30 blur-[120px]" />
  </div>

  <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-16 items-center">

    {/* TEXT SIDE */}
    <div>

      <div className="inline-flex px-4 py-2 mb-6 rounded-full bg-white border border-blue-100 shadow-sm">
        <span className="text-xs tracking-[0.25em] uppercase text-blue-600 font-semibold">
          Our Journey
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
        Our Story
      </h2>

      <p className="text-slate-600 mb-5 leading-relaxed text-lg">
        Founded in 2025, we set out to make solar energy accessible across Kenya.
      </p>

      <p className="text-slate-600 mb-5 leading-relaxed text-lg">
        Kenya has huge solar potential, but affordability and expertise were barriers.
      </p>

      <p className="text-slate-600 leading-relaxed text-lg">
        Today we serve hundreds of homes and businesses nationwide with reliable clean energy solutions.
      </p>

    </div>

    {/* IMAGE SIDE (PREMIUM FRAME) */}
    <div className="relative group">

      {/* BLUE ACCENT BORDER GLOW */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition" />

      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/40">

        <img
          src={image16}
          className="w-full h-[450px] object-cover scale-105 group-hover:scale-110 transition duration-700"
          alt="Solar installation"
        />

        {/* LIGHT OVERLAY FOR PREMIUM FEEL */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-white/10" />

      </div>
    </div>

  </div>
</section>

      {/* MISSION / VISION */}
     <section className="py-28 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-white">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0">
    <div className="absolute top-[-160px] left-[-160px] w-[450px] h-[450px] bg-blue-200/40 blur-[140px]" />
    <div className="absolute bottom-[-160px] right-[-160px] w-[450px] h-[450px] bg-sky-300/30 blur-[140px]" />
  </div>

  <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12">

    {/* MISSION CARD */}
    <div className="group relative">

      {/* glow border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-3xl blur opacity-20 group-hover:opacity-40 transition" />

      <div className="relative bg-white/90 backdrop-blur-md border border-blue-100 rounded-3xl p-10 shadow-sm hover:shadow-xl transition duration-300">

        <h3 className="text-3xl font-extrabold text-slate-900 mb-4">
          Our Mission
        </h3>

        <p className="text-slate-600 leading-relaxed text-lg">
          Deliver affordable and reliable solar energy across Kenya.
        </p>

      </div>
    </div>

    {/* VISION CARD */}
    <div className="group relative">

      {/* glow border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-sky-300 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition" />

      <div className="relative bg-white/90 backdrop-blur-md border border-blue-100 rounded-3xl p-10 shadow-sm hover:shadow-xl transition duration-300">

        <h3 className="text-3xl font-extrabold text-slate-900 mb-4">
          Our Vision
        </h3>

        <p className="text-slate-600 leading-relaxed text-lg">
          Power every home and business with clean renewable energy.
        </p>

      </div>
    </div>

  </div>
</section>

      {/* VALUES */}
<section className="relative py-28 overflow-hidden bg-white">

  {/* 🌄 Background image layer (solar / clean energy vibe) */}
{/* 🌄 Background image layer */}
<div className="absolute inset-0">
  <img
    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80"
    alt="solar background"
    className="w-full h-full object-cover opacity-40"
  />
</div>

{/* 🌊 premium color balancing overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-white/60 via-sky-50/40 to-white/80" />

{/* 🔵 subtle blue tint layer (THIS makes it premium instead of washed out) */}
<div className="absolute inset-0 bg-blue-500/5" />
  {/* soft blue glow accents */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-300/30 blur-[170px] rounded-full" />
    <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-sky-400/20 blur-[170px] rounded-full" />
  </div>

  {/* subtle grid (kept but lighter) */}
  <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
    <div className="h-full w-full bg-[linear-gradient(to_right,#2563eb10_1px,transparent_1px),linear-gradient(to_bottom,#2563eb10_1px,transparent_1px)] bg-[size:60px_60px]" />
  </div>

  <div className="relative z-10">

    {/* heading */}
    <div className="container mx-auto px-4 text-center mb-20">

      <div className="inline-flex items-center px-5 py-2 mb-6 rounded-full bg-white/80 backdrop-blur-md border border-blue-100 shadow-sm">
        <span className="text-xs tracking-[0.35em] uppercase text-blue-700 font-semibold">
          What Defines Us
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
        Core Values
      </h2>

      <p className="text-slate-600 text-lg max-w-2xl mx-auto">
        Principles that shape how we design, build, and deliver sustainable energy solutions
      </p>
    </div>

    {/* timeline layout */}
    <div className="container mx-auto px-4 max-w-4xl relative">

      {/* center spine */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-sky-300 to-transparent hidden md:block" />

      <div className="space-y-14">

        {coreValues.map((v, i) => (
          <div
            key={i}
            className={`relative flex items-center gap-10 md:gap-14 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >

            {/* node */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
              <div className="w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-lg" />
            </div>

            {/* card */}
            <div className="w-full md:w-1/2 bg-white/90 backdrop-blur-md border border-blue-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">

              {/* accent bar */}
              <div className="w-14 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-5" />

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {v.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {v.description}
              </p>

            </div>

          </div>
        ))}

      </div>
    </div>
  </div>
</section>

      {/* ACHIEVEMENTS */}
      <section className="py-24 bg-blue-50/50">

        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">

          {achievements.map((a, i) => (
            <div key={i} className="bg-white border border-blue-100 rounded-3xl p-8 shadow-sm">
              <div className="text-4xl font-extrabold text-blue-600">{a.number}</div>
              <div className="text-slate-600 mt-2">{a.label}</div>
            </div>
          ))}

        </div>
      </section>

      {/* TIMELINE */}
     <section className="py-28 bg-gradient-to-b from-white via-sky-50 to-white">

  <div className="container mx-auto px-4 max-w-4xl">

    {/* heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-slate-900">
      Our Journey
    </h2>

    {/* timeline wrapper */}
    <div className="relative">

      {/* vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-sky-300 to-transparent" />

      <div className="space-y-10">

        {timeline.map((t, i) => (
          <div
            key={i}
            className={`relative flex items-start gap-6 md:gap-10 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >

            {/* dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-2">
              <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md" />
            </div>

            {/* year */}
            <div className="w-24 md:w-1/2 text-blue-600 font-bold text-lg md:text-xl md:text-right pr-6">
              {t.year}
            </div>

            {/* card */}
            <div className="md:w-1/2 bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <p className="text-slate-700 leading-relaxed">
                {t.event}
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>

  </div>
</section>

      {/* CERTIFICATIONS */}
      

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