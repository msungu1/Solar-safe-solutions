import { motion } from 'framer-motion';
import { useState } from 'react';
import CTASection from '../components/CTASection';

const galleryImages = [
  { id: 1, category: 'Installations', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80', title: 'Solar Panel Installation' },
  { id: 2, category: 'Technicians', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80', title: 'Expert Technicians' },
  { id: 3, category: 'Residential', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80', title: 'Residential Solar' },
  { id: 4, category: 'Commercial', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80', title: 'Commercial System' },
  { id: 5, category: 'Battery', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80', title: 'Battery Storage' },
  { id: 6, category: 'Installations', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80', title: 'Installation Process' }
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
