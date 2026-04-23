import { Header } from '../components/layout/Header';
import { Hero } from '../components/home/Hero';
import { Marquee } from '../components/layout/Marquee';
import { MenuSection } from '../components/menu/MenuSection';
import { SignatureGallery } from '../components/menu/SignatureGallery';
import { ReviewSection } from '../components/home/ReviewSection';
import { VisualDiary } from '../components/home/VisualDiary';
import { Newsletter } from '../components/home/Newsletter';
import { Footer } from '../components/layout/Footer';
import { Product, CartItem } from '../types';

interface LandingProps {
   scrolled: boolean;
   cart: CartItem[];
   onOrder: () => void;
   onOpenSizeSelector: (product: Product) => void;
   updateCartQuantity: (id: string, delta: number) => void;
   onViewFullMenu: () => void;
}

export function Landing({ scrolled, cart, onOrder, onOpenSizeSelector, updateCartQuantity, onViewFullMenu }: LandingProps) {
    return (
        <div className="min-h-screen relative overflow-x-hidden bg-tertiary">
            <Header scrolled={scrolled} onOrder={onOrder} />
            <Hero onOrder={onOrder} />
            <Marquee />
            <SignatureGallery onOpenSizeSelector={onOpenSizeSelector} />
            <MenuSection 
               cart={cart}
               onOpenSizeSelector={onOpenSizeSelector}
               updateCartQuantity={updateCartQuantity}
               showTitle={true}
               showViewAllBtn={true}
               onViewAll={onViewFullMenu}
            />
            <ReviewSection />
            <VisualDiary />
            <Newsletter />
            <Footer onOrder={onOrder} />
        </div>
    );
}
