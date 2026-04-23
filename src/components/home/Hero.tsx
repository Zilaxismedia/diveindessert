import { motion } from 'motion/react';
import { Utensils, ArrowRight, Cake, Cookie, Coffee, Croissant, Donut, ShoppingBag } from 'lucide-react';

interface HeroProps {
   onOrder: () => void;
}

const FloatingIcon = ({ icon: Icon, delay, initialX, initialY }: any) => (
   <motion.div
      initial={{ x: initialX, y: initialY, opacity: 0 }}
      animate={{
         y: [initialY, initialY - 40, initialY],
         x: [initialX, initialX + 20, initialX],
         opacity: [0.1, 0.2, 0.1],
         rotate: [0, 10, -10, 0]
      }}
      transition={{
         duration: 8 + Math.random() * 5,
         repeat: Infinity,
         delay: delay,
         ease: "easeInOut"
      }}
      className="absolute text-primary pointer-events-none z-0"
   >
      <Icon size={32} strokeWidth={1} />
   </motion.div>
);

export function Hero({ onOrder }: HeroProps) {
   const backgroundIcons = [
      { icon: Cake, initialX: '10%', initialY: '20%', delay: 0 },
      { icon: Cookie, initialX: '80%', initialY: '15%', delay: 1 },
      { icon: Donut, initialX: '15%', initialY: '70%', delay: 2 },
      { icon: Croissant, initialX: '85%', initialY: '60%', delay: 3 },
      { icon: Coffee, initialX: '50%', initialY: '10%', delay: 4 },
      { icon: Cake, initialX: '40%', initialY: '80%', delay: 5 },
      { icon: Cookie, initialX: '70%', initialY: '85%', delay: 0.5 },
   ];

   return (
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
         {/* Background Floating Icons */}
         {backgroundIcons.map((item, index) => (
            <FloatingIcon key={index} {...item} />
         ))}

         <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="flex-1 text-center lg:text-left relative"
            >
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block bg-secondary px-4 py-1.5 rounded-xl mb-6 shadow-sm"
               >
                  <span className="text-[11px] font-bold text-neutral uppercase tracking-widest">Freshly Baked Daily</span>
               </motion.div>

               <h1 className="text-5xl sm:text-6xl lg:text-8xl leading-[1.05] mb-6 text-neutral relative z-10">
                  Dive Into A <br />
                  World of <span className="italic text-accent-gold font-serif">Pure <br className="hidden sm:block lg:hidden" /> Bliss.</span>
               </h1>

               <p className="text-lg lg:text-xl text-neutral/70 mb-10 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                  Meticulously crafted sweets for the modern hedonist. We don't just bake; we create edible moments of joy that look as good as they taste.
               </p>

               <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                  <button
                     onClick={onOrder}
                     className="w-full sm:w-auto bg-primary text-white px-10 py-4.5 rounded-full text-base font-semibold hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group"
                  >
                     Browse The Menu
                  </button>
                  <button
                     onClick={() => document.dispatchEvent(new CustomEvent('openCustomModal'))}
                     className="w-full sm:w-auto px-10 py-4.5 rounded-full text-base font-semibold text-neutral border border-primary/20 hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
                  >
                     Order Custom Cake
                  </button>
               </div>
            </motion.div>

            {/* Right Collage */}
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="flex-1 w-full lg:w-auto relative"
            >
               {/* Concentric Animated Rings */}
               <div className="absolute inset-0 flex justify-center items-center -z-10 pointer-events-none scale-150 lg:scale-125">
                  <div className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] border border-primary/10 rounded-full animate-spin-slow" />
                  <div className="absolute w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] border border-secondary/10 rounded-full animate-spin-reverse" />
                  <div className="absolute w-[400px] h-[400px] lg:w-[700px] lg:h-[700px] border border-primary/5 rounded-full animate-spin-slow" />
               </div>

               <motion.div 
                  className="grid grid-cols-2 gap-4 lg:gap-6 animate-float"
               >
                  {/* Column 1 */}
                  <div className="space-y-4 lg:space-y-6 pt-12">
                     <motion.div 
                        whileHover={{ y: -15, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-neutral/10 aspect-[4/5] bg-soft cursor-pointer group"
                     >
                        <img src="/hero/cupcakes.png" alt="Cupcakes" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     </motion.div>
                     <motion.div 
                        whileHover={{ y: -15, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-neutral/10 aspect-[4/3] bg-soft cursor-pointer group"
                     >
                        <img src="/hero/truffles.png" alt="Truffles" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     </motion.div>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-4 lg:space-y-6">
                     <motion.div 
                        whileHover={{ y: -15, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-neutral/10 aspect-[4/3] bg-soft cursor-pointer group"
                     >
                        <img src="/hero/macarons.png" alt="Macarons" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute bottom-4 right-4 bg-secondary w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-neutral animate-bounce group-hover:bg-primary group-hover:text-white transition-colors">
                           <ShoppingBag size={20} />
                        </div>
                     </motion.div>
                     <motion.div 
                        whileHover={{ y: -15, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-neutral/10 aspect-[4/5] bg-soft cursor-pointer group"
                     >
                        <img src="/hero/cheesecake.png" alt="Cheesecake" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     </motion.div>
                  </div>
               </motion.div>
            </motion.div>
         </div>
      </section>
   );
}
