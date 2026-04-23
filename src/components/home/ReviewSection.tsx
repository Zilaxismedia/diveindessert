import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Ananya Sharma",
    text: "The Bento Cake was absolutely stunning! Perfect for my anniversary. The texture was so light and the cream wasn't overly sweet. 10/10 would recommend! ✨",
    rating: 5,
    offset: "lg:translate-x-[-10%]"
  },
  {
    id: 2,
    name: "Rohan Gupta",
    text: "Literally the best Nutella Cheesecake I've ever had in Hyderabad. The crust was crunchy and the hazelnut notes were spot on. Pure bliss indeed!",
    rating: 5,
    offset: "lg:translate-x-[15%]"
  },
  {
    id: 3,
    name: "Meera Reddy",
    text: "Tried the Diwali Hamper and my family loved every single bite. The packaging was so premium, felt like a luxury experience.",
    rating: 5,
    offset: "lg:translate-x-[-5%]"
  },
  {
    id: 4,
    name: "Vikram Malhotra",
    text: "The brownies are dangerous... I finished the whole tub in one sitting. Sorry not sorry! 😂",
    rating: 5,
    offset: "lg:translate-x-[10%]"
  }
];

export function ReviewSection() {
  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Star size={14} fill="currentColor" />
            <span>Customer Love</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl text-neutral font-serif">
            Sweet Words From <br />
            <span className="italic text-primary">Our Community</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`max-w-lg ${index % 2 === 0 ? 'self-start' : 'self-end'} ${review.offset}`}
            >
              <div className={`relative p-8 rounded-[2rem] shadow-2xl shadow-neutral/5 ${index % 2 === 0 ? 'bg-soft rounded-bl-none' : 'bg-neutral text-white rounded-br-none'}`}>
                <Quote className={`absolute top-4 ${index % 2 === 0 ? 'right-4 text-primary/20' : 'left-4 text-white/10'}`} size={48} />
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} size={14} fill={index % 2 === 0 ? "#D81B60" : "#FFD700"} className="border-none" />
                  ))}
                </div>
                <p className={`text-lg leading-relaxed mb-6 font-medium ${index % 2 === 0 ? 'text-neutral' : 'text-white/90'}`}>
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${index % 2 === 0 ? 'bg-primary text-white' : 'bg-secondary text-neutral'}`}>
                    {review.name[0]}
                  </div>
                  <span className="font-bold tracking-wide">{review.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
