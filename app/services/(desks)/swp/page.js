'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import {
  WalletCards, TrendingUp, Landmark, PiggyBank,
  BarChart3, BadgeDollarSign, Calculator, ShieldCheck,
  ArrowRight, Phone, Search, Download, ChevronLeft, ChevronRight,
  ChevronDown, HelpCircle
} from 'lucide-react';

/* ─── Animation Variants ─────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function SwpCalculator() {
  const [mounted, setMounted] = useState(false);

  /* ─── State Inputs (with defaults) ───────────────── */
  const [initialInvestment, setInitialInvestment] = useState(1000000); // 10 Lakhs
  const [annualRate, setAnnualRate] = useState(8); // 8%
  const [startYear, setStartYear] = useState(2025);
  const [endYear, setEndYear] = useState(2035);
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(12500); // 12,500 INR

  /* ─── Table Search & Pagination State ────────────── */
  const [tableSearch, setTableSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // 1 Year of months per page

  /* ─── Accordion State ────────────────────────────── */
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* ─── Automatically Validate Year Ranges ─────────── */
  useEffect(() => {
    if (endYear <= startYear) {
      setEndYear(startYear + 1);
    }
  }, [startYear, endYear]);

  /* ─── Systematic Withdrawal Plan Logic ───────────── */
  const swpResults = useMemo(() => {
    const months = [];
    const annualChartData = [];
    
    const totalYears = Math.max(1, endYear - startYear);
    const totalMonths = totalYears * 12;
    const monthlyRate = annualRate / 12 / 100;
    
    let balance = initialInvestment;
    let totalWithdrawn = 0;
    let totalGains = 0;
    let longevityMonths = 0;
    let isCorpusDepleted = false;

    // Year loop for annual chart data mapping
    let cumulativeGainsInYear = 0;
    let cumulativeWithdrawalsInYear = 0;

    for (let m = 1; m <= totalMonths; m++) {
      if (balance <= 0) {
        isCorpusDepleted = true;
        balance = 0;
      }

      const openingBalance = balance;
      const growthEarned = isCorpusDepleted ? 0 : openingBalance * monthlyRate;
      
      const balanceAfterGrowth = openingBalance + growthEarned;
      const actualWithdrawal = isCorpusDepleted ? 0 : Math.min(monthlyWithdrawal, balanceAfterGrowth);
      
      balance = balanceAfterGrowth - actualWithdrawal;
      totalWithdrawn += actualWithdrawal;
      cumulativeWithdrawalsInYear += actualWithdrawal;
      
      const netGain = growthEarned;
      totalGains += netGain;
      cumulativeGainsInYear += netGain;

      if (!isCorpusDepleted && actualWithdrawal > 0) {
        longevityMonths++;
      }

      // Format month strings in simple order
      const monthIndex = (m - 1) % 12;
      const currentYearOffset = Math.floor((m - 1) / 12);
      const year = startYear + currentYearOffset;
      
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      const monthName = monthNames[monthIndex];

      months.push({
        id: m,
        month: monthName,
        year: year,
        openingBalance: Math.round(openingBalance),
        growthEarned: Math.round(growthEarned),
        withdrawal: Math.round(actualWithdrawal),
        remainingBalance: Math.round(balance)
      });

      // Map to chart coordinates on an annual frequency for clean plotting
      if (m % 12 === 0 || m === totalMonths) {
        const yearNumber = Math.ceil(m / 12);
        annualChartData.push({
          name: `Yr ${yearNumber} (${startYear + yearNumber - 1})`,
          Remaining: Math.round(balance),
          Withdrawn: Math.round(totalWithdrawn),
          Gains: Math.round(totalGains)
        });
        cumulativeGainsInYear = 0;
        cumulativeWithdrawalsInYear = 0;
      }
    }

    return {
      monthlyRecords: months,
      chartRecords: annualChartData,
      finalRemainingCorpus: Math.round(balance),
      totalWithdrawalsAmount: Math.round(totalWithdrawn),
      totalGrowthEarned: Math.round(totalGains),
      investmentLongevityYears: (longevityMonths / 12).toFixed(1),
      isCorpusDepleted: isCorpusDepleted
    };
  }, [initialInvestment, annualRate, startYear, endYear, monthlyWithdrawal]);

  // Reset pagination on search
  useEffect(() => {
    setCurrentPage(1);
  }, [tableSearch]);

  /* ─── Currency Formatter (INR format) ────────────── */
  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  /* ─── CSV Exporter ───────────────────────────────── */
  const exportToCSV = () => {
    const headers = ['Month', 'Year', 'Opening Balance (INR)', 'Growth Earned (INR)', 'Withdrawal (INR)', 'Remaining Balance (INR)'];
    const rows = swpResults.monthlyRecords.map(r => [
      r.month,
      r.year,
      r.openingBalance,
      r.growthEarned,
      r.withdrawal,
      r.remainingBalance
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `CultMoney_SWP_Projections_${startYear}_to_${endYear}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* ─── Search & Pagination Calculation ────────────── */
  const filteredRecords = useMemo(() => {
    return swpResults.monthlyRecords.filter(r => 
      r.month.toLowerCase().includes(tableSearch.toLowerCase()) ||
      r.year.toString().includes(tableSearch)
    );
  }, [swpResults.monthlyRecords, tableSearch]);

  const totalPages = Math.ceil(filteredRecords.length / itemsPerPage);
  
  const paginatedRecords = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return filteredRecords.slice(startIdx, startIdx + itemsPerPage);
  }, [filteredRecords, currentPage]);

  /* ─── FAQ Data ───────────────────────────────────── */
  const faqs = [
    {
      q: 'What is a Systematic Withdrawal Plan (SWP)?',
      a: 'An SWP is a facility provided by mutual funds that allows investors to withdraw a specific amount of money from their existing portfolio at pre-decided regular intervals (e.g., monthly). While the withdrawn funds generate cash flow, the remaining balance stays invested and continues to compound.'
    },
    {
      q: 'Is SWP good for retirement planning?',
      a: 'Yes, SWP is highly regarded as one of the best retirement income strategies. It allows retirees to create a customized monthly paycheck from their accumulated wealth while keeping their principal capital active in mutual funds to fight inflation.'
    },
    {
      q: 'How is SWP calculated?',
      a: 'SWP calculations apply interest to your remaining balance at the end of each monthly sub-cycle, and subsequently deduct the planned withdrawal. The formula repeats every month: balance = (previousBalance * (1 + monthlyInterestRate)) - withdrawalAmount.'
    },
    {
      q: 'What happens if my portfolio balance becomes zero?',
      a: 'If the rate of withdrawal exceeds the growth rate of the fund over a long duration, the investment corpus may eventually deplete. Once the remaining capital reaches zero, all withdrawals automatically stop. Our simulator helps you design a conservative withdrawal limit to ensure capital longevity.'
    },
    {
      q: 'Is SWP better than Fixed Deposit (FD) interest withdrawals?',
      a: 'Yes, SWP is generally much more tax-efficient than FD withdrawals. FD interest is taxed fully at your standard income tax slab rate. In contrast, SWP withdrawals are treated as capital redemptions, where only the capital gains component of the withdrawal is subject to capital gains taxation, which carries significantly lower tax rates.'
    }
  ];

  /* ─── Pie Chart Data for Asset Mix ──────────────── */
  const pieData = [
    { name: 'Remaining Corpus', value: swpResults.finalRemainingCorpus },
    { name: 'Total Withdrawn', value: swpResults.totalWithdrawalsAmount }
  ];
  const COLORS = ['#4CAF50', '#06327B'];

  return (
    <main className="font-sans text-slate-900 antialiased bg-[#F7FAF8] overflow-x-hidden">

      {/* ══════════════════════════════
          1. HERO SECTION (Split Hero Layout)
      ══════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-white border-b border-slate-100">
        {/* Background gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#4CAF50]/5 to-[#06327B]/4 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#06327B]/6 to-[#4CAF50]/3 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left – Content */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50] bg-[#4CAF50]/8 border border-[#4CAF50]/20 px-4 py-2 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
                  SAHIANI FINANCIAL SERVICES
                </span>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-display tracking-tight leading-[1.1]">
                  SWP Calculator –{' '}
                  <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                    Monthly Withdrawals
                  </span>
                </h1>
                
                <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
                  Plan your financial future with our premium Systematic Withdrawal Plan (SWP) calculator. Estimate monthly withdrawals, track portfolio growth, and understand how your investments perform over time with intelligent wealth planning tools.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#379237] to-[#06327B] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Calculate SWP
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-full hover:border-[#4CAF50] hover:text-[#4CAF50] hover:bg-[#4CAF50]/5 transition-all duration-300"
                >
                  Book Financial Consultation
                </Link>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                {['Smart Withdrawal Planning', 'Retirement Income Strategy', 'Long-Term Wealth Stability'].map((badge) => (
                  <span key={badge} className="text-xs font-semibold text-slate-600 bg-white border border-slate-200/70 shadow-sm px-5 py-2.5 rounded-full">
                    ✦ {badge}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right – Premium Dashboard Graphic */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white p-4">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                  alt="High-end Systematic Withdrawal Plan analytics dashboard illustration"
                  width={800}
                  height={600}
                  className="rounded-2xl object-cover w-full h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none" />
                
                {/* Embedded luxury glass card */}
                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-slate-100 hidden sm:block max-w-[240px]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4CAF50] to-[#06327B] flex items-center justify-center text-white">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">100% Secure</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5">Custom Wealth Advisory</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          2. SWP OVERVIEW SECTION
      ══════════════════════════════ */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">Income Desks</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-semibold text-slate-950">
              What is a{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">Systematic Withdrawal Plan (SWP)?</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base md:text-lg text-slate-600 leading-relaxed font-medium pt-2">
              A Systematic Withdrawal Plan (SWP) allows investors to withdraw a fixed amount from their investment portfolio at regular intervals while the remaining investment continues to grow. SWP is widely used for retirement income planning, passive cash flow generation, and long-term financial management.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: 'Regular Monthly Income', desc: 'Allows you to generate a reliable monthly paycheck from your active savings structures.', icon: WalletCards, color: 'from-emerald-500 to-green-600' },
              { t: 'Capital Appreciation', desc: 'The remaining undistributed portion continues to compounding and grow dynamically.', icon: TrendingUp, color: 'from-blue-500 to-indigo-600' },
              { t: 'Retirement Planning', desc: 'An excellent choice for maintaining structural cash flows post-retirement years.', icon: PiggyBank, color: 'from-violet-500 to-purple-700' },
              { t: 'Tax Efficient Withdrawals', desc: 'Subject to capital gains rather than normal slab tax structures, increasing net yields.', icon: ShieldCheck, color: 'from-amber-500 to-orange-600' }
            ].map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="group bg-[#F7FAF8] rounded-3xl p-8 border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${card.color} rounded-t-3xl`} />
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300 text-white`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">{card.t}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          3. PREMIUM CALCULATOR SECTION
      ══════════════════════════════ */}
      <section id="calculator" className="py-24 bg-gradient-to-b from-white to-[#F7FAF8] border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">Simulator Platform</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-950">
              Interactive{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">SWP Simulator</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* LEFT – Calculator Form */}
            <div className="lg:col-span-5 bg-white rounded-[32px] p-8 border border-slate-100 shadow-xl flex flex-col justify-between space-y-8">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-[#4CAF50]" />
                  SWP Configurator
                </h3>
                <span className="text-xs font-semibold text-slate-400 bg-slate-50 border px-3 py-1 rounded-full uppercase tracking-wider">INR Simulator</span>
              </div>

              {/* Initial Investment */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Initial Capital (INR)</label>
                  <input
                    type="number"
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(Number(e.target.value))}
                    className="w-36 text-right font-mono font-bold text-sm text-slate-800 bg-[#F7FAF8] border border-slate-200 rounded px-2.5 py-1 focus:outline-none focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50]"
                  />
                </div>
                <input
                  type="range"
                  min="50000"
                  max="10000000"
                  step="50000"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#4CAF50]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>₹50,000</span>
                  <span>{formatCurrency(initialInvestment)}</span>
                  <span>₹1 Crore</span>
                </div>
              </div>

              {/* Expected Returns */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Expected Return (% p.a.)</label>
                  <input
                    type="number"
                    step="0.5"
                    value={annualRate}
                    onChange={(e) => setAnnualRate(Number(e.target.value))}
                    className="w-20 text-right font-mono font-bold text-sm text-slate-800 bg-[#F7FAF8] border border-slate-200 rounded px-2.5 py-1 focus:outline-none focus:border-[#4CAF50]"
                  />
                </div>
                <input
                  type="range"
                  min="1"
                  max="25"
                  step="0.5"
                  value={annualRate}
                  onChange={(e) => setAnnualRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#4CAF50]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>1%</span>
                  <span>{annualRate}%</span>
                  <span>25%</span>
                </div>
              </div>

              {/* Start & End Years */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Start Year</label>
                  <select
                    value={startYear}
                    onChange={(e) => setStartYear(Number(e.target.value))}
                    className="w-full font-mono font-bold text-sm text-slate-800 bg-[#F7FAF8] border border-slate-200 rounded px-3 py-2 focus:outline-none focus:border-[#4CAF50]"
                  >
                    {[...Array(15)].map((_, i) => (
                      <option key={i} value={2025 + i}>{2025 + i}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">End Year</label>
                  <select
                    value={endYear}
                    onChange={(e) => setEndYear(Number(e.target.value))}
                    className="w-full font-mono font-bold text-sm text-slate-800 bg-[#F7FAF8] border border-slate-200 rounded px-3 py-2 focus:outline-none focus:border-[#4CAF50]"
                  >
                    {[...Array(30)].map((_, i) => (
                      <option key={i} value={startYear + 1 + i}>{startYear + 1 + i}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Monthly Withdrawal Limit */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Monthly Withdrawal Limit (INR)</label>
                  <input
                    type="number"
                    value={monthlyWithdrawal}
                    onChange={(e) => setMonthlyWithdrawal(Number(e.target.value))}
                    className="w-36 text-right font-mono font-bold text-sm text-slate-800 bg-[#F7FAF8] border border-slate-200 rounded px-2.5 py-1 focus:outline-none focus:border-[#4CAF50]"
                  />
                </div>
                <input
                  type="range"
                  min="1000"
                  max="500000"
                  step="1000"
                  value={monthlyWithdrawal}
                  onChange={(e) => setMonthlyWithdrawal(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#4CAF50]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>₹1,000</span>
                  <span>{formatCurrency(monthlyWithdrawal)}</span>
                  <span>₹5,00,000</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href="#projections"
                  className="w-full text-center inline-block bg-gradient-to-r from-[#4CAF50] to-[#06327B] text-white font-bold py-4 rounded-xl hover:brightness-110 shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
                >
                  View Dynamic Projections
                </a>
              </div>

            </div>

            {/* RIGHT – Interactive Result Dashboard & Charts */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
              
              {/* Output cards grid */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Card 1: Final Corpus */}
                <div className="bg-[#081B33] border border-slate-800 rounded-3xl p-6 relative overflow-hidden text-white flex flex-col justify-between min-h-[140px] group hover:border-[#4CAF50]/30 transition-colors">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#4CAF50]/5 blur-xl pointer-events-none" />
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Remaining Corpus</span>
                    <h4 className={`text-xl sm:text-2xl font-extrabold font-mono mt-2 tracking-tight ${swpResults.finalRemainingCorpus > 0 ? 'text-[#4CAF50]' : 'text-rose-500'}`}>
                      {formatCurrency(swpResults.finalRemainingCorpus)}
                    </h4>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-2">End of planning corpus value</p>
                </div>

                {/* Card 2: Total Withdrawn */}
                <div className="bg-[#081B33] border border-slate-800 rounded-3xl p-6 relative overflow-hidden text-white flex flex-col justify-between min-h-[140px] group hover:border-[#06327B]/30 transition-colors">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#06327B]/10 blur-xl pointer-events-none" />
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Total Withdrawn</span>
                    <h4 className="text-xl sm:text-2xl font-extrabold font-mono mt-2 tracking-tight text-white">
                      {formatCurrency(swpResults.totalWithdrawalsAmount)}
                    </h4>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-2">Sum of all periodic payouts</p>
                </div>

                {/* Card 3: Growth Earned */}
                <div className="bg-[#081B33] border border-slate-800 rounded-3xl p-6 relative overflow-hidden text-white flex flex-col justify-between min-h-[140px] group hover:border-[#4CAF50]/30 transition-colors">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#4CAF50]/5 blur-xl pointer-events-none" />
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Growth Earned</span>
                    <h4 className="text-xl sm:text-2xl font-extrabold font-mono mt-2 tracking-tight text-[#4CAF50]">
                      {formatCurrency(swpResults.totalGrowthEarned)}
                    </h4>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-2">Compounded investment earnings</p>
                </div>

                {/* Card 4: Longevity */}
                <div className="bg-[#081B33] border border-slate-800 rounded-3xl p-6 relative overflow-hidden text-white flex flex-col justify-between min-h-[140px] group hover:border-[#06327B]/30 transition-colors">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#06327B]/10 blur-xl pointer-events-none" />
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Investment Duration</span>
                    <h4 className="text-xl sm:text-2xl font-extrabold font-mono mt-2 tracking-tight text-white">
                      {swpResults.investmentLongevityYears} Years
                    </h4>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-2">
                    {swpResults.isCorpusDepleted ? 'Corpus exhausted early' : 'Active and sustained'}
                  </p>
                </div>

              </div>

              {/* Chart Visualizer */}
              <div className="bg-[#081B33] border border-slate-800 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between min-h-[340px] text-white">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-white font-display">Longevity progression Chart</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">Annual compounding simulation curve</p>
                  </div>
                  <span className="text-[10px] font-mono bg-slate-800 border border-slate-700 px-3 py-1 rounded-md text-slate-300">
                    {startYear} – {endYear}
                  </span>
                </div>

                <div className="flex-grow w-full min-h-[200px] relative">
                  {mounted && swpResults.chartRecords.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={swpResults.chartRecords} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorRemainVal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.25}/>
                            <stop offset="95%" stopColor="#4CAF50" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorWithdrawnVal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#06327B" stopOpacity={0.25}/>
                            <stop offset="95%" stopColor="#06327B" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="name" stroke="#475569" fontSize={9} tickLine={false} />
                        <YAxis stroke="#475569" fontSize={9} tickLine={false} tickFormatter={(val) => `₹${val/100000}L`} />
                        <Tooltip contentStyle={{ background: '#0f172a', borderColor: '#334155', borderRadius: '12px' }} labelStyle={{ color: '#94a3b8', fontFamily: 'monospace', fontSize: '11px' }} formatter={(value) => formatCurrency(value)} />
                        <Area type="monotone" dataKey="Remaining" stroke="#4CAF50" strokeWidth={2} fillOpacity={1} fill="url(#colorRemainVal)" />
                        <Area type="monotone" dataKey="Withdrawn" stroke="#06327B" strokeWidth={2} fillOpacity={1} fill="url(#colorWithdrawnVal)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-400">
                      Initializing projection grids...
                    </div>
                  )}
                </div>

                <div className="flex justify-center items-center gap-6 text-[10px] text-slate-400 pt-4 border-t border-slate-800/60 mt-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#4CAF50] rounded-full shrink-0" />
                    <span>Remaining Balance Portfolio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#06327B] rounded-full shrink-0" />
                    <span>Cumulative Withdrawal Corpus</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          4. MONTHLY WITHDRAWAL TABLE
      ══════════════════════════════ */}
      <section id="projections" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">Complete Statement</span>
              <h3 className="text-2xl md:text-4xl font-semibold text-slate-950 mt-1 font-display">Month-by-Month Withdrawal Ledger</h3>
              <p className="text-sm text-slate-500 mt-2 font-medium">Verify structural compounding loops and growth earnings post-withdrawal deductions.</p>
            </div>

            {/* Table actions */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by year or month..."
                  value={tableSearch}
                  onChange={(e) => setTableSearch(e.target.value)}
                  className="pl-10 pr-4 py-2.5 w-60 rounded-full border border-slate-200 text-sm focus:outline-none focus:border-[#4CAF50] bg-[#F7FAF8]"
                />
              </div>

              {/* CSV Export Anchor */}
              <button
                onClick={exportToCSV}
                className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 font-semibold px-5 py-2.5 rounded-full hover:border-[#4CAF50] hover:text-[#4CAF50] hover:bg-[#4CAF50]/5 transition-all text-sm"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
            </div>
          </div>

          <div className="bg-[#F7FAF8] rounded-[28px] border border-slate-100 overflow-hidden shadow-sm">
            <div className="overflow-x-auto max-h-[500px] no-scrollbar">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="sticky top-0 bg-white shadow-sm border-b border-slate-100 z-10">
                  <tr className="text-slate-500 font-bold text-xs uppercase tracking-wider">
                    <th className="px-6 py-4">Month</th>
                    <th className="px-6 py-4">Year</th>
                    <th className="px-6 py-4">Opening Balance</th>
                    <th className="px-6 py-4">Growth Earned</th>
                    <th className="px-6 py-4">Withdrawal</th>
                    <th className="px-6 py-4">Remaining Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100/60 font-medium">
                  {paginatedRecords.length > 0 ? (
                    paginatedRecords.map((record) => (
                      <tr key={record.id} className="hover:bg-white transition-colors duration-150">
                        <td className="px-6 py-4 font-semibold text-slate-900">{record.month}</td>
                        <td className="px-6 py-4 text-slate-500 font-mono text-xs">{record.year}</td>
                        <td className="px-6 py-4 font-mono text-xs">{formatCurrency(record.openingBalance)}</td>
                        <td className="px-6 py-4 font-mono text-xs text-[#4CAF50]">{formatCurrency(record.growthEarned)}</td>
                        <td className="px-6 py-4 font-mono text-xs text-rose-500">{formatCurrency(record.withdrawal)}</td>
                        <td className="px-6 py-4 font-mono text-xs font-semibold text-slate-900">
                          {formatCurrency(record.remainingBalance)}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="px-6 py-12 text-center text-slate-400">
                        No records match the requested search keywords.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="bg-white border-t border-slate-100 px-6 py-4 flex items-center justify-between gap-4">
                <span className="text-xs font-semibold text-slate-400 font-mono">
                  Page {currentPage} of {totalPages} ({filteredRecords.length} records total)
                </span>
                
                <div className="flex gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    className="p-2 rounded-full border hover:bg-slate-50 disabled:opacity-40 transition"
                  >
                    <ChevronLeft className="w-4 h-4 text-slate-600" />
                  </button>
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    className="p-2 rounded-full border hover:bg-slate-50 disabled:opacity-40 transition"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-600" />
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          5. FINANCIAL INSIGHTS SECTION
      ══════════════════════════════ */}
      <section className="py-24 bg-[#F7FAF8] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">Intelligence Desk</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-950 font-display">Smart SWP Planning Insights</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { t: 'Retirement Income Planning', desc: 'Secure an optimized financial strategy for post-retirement. By structuring mutual fund SWP assets, you can maintain a fixed baseline income that supports your lifestyle objectives while allowing the core capital to fight off inflation metrics.', icon: PiggyBank },
              { t: 'Passive Monthly Cash Flow', desc: 'Diversify your cash flow models by pulling consistent, structured dividends or returns dynamically. An SWP turns volatile market positions into a highly stable liquid ledger, perfect for servicing periodic family budgets.', icon: WalletCards },
              { t: 'Tax-Efficient Withdrawals', desc: 'Take massive advantage of tax code arbitrage. Since mutual fund redemptions are subject to capital gains rules rather than direct individual income slab rates, your net after-tax yield from an SWP is significantly higher compared to traditional interest accounts.', icon: ShieldCheck },
              { t: 'Long-Term Wealth Preservation', desc: 'Avoid core capital erosion. With proper planning and withdrawal calculations, you ensure that withdrawals match fund compounding rates. Your principal assets remain fully functional and compound for future generations.', icon: TrendingUp }
            ].map((insight, i) => {
              const IconComp = insight.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex gap-6"
                >
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4CAF50]/8 to-[#06327B]/8 flex items-center justify-center text-[#06327B]">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 font-display">{insight.t}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{insight.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          6. FAQ SECTION (Accordion)
      ══════════════════════════════ */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">Knowledge Base</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-950 font-display">Systematic Withdrawal FAQ</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#F7FAF8] rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-bold text-slate-900 hover:text-[#4CAF50] transition-colors"
                  >
                    <span className="flex items-center gap-3 font-display">
                      <HelpCircle className="w-5 h-5 text-[#06327B] shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-sm text-slate-600 leading-relaxed font-medium pl-14">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          7. CTA SECTION (CTA Banner)
      ══════════════════════════════ */}
      <section className="relative py-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1920&q=80"
            alt="Wealth preservation and retirement planning background backdrop"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#081B33]/90 via-[#06327B]/85 to-[#081B33]/95" />
        </div>

        {/* Floating gradient blur orbs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#4CAF50]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#06327B]/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            className="bg-white rounded-3xl p-10 md:p-14 border border-slate-100 shadow-2xl relative overflow-hidden text-center"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {/* Top gradient highlight strip */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#4CAF50] to-[#06327B] rounded-t-3xl" />
            
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#4CAF50]/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#06327B]/5 blur-2xl pointer-events-none" />

            <div className="relative space-y-6">
              <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.25em] text-[#4CAF50]">Secure Steady Income</motion.span>
              
              <motion.h2 variants={fadeUp} className="text-2xl md:text-4xl font-semibold text-slate-950 leading-tight">
                Would you like to start a{' '}
                <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                  Wealth Creation
                </span>{' '}
                with us?
              </motion.h2>

              <motion.p variants={fadeUp} className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
                Our financial advisors help you create smart withdrawal strategies, retirement income plans, and long-term wealth preservation solutions tailored to your financial goals.
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
