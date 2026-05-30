import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';


export default function ServiceCard({ service, index }) {
  if (!service) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Link to={`/services/${service.id || '#'}`}>
        <div
          className="glass rounded-xl overflow-hidden h-full flex flex-col hover-glow"
          style={{ transition: 'all 300ms cubic-bezier(0.23, 1, 0.32, 1)' }}
        >
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-400">
            <img
              src={service.image || '/placeholder.jpg'}
              alt={service.title || 'Service'}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {service.title || 'Untitled Service'}
            </h3>

            <p className="text-foreground/70 text-sm mb-4 flex-1">
              {service.shortDescription || ''}
            </p>

            <ul className="space-y-1 mb-6">
              {(service.benefits || []).slice(0, 2).map((benefit, idx) => (
                <li
                  key={idx}
                  className="text-xs text-foreground/60 flex items-start gap-2"
                >
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
              <span>Learn More</span>
              <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}