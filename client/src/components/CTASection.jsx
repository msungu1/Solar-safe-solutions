import { Link } from 'react-router-dom'; import { motion } from 'framer-motion';
 import { Button } from '@/components/ui/button'; 
 import { ArrowRight } from 'lucide-react'; 
  export default function CTASection({
     title, description, primaryCTA, secondaryCTA, backgroundImage }) 
     {   return (     <section className="relative py-20 overflow-hidden">  
          {/* Background */}       {backgroundImage && (   
                  <div className="absolute inset-0 z-0">          
                   <img             src={backgroundImage}       
                         alt="Background"             className="w-full h-full object-cover"           /> 
                                   <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" /> 
                                           </div>       )}        {!backgroundImage && (         
                                            <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-10" />       )}        
                                            {/* Content */}       <motion.div         initial={{ opacity: 0, y: 20 }}     
                                                whileInView={{ opacity: 1, y: 0 }}         transition={{ duration: 0.6 }}      
                                                   viewport={{ once: true }}         className="container mx-auto px-4 relative z-10 text-center"       >         <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h2>        
                                                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">           {description}         </p>          {/* Buttons */}        
                                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">   
                                                        
                                                           {primaryCTA && (             <Link to={primaryCTA.path}>               <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold px-8 py-6 text-lg flex items-center gap-2">                 {primaryCTA.label}                 <ArrowRight size={20} />               </Button>             </Link>           )}           {secondaryCTA && (             <Link to={secondaryCTA.path}>               <Button                 variant="outline"               
                                                      className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"               >                 {secondaryCTA.label}               </Button>             </Link>           )}         </div>       </motion.div>     </section>   ); } 
