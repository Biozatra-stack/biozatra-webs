import { motion } from 'motion/react';
import { ArrowDown, Globe, MapPin, TestTube, BookOpen, Activity, ArrowRight, TrendingUp, Handshake, Eye, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

import pearlImage1 from '../assets/images/regenerated_image_1780921637070.png';
import pearlImage2 from '../assets/images/history_of_pearl_india_1781005592890.png';

const BIOECONOMY_FLOW = [
  'Farmers & SHGs',
  'Freshwater Pearl Cultivation',
  'Processing & Value Addition',
  'Market Development',
  'Future Bio-Manufacturing Opportunities'
];

const OPPORTUNITIES = [
  "Digital Aquaculture Systems",
  "Traceability Solutions",
  "Bio-Manufacturing",
  "Waste-to-Wealth Initiatives",
  "Women-led Enterprises",
  "Research Collaborations",
  "Innovation Partnerships"
];

const COMMERCIAL_OPPS = [
  { title: "Pearls", desc: "High-grade freshwater pearls for domestic and international markets." },
  { title: "Value Addition", desc: "Post-harvest processing and quality grading." },
  { title: "Handcrafted Products", desc: "Integrating local artisan skills for premium products." },
  { title: "Branding", desc: "Establishing Northeast India as a sustainable origin." },
  { title: "Wellness", desc: "Nacre powder applications in natural remedies." },
  { title: "Tourism Integration", desc: "Experiential eco-tourism around sustainable farms." }
];

const PARTNERS = [
  "Fisheries Departments", "NFDB", "NABARD", "SHGs & FPOs", "Research Institutions", "Technology Partners", "Impact Investors"
];

export default function AssamStory() {
  return (
    <div className="flex flex-col w-full bg-river">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div 
            className="w-full h-full bg-cover bg-center object-cover"
            style={{ backgroundImage: `url(${pearlImage1})` }}
          />
          <div className="absolute inset-0 bg-deepblue/80 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-7xl px-12 mx-auto w-full text-center mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl text-river leading-[1.1] mb-6"
          >
            Freshwater Pearl Cultivation <br/>
            <span className="italic text-gold text-4xl md:text-6xl">Opportunity In Northeast India</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-lg md:text-xl text-river/90 font-light"
          >
            Professional Aquaculture Participation
          </motion.p>
        </div>
      </section>

      {/* Executive Overview & Global Industry */}
      <section className="py-32 px-12 bg-river border-b border-stone/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">Executive Overview</span>
            <p className="text-stone leading-relaxed text-xl font-light mb-6">
              With growing global demand for ethically sourced and sustainable gems, the emerging freshwater pearl sector presents a remarkable value opportunity. BIOZATRA approaches pearl cultivation not merely as extraction, but as premium aquaculture that restores ecosystems.
            </p>
          </div>
          <div className="bg-white p-12 border border-stone/10 shadow-sm">
            <h3 className="font-serif text-2xl text-forest mb-6 flex items-center gap-4"><Globe className="w-6 h-6 text-gold"/> Global Pearl Industry</h3>
            <ul className="space-y-6">
              <li className="flex flex-col"><span className="font-bold text-stone">China:</span> <span className="font-light text-stone/80 text-sm mt-1">Historically dominates freshwater volume production.</span></li>
              <li className="flex flex-col"><span className="font-bold text-stone">Japan & Australia:</span> <span className="font-light text-stone/80 text-sm mt-1">Leaders in premium marine pearls (Akoya, South Sea).</span></li>
              <li className="flex flex-col"><span className="font-bold text-stone">Indonesia:</span> <span className="font-light text-stone/80 text-sm mt-1">Significant contributor to tropical marine pearls.</span></li>
              <li className="flex flex-col"><span className="font-bold text-gold">India (Northeast):</span> <span className="font-light text-stone/80 text-sm mt-1">Emerging frontier for sustainable, high-quality freshwater cultivation leveraging vast natural pond networks.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Northeast India */}
      <section className="py-32 px-12 bg-forest text-river border-y border-stone/20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">Geographic Advantage</span>
          <h2 className="font-serif text-5xl mb-8 italic">Why Northeast India</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {[
            { icon: MapPin, text: "Abundant Freshwater Resources" },
            { icon: Activity, text: "Existing Aquaculture Familiarity" },
            { icon: Leaf, text: "Favorable Climate Profile" },
            { icon: TestTube, text: "Rich Biodiversity" },
            { icon: Eye, text: "Sustainability Positioning" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <item.icon className="w-8 h-8 text-gold mb-6" strokeWidth={1} />
              <p className="font-serif text-lg leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scientific & Historical */}
      <section className="py-32 px-12 bg-river border-b border-stone/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
             <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">Scientific Foundation</span>
             <h2 className="font-serif text-4xl text-forest mb-8 italic">Biological Mechanisms</h2>
             <p className="text-stone font-light leading-relaxed text-lg mb-12">
               Pearls form through a complex biological defense mechanism resulting in the continuous secretion of nacre over an implanted nucleus. In our freshwater systems, this process relies on specific native mussel species known for high-quality nacre yield.
             </p>
             
             {/* Flow Diagram */}
             <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-4">
               <div className="flex flex-col items-center w-24 shrink-0 text-center gap-3">
                 <div className="w-12 h-12 rounded-full border border-forest flex items-center justify-center text-forest font-serif px-2">1</div>
                 <p className="text-[10px] uppercase tracking-widest font-bold text-stone">Implantation</p>
               </div>
               <ArrowRight className="w-4 h-4 text-gold shrink-0" />
               <div className="flex flex-col items-center w-24 shrink-0 text-center gap-3">
                 <div className="w-12 h-12 rounded-full border border-forest flex items-center justify-center text-forest font-serif px-2">2</div>
                 <p className="text-[10px] uppercase tracking-widest font-bold text-stone">Secretion</p>
               </div>
               <ArrowRight className="w-4 h-4 text-gold shrink-0" />
               <div className="flex flex-col items-center w-24 shrink-0 text-center gap-3">
                 <div className="w-12 h-12 rounded-full border-gold bg-gold/10 flex items-center justify-center text-gold font-serif px-2">3</div>
                 <p className="text-[10px] uppercase tracking-widest font-bold text-stone">Formation</p>
               </div>
             </div>

             <div className="bg-stone/5 p-6 border-l-2 border-gold">
               <h4 className="font-serif text-xl text-forest mb-4">Core Focus Species:</h4>
               <ul className="text-stone font-light space-y-2">
                 <li>• Lamellidens marginalis</li>
                 <li>• Lamellidens corrianus</li>
                 <li>• Parreysia corrugata</li>
               </ul>
             </div>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">Cultural Heritage</span>
            <h2 className="font-serif text-4xl text-forest mb-8 italic">Historical Value</h2>
            <p className="text-stone font-light leading-relaxed text-lg mb-8">
              Pearls hold profound cultural resonance in the Indian subcontinent, referenced as symbols of purity and cosmic balance in ancient texts including the Rig Veda, Ramayana, and Mahabharata.
            </p>
            <p className="text-stone font-light leading-relaxed text-lg">
              Today, BIOZATRA bridges this ancient heritage with modern, science-backed cultured pearl techniques, preserving cultural value while ensuring scalable, sustainable production.
            </p>
            
            <div className="mt-12">
               <img src={pearlImage2} alt="Mussel Handling" className="w-full h-48 object-cover border border-stone/20 grayscale opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Development Framework */}
      <section className="py-32 px-12 bg-deepblue text-river">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">System Flow</span>
          <h2 className="font-serif text-4xl italic mb-16">Development Framework</h2>
          
          <div className="flex flex-col items-center gap-6">
            {BIOECONOMY_FLOW.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center w-full max-w-sm">
                <div className="w-full border border-river/30 p-6 font-serif text-xl tracking-wide flex items-center justify-center text-center">
                  {step}
                </div>
                {idx < BIOECONOMY_FLOW.length - 1 && (
                  <ArrowDown className="text-gold w-6 h-6 my-4 opacity-70" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Activities & Commercial */}
      <section className="py-32 px-12 bg-river">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">Execution Layer</span>
            <h2 className="font-serif text-4xl text-forest mb-8 italic">Current Activities</h2>
            <ul className="space-y-6">
              {['Pearl cultivation pilots', 'Farmer engagement', 'Capacity building', 'Market development'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-stone font-light text-lg pb-4 border-b border-stone/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">Value Creation</span>
            <h2 className="font-serif text-4xl text-forest mb-8 italic">Commercial Opportunity</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COMMERCIAL_OPPS.map((opp, idx) => (
                <div key={idx} className="bg-white p-6 border border-stone/10 shadow-sm hover:border-gold/30 transition-colors">
                  <h4 className="font-serif text-xl text-forest mb-2">{opp.title}</h4>
                  <p className="text-stone font-light text-sm leading-relaxed">{opp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development & Partnerships */}
      <section className="py-32 px-12 bg-stone/5 border-t border-stone/10">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">Ecosystem Expansion</span>
          <h2 className="font-serif text-4xl text-forest mb-16 italic">Development Opportunities</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-24">
            {OPPORTUNITIES.map((opp, idx) => (
              <span key={idx} className="px-6 py-3 border border-stone/20 text-forest font-serif text-lg bg-white shadow-sm hover:border-forest/40 transition-colors cursor-default">
                {opp}
              </span>
            ))}
          </div>

          <h2 className="font-serif text-4xl text-forest mb-12 italic">Partnership Opportunities</h2>
          <p className="text-stone text-lg font-light mb-10 max-w-2xl mx-auto">We are actively seeking strategic collaboration to scale operations, technology, and market channels:</p>
          <div className="flex flex-wrap justify-center gap-6">
            {PARTNERS.map((partner, idx) => (
              <span key={idx} className="text-forest tracking-wider uppercase text-sm font-bold flex items-center gap-3">
                {partner} {idx < PARTNERS.length - 1 && <span className="text-stone/30">|</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Vision */}
      <section className="py-32 px-12 bg-forest text-center text-river cursor-default">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-12">
            Positioning Northeast India as an emerging freshwater pearl cultivation ecosystem built on sustainability, innovation and long-term value creation.
          </h2>
          <Link to="/inquiry" className="inline-block bg-gold text-forest px-10 py-5 text-[11px] uppercase tracking-widest font-bold hover:bg-river transition-colors">
            Contact BIOZATRA
          </Link>
        </div>
      </section>
      
    </div>
  );
}
