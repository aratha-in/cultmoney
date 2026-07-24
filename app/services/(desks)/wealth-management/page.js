'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  TrendingUp, BadgeDollarSign, ShieldCheck, ReceiptText,
  ShieldAlert, HeartHandshake, BriefcaseBusiness, Building2,
  ArrowRight, Phone, CheckCircle2
} from 'lucide-react';

/* ─── Animation Variants ─────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function WealthManagement() {
  /* ─── Services Data ─────────────────────────────── */
  const services = [
    {
      title: 'Personalized Investment Management',
      Icon: TrendingUp,
      points: [
        'Customized Portfolios: We tailor your investment portfolio based on your risk tolerance, investment objectives, and financial aspirations.',
        'Diversification Strategies: Diversifying investments across various asset classes to minimize risk and maximize returns.',
        'Ongoing Monitoring and Adjustments: Regular reviews and portfolio rebalancing to respond to market changes and evolving goals.'
      ]
    },
    {
      title: 'Comprehensive Financial Planning',
      Icon: BadgeDollarSign,
      points: [
        'Goal-Oriented Planning: Developing financial plans that align with your short-term and long-term financial goals and aspirations.',
        'Cash Flow Management: Strategies to manage your income, expenses, savings, and investments effectively.',
        'Retirement Planning: Ensuring a secure and comfortable retirement through strategic retirement savings and investment planning.'
      ]
    },
    {
      title: 'Estate and Legacy Planning',
      Icon: ShieldCheck,
      points: [
        'Wealth Transfer Strategies: Planning strategies for transferring wealth to future generations while minimizing taxes.',
        'Trust and Will Planning: Guidance on setting up trusts and wills to protect assets and ensure proper inheritance distribution.',
        'Family Succession Planning: Planning for family businesses and family wealth transitions effectively.'
      ]
    },
    {
      title: 'Tax Optimization',
      Icon: ReceiptText,
      points: [
        'Tax-Efficient Investing: Strategies to reduce your overall tax liabilities through efficient investments.',
        'Income and Capital Gains Planning: Advice on managing income and capital gains taxation efficiently.',
        'Charitable Giving Strategies: Structuring charitable contributions to maximize tax advantages.'
      ]
    },
    {
      title: 'Risk Management and Insurance',
      Icon: ShieldAlert,
      points: [
        'Insurance Solutions: Recommendations for suitable insurance products to protect your wealth and secure financial stability.',
        'Asset Protection Planning: Strategies to safeguard your assets from unforeseen financial risks.'
      ]
    },
    {
      title: 'Philanthropy and Charitable Giving',
      Icon: HeartHandshake,
      points: [
        'Charitable Strategies: Advice on charitable giving plans and structures to maximize social and tax benefits.',
        'Donor-Advised Funds: Assisting with donor-advised funds to create effective charitable giving programs.'
      ]
    },
    {
      title: 'Business Financial Services',
      Icon: BriefcaseBusiness,
      points: [
        'Business Succession Planning: Developing strategies for smooth business ownership and management transitions.',
        'Business Valuation Services: Accurate business valuation for mergers, acquisitions, and succession planning.',
        'Employee Benefits Planning: Designing and managing employee benefit programs and retirement plans.'
      ]
    },
    {
      title: 'Family Office Services',
      Icon: Building2,
      points: [
        'Multi-Generational Planning: Addressing the financial needs of multiple generations within a family.',
        'Family Governance: Assisting with family governance structures to maintain wealth and values for future generations.'
      ]
    }
  ];

  /* ─── Why Choose Us Data ─────────────────────────── */
  const whyChooseUs = [
    {
      title: 'Tailored Solutions',
      desc: 'We offer personalized wealth management strategies designed to meet your unique financial goals and objectives.'
    },
    {
      title: 'Expert Advisors',
      desc: 'Our team of experienced professionals provides expert guidance and strategic financial recommendations.'
    },
    {
      title: 'Holistic Approach',
      desc: 'We address all aspects of wealth management including investments, tax planning, retirement planning, and estate planning.'
    },
    {
      title: 'Commitment to Excellence',
      desc: 'We are committed to delivering exceptional financial services with integrity, professionalism, and long-term client relationships.'
    }
  ];

  /* ─── Benefits Data ───────────────────────────────── */
  const benefits = [
    {
      title: 'Personalized Wealth Strategies',
      desc: 'Customized investment and financial planning solutions designed around your individual goals and aspirations.'
    },
    {
      title: 'Professional Expertise',
      desc: 'Experienced financial advisors providing expert guidance and strategic recommendations.'
    },
    {
      title: 'Comprehensive Services',
      desc: 'A full suite of financial services covering investments, retirement, tax optimization, estate planning, and insurance.'
    },
    {
      title: 'Long-Term Financial Security',
      desc: 'Helping clients build sustainable wealth and achieve financial independence.'
    }
  ];

  return (
    <main className="font-sans text-slate-900 antialiased bg-white overflow-x-hidden">

      {/* ══════════════════════════════
          1. HERO SECTION
      ══════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden z-10 flex items-center justify-center bg-white border-b border-slate-100 pt-28">
        {/* Background watermark image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury wealth management consultation office"
            fill
            sizes="100vw"
            className="object-cover opacity-[0.07]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-[#F8FAF8]/98 to-white backdrop-blur-[1px]" />
        </div>

        {/* Floating background blur orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-[#4CAF50]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#06327B]/8 blur-3xl pointer-events-none" />

        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(15,23,42,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div className="space-y-8" initial="hidden" animate="show" variants={stagger}>
            
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#4CAF50] bg-[#4CAF50]/8 border border-[#4CAF50]/20 px-5 py-2.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
              SAHIANI FINANCIAL SERVICES
            </motion.span>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-semibold font-display tracking-tight text-slate-950 leading-[1.05]">
              Wealth{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                Management
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
              We provide a wide range of wealth management services designed to help individuals, families, and businesses grow, protect, and preserve their wealth through strategic financial planning and investment advisory.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 pt-2">
              <a href="#services" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4CAF50] to-[#06327B] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300">
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-full hover:border-[#4CAF50] hover:text-[#4CAF50] hover:bg-[#4CAF50]/5 transition-all duration-300">
                Book Consultation
              </Link>
            </motion.div>

            {/* Floating glass badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 pt-4">
              {['Trusted Wealth Advisors', 'Financial Planning Experts', 'Long-Term Wealth Strategies'].map(badge => (
                <span key={badge} className="text-xs font-semibold text-slate-600 bg-white border border-slate-200/70 shadow-sm px-5 py-2.5 rounded-full">
                  ✦ {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          2. WEALTH MANAGEMENT OVERVIEW
      ══════════════════════════════ */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div className="space-y-6" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">Overview</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">
              Wealth Management –{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                CultMoney Financial Services
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-600 leading-relaxed">
              At CultMoney Financial Services, we understand that managing and growing wealth is a multifaceted process that requires personalized strategic approaches. Our wealth management services are designed to cater to high-net-worth individuals, families, and businesses, ensuring that your financial goals are achieved through intelligent investment planning and financial guidance.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          3. OUR SERVICES GRID
      ══════════════════════════════ */}
      <section id="services" className="py-24 bg-gradient-to-b from-[#F8FAF8] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16 space-y-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">Custom Advisory</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-semibold text-slate-900">
              Our Wealth Management{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">Services Include</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {services.map((s, i) => {
              const Icon = s.Icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                  className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200/80 transition-all duration-400 overflow-hidden flex flex-col justify-between"
                >
                  {/* Top gradient highlight strip */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#4CAF50] to-[#06327B] rounded-t-3xl" />
                  
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4CAF50]/8 to-[#06327B]/8 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-[#06327B]" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-5 font-display leading-tight tracking-tight min-h-[56px] flex items-center">{s.title}</h3>
                    
                    <ul className="space-y-3.5 text-sm text-slate-600 leading-relaxed font-medium">
                      {s.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] shrink-0 mt-2" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          4. WHY CHOOSE US
      ══════════════════════════════ */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16 space-y-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">Commitment to Growth</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-semibold text-slate-900">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">CultMoney Financial Services</span>
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left – Premium Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                  alt="Premium business advisory and financial consultation meeting"
                  width={1200}
                  height={800}
                  className="w-full h-[540px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/40 via-transparent to-transparent" />
                
                {/* Visual Accent Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-white/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-950">Expert Asset Protection</p>
                      <p className="text-xs text-slate-500 mt-0.5">Customized strategies for wealth transition</p>
                    </div>
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#4CAF50] to-[#06327B] flex items-center justify-center text-white">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right – Feature Cards */}
            <motion.div
              className="grid sm:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
            >
              {whyChooseUs.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-100/70 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF50] mb-4" />
                  <h3 className="text-lg font-bold text-slate-950 mb-2 font-display">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          5. UNDERSTANDING WEALTH MANAGEMENT
      ══════════════════════════════ */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div className="space-y-8" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">Financial Intelligence</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">
              Understanding{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">Wealth Management</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-700 leading-relaxed font-medium">
              Wealth management is a comprehensive financial advisory service that addresses the needs of affluent individuals and families. It encompasses a broad range of services, including investment management, tax planning, estate planning, retirement planning, risk management, and financial consulting. The primary objective of wealth management is to help clients preserve, grow, and transfer wealth efficiently.
            </motion.p>
            <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-700 leading-relaxed font-medium">
              The importance of wealth management has grown significantly in recent years as individuals seek professional guidance to navigate complex financial markets and investment opportunities. Effective wealth management involves a disciplined approach to financial planning, portfolio diversification, and risk management to achieve sustainable long-term growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          6. ROLE OF SAHIANI FINANCIAL SERVICES
      ══════════════════════════════ */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div className="space-y-8" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">Our Responsibility</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">
              The Role of{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">CultMoney Financial Services</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 text-left pt-6">
              <motion.div variants={fadeUp} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <p className="text-base text-slate-700 leading-relaxed font-medium">
                  CultMoney Financial Services has established itself as a leader in wealth management by providing personalized financial planning solutions that align with each client’s unique financial circumstances and aspirations. CultMoney Financial Services specializes in investment advisory, retirement planning, estate planning, and tax optimization strategies.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <p className="text-base text-slate-700 leading-relaxed font-medium">
                  Our dedicated advisors work closely with clients to create customized financial roadmaps designed to achieve both short-term and long-term financial success. We emphasize transparency, trust, and strategic financial management to ensure clients receive the highest standard of financial advisory services.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          7. BENEFITS SECTION
      ══════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-[#F8FAF8] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16 space-y-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">Structural Value</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-semibold text-slate-900">
              Benefits of Choosing{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">CultMoney Financial Services</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-400 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#4CAF50] to-[#06327B] rounded-t-3xl" />
                <div className="w-10 h-10 rounded-xl bg-[#4CAF50]/8 flex items-center justify-center mb-6 text-[#4CAF50] font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 font-display">{benefit.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          8. GETTING STARTED SECTION
      ══════════════════════════════ */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div className="space-y-8" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">Initiate Journey</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">
              Getting Started with{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">CultMoney Financial Services</span>
            </motion.h2>
            <div className="space-y-6 text-slate-700 leading-relaxed font-medium">
              <motion.p variants={fadeUp} className="text-base md:text-lg">
                Beginning your wealth management journey with CultMoney Financial Services starts with understanding your financial goals and aspirations. Our advisors work closely with you to evaluate your financial situation, investment preferences, and long-term objectives to create a tailored financial strategy.
              </motion.p>
              <motion.p variants={fadeUp} className="text-base md:text-lg">
                Whether you are planning for retirement, growing your investment portfolio, protecting your assets, or preparing for future generations, CultMoney Financial Services provides the expertise and guidance necessary to achieve your financial goals with confidence.
              </motion.p>
            </div>
            
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4CAF50] to-[#06327B] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300">
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-full hover:border-[#4CAF50] hover:text-[#4CAF50] hover:bg-[#4CAF50]/5 transition-all duration-300">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          9. FINAL CTA SECTION (CTA Banner)
      ══════════════════════════════ */}
      <section className="relative py-32 overflow-hidden bg-slate-900">
        {/* Background Image with elegant overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury business lifestyle and wealth creation background"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#081B33]/90 via-[#06327B]/85 to-[#081B33]/95" />
        </div>

        {/* Floating background blur orbs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#4CAF50]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#06327B]/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            className="bg-white rounded-3xl p-10 md:p-14 border border-slate-100 shadow-2xl relative overflow-hidden"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {/* Top gradient highlight strip */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#4CAF50] to-[#06327B] rounded-t-3xl" />
            
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#4CAF50]/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#06327B]/5 blur-2xl pointer-events-none" />

            <div className="relative text-center space-y-6">
              <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.25em] text-[#4CAF50]">Start Wealth Advisory</motion.span>
              
              <motion.h2 variants={fadeUp} className="text-2xl md:text-4xl font-semibold text-slate-950 leading-tight">
                Would you like to start a{' '}
                <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                  Wealth Creation
                </span>{' '}
                with us?
              </motion.h2>

              <motion.p variants={fadeUp} className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
                At CultMoney Financial Services, we’re here to assist you with all your financial needs. Whether you have questions, need advice, or want to schedule a consultation, we invite you to reach out to us. Our team is ready to provide you with expert guidance and support you deserve.
              </motion.p>

              <motion.div variants={fadeUp} className="pt-2">
                <a
                  href="tel:+919160110888"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4CAF50] to-[#06327B] text-white font-bold px-10 py-4 rounded-full shadow-lg hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 text-base"
                >
                  <Phone className="w-5 h-5" />
                  +91 9160110888
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
