'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  TrendingUp,
  WalletCards,
  ShieldCheck,
  Landmark,
  BriefcaseBusiness,
  BadgeDollarSign,
  ReceiptText,
  ClipboardList,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Phone,
  Star,
} from 'lucide-react';

/* ─── Animation Variants ─────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* ─── Data ─────────────────────────────────────────────────────────── */
const services = [
  {
    title: 'Investment Management',
    icon: TrendingUp,
    color: 'from-emerald-500 to-green-600',
    points: [
      'Portfolio Management: Customized investment strategies aligned with your risk tolerance and financial objectives.',
      'Asset Allocation: Diversifying investments to optimize returns and manage risk effectively.',
    ],
  },
  {
    title: 'Financial Planning',
    icon: BadgeDollarSign,
    color: 'from-blue-600 to-indigo-700',
    points: [
      'Retirement Planning: Creating a financial roadmap for a comfortable retirement.',
      'Education Planning: Strategies for funding your children\'s education.',
      'Estate Planning: Protecting your assets and passing wealth to future generations.',
    ],
  },
  {
    title: 'Tax Optimization',
    icon: ReceiptText,
    color: 'from-violet-500 to-purple-700',
    points: [
      'Tax Efficient Investing: Minimizing tax liabilities through smart investment choices.',
      'Tax Planning: Personalized advice to help reduce your tax burden.',
    ],
  },
  {
    title: 'Wealth Management',
    icon: WalletCards,
    color: 'from-amber-500 to-orange-600',
    points: [
      'High-Net-Worth Services: Comprehensive wealth management solutions for affluent individuals.',
      'Philanthropy Planning: Structuring charitable giving in a tax-efficient manner.',
    ],
  },
  {
    title: 'Insurance Solutions',
    icon: ShieldCheck,
    color: 'from-teal-500 to-cyan-600',
    points: [
      'Life Insurance: Protecting your family with the right coverage.',
      'Disability Insurance: Safeguarding your income in case of unexpected events.',
      'Long-Term Care Insurance: Planning for potential future healthcare needs.',
    ],
  },
  {
    title: 'Business Financial Services',
    icon: BriefcaseBusiness,
    color: 'from-rose-500 to-pink-600',
    points: [
      'Succession Planning: Ensuring smooth transition of your business to the next generation.',
      'Business Valuation: Accurate valuation for sale, succession, or strategic planning.',
    ],
  },
];

const whyUs = [
  {
    icon: Star,
    title: 'Expert Guidance',
    desc: 'Our knowledgeable advisors are committed to helping you make informed financial decisions with clarity and confidence.',
  },
  {
    icon: CheckCircle2,
    title: 'Personalized Solutions',
    desc: 'We tailor our services to meet your specific financial situation and goals — no one-size-fits-all approach.',
  },
  {
    icon: Landmark,
    title: 'Comprehensive Approach',
    desc: 'We offer a full spectrum of financial services to address every aspect of your financial life under one roof.',
  },
];

const freedomSteps = [
  {
    step: '01',
    icon: ClipboardList,
    title: 'Comprehensive Financial Planning',
    desc: 'We develop a personalized financial plan that aligns with your goals, including retirement savings, debt management, tax planning, and more.',
  },
  {
    step: '02',
    icon: TrendingUp,
    title: 'Investment Strategies',
    desc: 'We create and manage diversified investment portfolios designed to grow your wealth while managing risk.',
  },
  {
    step: '03',
    icon: Landmark,
    title: 'Debt Management',
    desc: 'We help you create strategies to pay down debt, freeing up more of your income for saving and investing.',
  },
];

/* ─── Page Component ───────────────────────────────────────────────── */
export default function FinancialServicesPage() {
  return (
    <main className="font-sans text-slate-900 antialiased bg-white overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-white">
        {/* Background gradient orbs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#4CAF50]/8 to-[#06327B]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#06327B]/6 to-[#4CAF50]/4 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left – Text */}
            <motion.div
              className="space-y-8 z-10"
              initial="hidden"
              animate="show"
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50] bg-[#4CAF50]/8 border border-[#4CAF50]/20 px-4 py-2 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
                  Service Offerings
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold font-display tracking-tight text-slate-950 leading-[1.05]"
              >
                Financial{' '}
                <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                  Services
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-xl font-semibold text-[#06327B]">
                Comprehensive Financial Planning &amp; Wealth Management
              </motion.p>

              <motion.p variants={fadeUp} className="text-base text-slate-600 leading-relaxed max-w-lg">
                At CultMoney Financial Services, we offer a wide range of financial services designed to help
                you achieve your financial goals. Our team of experienced professionals is dedicated to
                providing personalized solutions tailored to your unique needs.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#379237] to-[#06327B] text-white font-semibold px-7 py-3.5 rounded-full shadow-lg hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 font-semibold px-7 py-3.5 rounded-full hover:border-[#4CAF50] hover:text-[#4CAF50] hover:bg-[#4CAF50]/5 transition-all duration-300"
                >
                  Book Consultation
                </Link>
              </motion.div>

              {/* Floating badge strip */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
                {['Trusted Financial Advisors', 'Investment Planning Experts', 'Wealth Growth Strategies'].map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-semibold text-slate-600 bg-white border border-slate-200/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
                  >
                    ✦ {badge}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right – Image */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.94, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1200&q=80"
                  alt="Premium wealth management office"
                  width={1200}
                  height={800}
                  className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06327B]/30 via-transparent to-transparent" />

                {/* Floating glass cards */}
                <motion.div
                  className="absolute top-6 left-6 bg-white/85 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-xl border border-white/60"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <p className="text-xs text-slate-500 font-medium">Assets Under Advisory</p>
                  <p className="text-xl font-bold text-[#06327B]">₹50 Cr+</p>
                  <p className="text-[10px] text-[#4CAF50] font-semibold mt-0.5">↑ Growing Consistently</p>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 right-6 bg-white/85 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-xl border border-white/60"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <p className="text-xs text-slate-500 font-medium">Happy Clients</p>
                  <p className="text-xl font-bold text-[#06327B]">200+</p>
                  <p className="text-[10px] text-[#4CAF50] font-semibold mt-0.5">★ 5-Star Rated</p>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 left-6 bg-white/85 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-xl border border-white/60"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                >
                  <p className="text-xs text-slate-500 font-medium">Experience</p>
                  <p className="text-xl font-bold text-[#06327B]">18+ Years</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTRO SECTION
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-[#F8FAF8] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">
              About Our Services
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              CultMoney Financial Services –{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                Comprehensive Financial Services
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed">
              At CultMoney Financial Services, we offer a wide range of financial services designed to help
              you achieve your financial goals. Our team of experienced professionals is dedicated to
              providing personalized solutions tailored to your unique needs.
            </motion.p>

            {/* Key metrics row */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-100">
              {[
                { value: '18+', label: 'Years of Expertise' },
                { value: '200+', label: 'Satisfied Clients' },
                { value: '6', label: 'Core Service Areas' },
              ].map((m) => (
                <div key={m.label} className="text-center space-y-1">
                  <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                    {m.value}
                  </p>
                  <p className="text-sm text-slate-500 font-medium">{m.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES GRID
      ══════════════════════════════════════════ */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16 space-y-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">
              What We Offer
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-slate-900">
              Our Financial{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                Services Include
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                  className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-400 overflow-hidden flex flex-col"
                >
                  {/* Gradient top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${svc.color} rounded-t-3xl`} />

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-5 font-display">{svc.title}</h3>

                  <ul className="space-y-3 flex-1">
                    {svc.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-[#4CAF50] mt-0.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-8 flex items-center justify-between bg-slate-50 hover:bg-gradient-to-r hover:from-[#379237] hover:to-[#06327B] text-slate-600 hover:text-white px-5 py-3 rounded-xl transition-all duration-300 group/btn border border-slate-200/60 hover:border-transparent font-semibold text-sm"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-[#F8FAF8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left – Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
                  alt="Business financial advisor meeting"
                  width={1200}
                  height={800}
                  className="w-full h-[540px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06327B]/25 via-transparent to-transparent" />

                {/* Stat card overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl rounded-2xl p-5 shadow-xl border border-white/70">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-900">Client Satisfaction Rate</p>
                      <p className="text-xs text-slate-500 mt-0.5">Based on annual client reviews</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-extrabold text-[#4CAF50]">98%</p>
                    </div>
                  </div>
                  <div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[98%] bg-gradient-to-r from-[#4CAF50] to-[#06327B] rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right – Feature cards */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">
                  Our Advantage
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  Why{' '}
                  <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                    Choose Us
                  </span>
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  We bring together expertise, technology, and a deep commitment to your financial wellbeing —
                  helping you build, preserve, and grow wealth with confidence.
                </p>
              </motion.div>

              <div className="space-y-5">
                {whyUs.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={fadeUp}
                      whileHover={{ x: 6 }}
                      className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#4CAF50]/20 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#379237] to-[#06327B] flex items-center justify-center shrink-0 shadow-md">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINANCIAL FREEDOM – DARK HERO
      ══════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #06327B 0%, #081B33 60%, #06327B 100%)' }}>
        {/* Decorative orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#4CAF50]/8 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#4CAF50]/5 blur-3xl pointer-events-none" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50] border border-[#4CAF50]/30 px-4 py-2 rounded-full bg-[#4CAF50]/8">
              Our Mission
            </motion.span>

            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white leading-tight">
              CultMoney Financial Services –{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#a8e6a3] bg-clip-text text-transparent">
                Your Path to Financial Freedom
              </span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              At CultMoney Financial Services, we believe that true financial freedom is within reach for everyone.
              Our mission is to empower you with the knowledge, tools, and strategies necessary to take control
              of your financial future and live the life you desire.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#4CAF50] hover:bg-[#379237] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#4CAF50]/30"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT IS FINANCIAL FREEDOM
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center space-y-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">
              Understanding Freedom
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              What is{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                Financial Freedom?
              </span>
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="relative bg-gradient-to-br from-[#F8FAF8] to-white rounded-3xl p-10 md:p-14 border border-slate-100 shadow-sm"
            >
              {/* Quote mark */}
              <div className="absolute top-6 left-8 text-8xl font-serif text-[#4CAF50]/15 leading-none select-none">&ldquo;</div>
              <p className="relative text-lg md:text-xl text-slate-700 leading-[1.8] font-light text-center">
                Financial freedom means having the financial stability and flexibility to live life on your terms
                without being constrained by money. It is about having enough savings, investments, and passive
                income to support your lifestyle without relying entirely on active employment. Financial freedom
                allows you to make choices that align with your values and goals, such as traveling, pursuing
                passions, or spending more time with family, without financial stress.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WEALTH STRATEGY PROCESS – TIMELINE
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-[#F8FAF8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16 space-y-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">
              Our Approach
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              How We Help You Achieve{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                Financial Freedom
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            {freedomSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="relative group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#4CAF50]/20 transition-all duration-400 overflow-hidden"
                >
                  {/* Step number watermark */}
                  <div className="absolute top-4 right-6 text-8xl font-extrabold text-slate-50 select-none leading-none group-hover:text-[#4CAF50]/10 transition-colors duration-300">
                    {step.step}
                  </div>

                  {/* Gradient top bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#379237] to-[#06327B] rounded-t-3xl" />

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#379237] to-[#06327B] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-4 font-display">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#4CAF50]">
                    <span>Step {step.step}</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#4CAF50]/40 to-transparent" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMMITMENT SECTION
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">Our Promise</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Our Commitment{' '}
                <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                  To You
                </span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                At CultMoney Financial Services, we are dedicated to helping you achieve financial freedom.
                We work closely with you to understand your unique financial situation and aspirations,
                creating strategies and solutions designed specifically for your needs.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  'Transparent Advice',
                  'Client-First Approach',
                  'Long-Term Partnership',
                  'Proven Track Record',
                  'Personalized Plans',
                  'Ongoing Support',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4CAF50] shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative bg-gradient-to-br from-[#F8FAF8] to-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-md overflow-hidden"
            >
              {/* Subtle background gradient */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#4CAF50]/6 blur-2xl pointer-events-none" />

              <div className="relative space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#379237] to-[#06327B] flex items-center justify-center shadow-lg">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Our Service Guarantee</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every financial strategy we develop is backed by deep research, transparent communication,
                  and a genuine commitment to your financial wellbeing. We do not believe in one-size-fits-all
                  solutions — every plan is custom-built for you.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  {[
                    { val: '18+', label: 'Years Experience' },
                    { val: '200+', label: 'Happy Clients' },
                    { val: '98%', label: 'Satisfaction Rate' },
                    { val: '24/7', label: 'Client Support' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm text-center">
                      <p className="text-2xl font-extrabold bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                        {stat.val}
                      </p>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          START YOUR JOURNEY CTA
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-[#F8FAF8] to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">
              Begin Today
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Start Your{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                Journey Today
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed">
              Financial freedom is not just a dream — it is a plan. Let us help you create the path and
              walk with you on your journey toward financial independence. Contact CultMoney Financial Services
              today to get started.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#379237] to-[#06327B] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-full hover:border-[#4CAF50] hover:text-[#4CAF50] hover:bg-[#4CAF50]/5 transition-all duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #379237 0%, #06327B 100%)' }}>
        {/* Decorative orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Would you like to start a Wealth Creation with us?
            </motion.h2>

            <motion.p variants={fadeUp} className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              At CultMoney Financial Services, we&apos;re here to assist you with all your financial needs.
              Whether you have questions, need advice, or want to schedule a consultation, we invite you
              to reach out to us. Our team is ready to provide you with expert guidance and support you deserve.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919160110888"
                className="inline-flex items-center gap-3 bg-white text-[#06327B] font-bold px-8 py-4 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <Phone className="w-5 h-5" />
                +91 9160110888
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
