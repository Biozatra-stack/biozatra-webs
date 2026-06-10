import { ArrowRight, Lightbulb, TrendingUp, Handshake, ShieldCheck, Leaf, Target, Users, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

import heroImage from '../assets/images/hero_pearl_lake_1780939705649.png';
import teamImage from '../assets/images/regenerated_image_1780919303647.jpg';

const VALUES = [
  { title: "Vision", description: "To pioneer sustainable freshwater aquaculture ecosystems.", icon: Target },
  { title: "Innovation", description: "Applying rigorous science to natural ecological processes.", icon: Lightbulb },
  { title: "Collaboration", description: "Building collective intelligence across networks.", icon: Handshake },
  { title: "Integrity", description: "Operating with absolute transparency and trust.", icon: ShieldCheck },
  { title: "Sustainability", description: "Ensuring long-term ecological and economic harmony.", icon: Leaf },
  { title: "Value Creation", description: "Structuring opportunities for scalable market growth.", icon: TrendingUp },
];

export default function About() {
  return (
    <div className="flex flex-col w-full bg-river">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div 
            className="w-full h-full bg-cover bg-center object-cover"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-deepblue/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-deepblue/90 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl px-12 mx-auto w-full text-center mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl text-river leading-[1.1]"
          >
            Rooted In <span className="italic text-gold">Science</span>. <br/>
            Focused On <span className="italic text-gold">Value</span>.
          </motion.h1>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-32 px-12 bg-river text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">Our Vision</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-forest leading-tight italic">
            BIOZATRA seeks to build sustainable ecosystem-based opportunities through science, innovation, participation and value creation.
          </h2>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-32 px-12 bg-forest text-river">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="lg:sticky lg:top-32 mb-12 lg:mb-0">
            <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">Our Philosophy</span>
            <h2 className="font-serif text-4xl italic leading-tight mb-8">Architecting systemic progress through interdisciplinary thinking.</h2>
          </div>
          <div className="space-y-16">
            <div>
              <h3 className="font-serif text-2xl text-gold mb-4 flex items-center gap-4"><BookOpen className="w-5 h-5"/> Science, Technology & Research</h3>
              <p className="text-river/80 font-light leading-relaxed text-lg">We champion deeply research-backed approaches, establishing scientific baselines to cultivate natural aquatic resources sustainably and predictably.</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-gold mb-4 flex items-center gap-4"><Leaf className="w-5 h-5"/> Sustainability & Livelihoods</h3>
              <p className="text-river/80 font-light leading-relaxed text-lg">We believe that true value is cultivated, not extracted. By mapping biological rhythms, we structure models that empower local communities and secure long-term livelihoods.</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-gold mb-4 flex items-center gap-4"><Handshake className="w-5 h-5"/> Partnerships & Long-Term Impact</h3>
              <p className="text-river/80 font-light leading-relaxed text-lg">Isolated interventions yield isolated outcomes. We build platforms for ecosystem collaboration that align local intelligence with expansive market opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Values, Impact Grid */}
      <section className="py-32 px-12 bg-river border-b border-stone/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">Foundational Pillars</span>
            <h2 className="font-serif text-4xl text-forest italic">Vision • Values • Impact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {VALUES.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white p-10 border border-stone/10 shadow-sm hover:-translate-y-1 transition-transform duration-500 group">
                  <Icon className="w-8 h-8 text-gold mb-6" strokeWidth={1} />
                  <h3 className="font-serif text-3xl text-forest mb-4 group-hover:italic transition-all">{value.title}</h3>
                  <p className="text-stone font-light leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-32 px-12 bg-deepblue text-river">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">Our Approach</span>
          <h2 className="font-serif text-4xl mb-16 italic">Connecting The Ecosystem</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['Science', 'Environment', 'Communities', 'Markets', 'Innovation', 'Value Creation'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 md:gap-6">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="font-serif text-2xl md:text-3xl tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborative Ecosystems */}
      <section className="py-32 px-12 bg-river">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative h-[600px] border border-stone/20 bg-stone/5 p-4">
            <img 
              src={teamImage} 
              alt="Ecosystem Collaboration" 
              className="w-full h-full object-cover shadow-sm grayscale opacity-90 hover:grayscale-0 transition-all duration-1000"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">Leadership & Strategy</span>
            <h2 className="font-serif text-5xl text-forest mb-12 italic">Collaborative Ecosystems</h2>
            <div className="space-y-10">
              {[
                { title: "Founding Team", desc: "Driving the strategic vision, operational excellence, and core science-led philosophy." },
                { title: "Advisory Networks", desc: "Academic and scientific experts ensuring rigorous adherence to environmental protocols." },
                { title: "Venture Associates", desc: "Forward-thinking partners aligning capital with structured, sustainable impact models." },
                { title: "Strategic Partnerships", desc: "Institutional and regional alliances designed to scale market access and infrastructure." }
              ].map((item, idx) => (
                <div key={idx} className="pl-6 border-l border-gold/30">
                  <h4 className="font-serif text-2xl text-forest mb-2">{item.title}</h4>
                  <p className="text-stone font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
