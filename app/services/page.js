'use client';

import Link from 'next/link';
import { 
  TrendingUp, DollarSign, Award, Layers, Sparkles, ArrowRight 
} from 'lucide-react';

export default function ServicesHub() {
  const serviceCategories = [
    {
      title: 'Financial Services',
      path: '/services/financial-services',
      icon: <Layers className="w-8 h-8 text-primary" />,
      desc: 'Expert support across custom SIP products, debt fixed-income securities, and comprehensive tax-saving options.'
    },
    {
      title: 'Mutual Fund Calculator',
      path: '/services/mutual-fund-calculator',
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      desc: 'Calculate growth potential and evaluate compounding returns over various timeframes and investment values.'
    },
    {
      title: 'Product Distribution',
      path: '/services/product-distribution',
      icon: <Award className="w-8 h-8 text-primary" />,
      desc: 'Structured product portfolios from AAA rated corporate fixed deposits to term lifecycle insurance schemes.'
    },
    {
      title: 'Systematic Withdrawal Plan (SWP)',
      path: '/services/swp',
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      desc: 'Ensure structured tax-efficient monthly income cash flows post-retirement while securing core capital pools.'
    },
    {
      title: 'Wealth Management',
      path: '/services/wealth-management',
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      desc: 'Curated asset allocation and private advisory models designed for high-net-worth families and corporate founders.'
    }
  ];

  return (
    <div className="relative pt-28 pb-16 overflow-hidden bg-white text-slate-900">
      <div className="absolute inset-0 bg-hero-gradient opacity-80 z-0"></div>

      {/* Page Hero */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Services Directory</span>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-slate-900">
            Our Service <span className="text-gradient">Desks</span>
          </h1>
          <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
            Select one of our specialized desks to explore our customized financial models, simulators, and advisory resources.
          </p>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, idx) => (
              <div 
                key={idx}
                className="glass-panel p-8 rounded-3xl flex flex-col justify-between hover:scale-[1.02]"
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 font-display">{service.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{service.desc}</p>
                </div>

                <div className="pt-8">
                  <Link
                    href={service.path}
                    className="flex items-center justify-between text-xs text-primary font-bold hover:text-slate-800 transition-colors"
                  >
                    <span>Launch Desk</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
