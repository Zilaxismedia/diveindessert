import { motion } from 'motion/react';
import { Send, Gift, Sparkles } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[4rem] bg-neutral overflow-hidden px-8 py-20 lg:py-32 flex flex-col items-center text-center">
          {/* Animated Background Rings */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-spin-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-spin-reverse" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Gift size={16} fill="currentColor" />
              <span>Sweet Perks Await</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl text-white font-serif mb-8 leading-tight">
              Join the <span className="italic text-primary">Dessert Club</span>
            </h2>
            
            <p className="text-white/60 text-lg md:text-xl mb-12 max-w-lg mx-auto">
              Get exclusive first looks at new collections, special birthday treats, and secret menu access. No spam, just sugar.
            </p>

            <form className="w-full max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-6 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-lg"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-primary text-white px-8 rounded-full font-bold hover:bg-white hover:text-neutral transition-all flex items-center gap-2 group-focus-within:scale-105 active:scale-95"
                >
                  <span className="hidden sm:inline">Join Now</span>
                  <Send size={18} />
                </button>
              </div>
              <p className="text-white/30 text-sm mt-6 flex items-center justify-center gap-2">
                <Sparkles size={14} />
                <span>Join 500+ dessert lovers in our community</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
