import { motion } from 'framer-motion';
import { useState } from 'react';
import CTASection from '../components/CTASection';
import image1 from "../image/WhatsApp Image 2026-05-30 at 17.57.42 (1).jpeg";
import image2 from "../image/WhatsApp Image 2026-05-30 at 17.57.36 (1).jpeg";
import image3 from "../image/WhatsApp Image 2026-05-30 at 17.57.36.jpeg";
import image4 from "../image/WhatsApp Image 2026-05-30 at 17.57.42.jpeg";
import image5 from "../image/WhatsApp Image 2026-05-31 at 11.13.54.jpeg";
import image6 from "../image/WhatsApp Image 2026-05-31 at 11.14.10.jpeg";
import image7 from "../image/WhatsApp Image 2026-05-31 at 11.15.46.jpeg";
import image8 from "../image/WhatsApp Image 2026-05-31 at 11.16.02.jpeg";
import image9 from "../image/WhatsApp Image 2026-05-31 at 11.17.37.jpeg";
import image10 from "../image/WhatsApp Image 2026-05-31 at 11.17.38.jpeg";



const galleryImages = [
  { id: 1, category: 'Installations', image:image1, title: 'Solar water pump' },
  { id: 2, category: 'Technicians', image:image2, title: 'Expert Technicians' },
  { id: 3, category: 'Commercial', image:image3, title: 'Installation Process' },
  { id: 4, category: 'Commercial', image:image4, title: 'Commercial System' },
  { id: 5, category: 'Residential', image:image5, title: 'Residential Solar' },
  { id: 6, category: 'Installations', image: image6, title: 'Installation Process' },
  { id: 7, category: 'Residential', image: image7, title: 'Residential Solar' },
  { id: 8, category: 'Commercial', image: image8, title: 'Commercial System' },
  { id: 9, category: 'Battery', image: image9, title: 'Battery Storage' },
  { id: 10, category: 'Installations', image: image10, title: 'Installation Process' },
];

export default function Gallery() {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-foreground/70">Visual showcase of our solar installations</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <motion.div key={item.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: index * 0.05 }} viewport={{ once: true }} className="group relative h-64 rounded-lg overflow-hidden cursor-pointer">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div>
                    <p className="text-white/70 text-sm">{item.category}</p>
                    <h3 className="text-white font-bold">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Inspired by Our Work?" description="Let us help you with your solar energy project." primaryCTA={{ label: 'Get Free Quote', path: '/contact' }} secondaryCTA={{ label: 'View Services', path: '/services' }} />
    </div>
  );
}
