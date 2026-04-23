import { Instagram, MessageCircle, CheckCircle2 } from 'lucide-react';
import { INSTAGRAM_HANDLE, PHONE_NUMBER } from '../../data/constants';

interface FooterProps {
   onOrder: () => void;
}

export function Footer({ onOrder }: FooterProps) {
    return (
        <footer id="contact" className="bg-neutral text-tertiary pt-24 pb-12 px-6 lg:px-12 rounded-t-[4rem]">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                <div className="lg:col-span-2">
                    <div className="flex flex-col gap-6 mb-8">
                        <h2 className="font-serif text-4xl text-white italic font-bold">Dive In Dessert</h2>
                        <p className="text-tertiary/50 max-w-sm font-light leading-relaxed text-lg">
                            A dessert-first brand serving celebration cakes, brownies, cupcakes, cheesecakes, and festive hampers for gifting and events.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <a 
                           href={`https://instagram.com/${INSTAGRAM_HANDLE.replace('@', '')}`} 
                           target="_blank" 
                           rel="noreferrer" 
                           className="bg-white/10 p-4 rounded-2xl hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95"
                        >
                            <Instagram size={24} />
                        </a>
                        <button 
                           onClick={onOrder} 
                           className="bg-white/10 p-4 rounded-2xl hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95"
                        >
                            <MessageCircle size={24} />
                        </button>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-8 text-primary uppercase text-xs tracking-[0.2em]">Quick Links</h4>
                    <ul className="space-y-4 text-tertiary/50 font-medium text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">Our Menu</a></li>
                        <li><button onClick={onOrder} className="hover:text-white transition-colors">Custom Orders</button></li>
                        <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Delivery Info</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-8 text-primary uppercase text-xs tracking-[0.2em]">Contact</h4>
                    <ul className="space-y-4 text-tertiary/50 font-medium text-sm">
                        <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                           <span>+91 8309152885</span>
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                           <span>{INSTAGRAM_HANDLE}</span>
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                           <span>Hyderabad, India</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-tertiary/30 font-medium tracking-wider">
                <p>&copy; {new Date().getFullYear()} DIVE IN DESSERT. ALL RIGHTS RESERVED.</p>
                <p className="uppercase">Designed & Baked with Heart in Hyderabad.</p>
            </div>
        </footer>
    );
}
