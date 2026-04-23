import { motion } from 'motion/react';
import { ShoppingBag, Star, Zap } from 'lucide-react';
import { PRODUCTS } from '../../data/constants';

interface SignatureGalleryProps {
  onOpenSizeSelector: (product: any) => void;
}

export function SignatureGallery({ onOpenSizeSelector }: SignatureGalleryProps) {
  const signatures = PRODUCTS.filter(p => p.popular).slice(0, 4);
  
  // Adding mock dietary tags for the showcase
  const dietaryTags = ["Gluten-Free", "Eggless", "Nut-Free", "Vegan"];

  return (
    <section className="py-24 bg-tertiary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm mb-4"
            >
              <Zap size={18} fill="currentColor" />
              <span>Limited Edition</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl text-neutral font-serif"
            >
              Signature <span className="italic text-primary">Creations</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral/60 max-w-sm"
          >
            Our most loved masterpieces, handcrafted daily with premium ingredients and a dash of magic.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {signatures.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Circular Motif Background */}
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] scale-0 group-hover:scale-100 transition-transform duration-500 -z-10" />
              
              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden mb-6 bg-soft shadow-xl shadow-neutral/5">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-neutral uppercase tracking-wider shadow-sm">
                    {dietaryTags[index % dietaryTags.length]}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-secondary text-neutral p-2 rounded-full shadow-lg">
                  <Star size={16} fill="currentColor" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-xl font-bold text-neutral group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-lg font-serif font-bold text-neutral">
                    ₹{product.price}
                  </span>
                </div>
                <p className="text-sm text-neutral/60 line-clamp-2 mb-4">
                  {product.desc}
                </p>
                <button 
                  onClick={() => onOpenSizeSelector(product)}
                  className="w-full bg-neutral text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold hover:bg-primary transition-all shadow-lg active:scale-95"
                >
                  <ShoppingBag size={18} />
                  <span>Add to Bag</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
