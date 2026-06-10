import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = [
  "TFS Participation",
  "IFP Participation",
  "Partnership Inquiry",
  "Research Collaboration",
  "Institutional Collaboration",
  "Investment Discussion",
  "General Inquiry"
];

export default function Inquiry() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const formContainerRef = useRef<HTMLElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('category', selectedCategory);

    try {
      const response = await fetch('https://formspree.io/f/mlgknwke', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSuccessMessage('Thank you for your inquiry. We will get back to you soon.');
        form.reset();
        setSelectedCategory(CATEGORIES[0]);
        setTimeout(() => {
          formContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full pb-24 bg-river">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-12 max-w-3xl mx-auto w-full text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block"
        >
          Connect
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-5xl md:text-6xl text-forest mb-6 italic leading-tight"
        >
          Let's Build Something Valuable Together
        </motion.h1>
      </section>

      <section ref={formContainerRef} className="px-12 pb-32 max-w-4xl mx-auto w-full scroll-mt-24">
        <div className="bg-white p-8 md:p-16 border border-stone/10 shadow-sm">
          {successMessage ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-center py-12"
            >
              <p className="font-serif text-3xl text-forest mb-4 italic">{successMessage}</p>
              <button 
                type="button"
                onClick={() => setSuccessMessage('')}
                className="mt-8 flex items-center justify-center gap-4 mx-auto bg-transparent border border-forest text-forest px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-forest hover:text-white transition-colors"
              >
                Submit Another Inquiry
              </button>
            </motion.div>
          ) : (
            <form className="space-y-12" onSubmit={handleSubmit}>
              
              {/* Category Selection */}
              <div className="space-y-6">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-forest">Area of Interest</label>
                <div className="flex flex-wrap gap-4">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-6 py-3 text-[11px] uppercase tracking-widest font-semibold transition-colors border ${
                        selectedCategory === cat 
                          ? 'bg-forest text-river border-forest' 
                          : 'bg-transparent text-stone/80 border-stone/40 hover:border-forest hover:text-forest'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label htmlFor="name" className="block text-[10px] uppercase tracking-widest font-bold text-stone">Full Name</label>
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    required
                    className="w-full bg-transparent border-b border-stone/40 py-3 text-forest font-serif text-xl focus:outline-none focus:border-gold transition-colors rounded-none placeholder:text-stone/40"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-4">
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-widest font-bold text-stone">Email Address</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    required
                    className="w-full bg-transparent border-b border-stone/40 py-3 text-forest font-serif text-xl focus:outline-none focus:border-gold transition-colors rounded-none placeholder:text-stone/40"
                    placeholder="jane@organization.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label htmlFor="phone" className="block text-[10px] uppercase tracking-widest font-bold text-stone">Phone Number</label>
                  <input 
                    id="phone"
                    name="phone"
                    type="tel" 
                    className="w-full bg-transparent border-b border-stone/40 py-3 text-forest font-serif text-xl focus:outline-none focus:border-gold transition-colors rounded-none placeholder:text-stone/40"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div className="space-y-4">
                  <label htmlFor="organization" className="block text-[10px] uppercase tracking-widest font-bold text-stone">Organization</label>
                  <input 
                    id="organization"
                    name="organization"
                    type="text" 
                    className="w-full bg-transparent border-b border-stone/40 py-3 text-forest font-serif text-xl focus:outline-none focus:border-gold transition-colors rounded-none placeholder:text-stone/40"
                    placeholder="Institution or Company Name"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label htmlFor="message" className="block text-[10px] uppercase tracking-widest font-bold text-stone">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-stone/40 py-3 text-forest font-light focus:outline-none focus:border-gold transition-colors resize-none rounded-none placeholder:text-stone/40"
                  placeholder="Provide a brief context for your inquiry..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-8 flex items-center justify-center gap-4 w-full md:w-auto bg-gold text-forest px-12 py-5 text-[11px] uppercase tracking-widest font-bold hover:bg-forest hover:text-river transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'} <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-xs text-stone/80 font-light mt-4">
                All inquiries are directed to our ecosystem response team. Expect a response focused on clarity and actionable value.
              </p>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
