import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/40 to-blue-50/30 text-slate-900 relative overflow-hidden">

      {/* 🌌 Ultra premium ambient glow system */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-150px] right-[-120px] w-[700px] h-[700px] bg-blue-500/10 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-200px] left-[-150px] w-[600px] h-[600px] bg-sky-400/10 blur-[150px] rounded-full" />
        <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-indigo-300/10 blur-[120px] rounded-full" />
      </div>

      {/* 🧠 Luxury grid overlay */}
      <div className="absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* HERO */}
      <section className="relative pt-36 pb-24 z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >

            {/* glowing badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/70 backdrop-blur border border-blue-100 shadow-sm mb-8">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-ping" />
              Global Solar Engineering Desk
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05]">
              Let’s Build a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500">
                Brighter Future
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
              Connect with our solar engineers, project planners, and energy consultants.
              We respond fast — and build globally scalable solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">

          <div className="grid lg:grid-cols-12 gap-14 items-start">

            {/* LEFT INFO PANEL */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-10"
            >

              <div>
                <h2 className="text-2xl font-bold">Global HQ</h2>
                <div className="h-1 w-14 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mt-2" />
              </div>

              <div className="space-y-8">

                {/* CARD */}
                {[
                  { icon: Phone, label: "Phone", value: "0702 256 347", href: "tel:+254702256347" },
                  { icon: Mail, label: "Email", value: "info@solarsafe.ke", href: "mailto:info@solarsafe.ke" },
                  { icon: MapPin, label: "Location", value: "Nairobi, Kenya" },
                  { icon: Clock, label: "Hours", value: "Mon–Fri: 8AM–6PM", sub: "Sat: 9AM–2PM" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white border border-slate-100 shadow-sm group-hover:shadow-blue-200/40 group-hover:scale-105 transition">
                      <item.icon className="text-blue-600" size={20} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                        {item.label}
                      </p>

                      {item.href ? (
                        <a href={item.href} className="text-lg font-semibold hover:text-blue-600 transition">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold">{item.value}</p>
                      )}

                      {item.sub && (
                        <p className="text-sm text-slate-500">{item.sub}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >

              <div className="relative rounded-[2rem] p-[1px] bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 shadow-2xl shadow-blue-500/10">

                <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-10">

                  {/* floating dots */}
                  <div className="absolute top-6 right-10 flex gap-1">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse delay-150" />
                    <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-300" />
                  </div>

                  <h2 className="text-3xl font-bold mb-2">
                    Send a Request
                  </h2>

                  <p className="text-slate-500 mb-8">
                    We typically respond within 4 hours during working hours.
                  </p>

                  <ContactForm />

                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}