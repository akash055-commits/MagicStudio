import React, { useState, useEffect } from 'react';
import { 
  Target, 
  BarChart3, 
  Palette, 
  Globe, 
  AlertTriangle, 
  Rocket, 
  RefreshCw, 
  Settings, 
  ChevronRight, 
  ChevronLeft,
  Layers,
  Clock,
  Zap,
  PieChart,
  ShieldCheck,
  Search,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Activity,
  User,
  Briefcase,
  Camera,
  Heart,
  Building2,
  Flag,
  Filter,
  Repeat,
  Database,
  LayoutDashboard
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const FrameWrapper = ({ children, title, index, total }: { children: React.ReactNode, title: string, index: number, total: number, key?: any }) => (
  <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">
    <div className="w-full max-w-6xl flex flex-col gap-4">
      <div className="flex items-center justify-between text-slate-500 text-xs font-mono uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <span className="bg-primary/20 text-primary px-2 py-0.5 rounded">Frame {index + 1}</span>
          <span>{title}</span>
        </div>
        <div>{index + 1} / {total}</div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-card border border-slate-800 rounded-2xl shadow-2xl overflow-hidden min-h-[70vh] flex flex-col"
      >
        {children}
      </motion.div>
    </div>
  </div>
);

const Card = ({ children, className = "", title, icon: Icon, variant = 'default' }: { children: React.ReactNode, className?: string, title?: string, icon?: any, variant?: 'default' | 'warning' | 'accent', key?: any }) => {
  const borderColors = {
    default: 'border-slate-800',
    warning: 'border-warning/30',
    accent: 'border-accent/30'
  };
  
  const iconColors = {
    default: 'text-primary',
    warning: 'text-warning',
    accent: 'text-accent'
  };

  return (
    <div className={`bg-slate-900/50 border ${borderColors[variant]} rounded-xl p-6 ${className}`}>
      {title && (
        <div className="flex items-center gap-3 mb-4">
          {Icon && <Icon size={20} className={iconColors[variant]} />}
          <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">{title}</h3>
        </div>
      )}
      {children}
    </div>
  );
};

// --- Frames ---

const Frame1Cover = () => (
  <div className="flex-1 flex flex-col items-center justify-center text-center p-12 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]" />
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="z-10"
    >
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
          <Zap className="text-white" size={24} />
        </div>
        <span className="text-2xl font-bold tracking-tighter">Magic Studio</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
        Scaling Paid Acquisition <br /> to $10M/month
      </h1>
      <p className="text-xl text-slate-400 font-light mb-12 max-w-2xl mx-auto">
        A 90-Day System for Predictable Growth & Creative Velocity
      </p>
      
      <div className="flex items-center gap-8 text-sm font-mono text-slate-500">
        <div className="flex flex-col items-center gap-2">
          <BarChart3 size={20} />
          <span>Spend</span>
        </div>
        <ArrowRight size={16} />
        <div className="flex flex-col items-center gap-2">
          <TrendingUp size={20} />
          <span>Revenue</span>
        </div>
        <ArrowRight size={16} />
        <div className="flex flex-col items-center gap-2 text-accent">
          <ShieldCheck size={20} />
          <span>Predictability</span>
        </div>
      </div>
    </motion.div>
  </div>
);

const Frame2Problem = () => (
  <div className="flex-1 p-12 flex flex-col justify-center">
    <h2 className="text-3xl font-bold mb-12">The Scaling Bottleneck</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Scale Challenge" icon={Target}>
        <div className="text-4xl font-bold text-white mb-2">$1.5M <span className="text-slate-500 text-xl">→</span> $10M</div>
        <p className="text-slate-400 text-sm">Monthly ad spend target. Requires a 6.6x increase in volume while maintaining efficiency.</p>
      </Card>
      <Card title="Risk" icon={AlertTriangle} variant="warning">
        <div className="text-xl font-bold text-white mb-2">CAC Inflation + Fatigue</div>
        <p className="text-slate-400 text-sm">Diminishing returns as we move up the awareness curve and creative assets burn out faster.</p>
      </Card>
      <Card title="Expectation" icon={ShieldCheck} variant="accent">
        <div className="text-xl font-bold text-white mb-2">Predictable Revenue</div>
        <p className="text-slate-400 text-sm">Moving away from "lucky hits" to a systemized engine that produces ROI on demand.</p>
      </Card>
    </div>
  </div>
);

const Frame3Philosophy = () => (
  <div className="flex-1 p-12 flex flex-col items-center justify-center">
    <h2 className="text-3xl font-bold mb-16 text-center">Core Philosophy</h2>
    <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
      {/* Triangle Visual */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] h-[80%] border-2 border-slate-800 rotate-45 rounded-xl" />
      </div>
      
      <div className="absolute top-0 flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center">
          <Palette className="text-primary" size={32} />
        </div>
        <div className="text-center">
          <div className="font-bold text-lg">Creative Velocity</div>
          <div className="text-slate-500 text-sm">The fuel for scale</div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-accent/10 border border-accent/30 rounded-full flex items-center justify-center">
          <Search className="text-accent" size={32} />
        </div>
        <div className="text-center">
          <div className="font-bold text-lg">Attribution Clarity</div>
          <div className="text-slate-500 text-sm">The truth of performance</div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-warning/10 border border-warning/30 rounded-full flex items-center justify-center">
          <Layers className="text-warning" size={32} />
        </div>
        <div className="text-center">
          <div className="font-bold text-lg">Channel Diversification</div>
          <div className="text-slate-500 text-sm">Risk control & stability</div>
        </div>
      </div>
    </div>
    <div className="mt-16 text-center">
      <div className="text-2xl font-light text-slate-400 italic">
        "Predictability = <span className="text-white font-semibold">System</span>, not campaigns"
      </div>
    </div>
  </div>
);

const Frame4Business = () => (
  <div className="flex-1 p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
    <div>
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <User className="text-primary" /> Customer Segments
      </h2>
      <div className="space-y-4">
        {[
          { icon: Briefcase, title: "Job Seekers", desc: "LinkedIn optimization, resume updates" },
          { icon: User, title: "Professionals", desc: "Corporate branding, executive presence" },
          { icon: Camera, title: "Creators", desc: "Personal branding, social media consistency" },
          { icon: Heart, title: "Social/Dating", desc: "High-quality lifestyle-adjacent portraits" },
          { icon: Building2, title: "Enterprise", desc: "Bulk headshots for teams (Future Scale)" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
              <item.icon size={20} className="text-slate-400" />
            </div>
            <div>
              <div className="font-semibold text-slate-200">{item.title}</div>
              <div className="text-xs text-slate-500">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <Globe className="text-primary" /> Geography Tiers
      </h2>
      <div className="space-y-6">
        {[
          { tier: "Tier 1", regions: "US, UK, Canada", color: "bg-primary" },
          { tier: "Tier 2", regions: "EU, Australia", color: "bg-indigo-400" },
          { tier: "Tier 3", regions: "India, SEA", color: "bg-slate-600" }
        ].map((item, i) => (
          <div key={i} className="relative">
            <div className="flex justify-between mb-2">
              <span className="font-bold text-slate-300">{item.tier}</span>
              <span className="text-slate-500 text-sm">{item.regions}</span>
            </div>
            <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${100 - (i * 30)}%` }}
                className={`h-full ${item.color}`}
              />
            </div>
          </div>
        ))}
        <p className="text-sm text-slate-500 mt-8 italic">
          Scaling requires localized creative for Tier 2 and Tier 3 to maintain CAC efficiency.
        </p>
      </div>
    </div>
  </div>
);

const Frame5Risks = () => (
  <div className="flex-1 p-12 flex flex-col justify-center">
    <h2 className="text-3xl font-bold mb-12">Scale Risks</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: "Creative Fatigue", desc: "High spend burns through hooks and visuals in < 14 days.", icon: Palette },
        { title: "Attribution Noise", desc: "Platform reporting becomes unreliable at high volumes.", icon: Activity },
        { title: "Channel Dependency", desc: "Over-reliance on Meta (60%) creates single-point failure.", icon: Layers },
        { title: "CAC Inflation", desc: "Auction competition increases as we scale into broader audiences.", icon: TrendingUp }
      ].map((risk, i) => (
        <Card key={i} title={risk.title} icon={risk.icon} variant="warning">
          <p className="text-slate-400 text-sm">{risk.desc}</p>
        </Card>
      ))}
    </div>
    <div className="mt-16 p-6 border border-warning/20 bg-warning/5 rounded-xl text-center">
      <div className="text-warning font-semibold uppercase tracking-widest text-xs mb-2">The Operator's Warning</div>
      <div className="text-xl font-light">"Scaling without systems = <span className="text-white font-bold">unstable revenue</span>"</div>
    </div>
  </div>
);

const Frame6Architecture = () => (
  <div className="flex-1 p-12 flex flex-col items-center justify-center">
    <h2 className="text-3xl font-bold mb-12">Growth System Architecture</h2>
    <div className="w-full max-w-5xl relative">
      <div className="flex flex-wrap justify-center gap-8 items-center">
        {[
          { icon: Palette, label: "Creative Engine" },
          { icon: Globe, label: "Channels" },
          { icon: Database, label: "Data" },
          { icon: PieChart, label: "Budget Allocation" },
          { icon: TrendingUp, label: "Revenue" }
        ].map((step, i, arr) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
                <step.icon size={32} className="text-primary" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{step.label}</span>
            </div>
            {i < arr.length - 1 && (
              <ChevronRight className="text-slate-700 hidden md:block" />
            )}
          </React.Fragment>
        ))}
      </div>
      
      {/* Feedback Loop */}
      <div className="mt-12 flex justify-center">
        <div className="relative p-4 border-2 border-dashed border-slate-800 rounded-full flex items-center gap-3">
          <RefreshCw size={16} className="text-accent animate-spin-slow" />
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Continuous Feedback Loop</span>
        </div>
      </div>
      
      {/* Connecting line back to start */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-12 border-b-2 border-l-2 border-r-2 border-dashed border-slate-800 rounded-b-3xl" />
    </div>
  </div>
);

const Frame7Timeline = () => (
  <div className="flex-1 p-12 flex flex-col justify-center">
    <h2 className="text-3xl font-bold mb-16">90-Day Scaling Roadmap</h2>
    <div className="relative">
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2" />
      <div className="grid grid-cols-3 gap-12 relative">
        {[
          { day: "Day 1–30", title: "Audit & Immersion", color: "bg-primary", desc: "Fixing the foundation, setting baselines, and identifying bottlenecks." },
          { day: "Day 31–60", title: "Controlled Scaling", color: "bg-indigo-400", desc: "Testing hypotheses, expanding creative velocity, and initial budget lifts." },
          { day: "Day 61–90", title: "Aggressive Scaling", color: "bg-accent", desc: "Full-throttle budget expansion based on stability and diversification." }
        ].map((phase, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className={`w-6 h-6 ${phase.color} rounded-full z-10 mb-6 ring-8 ring-slate-900`} />
            <div className="text-sm font-mono text-slate-500 mb-2">{phase.day}</div>
            <div className="text-xl font-bold text-white mb-4">{phase.title}</div>
            <p className="text-sm text-slate-400 leading-relaxed">{phase.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Frame8Day1 = () => (
  <div className="flex-1 p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
    <div>
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <Clock className="text-primary" /> Day 1–30: Audit & Immersion
      </h2>
      <Card title="Core Actions" className="bg-slate-900/30">
        <ul className="space-y-4">
          {[
            "Account Audit: Structure, bidding, and audience overlap",
            "Creative Audit: Historical winners vs. current fatigue",
            "Funnel Analysis: Landing page conversion & drop-offs",
            "Attribution Setup: MMM / Incrementality baselines"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </Card>
    </div>
    <div className="flex flex-col justify-center">
      <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Expected Outputs</h3>
      <div className="space-y-4">
        {[
          { title: "Scale Bottleneck Report", icon: AlertTriangle },
          { title: "Baseline Metrics (MER / nCAC)", icon: BarChart3 },
          { title: "Scaling Hypotheses Backlog", icon: RefreshCw }
        ].map((output, i) => (
          <div key={i} className="p-4 border border-slate-800 rounded-xl flex items-center gap-4 bg-slate-900/20">
            <output.icon size={20} className="text-slate-500" />
            <span className="font-semibold">{output.title}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Frame9Day2 = () => (
  <div className="flex-1 p-12 flex flex-col">
    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
      <Zap className="text-indigo-400" /> Day 31–60: Controlled Scaling
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
      <Card title="1. Budget Allocation" icon={PieChart}>
        <div className="space-y-3">
          <div className="flex justify-between text-xs"><span className="text-slate-400">Core (Scale)</span><span className="text-white font-bold">70%</span></div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-primary w-[70%]" /></div>
          <div className="flex justify-between text-xs"><span className="text-slate-400">Testing (Hypothesis)</span><span className="text-white font-bold">20%</span></div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-indigo-400 w-[20%]" /></div>
          <div className="flex justify-between text-xs"><span className="text-slate-400">Exploration (New)</span><span className="text-white font-bold">10%</span></div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-slate-600 w-[10%]" /></div>
        </div>
      </Card>
      <Card title="2. Creative Testing" icon={Palette}>
        <div className="grid grid-cols-2 gap-3">
          {["Hook Testing", "Persona Testing", "Format Testing", "Offer Testing"].map((t, i) => (
            <div key={i} className="p-2 bg-slate-800/50 rounded border border-slate-700 text-xs text-center">{t}</div>
          ))}
        </div>
        <p className="text-[10px] text-slate-500 mt-4 italic">Goal: Identify 2-3 new "Scaleable Winners" per week.</p>
      </Card>
      <Card title="3. Channel Expansion" icon={Globe}>
        <ul className="text-xs space-y-2 text-slate-400">
          <li>• Meta: Broad scaling + Advantage+</li>
          <li>• Google: PMax + Search Intent Capture</li>
          <li>• LinkedIn: High-intent professional targeting</li>
        </ul>
      </Card>
      <Card title="4. Measurement" icon={Activity}>
        <div className="flex items-center gap-4">
          <div className="flex-1 p-3 bg-accent/5 border border-accent/20 rounded-lg text-center">
            <div className="text-[10px] text-accent font-bold uppercase">Incrementality</div>
            <div className="text-sm font-bold">Geo Holdouts</div>
          </div>
          <div className="flex-1 p-3 bg-primary/5 border border-primary/20 rounded-lg text-center">
            <div className="text-[10px] text-primary font-bold uppercase">Attribution</div>
            <div className="text-sm font-bold">MMM Baseline</div>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

const Frame10Day3 = () => (
  <div className="flex-1 p-12 flex flex-col justify-center items-center text-center">
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="max-w-3xl"
    >
      <div className="inline-block px-4 py-1 bg-accent/20 text-accent rounded-full text-xs font-bold uppercase tracking-widest mb-6">
        Phase 3: Aggressive Scaling
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Day 61–90: The Growth Engine</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-12">
        {[
          "Budget scaling based on stability metrics",
          "Creative factory system (10+ assets/week)",
          "Channel diversification (TikTok/YouTube)",
          "Advanced forecasting & LTV modeling"
        ].map((item, i) => (
          <div key={i} className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-3">
            <Rocket size={18} className="text-accent" />
            <span className="text-sm font-medium">{item}</span>
          </div>
        ))}
      </div>
      
      <div className="text-2xl font-light text-slate-400">
        "From campaigns <span className="text-white">→</span> to <span className="text-accent font-bold">systemized growth engine</span>"
      </div>
    </motion.div>
  </div>
);

const Frame11Creative = () => (
  <div className="flex-1 p-12 flex flex-col">
    <h2 className="text-2xl font-bold mb-12 flex items-center gap-3">
      <Palette className="text-primary" /> Creative Engine
    </h2>
    <div className="flex-1 flex flex-col justify-center">
      <div className="flex items-center justify-between max-w-4xl mx-auto w-full relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 -z-10" />
        {[
          { label: "Idea", icon: Search },
          { label: "Production", icon: Settings },
          { label: "Testing", icon: RefreshCw },
          { label: "Scale", icon: TrendingUp },
          { label: "Kill", icon: AlertTriangle }
        ].map((step, i) => (
          <div key={i} className="flex flex-col items-center gap-3 bg-card p-2">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center border border-slate-700 ${i === 3 ? 'bg-accent/20 border-accent/40' : 'bg-slate-800'}`}>
              <step.icon size={24} className={i === 3 ? 'text-accent' : 'text-slate-400'} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{step.label}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl">
          <div className="text-primary font-bold mb-2">High Velocity</div>
          <p className="text-sm text-slate-400">Scaling to $10M requires a constant stream of fresh creative to combat fatigue. We need a "Creative Factory" mindset.</p>
        </div>
        <div className="p-6 bg-accent/5 border border-accent/20 rounded-2xl">
          <div className="text-accent font-bold mb-2">Data-Driven Iteration</div>
          <p className="text-sm text-slate-400">We don't guess. We test hooks, then bodies, then CTAs. Winners are scaled; losers are analyzed and killed.</p>
        </div>
      </div>
    </div>
  </div>
);

const Frame12Budget = () => (
  <div className="flex-1 p-12 flex flex-col items-center justify-center">
    <h2 className="text-3xl font-bold mb-12">Budget Strategy</h2>
    <div className="flex flex-col md:flex-row items-center gap-16">
      <div className="relative w-64 h-64">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#1E293B" strokeWidth="20" />
          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#6366F1" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="75.36" /> {/* 70% */}
          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#818CF8" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="200.96" /> {/* 20% */}
          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#475569" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="226.08" /> {/* 10% */}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <div className="text-3xl font-bold">$10M</div>
          <div className="text-[10px] text-slate-500 uppercase font-bold">Target Spend</div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 bg-primary rounded" />
          <div>
            <div className="font-bold">70% Core Scale</div>
            <div className="text-xs text-slate-500">Proven winners, stable ROAS</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 bg-indigo-400 rounded" />
          <div>
            <div className="font-bold">20% Testing</div>
            <div className="text-xs text-slate-500">New hooks, personas, offers</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 bg-slate-600 rounded" />
          <div>
            <div className="font-bold">10% Exploration</div>
            <div className="text-xs text-slate-500">New channels, moonshots</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Frame13Measurement = () => (
  <div className="flex-1 p-12 flex flex-col justify-center">
    <h2 className="text-3xl font-bold mb-12">Measurement System</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 bg-red-500/20 text-red-500 text-[10px] font-bold uppercase">Avoid</div>
        <div className="text-4xl mb-4 opacity-20">❌</div>
        <h3 className="text-xl font-bold mb-2">Platform ROAS</h3>
        <p className="text-sm text-slate-500">In-platform reporting is often inflated or delayed. Dangerous for scaling decisions.</p>
      </div>
      
      <div className="p-8 bg-slate-900/50 border border-accent/20 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 bg-accent/20 text-accent text-[10px] font-bold uppercase">Primary</div>
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold mb-2">Blended ROAS (MER)</h3>
        <p className="text-sm text-slate-400">Total Revenue / Total Ad Spend. The ultimate truth of business health.</p>
      </div>
      
      <div className="p-8 bg-slate-900/50 border border-primary/20 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 bg-primary/20 text-primary text-[10px] font-bold uppercase">Advanced</div>
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold mb-2">Incrementality</h3>
        <p className="text-sm text-slate-400">Geo-holdout tests to find the true marginal contribution of ad spend.</p>
      </div>
    </div>
  </div>
);

const Frame14Channel = () => (
  <div className="flex-1 p-12 flex flex-col">
    <h2 className="text-2xl font-bold mb-12 flex items-center gap-3">
      <Layers className="text-primary" /> Channel Strategy
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-1 items-center">
      {[
        { name: "Meta", role: "Scale Engine", desc: "Broad targeting, high volume, visual-first.", icon: RefreshCw, color: "text-blue-400" },
        { name: "Google", role: "Intent Capture", desc: "PMax + Search to capture high-intent demand.", icon: Search, color: "text-red-400" },
        { name: "LinkedIn", role: "Premium Segment", desc: "Targeting high-value B2B and executive users.", icon: Briefcase, color: "text-blue-600" },
        { name: "New Channels", role: "Diversification", desc: "TikTok, YouTube, and Influencer whitelisting.", icon: Globe, color: "text-accent" }
      ].map((channel, i) => (
        <div key={i} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col items-center text-center">
          <channel.icon size={32} className={`${channel.color} mb-4`} />
          <div className="text-xl font-bold mb-1">{channel.name}</div>
          <div className="text-xs font-bold uppercase text-slate-500 mb-4 tracking-widest">{channel.role}</div>
          <p className="text-xs text-slate-400 leading-relaxed">{channel.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const Frame15Metrics = () => (
  <div className="flex-1 p-12 flex flex-col justify-center">
    <h2 className="text-3xl font-bold mb-12">Success Metrics</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { title: "CAC Stability", val: "± 10%", desc: "Maintaining efficiency as spend increases 6x.", icon: ShieldCheck },
        { title: "Revenue Predictability", val: "95%", desc: "Variance between forecast and actual performance.", icon: Activity },
        { title: "Creative Win Rate", val: "20%", desc: "Percentage of tested assets that move to Scale phase.", icon: Palette },
        { title: "Channel Contribution", val: "30%+", desc: "Revenue coming from non-Meta channels.", icon: Globe }
      ].map((metric, i) => (
        <div key={i} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex items-center gap-6">
          <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center shrink-0">
            <metric.icon size={28} className="text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">{metric.title}</span>
              <span className="text-accent font-mono font-bold">{metric.val}</span>
            </div>
            <p className="text-sm text-slate-500">{metric.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Frame16Unknowns = () => (
  <div className="flex-1 p-12 flex flex-col justify-center">
    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
      <Search className="text-warning" /> What I would validate early
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card title="Unit Economics" icon={BarChart3}>
        <ul className="space-y-3 text-sm text-slate-400">
          <li>• <span className="text-white">True LTV:</span> Do users come back for team headshots?</li>
          <li>• <span className="text-white">Refund Rates:</span> How does scale impact product satisfaction?</li>
        </ul>
      </Card>
      <Card title="Market Constraints" icon={Globe}>
        <ul className="space-y-3 text-sm text-slate-400">
          <li>• <span className="text-white">Creative Constraints:</span> Can we produce 10+ high-quality assets/week?</li>
          <li>• <span className="text-white">Channel Saturation:</span> At what spend does Meta CAC break?</li>
        </ul>
      </Card>
    </div>
  </div>
);

const Frame17Final = () => (
  <div className="flex-1 p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_70%)]" />
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="z-10"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-12 leading-tight">
        Build a system where: <br />
        <span className="text-primary">Spend</span> <span className="text-slate-600">→</span> <span className="text-white">Predictable Revenue</span> <br />
        <span className="text-slate-600">→</span> <span className="text-accent">Scalable Growth</span>
      </h2>
      
      <div className="flex flex-col items-center gap-4">
        <div className="text-xl font-light text-slate-400">
          "Ownership over execution. Systems over hacks."
        </div>
        <div className="w-24 h-1 bg-slate-800 rounded-full mt-8" />
        <div className="text-xs font-mono text-slate-600 uppercase tracking-[0.3em] mt-4">
          Magic Studio Growth Plan • 2026
        </div>
      </div>
    </motion.div>
  </div>
);

// --- Main App ---

export default function App() {
  const [currentFrame, setCurrentFrame] = useState(0);
  
  const frames = [
    { title: "Cover", component: <Frame1Cover /> },
    { title: "Problem", component: <Frame2Problem /> },
    { title: "Core Philosophy", component: <Frame3Philosophy /> },
    { title: "Business Understanding", component: <Frame4Business /> },
    { title: "Scale Risks", component: <Frame5Risks /> },
    { title: "Architecture", component: <Frame6Architecture /> },
    { title: "90-Day Timeline", component: <Frame7Timeline /> },
    { title: "Day 1–30", component: <Frame8Day1 /> },
    { title: "Day 31–60", component: <Frame9Day2 /> },
    { title: "Day 61–90", component: <Frame10Day3 /> },
    { title: "Creative Engine", component: <Frame11Creative /> },
    { title: "Budget Strategy", component: <Frame12Budget /> },
    { title: "Measurement System", component: <Frame13Measurement /> },
    { title: "Channel Strategy", component: <Frame14Channel /> },
    { title: "Success Metrics", component: <Frame15Metrics /> },
    { title: "Unknown Variables", component: <Frame16Unknowns /> },
    { title: "Final Take", component: <Frame17Final /> },
  ];

  const nextFrame = () => setCurrentFrame((prev) => Math.min(prev + 1, frames.length - 1));
  const prevFrame = () => setCurrentFrame((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextFrame();
      if (e.key === 'ArrowLeft') prevFrame();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="bg-bg text-slate-200 selection:bg-primary/30 min-h-screen">
      {/* Figma-like UI Overlay */}
      <div className="fixed top-6 left-6 z-50 flex items-center gap-4">
        <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur border border-slate-800 p-1 rounded-lg">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <LayoutDashboard size={18} className="text-white" />
          </div>
          <div className="px-2">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter leading-none mb-1">Project</div>
            <div className="text-xs font-bold text-slate-200 leading-none">Magic Studio Scale Plan</div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <button 
          onClick={prevFrame}
          disabled={currentFrame === 0}
          className="w-10 h-10 bg-slate-900/80 backdrop-blur border border-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="bg-slate-900/80 backdrop-blur border border-slate-800 px-4 py-2 rounded-lg text-xs font-mono">
          {currentFrame + 1} / {frames.length}
        </div>
        <button 
          onClick={nextFrame}
          disabled={currentFrame === frames.length - 1}
          className="w-10 h-10 bg-slate-900/80 backdrop-blur border border-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <AnimatePresence mode="wait">
        <FrameWrapper 
          key={currentFrame} 
          title={frames[currentFrame].title} 
          index={currentFrame} 
          total={frames.length}
        >
          {frames[currentFrame].component}
        </FrameWrapper>
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-slate-900 z-50">
        <motion.div 
          initial={false}
          animate={{ width: `${((currentFrame + 1) / frames.length) * 100}%` }}
          className="h-full bg-primary"
        />
      </div>
    </div>
  );
}
