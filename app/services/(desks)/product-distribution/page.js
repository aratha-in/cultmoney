'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  TrendingUp, RefreshCcw, WalletCards, BadgeDollarSign,
  BarChart3, Building2, Landmark, LineChart, ShieldCheck,
  PiggyBank, BadgeCheck, BriefcaseBusiness, GraduationCap,
  HeartHandshake, Gem, ArrowRight, Phone, CheckCircle2, ChevronRight,
} from 'lucide-react';

/* ─── Animation Variants ─────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/* ─── Product Cards Data ─────────────────────────── */
const products = [
  { abbr: 'SIP',  title: 'Systematic Investment Plan',  Icon: TrendingUp,      color: 'from-emerald-500 to-green-600' },
  { abbr: 'STP',  title: 'Systematic Transfer Plan',    Icon: RefreshCcw,      color: 'from-blue-500 to-indigo-600' },
  { abbr: 'SWP',  title: 'Systematic Withdrawal Plan',  Icon: WalletCards,     color: 'from-violet-500 to-purple-700' },
  { abbr: 'NFO',  title: 'New Fund Offer',              Icon: BadgeDollarSign, color: 'from-amber-500 to-orange-600' },
  { abbr: 'ETF',  title: 'Exchange Traded Fund',        Icon: BarChart3,       color: 'from-teal-500 to-cyan-600' },
  { abbr: 'REIT', title: 'Real Estate Investment Trust', Icon: Building2,      color: 'from-rose-500 to-pink-600' },
  { abbr: 'IPO',  title: 'Initial Public Offering',     Icon: Landmark,        color: 'from-sky-500 to-blue-700' },
  { abbr: 'MTF',  title: 'Margin Trading Facility',     Icon: LineChart,       color: 'from-fuchsia-500 to-pink-700' },
  { abbr: 'LAS',  title: 'Loan Against Securities',     Icon: ShieldCheck,     color: 'from-lime-500 to-green-700' },
  { abbr: 'LAMF', title: 'Loan Against Mutual Funds',   Icon: PiggyBank,       color: 'from-orange-500 to-red-600' },
  { abbr: 'NPS',  title: 'National Pension Scheme',     Icon: BadgeCheck,      color: 'from-green-600 to-teal-700' },
  { abbr: 'KCP',  title: 'Key Client Portfolio',        Icon: BriefcaseBusiness, color: 'from-indigo-600 to-violet-700' },
];

const steps = [
  {
    num: '01',
    title: 'Find the perfect ongoing support',
    desc: 'Our experienced financial advisors analyze your financial profile and help identify the right investment and financial product solutions for your needs.',
  },
  {
    num: '02',
    title: 'Expert Selection',
    desc: 'We provide expert financial product recommendations based on your investment objectives, risk tolerance, and future financial goals.',
  },
  {
    num: '03',
    title: 'Personalized Solutions',
    desc: 'Our personalized financial strategies ensure every client receives customized investment and wealth management solutions designed specifically for their long-term financial growth.',
  },
];

const lifeGoals = [
  { Icon: GraduationCap,   title: "Child's Education",    desc: "Helping you create a strong financial foundation for your children's future education and career aspirations.", color: 'from-blue-500 to-indigo-600' },
  { Icon: HeartHandshake,  title: "Child's Marriage",     desc: 'Strategic financial planning solutions to help secure your child\'s future and important life milestones.', color: 'from-rose-500 to-pink-600' },
  { Icon: ShieldCheck,     title: 'Retirement Benefits',  desc: 'Retirement planning strategies designed to help you achieve financial independence and long-term security.', color: 'from-emerald-500 to-green-600' },
  { Icon: Gem,             title: 'Wealth Inheritance',   desc: 'We help structure and preserve your family wealth for future generations through effective estate planning.', color: 'from-amber-500 to-orange-600' },
];

const features = [
  { title: 'Personal Goal Planning',    desc: 'We create personalized financial strategies aligned with your unique goals, investment objectives, and long-term financial aspirations.' },
  { title: 'Investment Planning',       desc: 'Professional investment planning services designed to help maximize returns while balancing financial risk effectively.' },
  { title: 'Retirement Planning',       desc: 'Comprehensive retirement planning solutions to secure your future financial stability and independence.' },
  { title: 'Tax Planning',              desc: 'Strategic tax planning and optimization services designed to reduce liabilities and improve financial efficiency.' },
];

const testimonials = [
  { rank: '#1', text: 'CultMoney Financial Services provided excellent investment guidance and helped me build a stable financial portfolio.' },
  { rank: '#2', text: 'Professional financial advice with personalized wealth management strategies tailored to my needs.' },
  { rank: '#3', text: 'Their investment strategies and retirement planning solutions helped me achieve better financial confidence.' },
  { rank: '#4', text: 'Excellent customer support and highly professional financial advisory services.' },
  { rank: '#5', text: 'Trusted financial experts with strong knowledge in wealth creation and investment planning.' },
];

const mediaLogos = ['VentureBeat', 'TechCrunch', 'The Guardian', 'BBC', 'The Verge', 'Business Insider'];

/* ─── Page ───────────────────────────────────────── */
export default function ProductDistribution() {
  return (
    <main className="font-sans text-slate-900 antialiased bg-white overflow-x-hidden">

      {/* ══════════════════════════════
          HERO — light-themed premium style
      ══════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden z-10 flex items-center justify-center bg-white border-b border-slate-100 pt-28">
        {/* Background image with light opacity */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury wealth management office"
            fill
            sizes="100vw"
            className="object-cover opacity-[0.07]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-[#F8FAF8]/98 to-white backdrop-blur-[1px]" />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-[#4CAF50]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#06327B]/8 blur-3xl pointer-events-none" />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
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
              Distribution{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                Products
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
              At CultMoney Financial Services, we offer comprehensive financial product distribution services designed
              to help individuals and businesses achieve their investment and wealth creation goals through expert
              financial guidance.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 pt-2">
              <a href="#products" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4CAF50] to-[#06327B] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300">
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-full hover:border-[#4CAF50] hover:text-[#4CAF50] hover:bg-[#4CAF50]/5 transition-all duration-300">
                Book Consultation
              </Link>
            </motion.div>

            {/* Floating badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 pt-4">
              {['Trusted Financial Advisors', 'Wealth Management Experts', 'Investment Growth Strategies'].map(badge => (
                <span key={badge} className="text-xs font-semibold text-slate-600 bg-white border border-slate-200/70 shadow-sm px-5 py-2.5 rounded-full">
                  ✦ {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          OVERVIEW
      ══════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div className="space-y-7" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">How Can We Help You</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                Financial Distribution
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed">
              At CultMoney Financial Services, we are committed to providing professional financial product distribution
              services tailored to meet your unique financial goals. Our experienced advisors help clients choose
              suitable financial products and investment opportunities that align with their long-term wealth creation
              objectives.
            </motion.p>
            <motion.p variants={fadeUp} className="text-base text-slate-500 leading-relaxed">
              Our product distribution services focus on simplifying complex financial solutions while offering
              personalized financial strategies for individuals, families, and businesses.
            </motion.p>

            {/* Stat strip */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              {[{ v: '12+', l: 'Product Categories' }, { v: '200+', l: 'Happy Clients' }, { v: '18+', l: 'Years of Expertise' }].map(s => (
                <div key={s.l} className="text-center">
                  <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">{s.v}</p>
                  <p className="text-sm text-slate-500 font-medium mt-1">{s.l}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          PRODUCT GRID
      ══════════════════════════════ */}
      <section id="products" className="py-24 bg-gradient-to-b from-[#F8FAF8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16 space-y-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">Investment Instruments</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-semibold text-slate-900">
              Our Financial{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">Products</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {products.map((p, i) => {
              const Icon = p.Icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                  className="group relative bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-400 overflow-hidden flex flex-col items-center text-center gap-4"
                >
                  {/* Top gradient bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${p.color} rounded-t-3xl`} />

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <div>
                    <p className="text-2xl font-extrabold text-slate-900 tracking-tight">{p.abbr}</p>
                    <p className="text-xs text-slate-500 font-medium mt-1 leading-snug">{p.title}</p>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-auto text-xs font-semibold text-[#4CAF50] hover:text-[#06327B] flex items-center gap-1 transition-colors duration-200"
                  >
                    Explore <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              );
            })}

            {/* CTA card */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="col-span-2 md:col-span-1 lg:col-span-2 bg-gradient-to-br from-[#4CAF50] to-[#06327B] rounded-3xl p-8 flex flex-col justify-between shadow-xl overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-4">All Products</p>
                <p className="text-2xl font-bold text-white leading-tight">Explore All Investment Products</p>
                <p className="text-sm text-white/70 mt-3">Discover our complete portfolio of financial instruments and wealth creation solutions.</p>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 bg-white text-[#06327B] font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 text-sm self-start"
              >
                Explore All <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          PROCESS — SPLIT SECTION
      ══════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16 space-y-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">Our Process</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-semibold text-slate-900">
              How It{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">All Works</span>
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
                  alt="Financial planning meeting"
                  width={1200}
                  height={800}
                  className="w-full h-[560px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06327B]/30 via-transparent to-transparent" />

                {/* Overlay stat card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl rounded-2xl p-5 shadow-xl border border-white/70">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-900">Successful Client Portfolios</p>
                      <p className="text-xs text-slate-500 mt-0.5">Managed across all product categories</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-extrabold text-[#4CAF50]">200+</p>
                    </div>
                  </div>
                  <div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-[#4CAF50] to-[#06327B] rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right process steps */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
            >
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                  className="flex gap-6 group"
                >
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4CAF50] to-[#06327B] flex items-center justify-center shadow-md text-white font-extrabold text-lg group-hover:scale-110 transition-transform duration-300">
                    {s.num}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                    {i < steps.length - 1 && (
                      <div className="mt-6 ml-1 w-px h-6 bg-gradient-to-b from-[#4CAF50]/40 to-transparent" />
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          LIFE GOALS
      ══════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-[#F8FAF8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16 space-y-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">Financial Life Goals</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-semibold text-slate-900">
              Planning For Your{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">Life Goals</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {lifeGoals.map((g, i) => {
              const Icon = g.Icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-400 relative overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${g.color} rounded-t-3xl`} />
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${g.color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{g.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{g.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          WHY WE — SPLIT QUOTE
      ══════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16 space-y-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">Why Choose Us</motion.span>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-4xl font-semibold text-slate-900 max-w-4xl mx-auto leading-tight">
              We Provide new financial strategies online or offline —{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                anytime, everywhere
              </span>{' '}
              whenever you require!
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left – feature list */}
            <motion.div
              className="space-y-5"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#4CAF50]/20 transition-all duration-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#4CAF50] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">{f.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right – quote card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative bg-gradient-to-br from-[#06327B] to-[#081B33] rounded-3xl p-10 md:p-14 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-[#4CAF50]/10 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/5 blur-2xl pointer-events-none" />

                <div className="relative space-y-8">
                  <div className="text-8xl font-serif text-[#4CAF50]/20 leading-none select-none">&ldquo;</div>
                  <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed -mt-6">
                    We prepare you to achieve your Financial goals with professional wealth manager.
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4CAF50] to-[#06327B] flex items-center justify-center shadow-lg text-white font-bold text-sm">S</div>
                    <div>
                      <p className="text-white font-semibold text-sm">CultMoney Financial Services</p>
                      <p className="text-white/50 text-xs">Professional Wealth Management</p>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4CAF50] to-[#06327B] text-white font-semibold px-8 py-3.5 rounded-full hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg text-sm"
                  >
                    Start Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          MEDIA / LOGO STRIP
      ══════════════════════════════ */}
      <section className="py-16 bg-gradient-to-b from-[#F8FAF8] to-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.p
            className="text-center text-xs font-bold uppercase tracking-[0.25em] text-slate-400 mb-10"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Featured & Trusted By
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 md:gap-14"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {mediaLogos.map((logo) => (
              <motion.span
                key={logo}
                variants={fadeUp}
                className="text-slate-300 hover:text-slate-500 font-bold text-base md:text-lg tracking-tight transition-colors duration-300 cursor-default select-none"
              >
                {logo}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          TESTIMONIALS — DARK SECTION
      ══════════════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#081B33' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#4CAF50]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#06327B]/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-16 space-y-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">Client Stories</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-semibold text-white">
              Our Top 5{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                Customer Testimonials
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="w-72 sm:w-80 flex-shrink-0 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-400 relative overflow-hidden group snap-center"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#4CAF50] to-[#06327B] rounded-t-3xl" />

                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#4CAF50] bg-[#4CAF50]/8 px-3 py-1.5 rounded-full border border-[#4CAF50]/20">
                    TOP {t.rank}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <span key={s} className="text-amber-400 text-sm">★</span>
                    ))}
                  </div>
                </div>

                <div className="text-4xl font-serif text-slate-100 leading-none mb-4 select-none">&ldquo;</div>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">{t.text}</p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4CAF50] to-[#06327B] flex items-center justify-center text-white font-bold text-xs">
                    {t.rank}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">Verified Client</p>
                    <p className="text-[10px] text-slate-400">CultMoney Financial Services</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          INVESTMENT BANNER
      ══════════════════════════════ */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=80"
            alt="Modern financial lifestyle — investing"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081B33]/90 via-[#06327B]/80 to-[#081B33]/90" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div className="space-y-8" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-semibold text-white leading-tight">
              Start Investing for a new{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                Financial Legacy!
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-white/70 leading-relaxed">
              Choose a best platform who helps you to achieve long-term financial growth and investment success.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4CAF50] to-[#06327B] text-white font-semibold px-10 py-4 rounded-full hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl text-base"
              >
                Start Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          FINAL CTA
      ══════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-[#F8FAF8] to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            className="bg-white rounded-3xl p-10 md:p-14 border border-slate-100 shadow-xl relative overflow-hidden"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#4CAF50]/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#06327B]/5 blur-2xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#4CAF50] to-[#06327B] rounded-t-3xl" />

            <div className="relative text-center space-y-6">
              <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">Begin Your Wealth Journey</motion.span>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-semibold text-slate-900 leading-tight">
                Would you like to start a{' '}
                <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                  Wealth Creation
                </span>{' '}
                with us?
              </motion.h2>
              <motion.p variants={fadeUp} className="text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
                At CultMoney Financial Services, we&apos;re here to assist you with all your financial needs.
                Whether you have questions, need advice, or want to schedule a consultation, our team is
                ready to provide expert financial guidance and support you deserve.
              </motion.p>
              <motion.div variants={fadeUp}>
                <a
                  href="tel:+919160110888"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4CAF50] to-[#06327B] text-white font-bold px-10 py-4 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl text-base"
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
