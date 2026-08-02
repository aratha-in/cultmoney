"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import {
  TrendingUp,
  Landmark,
  PiggyBank,
  WalletCards,
  BarChart3,
  Calculator,
  ShieldCheck,
  BadgeDollarSign,
  Percent,
  Calendar,
  DollarSign,
  Shield,
  Search,
  Download,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";

// Colors defined in tailwind config / design brief
const BRAND = {
  primary: "#4CAF50",
  secondary: "#06327B",
  accent: "#379237",
  bg: "#F7FAF8",
};

// Formatting helpers
const formatCurrency = (val) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(val);
};

const round0 = (n) => Math.round(n);

// Animation configurations
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function MutualFundCalculator() {
  const [mounted, setMounted] = useState(false);

  // SIP Calculator States
  const [sipMonthly, setSipMonthly] = useState(10000);
  const [sipReturn, setSipReturn] = useState(12);
  const [sipYears, setSipYears] = useState(10);

  // Lumpsum Calculator States
  const [lumpsumPrincipal, setLumpsumPrincipal] = useState(100000);
  const [lumpsumReturn, setLumpsumReturn] = useState(12);
  const [lumpsumYears, setLumpsumYears] = useState(10);
  const [lumpsumCompounding, setLumpsumCompounding] = useState(1); // 1 = Annually (standard)

  // Interactive search & pagination states for tables
  const [sipTableSearch, setSipTableSearch] = useState("");
  const [sipTablePage, setSipTablePage] = useState(1);
  const sipTableRowsPerPage = 5;

  const [lumpsumTableSearch, setLumpsumTableSearch] = useState("");
  const [lumpsumTablePage, setLumpsumTablePage] = useState(1);
  const lumpsumTableRowsPerPage = 5;

  // Active chart view tab
  const [activeChartTab, setActiveChartTab] = useState("sip");

  // FAQ Expand/Collapse State
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ==========================================
  // EXACT MATHEMATICAL CALCULATIONS
  // ==========================================

  // SIP Calculation
  const sipResult = useMemo(() => {
    const P = sipMonthly;
    const i = sipReturn / 100 / 12;
    const n = sipYears * 12;

    let total = 0;
    if (sipReturn === 0) {
      total = P * n;
    } else {
      total = P * (((Math.pow(1 + i, n) - 1) / i) * (1 + i));
    }

    const invested = P * n;
    const returns = total - invested;

    return {
      investedAmount: round0(invested),
      estReturns: round0(returns),
      totalValue: round0(total),
    };
  }, [sipMonthly, sipReturn, sipYears]);

  // Lumpsum Calculation
  const lumpsumResult = useMemo(() => {
    const P = lumpsumPrincipal;
    const r = lumpsumReturn / 100;
    const n = lumpsumCompounding; // compounding frequency
    const t = lumpsumYears;
    const nt = n * t;

    const total = P * Math.pow(1 + r / n, nt);
    const growth = total - P;

    return {
      principalInvestment: round0(P),
      wealthGrowth: round0(growth),
      totalValue: round0(total),
    };
  }, [lumpsumPrincipal, lumpsumReturn, lumpsumYears, lumpsumCompounding]);

  // ==========================================
  // CHART DATA GENERATORS
  // ==========================================

  const sipChartData = useMemo(() => {
    const P = sipMonthly;
    const i = sipReturn / 100 / 12;
    const data = [];

    for (let y = 1; y <= sipYears; y++) {
      const currentMonths = y * 12;
      let currentTotal = 0;
      if (sipReturn === 0) {
        currentTotal = P * currentMonths;
      } else {
        currentTotal = P * (((Math.pow(1 + i, currentMonths) - 1) / i) * (1 + i));
      }
      const currentInvested = P * currentMonths;
      const currentGains = currentTotal - currentInvested;

      data.push({
        name: `Yr ${y}`,
        Invested: round0(currentInvested),
        Gains: round0(currentGains),
        Total: round0(currentTotal),
      });
    }
    return data;
  }, [sipMonthly, sipReturn, sipYears]);

  const lumpsumChartData = useMemo(() => {
    const P = lumpsumPrincipal;
    const r = lumpsumReturn / 100;
    const n = lumpsumCompounding;
    const data = [];

    for (let y = 1; y <= lumpsumYears; y++) {
      const nt = n * y;
      const currentTotal = P * Math.pow(1 + r / n, nt);
      const currentGains = currentTotal - P;

      data.push({
        name: `Yr ${y}`,
        Invested: round0(P),
        Gains: round0(currentGains),
        Total: round0(currentTotal),
      });
    }
    return data;
  }, [lumpsumPrincipal, lumpsumReturn, lumpsumYears, lumpsumCompounding]);

  // ==========================================
  // TABLE SEARCH & PAGINATION FILTERING
  // ==========================================

  // SIP Filtered Table Data
  const sipFilteredData = useMemo(() => {
    return sipChartData.filter((row) =>
      row.name.toLowerCase().includes(sipTableSearch.toLowerCase())
    );
  }, [sipChartData, sipTableSearch]);

  const sipPaginatedData = useMemo(() => {
    const startIndex = (sipTablePage - 1) * sipTableRowsPerPage;
    return sipFilteredData.slice(startIndex, startIndex + sipTableRowsPerPage);
  }, [sipFilteredData, sipTablePage]);

  const sipTotalPages = Math.ceil(sipFilteredData.length / sipTableRowsPerPage);

  // Lumpsum Filtered Table Data
  const lumpsumFilteredData = useMemo(() => {
    return lumpsumChartData.filter((row) =>
      row.name.toLowerCase().includes(lumpsumTableSearch.toLowerCase())
    );
  }, [lumpsumChartData, lumpsumTableSearch]);

  const lumpsumPaginatedData = useMemo(() => {
    const startIndex = (lumpsumTablePage - 1) * lumpsumTableRowsPerPage;
    return lumpsumFilteredData.slice(startIndex, startIndex + lumpsumTableRowsPerPage);
  }, [lumpsumFilteredData, lumpsumTablePage]);

  const lumpsumTotalPages = Math.ceil(lumpsumFilteredData.length / lumpsumTableRowsPerPage);

  // ==========================================
  // CSV EXPORT LOGIC
  // ==========================================
  const exportToCSV = (data, filename) => {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Year,Invested Amount (INR),Estimated Returns (INR),Total Value (INR)\n";

    data.forEach((row) => {
      csvContent += `${row.name},${row.Invested},${row.Gains},${row.Total}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-800">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="font-display font-medium tracking-wide">Loading Premium Analytics Platform...</p>
        </div>
      </div>
    );
  }

  // FAQ List
  const faqs = [
    {
      q: "What is SIP investment?",
      a: "A Systematic Investment Plan (SIP) is an investment route offered by mutual funds wherein you invest a fixed amount at regular intervals (monthly, quarterly) rather than making a one-time lump-sum payment. It instills disciplined investing habits and enables ruin-free compounding benefits.",
    },
    {
      q: "What is a Lumpsum investment?",
      a: "A lumpsum investment is a one-time, significant capital deployment into a mutual fund scheme. This route is typically chosen when you have substantial idle capital (bonuses, inheritances, or proceeds from property sales) and wish to compound it over a longer-term horizon.",
    },
    {
      q: "How are returns calculated?",
      a: "SIP returns are computed using the future value formula, taking monthly rates and compound intervals into account. Lumpsum returns utilize the classic compound interest formula: $A = P(1 + r/n)^{nt}$, capturing growth derived from your principal capital over periodic durations.",
    },
    {
      q: "Is SIP better than Lumpsum?",
      a: "SIP is highly effective in volatile markets because it helps average out purchase costs (rupee cost averaging) and removes timing risks. Lumpsum, conversely, is ideal when markets are undervalued or when you have large amounts of cash that can remain invested for a longer period to compound.",
    },
    {
      q: "Can I modify investment duration later?",
      a: "Absolutely. In real-world mutual funds, you can stop, increase, decrease, or extend your SIP or lumpsum investments at any time with minimal friction and no penalty. This platform demonstrates modeled forecasts based on continuous holding terms.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#F7FAF8] text-slate-900 min-h-screen font-sans pt-20">
      
      {/* ==========================================
          HERO SECTION (Light Theme matching other pages)
          ========================================== */}
      <section className="relative py-20 overflow-hidden z-10 bg-white border-b border-slate-100">
        
        {/* Background Gradients and Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#4CAF50]/5 rounded-full blur-[100px]" />
          <div className="absolute top-[40%] right-[-100px] w-[500px] h-[500px] bg-[#06327B]/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              className="lg:col-span-6 space-y-8 text-left"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold uppercase tracking-wider text-primary">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span>SAHIANI FINANCIAL SERVICES</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-slate-950 font-display">
                Mutual Fund <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Calculator
                </span>
              </motion.h1>

              <motion.h2 variants={fadeInUp} className="text-xl sm:text-2xl font-bold text-slate-700 font-display">
                Premium SIP & Lumpsum Planning
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-slate-600 text-base leading-relaxed max-w-xl">
                Calculate SIP and Lumpsum investment returns instantly with advanced mutual fund projection tools. Plan long-term wealth creation with intelligent financial insights and premium investment planning calculators.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="#calculator-section" 
                  className="px-8 py-4 bg-brand-gradient hover:opacity-95 transition-all text-white font-semibold rounded-full flex items-center space-x-2 shadow-glow-green"
                >
                  <span>Start Planning</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="tel:+919160110888" 
                  className="px-8 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all text-slate-700 font-semibold rounded-full flex items-center space-x-2"
                >
                  <span>Talk to Advisor</span>
                </a>
              </motion.div>

              {/* Floating feature tags */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
                <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200/60 rounded-full px-4 py-2.5 text-xs text-slate-600 font-medium backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span>Wealth Creation Strategies</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200/60 rounded-full px-4 py-2.5 text-xs text-slate-600 font-medium backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span>Long-Term Growth</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200/60 rounded-full px-4 py-2.5 text-xs text-slate-600 font-medium backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span>Intelligent Planning</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Dashboard Mockup */}
            <motion.div 
              className="lg:col-span-6 relative flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Glass container wrapping high-end Unsplash image */}
              <div className="relative p-3 bg-white border border-slate-200/60 rounded-3xl shadow-xl backdrop-blur-xl w-full max-w-lg aspect-[4/3] overflow-hidden group">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                  alt="Wealth management and premium investment planning dashboard" 
                  fill
                  sizes="(max-w-768px) 100vw, 50vw"
                  priority
                  className="rounded-2xl object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Absolute Cards */}
                <div className="absolute top-8 left-8 p-4 bg-white/95 border border-slate-200/80 rounded-2xl flex items-center space-x-3 shadow-2xl backdrop-blur-md">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block font-bold uppercase tracking-wider">CAGR Returns</span>
                    <span className="text-sm font-extrabold text-slate-900">+15.4% p.a.</span>
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 p-4 bg-white/95 border border-slate-200/80 rounded-2xl flex items-center space-x-3 shadow-2xl backdrop-blur-md">
                  <div className="w-10 h-10 rounded-xl bg-[#06327B]/5 flex items-center justify-center text-primary">
                    <PiggyBank className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block font-bold uppercase tracking-wider">Total Value</span>
                    <span className="text-sm font-extrabold text-[#06327B]">{formatCurrency(12435000)}</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==========================================
          INVESTMENT OVERVIEW SECTION (Light Theme Grid)
          ========================================== */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight font-display text-slate-900">
              Smart Mutual Fund Investment Planning
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Our Mutual Fund Calculator helps investors estimate future wealth creation through SIP and Lumpsum investments. Analyze returns, compare growth projections, and understand long-term investment potential using accurate financial formulas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-8 bg-white border border-slate-200/60 rounded-3xl hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 text-left space-y-4 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900">SIP Investment Planning</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                Modeled recurring investments compounding month-on-month. Model consistent wealth compounding effortlessly.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-white border border-slate-200/60 rounded-3xl hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 text-left space-y-4 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-[#06327B]/5 flex items-center justify-center text-primary">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900">Lumpsum Wealth Growth</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                Forecast lump sum deposits compounded over long-term timelines using precise frequency models.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-white border border-slate-200/60 rounded-3xl hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 text-left space-y-4 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900">Compounded Returns</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                Watch the magic of returns earning returns over several decades with high precision modeling.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 bg-white border border-slate-200/60 rounded-3xl hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 text-left space-y-4 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900">Long-Term Financial Goals</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                Map estimated returns to targets like retirement, educational setups, and portfolio stability.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          DUAL CALCULATOR SECTION (Light Theme Panels)
          ========================================== */}
      <section id="calculator-section" className="py-24 relative z-10 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* ====================================
                LEFT COLUMN: SIP CALCULATOR
                ==================================== */}
            <div className="p-8 sm:p-10 bg-white border border-slate-200/60 rounded-[32px] flex flex-col justify-between space-y-8 shadow-xl hover:border-slate-300 transition-all duration-300">
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <PiggyBank className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-slate-900">SIP Calculator</h3>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Systematic Investment Plan</span>
                  </div>
                </div>

                {/* Monthly Investment Slider/Input */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center space-x-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-primary" />
                      <span>Monthly Investment</span>
                    </label>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-slate-500 font-bold font-mono">₹</span>
                      <input 
                        type="number"
                        min="500"
                        max="1000000"
                        value={sipMonthly}
                        onChange={(e) => setSipMonthly(Math.max(500, Math.min(1000000, Number(e.target.value))))}
                        className="w-28 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-right text-xs font-bold text-slate-800 font-mono focus:border-primary/50 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="1000000"
                    step="500"
                    value={sipMonthly}
                    onChange={(e) => setSipMonthly(Number(e.target.value))}
                    className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[9px] text-slate-500 font-bold font-mono">
                    <span>₹500</span>
                    <span>₹5L</span>
                    <span>₹10L</span>
                  </div>
                </div>

                {/* Expected Return Slider/Input */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center space-x-1.5">
                      <Percent className="w-3.5 h-3.5 text-primary" />
                      <span>Expected Return (p.a.)</span>
                    </label>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="number"
                        min="1"
                        max="30"
                        step="0.1"
                        value={sipReturn}
                        onChange={(e) => setSipReturn(Math.max(0.1, Math.min(30, Number(e.target.value))))}
                        className="w-20 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-right text-xs font-bold text-slate-800 font-mono focus:border-primary/50 focus:outline-none transition-colors"
                      />
                      <span className="text-xs text-slate-500 font-bold font-mono">%</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="0.5"
                    value={sipReturn}
                    onChange={(e) => setSipReturn(Number(e.target.value))}
                    className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[9px] text-slate-500 font-bold font-mono">
                    <span>1%</span>
                    <span>15%</span>
                    <span>30%</span>
                  </div>
                </div>

                {/* Investment Duration Slider/Input */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span>Investment Duration</span>
                    </label>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="number"
                        min="1"
                        max="40"
                        value={sipYears}
                        onChange={(e) => setSipYears(Math.max(1, Math.min(40, Number(e.target.value))))}
                        className="w-16 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-right text-xs font-bold text-slate-800 font-mono focus:border-primary/50 focus:outline-none transition-colors"
                      />
                      <span className="text-xs text-slate-500 font-bold font-mono">Yrs</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    step="1"
                    value={sipYears}
                    onChange={(e) => setSipYears(Number(e.target.value))}
                    className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[9px] text-slate-500 font-bold font-mono">
                    <span>1 Yr</span>
                    <span>20 Yrs</span>
                    <span>40 Yrs</span>
                  </div>
                </div>

              </div>

              {/* SIP Results Dashboard */}
              <div className="mt-8 pt-8 border-t border-slate-100 space-y-6">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block text-center">MODELED SIP RETROSPECTIVE</span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Invested */}
                  <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-2xl text-center shadow-sm hover:border-primary/25 transition-all duration-300">
                    <span className="text-[9px] text-slate-500 block font-bold uppercase tracking-wider mb-1">Total Invested</span>
                    <span className="text-sm font-extrabold text-slate-900 font-mono truncate block">
                      {formatCurrency(sipResult.investedAmount)}
                    </span>
                  </div>

                  {/* Returns */}
                  <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-2xl text-center shadow-sm hover:border-primary/25 transition-all duration-300">
                    <span className="text-[9px] text-slate-500 block font-bold uppercase tracking-wider mb-1">Est. Returns</span>
                    <span className="text-sm font-extrabold text-primary font-mono truncate block">
                      {formatCurrency(sipResult.estReturns)}
                    </span>
                  </div>

                  {/* Total Value */}
                  <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-2xl text-center shadow-sm hover:border-primary/25 transition-all duration-300">
                    <span className="text-[9px] text-slate-500 block font-bold uppercase tracking-wider mb-1">Total Value</span>
                    <span className="text-sm font-extrabold text-slate-900 font-mono truncate block">
                      {formatCurrency(sipResult.totalValue)}
                    </span>
                  </div>
                </div>

                <a 
                  href="#charts-and-tables" 
                  onClick={() => setActiveChartTab("sip")}
                  className="w-full py-4 text-center bg-primary/5 border border-primary/20 rounded-2xl text-primary font-bold text-xs hover:bg-primary/10 transition-all block font-display"
                >
                  View SIP Forecast Details
                </a>
              </div>

            </div>

            {/* ====================================
                RIGHT COLUMN: LUMPSUM CALCULATOR
                ==================================== */}
            <div className="p-8 sm:p-10 bg-white border border-slate-200/60 rounded-[32px] flex flex-col justify-between space-y-8 shadow-xl hover:border-slate-300 transition-all duration-300">
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#06327B]/5 flex items-center justify-center text-primary">
                    <WalletCards className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-slate-900">Lumpsum Calculator</h3>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">One-Time Capital Investment</span>
                  </div>
                </div>

                {/* Principal Investment Input */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center space-x-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-primary" />
                      <span>One-Time Investment</span>
                    </label>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-slate-500 font-bold font-mono">₹</span>
                      <input 
                        type="number"
                        min="500"
                        max="10000000"
                        value={lumpsumPrincipal}
                        onChange={(e) => setLumpsumPrincipal(Math.max(500, Math.min(10000000, Number(e.target.value))))}
                        className="w-28 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-right text-xs font-bold text-slate-800 font-mono focus:border-primary/50 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="5000000"
                    step="5000"
                    value={lumpsumPrincipal}
                    onChange={(e) => setLumpsumPrincipal(Number(e.target.value))}
                    className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[9px] text-slate-500 font-bold font-mono">
                    <span>₹500</span>
                    <span>₹25L</span>
                    <span>₹50L</span>
                  </div>
                </div>

                {/* Expected Return Input */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center space-x-1.5">
                      <Percent className="w-3.5 h-3.5 text-primary" />
                      <span>Expected Return (p.a.)</span>
                    </label>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="number"
                        min="1"
                        max="30"
                        step="0.1"
                        value={lumpsumReturn}
                        onChange={(e) => setLumpsumReturn(Math.max(0.1, Math.min(30, Number(e.target.value))))}
                        className="w-20 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-right text-xs font-bold text-slate-800 font-mono focus:border-primary/50 focus:outline-none transition-colors"
                      />
                      <span className="text-xs text-slate-500 font-bold font-mono">%</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="0.5"
                    value={lumpsumReturn}
                    onChange={(e) => setLumpsumReturn(Number(e.target.value))}
                    className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[9px] text-slate-500 font-bold font-mono">
                    <span>1%</span>
                    <span>15%</span>
                    <span>30%</span>
                  </div>
                </div>

                {/* Duration Slider/Input */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span>Investment Duration</span>
                    </label>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="number"
                        min="1"
                        max="40"
                        value={lumpsumYears}
                        onChange={(e) => setLumpsumYears(Math.max(1, Math.min(40, Number(e.target.value))))}
                        className="w-16 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-right text-xs font-bold text-slate-800 font-mono focus:border-primary/50 focus:outline-none transition-colors"
                      />
                      <span className="text-xs text-slate-500 font-bold font-mono">Yrs</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    step="1"
                    value={lumpsumYears}
                    onChange={(e) => setLumpsumYears(Number(e.target.value))}
                    className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[9px] text-slate-500 font-bold font-mono">
                    <span>1 Yr</span>
                    <span>20 Yrs</span>
                    <span>40 Yrs</span>
                  </div>
                </div>

                {/* Compounding Frequency Dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center space-x-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                    <span>Compounding Frequency</span>
                  </label>
                  <select 
                    value={lumpsumCompounding}
                    onChange={(e) => setLumpsumCompounding(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-xs font-bold text-slate-850 focus:border-primary/50 focus:outline-none"
                  >
                    <option value={1}>Annually (Modeled Standard)</option>
                    <option value={2}>Half-Yearly</option>
                    <option value={4}>Quarterly</option>
                    <option value={12}>Monthly</option>
                  </select>
                </div>

              </div>

              {/* Lumpsum Results Dashboard */}
              <div className="mt-8 pt-8 border-t border-slate-100 space-y-6">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block text-center">MODELED LUMPSUM RETROSPECTIVE</span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Invested */}
                  <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-2xl text-center shadow-sm hover:border-primary/25 transition-all duration-300">
                    <span className="text-[9px] text-slate-500 block font-bold uppercase tracking-wider mb-1">Principal Capital</span>
                    <span className="text-sm font-extrabold text-slate-900 font-mono truncate block">
                      {formatCurrency(lumpsumResult.principalInvestment)}
                    </span>
                  </div>

                  {/* Growth */}
                  <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-2xl text-center shadow-sm hover:border-primary/25 transition-all duration-300">
                    <span className="text-[9px] text-slate-500 block font-bold uppercase tracking-wider mb-1">Wealth Growth</span>
                    <span className="text-sm font-extrabold text-primary font-mono truncate block">
                      {formatCurrency(lumpsumResult.wealthGrowth)}
                    </span>
                  </div>

                  {/* Total Value */}
                  <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-2xl text-center shadow-sm hover:border-primary/25 transition-all duration-300">
                    <span className="text-[9px] text-slate-500 block font-bold uppercase tracking-wider mb-1">Portfolio Value</span>
                    <span className="text-sm font-extrabold text-slate-900 font-mono truncate block">
                      {formatCurrency(lumpsumResult.totalValue)}
                    </span>
                  </div>
                </div>

                <a 
                  href="#charts-and-tables" 
                  onClick={() => setActiveChartTab("lumpsum")}
                  className="w-full py-4 text-center bg-primary/5 border border-primary/20 rounded-2xl text-primary font-bold text-xs hover:bg-primary/10 transition-all block font-display"
                >
                  View Lumpsum Forecast Details
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          CHARTS SECTION (Light Theme Projection)
          ========================================== */}
      <section id="charts-and-tables" className="py-24 bg-white relative z-10 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-display text-slate-950">
                Estimated Compounded Forecast Growth Over Time
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Visualize how regular compounding scales capital exponentially.
              </p>
            </div>
            
            {/* Tabs selector */}
            <div className="p-1 bg-slate-100 border border-slate-200 rounded-2xl flex items-center space-x-1">
              <button 
                onClick={() => setActiveChartTab("sip")}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeChartTab === "sip" 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                SIP Growth Chart
              </button>
              <button 
                onClick={() => setActiveChartTab("lumpsum")}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeChartTab === "lumpsum" 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Lumpsum Compound Chart
              </button>
            </div>
          </div>

          {/* Recharts Compound Visualization Container */}
          <div className="p-6 sm:p-8 bg-slate-50 border border-slate-200/60 rounded-3xl min-h-[400px] flex flex-col justify-between shadow-sm">
            <div className="flex-grow w-full min-h-[300px] relative">
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart 
                  data={activeChartTab === "sip" ? sipChartData : lumpsumChartData} 
                  margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06327B" stopOpacity={0.25}/>
                      <stop offset="95%" stopColor="#06327B" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorGains" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.35}/>
                      <stop offset="95%" stopColor="#4CAF50" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#94a3b8" 
                    fontSize={10} 
                    tickLine={false} 
                    dy={10}
                  />
                  <YAxis 
                    stroke="#94a3b8" 
                    fontSize={10} 
                    tickLine={false} 
                    tickFormatter={(val) => `₹${val/100000}L`} 
                    dx={-10}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "rgba(255, 255, 255, 0.98)", 
                      borderColor: "rgba(0, 0, 0, 0.05)",
                      borderRadius: "16px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                      color: "#0f172a"
                    }}
                    formatter={(value) => formatCurrency(value)} 
                  />
                  <Legend verticalAlign="top" height={36} iconType="circle"/>
                  <Area 
                    type="monotone" 
                    name="Invested Amount" 
                    dataKey="Invested" 
                    stroke="#06327B" 
                    fillOpacity={1} 
                    fill="url(#colorInvested)" 
                  />
                  <Area 
                    type="monotone" 
                    name="Estimated Returns (Gains)" 
                    dataKey="Gains" 
                    stroke="#4CAF50" 
                    fillOpacity={1} 
                    fill="url(#colorGains)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 mt-6 border-t border-slate-200/60 pt-6 font-medium">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 bg-[#06327B] rounded-full"></span>
                <span>Total Principal Deployed</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 bg-[#4CAF50] rounded-full"></span>
                <span>Modeled Compound Gains</span>
              </div>
            </div>
          </div>

          {/* ==========================================
              MONTHLY / YEARLY BREAKDOWN TABLES (Light Theme tables)
              ========================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-12">
            
            {/* SIP Yearly Table */}
            <div className="p-6 sm:p-8 bg-slate-50 border border-slate-200/60 rounded-3xl flex flex-col justify-between space-y-6 shadow-sm">
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="text-lg font-bold font-display text-slate-900">SIP Projection Matrix</h3>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Modeled Year-on-Year Growth</span>
                </div>
                
                <button 
                  onClick={() => exportToCSV(sipChartData, "SIP_Compounding_Table.csv")}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-650 text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center space-x-2 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>

              {/* Table Search */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input 
                  type="text"
                  placeholder="Filter by year (e.g. Yr 1)..."
                  value={sipTableSearch}
                  onChange={(e) => {
                    setSipTableSearch(e.target.value);
                    setSipTablePage(1);
                  }}
                  className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 focus:border-primary/50 focus:outline-none"
                />
              </div>

              {/* Table Container */}
              <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="p-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Year</th>
                      <th className="p-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Invested</th>
                      <th className="p-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Returns (Gains)</th>
                      <th className="p-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Total Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-mono font-medium text-slate-600">
                    {sipPaginatedData.length > 0 ? (
                      sipPaginatedData.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4 font-display font-bold text-slate-800">{row.name}</td>
                          <td className="p-4 text-slate-600">{formatCurrency(row.Invested)}</td>
                          <td className="p-4 text-primary font-bold">{formatCurrency(row.Gains)}</td>
                          <td className="p-4 text-[#06327B] font-bold">{formatCurrency(row.Total)}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="p-8 text-center text-slate-400 font-display">No rows matching query</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Table Pagination */}
              {sipTotalPages > 1 && (
                <div className="flex justify-between items-center text-xs pt-4">
                  <span className="text-slate-500 font-bold">Page {sipTablePage} of {sipTotalPages}</span>
                  <div className="flex space-x-2">
                    <button 
                      disabled={sipTablePage === 1}
                      onClick={() => setSipTablePage((p) => Math.max(1, p - 1))}
                      className="px-3 py-1.5 bg-white border border-slate-205 rounded-lg text-slate-600 font-bold hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none shadow-sm"
                    >
                      Prev
                    </button>
                    <button 
                      disabled={sipTablePage === sipTotalPages}
                      onClick={() => setSipTablePage((p) => Math.min(sipTotalPages, p + 1))}
                      className="px-3 py-1.5 bg-white border border-slate-205 rounded-lg text-slate-600 font-bold hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none shadow-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Lumpsum Yearly Table */}
            <div className="p-6 sm:p-8 bg-slate-50 border border-slate-200/60 rounded-3xl flex flex-col justify-between space-y-6 shadow-sm">
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="text-lg font-bold font-display text-slate-900">Lumpsum Projection Matrix</h3>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Modeled Year-on-Year Growth</span>
                </div>
                
                <button 
                  onClick={() => exportToCSV(lumpsumChartData, "Lumpsum_Compounding_Table.csv")}
                  className="px-4 py-2 bg-white border border-slate-205 rounded-xl text-slate-650 text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center space-x-2 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>

              {/* Table Search */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input 
                  type="text"
                  placeholder="Filter by year (e.g. Yr 1)..."
                  value={lumpsumTableSearch}
                  onChange={(e) => {
                    setLumpsumTableSearch(e.target.value);
                    setLumpsumTablePage(1);
                  }}
                  className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 focus:border-primary/50 focus:outline-none"
                />
              </div>

              {/* Table Container */}
              <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="p-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Year</th>
                      <th className="p-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Invested</th>
                      <th className="p-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Growth (Gains)</th>
                      <th className="p-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Total Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-mono font-medium text-slate-600">
                    {lumpsumPaginatedData.length > 0 ? (
                      lumpsumPaginatedData.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4 font-display font-bold text-slate-800">{row.name}</td>
                          <td className="p-4 text-slate-600">{formatCurrency(row.Invested)}</td>
                          <td className="p-4 text-primary font-bold">{formatCurrency(row.Gains)}</td>
                          <td className="p-4 text-[#06327B] font-bold">{formatCurrency(row.Total)}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="p-8 text-center text-slate-400 font-display">No rows matching query</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Table Pagination */}
              {lumpsumTotalPages > 1 && (
                <div className="flex justify-between items-center text-xs pt-4">
                  <span className="text-slate-500 font-bold">Page {lumpsumTablePage} of {lumpsumTotalPages}</span>
                  <div className="flex space-x-2">
                    <button 
                      disabled={lumpsumTablePage === 1}
                      onClick={() => setLumpsumTablePage((p) => Math.max(1, p - 1))}
                      className="px-3 py-1.5 bg-white border border-slate-205 rounded-lg text-slate-600 font-bold hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none shadow-sm"
                    >
                      Prev
                    </button>
                    <button 
                      disabled={lumpsumTablePage === lumpsumTotalPages}
                      onClick={() => setLumpsumTablePage((p) => Math.min(lumpsumTotalPages, p + 1))}
                      className="px-3 py-1.5 bg-white border border-slate-205 rounded-lg text-slate-600 font-bold hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none shadow-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          INVESTMENT INSIGHTS SECTION (Light Cards Grid)
          ========================================== */}
      <section className="py-24 relative z-10 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] text-primary font-bold uppercase tracking-widest block">WHY WEALTH PRESERVATION COUNTS</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight font-display text-slate-905">
              Why Mutual Fund Investments Matter
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Card 1 */}
            <div className="p-8 bg-white border border-slate-200/60 rounded-3xl flex items-start space-x-6 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <PiggyBank className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold font-display text-slate-900">Disciplined SIP Investing</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  SIP investing helps build long-term wealth through disciplined monthly contributions and compounding growth. Regular contributions average out cost base and secure compounding returns over longer-term horizons.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-white border border-slate-200/60 rounded-3xl flex items-start space-x-6 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-[#06327B]/5 flex items-center justify-center text-primary shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold font-display text-slate-900">Compounding Benefits</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Compounding helps your investments generate returns on returns over time, accelerating wealth creation. Over years, returns on reinvested profits scale faster than the underlying principal.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-white border border-slate-200/60 rounded-3xl flex items-start space-x-6 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Landmark className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold font-display text-slate-900">Financial Goal Planning</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Mutual fund investments help achieve retirement goals, education planning, and wealth preservation. Structuring standard asset allocations maps to custom investment requirements.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-8 bg-white border border-slate-200/60 rounded-3xl flex items-start space-x-6 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <WalletCards className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold font-display text-slate-900">Risk Diversification</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Diversified mutual fund portfolios reduce overall investment risk while improving long-term stability. By distributing capital across various asset classes, market vulnerabilities are kept minimized.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          FAQ SECTION (Light Accordion)
          ========================================== */}
      <section className="py-24 bg-slate-50 relative z-10 border-b border-slate-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block">GET THE FACTS</span>
            <h2 className="text-3xl font-semibold tracking-tight font-display text-slate-950">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden hover:border-[#4CAF50]/30 transition-colors shadow-sm"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center font-bold text-sm sm:text-base font-display text-slate-900 focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-primary shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4 font-medium">
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

      {/* ==========================================
          CTA BANNER SECTION (Dark Brand Gradient matching rest of site)
          ========================================== */}
      <section className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 bg-gradient-to-r from-[#379237] to-[#06327B] rounded-[36px] shadow-2xl relative overflow-hidden flex flex-col sm:flex-row justify-between items-center gap-8 text-left text-white group">
            
            {/* Background absolute highlight orb */}
            <div className="absolute -bottom-24 -right-24 bg-white/10 w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none"></div>

            <div className="space-y-4 max-w-xl relative z-10">
              <span className="text-[9px] uppercase font-extrabold tracking-widest text-[#4CAF50] bg-white/10 px-3 py-1 rounded-full inline-block">
                BEGIN YOUR WEALTH PORTFOLIO
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white leading-tight">
                Would you like to start a Wealth Creation with us?
              </h2>
              <p className="text-slate-200/80 text-xs sm:text-sm leading-relaxed font-light">
                Our financial advisors help you build personalized SIP and mutual fund investment strategies designed for long-term wealth growth and financial security.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto relative z-10">
              <a 
                href="tel:+919160110888" 
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 transition-all text-[#06327B] font-bold rounded-full flex items-center justify-center space-x-3 shadow-lg"
              >
                <Calculator className="w-4 h-4" />
                <span>+91 9160110888</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          ADVISORY TRUST & DISCLAIMER SECTION
          ========================================== */}
      <section className="pb-16 relative z-10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border border-slate-200/60 p-4 rounded-xl flex items-center justify-center space-x-3 text-[10px] sm:text-xs text-slate-500 backdrop-blur-md shadow-sm">
            <Shield className="w-4 h-4 text-primary shrink-0" />
            <span>Mutual fund returns simulated are based on typical historical indices. Actual payouts depend entirely on market parameters and compound frequencies.</span>
          </div>
        </div>
      </section>

    </div>
  );
}
