import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { INSTAGRAM_HANDLE } from '../../data/constants';

const FEED_IMAGES = [
  { id: 1, img: '/hero/cupcakes.png', likes: '1.2k', comments: '45' },
  { id: 2, img: '/hero/macarons.png', likes: '845', comments: '23' },
  { id: 3, img: '/hero/truffles.png', likes: '2.1k', comments: '89' },
  { id: 4, img: '/hero/cheesecake.png', likes: '1.5k', comments: '34' },
  { id: 5, img: '/cupcake box.png', likes: '3.2k', comments: '120' },
  { id: 6, img: '/donuts.png', likes: '920', comments: '18' },
];

export function VisualDiary() {
  const handle = INSTAGRAM_HANDLE.replace('@', '');
  const profileUrl = `https://www.instagram.com/${handle}/`;

  return (
    <section id="our-story" className="py-24 bg-tertiary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-4"
          >
            <Sparkles size={14} fill="currentColor" />
            <span>On the Gram</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl text-neutral font-serif mb-6">
            Our <span className="italic text-primary">Visual Diary</span>
          </h2>
          <p className="text-neutral/60 text-lg leading-relaxed mb-8">
            A behind-the-scenes look into our bakery. From fresh bakes to celebration moments, see it all as it happens.
          </p>
          <motion.a 
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-neutral text-white px-8 py-4 rounded-full font-bold hover:bg-primary transition-all shadow-xl shadow-neutral/10"
          >
            <Instagram size={20} />
            <span>Follow @{handle}</span>
            <ExternalLink size={16} />
          </motion.a>
        </div>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex gap-6 py-8 px-4 shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30,
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {[...FEED_IMAGES, ...FEED_IMAGES].map((item, idx) => (
              <motion.div
                key={`${item.id}-${idx}`}
                whileHover={{ y: -10 }}
                className="relative w-72 lg:w-80 aspect-[4/5] rounded-[3rem] overflow-hidden group shrink-0 shadow-2xl shadow-neutral/10 bg-soft"
              >
                <img 
                  src={item.img} 
                  alt="Social feed" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Overlay with Glassmorphism */}
                <div className="absolute inset-0 bg-neutral/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center gap-6 text-white translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center gap-8">
                    <div className="flex flex-col items-center gap-1">
                      <Heart size={28} fill="currentColor" />
                      <span className="font-bold">{item.likes}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <MessageCircle size={28} fill="currentColor" />
                      <span className="font-bold">{item.comments}</span>
                    </div>
                  </div>
                  <a 
                    href={profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-neutral px-6 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-colors"
                  >
                    View Post
                  </a>
                </div>

                {/* Constant Instagram Icon Overlay */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white z-10">
                  <Instagram size={20} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
