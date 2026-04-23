import { Instagram, MessageCircle, CheckCircle2 } from 'lucide-react';
import { INSTAGRAM_HANDLE, PHONE_NUMBER } from '../../data/constants';

interface FooterProps {
   onOrder: () => void;
}

export function Footer({ onOrder }: FooterProps) {
    return (
        <>
           <section className="bg-cream-dark py-24 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blush/30 rounded-full blur-3xl -z-0"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-0"></div>

              <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                 <div className="order-2 lg:order-1 relative">
                    <div className="aspect-square rounded-[2rem] overflow-hidden outline outline-8 outline-white shadow-xl shadow-cocoa/5">
                       <img src="/hero.png" alt="Signature cake" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-8 -right-8 w-48 aspect-square rounded-full overflow-hidden outline outline-8 outline-white shadow-xl shadow-cocoa/5 hidden md:block">
                       <img src="/Nutella cupcakes.png" alt="Nutella cupcakes" className="w-full h-full object-cover" />
                    </div>
                 </div>

                 <div className="order-1 lg:order-2">
                    <h2 className="text-4xl lg:text-5xl mb-6">Baked with Love, Delivered with Care</h2>
                    <p className="text-cocoa/80 font-light text-lg mb-8 leading-relaxed">
                       Dive In Dessert brings handcrafted cakes, brownies, cupcakes, cheesecakes, and curated dessert gifts straight to your celebrations. Every item is made fresh with a focus on presentation, flavor, and gifting appeal.
                    </p>
                    <ul className="space-y-4 mb-10">
                       {['Premium Ingredients', 'Freshly Made to Order', 'Customizable for Events', 'Dessert Gifting Ready'].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-espresso font-medium text-sm">
                             <CheckCircle2 size={20} className="text-gold" />
                             {item}
                          </li>
                       ))}
                    </ul>
                    <button
                       onClick={onOrder}
                       className="bg-transparent border border-cocoa text-cocoa px-8 py-3.5 rounded-full font-medium hover:bg-cocoa hover:text-white transition-colors"
                    >
                       Place an Order
                    </button>
                 </div>
              </div>
           </section>

           <footer className="bg-espresso text-cream pt-20 pb-10 px-6 lg:px-12 rounded-t-[3rem] mt-10">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                 <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-6">
                       <img src="/logo.jpg" alt="Dive In Dessert logo" className="h-12 w-12 rounded-full object-cover border-2 border-white/20 shadow-md" />
                       <h2 className="font-serif text-3xl text-white">Dive In Dessert</h2>
                    </div>
                    <p className="text-cream/60 max-w-sm mb-8 font-light leading-relaxed">
                       A dessert-first brand serving celebration cakes, brownies, cupcakes, cheesecakes, and festive hampers for gifting and events.
                    </p>
                    <div className="flex gap-4">
                       <a href={`https://instagram.com/${INSTAGRAM_HANDLE.replace('@', '')}`} target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                          <Instagram size={20} />
                       </a>
                       <button onClick={onOrder} className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                          <MessageCircle size={20} />
                       </button>
                    </div>
                 </div>

                 <div>
                    <h4 className="font-medium mb-6 text-gold uppercase text-sm tracking-wider">Quick Links</h4>
                    <ul className="space-y-4 text-cream/70 font-light text-sm">
                       <li><a href="#menu" className="hover:text-white transition-colors">Our Menu</a></li>
                       <li><button onClick={onOrder} className="hover:text-white transition-colors">Custom Orders</button></li>
                       <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                       <li><a href="#" className="hover:text-white transition-colors">Delivery Info</a></li>
                    </ul>
                 </div>

                 <div>
                    <h4 className="font-medium mb-6 text-gold uppercase text-sm tracking-wider">Contact</h4>
                    <ul className="space-y-4 text-cream/70 font-light text-sm">
                       <li>+91 8309152885</li>
                       <li>{INSTAGRAM_HANDLE}</li>
                       <li>Hyderabad, India</li>
                    </ul>
                 </div>
              </div>

              <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/50">
                 <p>&copy; {new Date().getFullYear()} Dive In Dessert. All rights reserved.</p>
                 <p>Design & Bake in Hyderabad.</p>
              </div>
           </footer>
        </>
    );
}
