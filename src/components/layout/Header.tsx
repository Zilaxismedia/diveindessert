import { Instagram, MessageCircle } from 'lucide-react';
import { INSTAGRAM_HANDLE } from '../../data/constants';

interface HeaderProps {
   scrolled: boolean;
   onOrder: () => void;
}

export function Header({ scrolled, onOrder }: HeaderProps) {
    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
           <div className={`max-w-7xl mx-auto px-6 lg:px-12 transition-all duration-300 ${scrolled ? 'glass rounded-full mt-2 mx-4 max-w-[calc(100%-2rem)]' : ''}`}>
              <div className="flex justify-between items-center py-3">
                  <div className="flex items-center gap-2">
                     <span className="font-serif text-2xl font-bold italic text-neutral">
                        Dive In Dessert
                     </span>
                  </div>

                  <nav className="hidden lg:flex items-center gap-8">
                     {[
                        { name: 'Menu', href: '#menu' },
                        { name: 'Our Story', href: '#our-story' },
                        { name: 'Reviews', href: '#reviews' },
                        { name: 'Contact', href: '#contact' }
                     ].map((item) => (
                        <a 
                           key={item.name} 
                           href={item.href} 
                           className={`text-sm font-medium transition-colors ${item.name === 'Menu' ? 'text-neutral border-b-2 border-primary pb-1' : 'text-neutral/60 hover:text-neutral'}`}
                        >
                           {item.name}
                        </a>
                     ))}
                  </nav>

                  <div className="flex items-center gap-4">
                     <button
                        onClick={onOrder}
                        className="bg-primary text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-neutral transition-all shadow-lg shadow-primary/20"
                     >
                        Order Now
                     </button>
                  </div>
              </div>
           </div>
        </header>
    );
}
