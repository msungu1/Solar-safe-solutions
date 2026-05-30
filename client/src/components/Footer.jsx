import logo from '../image/solarlogo.jpeg';
import { Link } from 'react-router-dom';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white pt-20 pb-10">

      {/* ⚡ blue energy glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-500/20 blur-[180px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-sky-400/10 blur-[180px]" />
      </div>

      {/* subtle grid (Tesla engineering feel) */}
      <div className="absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#60a5fa20_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa20_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* BRAND */}
          {/* <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-sky-400 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-slate-900 font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl tracking-wide">SolarSafe</span>
            </div>

            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              Powering Kenya with next-generation solar energy systems,
              battery storage, and water pumping solutions.
            </p>

            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <FaPhone className="text-blue-400" />
                <a href="tel:+254702256347" className="hover:text-blue-300 transition">
                  0702 256 347
                </a>
              </div>

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div> */}
          {/* 🌞 PREMIUM BRAND BLOCK */}
{/* 🌞 PREMIUM BIG CIRCULAR LOGO */}
<div className="mb-6 flex flex-col items-start">

  <div className="relative w-32 h-32 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-2xl group">

    {/* glowing ring */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-sky-400/20 to-cyan-400/20 blur-xl opacity-80 group-hover:opacity-100 transition" />

    {/* inner glow border */}
    <div className="absolute inset-0 rounded-full ring-2 ring-blue-400/40 group-hover:ring-blue-300 transition" />

    {/* logo */}
    <img
      src={logo}
      alt="SolarSafe Logo"
      className="relative z-10 w-full h-full object-cover scale-110 group-hover:scale-125 transition duration-300"
    />
  </div>

  {/* brand text */}
  <div className="mt-5">
    <h3 className="text-3xl font-bold tracking-wide text-white">
      SolarSafe
    </h3>
    <p className="text-sm text-slate-400">
      Energy Systems
    </p>
  </div>

</div>

          {/* LINKS */}
          {[
            {
              title: 'Company',
              links: ['About Us', 'Services', 'Projects', 'Blog']
            },
            {
              title: 'Resources',
              links: ['FAQ', 'Gallery', 'Testimonials', 'Contact']
            },
            {
              title: 'Legal',
              links: ['Privacy Policy', 'Terms', 'Cookies']
            }
          ].map((section, i) => (
            <div key={i}>
              <h4 className="text-white font-semibold mb-4 tracking-wide">
                {section.title}
              </h4>

              <ul className="space-y-2 text-sm text-slate-400">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to="#"
                      className="hover:text-blue-300 transition"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* DIVIDER */}
        <div className="border-t border-slate-800 mb-8" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SolarSafe Energy. All rights reserved.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3">
            {[
              FaFacebook,
              FaTwitter,
              FaLinkedin,
              FaInstagram
            ].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center
                           hover:bg-blue-600 hover:border-blue-500 transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}