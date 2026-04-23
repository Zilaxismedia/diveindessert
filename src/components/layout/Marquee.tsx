import { Star } from 'lucide-react';

export function Marquee() {
    return (
        <div className="bg-primary text-white py-6 overflow-hidden">
           <div className="flex whitespace-nowrap animate-marquee">
              {Array.from({ length: 15 }).map((_, i) => (
                 <div key={i} className="flex items-center mx-6 text-xs font-bold tracking-[0.2em] uppercase">
                    <Star size={12} fill="currentColor" className="mr-6" />
                    <span>FRESHLY BAKED</span>
                    <span className="mx-6 text-white/40">•</span>
                    <span>NO PRESERVATIVES</span>
                    <span className="mx-6 text-white/40">•</span>
                    <span>MADE TO ORDER</span>
                 </div>
              ))}
           </div>
        </div>
    );
}
