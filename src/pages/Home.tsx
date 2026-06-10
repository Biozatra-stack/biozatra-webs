import { ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import heroImage from '../assets/images/hero_pearl_lake_1780939705649.png';
import northeastImage from '../assets/images/regenerated_image_1780918688172.png';
import pearlImage from '../assets/images/regenerated_image_1780940344449.png';
import communityImage from '../assets/images/community-impact.png';

const CONTENT_PILLARS = [
  {
    title: 'FARM',
    description: 'Responsible ecosystem-based cultivation.',
  },
  {
    title: 'SCIENCE',
    description: 'Research, technical expertise and operational excellence.',
  },
  {
    title: 'VALUE',
    description: 'Long-term economic, ecological and community value creation.',
  }
];

const FOCUS_AREAS = [
  'Freshwater Pearl Cultivation',
  'Ecosystem Development',
  'Farmer Participation',
  'Market Development',
  'Research & Innovation',
  'Circular Bioeconomy'
];

const BIOECONOMY_FLOW = [
  'Farmers & SHGs',
  'Freshwater Pearl Cultivation',
  'Processing & Value Addition',
  'Market Development',
  'Future Bio-Manufacturing Opportunities'
];

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-river">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div 
            className="w-full h-full bg-cover bg-center object-cover"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-deepblue/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-deepblue/90 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl px-12 mx-auto w-full flex flex-col items-start mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl text-river mb-6 leading-[1.1]"
          >
            Cultivating Value <br className="hidden md:block"/> 
            <span className="italic text-gold">From Water</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-lg md:text-xl text-river/90 font-light max-w-2xl leading-relaxed mb-10"
          >
            Building sustainable ecosystems through science, structure, innovation and trust.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-6"
          >
            <Link to="/about" className="bg-gold text-forest px-8 py-4 text-[11px] uppercase tracking-widest font-bold hover:bg-river transition-colors">
              Explore BIOZATRA
            </Link>
            <Link to="/models" className="border border-river/30 text-river px-8 py-4 text-[11px] uppercase tracking-widest font-bold hover:bg-river/10 transition-colors">
              Explore Opportunities
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 px-12 bg-river border-b border-stone/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {CONTENT_PILLARS.map((pillar, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              key={pillar.title} 
              className="flex flex-col border-l border-forest/10 pl-8"
            >
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-forest mb-4 border-b border-stone/10 pb-4 inline-block w-fit">{pillar.title}</h3>
              <p className="font-serif text-2xl text-stone italic italic leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-32 px-12 bg-river border-b border-stone/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">Who We Are</span>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight mb-10 italic">
              A science-led ecosystem development platform focused on sustainable value creation.
            </h2>
            <p className="text-stone text-lg leading-relaxed font-light">
              We operate at the intersection of water, sustainable aquaculture, and regional innovation, transforming freshwater resources into thriving economic opportunities.
            </p>
          </div>
          <div className="relative h-[500px]">
             <img src={communityImage} className="w-full h-full object-cover border border-stone/20 grayscale hover:grayscale-0 transition-duration-700 shadow-sm" alt="Community Workshop" />
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-32 px-12 bg-forest text-river">
        <div className="max-w-7xl mx-auto cursor-default">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">Values</span>
            <h2 className="font-serif text-4xl italic leading-tight">Our Focus Areas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/20 overflow-hidden">
            {FOCUS_AREAS.map((area, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                key={idx} 
                className="p-12 hover:bg-forest/80 bg-forest transition-colors group flex items-center justify-center text-center h-48"
              >
                <h3 className="font-serif text-xl tracking-wide font-light text-river/90 group-hover:text-gold transition-colors">{area}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Initiative */}
      <section className="py-32 px-12 bg-river border-b border-stone/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative h-[600px] bg-stone/5 p-4 border border-stone/20 lg:-order-1 order-2">
            <img 
              src={pearlImage} 
              alt="Freshwater pearl layout"
              className="w-full h-full object-cover object-center border border-stone/20 shadow-sm"
              loading="lazy"
            />
          </div>
          <div className="lg:order-1 order-1">
            <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">Featured Initiative</span>
            <h2 className="font-serif text-4xl text-forest italic mb-8 leading-tight">Freshwater Pearl Cultivation</h2>
            <ul className="space-y-6 mb-12">
              {['Pond-based cultivation', 'Scientific protocols', 'Sustainable aquaculture', 'Community participation', 'Value creation'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-stone font-light text-lg">
                  <span className="w-8 h-[1px] bg-gold/50" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/assam-story" className="inline-flex items-center gap-3 text-[11px] uppercase tracking-widest font-bold text-forest hover:text-gold transition-colors tracking-widest pb-1 border-b border-forest/30">
              Explore Opportunity <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Circular Bioeconomy Vision */}
      <section className="py-32 px-12 bg-river border-b border-stone/20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">System Flow</span>
          <h2 className="font-serif text-4xl text-forest italic mb-16">Circular Bioeconomy Vision</h2>
          
          <div className="flex flex-col items-center gap-4">
            {BIOECONOMY_FLOW.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center w-full max-w-sm">
                <div className="w-full bg-white border border-stone/20 px-8 py-5 shadow-sm text-forest font-serif tracking-wide flex items-center justify-center text-center text-lg">
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

      {/* Why Northeast India */}
      <section className="py-32 px-12 bg-deepblue text-river">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">Regional Advantage</span>
            <h2 className="font-serif text-5xl mb-12 italic">Why Northeast India</h2>
            <div className="space-y-8">
              {[
                'Extensive freshwater resources',
                'Existing fish farming infrastructure',
                'Strong SHG and community networks',
                'Biodiversity advantages',
                'Aquaculture familiarity'
              ].map((item, idx) => (
                <div key={idx} className="relative pl-8 border-l border-river/20">
                  <div className="absolute left-[-4px] top-2.5 w-1.5 h-1.5 bg-gold rounded-full" />
                  <h4 className="font-serif text-xl tracking-wide text-river/90">{item}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-full min-h-[600px] border border-river/10 p-4 bg-river/5">
            <img 
              src={northeastImage} 
              alt="Northeast India Fieldwork" 
              className="w-full h-full object-cover mix-blend-screen opacity-90 grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Participation Models */}
      <section className="py-32 px-12 bg-river border-b border-stone/20">
        <div className="max-w-7xl mx-auto text-center cursor-default">
          <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">Pathways</span>
          <h2 className="font-serif text-4xl text-forest leading-tight mb-16 italic">Participation Models</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-white p-12 border border-stone/20 shadow-sm flex flex-col items-center">
              <h3 className="font-serif text-2xl text-forest mb-4 border-b border-gold/30 pb-4 inline-block">Turnkey Farm Sharing (TFS)</h3>
              <p className="text-stone font-light text-[11px] uppercase tracking-widest font-semibold mt-4">Passive Participation</p>
            </div>
            <div className="bg-white p-12 border border-stone/20 shadow-sm flex flex-col items-center">
              <h3 className="font-serif text-2xl text-forest mb-4 border-b border-gold/30 pb-4 inline-block">Independent Farm Project (IFP)</h3>
              <p className="text-stone font-light text-[11px] uppercase tracking-widest font-semibold mt-4">Active Participation</p>
            </div>
          </div>
          
          <Link to="/models" className="inline-flex items-center gap-3 bg-forest text-river px-10 py-5 text-[11px] uppercase tracking-widest font-bold hover:bg-gold transition-colors">
            View Participation Models <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-12 bg-river text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-forest italic mb-10 leading-tight">
            Let's Build Something Valuable Together
          </h2>
          <Link to="/inquiry" className="inline-block bg-gold text-forest px-10 py-5 text-[11px] uppercase tracking-widest font-bold hover:bg-forest hover:text-river transition-colors">
            Contact BIOZATRA
          </Link>
        </div>
      </section>

    </div>
  );
}
