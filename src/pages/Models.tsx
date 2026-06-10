import { motion } from 'motion/react';
import { Check, Activity, Leaf, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroImage from '../assets/images/hero_pearl_lake_1780939705649.png';

const TABLE_ROWS = [
  { feature: "Operational Role", tfs: "Passive", ifp: "Active" },
  { feature: "Pond Ownership", tfs: "Shared participation", ifp: "Owned / Leased by Farmer" },
  { feature: "Daily Management", tfs: "Managed by BIOZATRA", ifp: "Managed by Farmer" },
  { feature: "Technical Advisory", tfs: "Included fully", ifp: "Structured guidance provided" },
  { feature: "Harvesting Support", tfs: "Managed by BIOZATRA", ifp: "Assisted by BIOZATRA" },
  { feature: "Market Linkage", tfs: "Directly handled", ifp: "Directly handled" },
];

export default function Models() {
  return (
    <div className="flex flex-col w-full bg-river">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div 
            className="w-full h-full bg-cover bg-center object-cover"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-deepblue/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-river via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl px-12 mx-auto w-full text-center mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl md:text-6xl text-river leading-[1.1] mb-6"
          >
            Two Pathways To Participate In <br/>
            <span className="italic text-gold">Freshwater Pearl Cultivation</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-lg text-river/80 font-light"
          >
            Structured models designed for clarity, resilience, and balanced value creation.
          </motion.p>
        </div>
      </section>

      {/* Models Detailed */}
      <section className="px-12 py-32 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          
          {/* TFS Model */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 lg:p-16 border border-stone/20 flex flex-col h-full shadow-sm"
          >
            <Activity className="w-8 h-8 text-gold mb-8" strokeWidth={1} />
            <span className="text-[10px] uppercase tracking-widest font-bold text-stone mb-4 block">Passive Participation</span>
            <h2 className="font-serif text-4xl text-forest mb-8 italic">Turnkey Farm Sharing (TFS)</h2>
            <p className="text-stone font-light leading-relaxed mb-12 h-20">
              A passive operational structure where we deploy and manage the cultivation framework transparently from stocking to harvest.
            </p>
            
            <div className="flex-1 mb-12">
              <h4 className="font-serif text-xl mb-6 text-forest">Operational Focus</h4>
              <ul className="space-y-4">
                {[
                  "Shared farm participation",
                  "BIOZATRA-managed operations",
                  "Stocking to harvest control",
                  "Continuous environmental monitoring",
                  "Complete harvest support",
                  "Guaranteed market linkage"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="font-light text-stone">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto bg-river/50 p-6 border-l-2 border-gold mb-10">
              <p className="font-serif text-xl text-forest italic">You Participate. We Manage. You Grow.</p>
            </div>
            
            <Link to="/inquiry" className="w-full py-4 border border-forest text-forest hover:bg-forest hover:text-river transition-colors uppercase tracking-widest text-[11px] font-bold text-center">
              Inquire About TFS
            </Link>
          </motion.div>

          {/* IFP Model */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-forest text-river p-12 lg:p-16 border border-stone/20 flex flex-col h-full"
          >
            <Leaf className="w-8 h-8 text-gold mb-8" strokeWidth={1} />
            <span className="text-[10px] uppercase tracking-widest font-bold text-gold/80 mb-4 block">Active Participation</span>
            <h2 className="font-serif text-4xl mb-8 italic text-river">Independent Farm Project (IFP)</h2>
            <p className="text-river/80 font-light leading-relaxed mb-12 h-20">
              A collaborative structure blending your pond resources with our scientific expertise and advisory framework.
            </p>
            
            <div className="flex-1 mb-12">
              <h4 className="font-serif text-xl mb-6 text-gold">Operational Focus</h4>
              <ul className="space-y-4">
                {[
                  "Pond ownership or lease requirements",
                  "Farmer-operated daily model",
                  "Rigorous technical support",
                  "Periodic quality monitoring",
                  "Professional advisory services",
                  "Guaranteed market linkage"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="font-light text-river/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto bg-deepblue/50 p-6 border-l-2 border-gold mb-10">
              <p className="font-serif text-xl text-river italic">You Manage. We Guide. You Thrive.</p>
            </div>
            
            <Link to="/inquiry" className="w-full py-4 bg-gold text-forest hover:bg-river hover:text-forest transition-colors uppercase tracking-widest text-[11px] font-bold text-center">
              Inquire About IFP
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 px-12 bg-white border-y border-stone/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-forest italic">Side-By-Side Comparison</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-forest">
                  <th className="py-6 px-4 font-serif text-xl text-forest w-1/3">Criteria</th>
                  <th className="py-6 px-4 font-serif text-xl text-forest text-center w-1/3">TFS Model</th>
                  <th className="py-6 px-4 font-serif text-xl text-forest text-center w-1/3">IFP Model</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row, idx) => (
                  <tr key={idx} className="border-b border-stone/20 hover:bg-river/50 transition-colors">
                    <td className="py-6 px-4 font-medium text-stone text-sm tracking-wide uppercase">{row.feature}</td>
                    <td className="py-6 px-4 text-forest font-light text-center">{row.tfs}</td>
                    <td className="py-6 px-4 text-forest font-light text-center">{row.ifp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Risk Transparency */}
      <section className="px-12 py-32 bg-stone/5 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <AlertCircle className="w-10 h-10 text-gold mb-8" strokeWidth={1} />
          <h2 className="font-serif text-3xl text-forest mb-8 italic">Risk Transparency</h2>
          <p className="text-stone font-light leading-relaxed text-lg mb-8">
            Freshwater pearl cultivation is biologically dependent and subject to environmental variables, cultivation quality, mussel health and grading variability.
          </p>
          <p className="text-stone font-light leading-relaxed text-lg">
            BIOZATRA emphasizes realistic expectations, operational transparency and responsible participation.
          </p>
        </div>
      </section>

    </div>
  );
}
