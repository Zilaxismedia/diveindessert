import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, Image as ImageIcon, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER } from '../../data/constants';

export function CustomCakeModal() {
   const [showCustomModal, setShowCustomModal] = useState(false);
   const [customForm, setCustomForm] = useState({
      name: "",
      phone: "",
      time: "",
      weight: "1kg",
      location: "",
      cakeMessage: "",
      imageName: ""
   });

   useEffect(() => {
      const handleOpen = () => setShowCustomModal(true);
      document.addEventListener('openCustomModal', handleOpen);
      return () => document.removeEventListener('openCustomModal', handleOpen);
   }, []);

    const handleCustomSubmit = (e: React.FormEvent) => {
       e.preventDefault();
       let text = `✨ *New Custom Cake Inquiry* ✨%0A%0A`;
       text += `👤 *Name:* ${customForm.name}%0A`;
       text += `📱 *Phone:* ${customForm.phone}%0A%0A`;
       text += `🎂 *Order Details:*%0A`;
       text += `• *Size/Weight:* ${customForm.weight}%0A`;
       text += `• *Message on Cake:* "${customForm.cakeMessage || 'None'}"%0A`;
       if (customForm.imageName) {
          text += `• *Reference:* ${customForm.imageName} (I'll send the photo next)%0A`;
       }
       text += `%0A📅 *Delivery Info:*%0A`;
       text += `• *Date & Time:* ${customForm.time}%0A`;
       text += `• *Address:* ${customForm.location}%0A%0A`;
       text += `Please let me know the quote and availability. Thank you!`;

       window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, '_blank');
       setShowCustomModal(false);
    };

   return (
      <AnimatePresence>
         {showCustomModal && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-neutral/60 backdrop-blur-sm sm:p-6"
            >
               <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  className="bg-white rounded-[3rem] w-full max-w-xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col max-h-[90vh]"
               >
                  <div className="px-10 py-8 border-b border-neutral/5 flex justify-between items-center bg-white sticky top-0 z-10 shrink-0">
                     <div className="flex flex-col">
                        <h3 className="font-serif text-3xl text-neutral italic font-bold">Custom Cake Order</h3>
                        <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">Design your dream dessert</p>
                     </div>
                     <button onClick={() => setShowCustomModal(false)} className="text-neutral/40 hover:text-neutral transition-all p-3 bg-soft rounded-2xl hover:rotate-90">
                        <X size={20} />
                     </button>
                  </div>

                  <div className="px-10 py-8 overflow-y-auto shrink-1 scrollbar-hide">
                     <p className="text-base text-neutral/60 mb-10 leading-relaxed font-light">
                        Tell us about your celebration! Fill in the details below, and we'll chat on WhatsApp to finalize the design and quote.
                     </p>

                     <form id="customCakeForm" onSubmit={handleCustomSubmit} className="space-y-8 text-left">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-xs font-bold text-neutral uppercase tracking-widest px-1">Your Name</label>
                              <input required type="text" value={customForm.name} onChange={e => setCustomForm({ ...customForm, name: e.target.value })} className="w-full bg-soft border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 text-neutral text-base transition-all placeholder:text-neutral/20" placeholder="e.g. Aman" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-xs font-bold text-neutral uppercase tracking-widest px-1">WhatsApp Number</label>
                              <input required type="tel" value={customForm.phone} onChange={e => setCustomForm({ ...customForm, phone: e.target.value })} className="w-full bg-soft border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 text-neutral text-base transition-all placeholder:text-neutral/20" placeholder="+91..." />
                           </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-xs font-bold text-neutral uppercase tracking-widest px-1">Celebration Date & Time</label>
                              <input required type="datetime-local" value={customForm.time} onChange={e => setCustomForm({ ...customForm, time: e.target.value })} className="w-full bg-soft border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 text-neutral text-base transition-all" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-xs font-bold text-neutral uppercase tracking-widest px-1">Cake Size / Weight</label>
                              <select value={customForm.weight} onChange={e => setCustomForm({ ...customForm, weight: e.target.value })} className="w-full bg-soft border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 text-neutral text-base transition-all appearance-none cursor-pointer">
                                 <option value="1/2kg">1/2 kg (Perfect for 2-4)</option>
                                 <option value="1kg">1 kg (Standard Party)</option>
                                 <option value="1.5kg">1.5 kg (Larger Group)</option>
                                 <option value="2kg">2 kg+ (Grand Celebration)</option>
                              </select>
                           </div>
                        </div>

                        <div className="space-y-2">
                           <label className="text-xs font-bold text-neutral uppercase tracking-widest px-1">Delivery Address</label>
                           <textarea required value={customForm.location} onChange={e => setCustomForm({ ...customForm, location: e.target.value })} className="w-full bg-soft border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 text-neutral text-base transition-all placeholder:text-neutral/20 min-h-[100px] resize-none" placeholder="Enter your full delivery address in Hyderabad..." />
                        </div>

                        <div className="space-y-2">
                           <label className="text-xs font-bold text-neutral uppercase tracking-widest px-1">Message on Cake</label>
                           <input type="text" value={customForm.cakeMessage} onChange={e => setCustomForm({ ...customForm, cakeMessage: e.target.value })} className="w-full bg-soft border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 text-neutral text-base transition-all placeholder:text-neutral/20" placeholder="e.g. Happy Birthday Di!" />
                        </div>

                        <div className="space-y-2">
                           <label className="text-xs font-bold text-neutral uppercase tracking-widest px-1">Reference Design</label>
                           <div className="relative group">
                              <input type="file" accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" onChange={e => setCustomForm({ ...customForm, imageName: e.target.files?.[0]?.name || "" })} />
                              <div className="w-full bg-soft border-2 border-dashed border-neutral/10 rounded-[2rem] px-8 py-10 text-center group-hover:bg-primary/5 group-hover:border-primary/20 transition-all flex flex-col items-center gap-4">
                                 {customForm.imageName ? (
                                    <>
                                       <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                          <ImageIcon size={32} />
                                       </div>
                                       <div className="space-y-1">
                                          <p className="text-sm font-bold text-neutral">{customForm.imageName}</p>
                                          <p className="text-xs text-neutral/40">We'll ask you to send the photo on WhatsApp</p>
                                       </div>
                                    </>
                                 ) : (
                                    <>
                                       <div className="w-16 h-16 rounded-2xl bg-neutral/5 flex items-center justify-center text-neutral/30 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                          <Upload size={32} />
                                       </div>
                                       <div className="space-y-1">
                                          <p className="text-sm font-bold text-neutral">Upload Inspiration</p>
                                          <p className="text-xs text-neutral/40">Share a photo of the design you like</p>
                                       </div>
                                    </>
                                 )}
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>

                  <div className="px-10 py-8 bg-white border-t border-neutral/5 shrink-0">
                     <button type="submit" form="customCakeForm" className="w-full bg-primary text-white py-6 rounded-[2rem] font-bold text-lg flex justify-center items-center gap-3 hover:bg-neutral transition-all shadow-xl shadow-primary/20 active:scale-[0.98]">
                        <span>Submit & Chat on WhatsApp</span>
                        <MessageCircle size={24} />
                     </button>
                  </div>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
