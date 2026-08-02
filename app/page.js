'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Shield, Award, Users, TrendingUp, DollarSign, 
  BarChart2, Landmark, CheckCircle, ChevronDown, Play, Star
} from 'lucide-react';

// Custom CountUp Animation
function Counter({ value, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;
    
    let totalMiliseconds = duration;
    let incrementTime = Math.abs(Math.floor(totalMiliseconds / end));
    
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [value, duration]);
  
  return <span>{count}{suffix}</span>;
}

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "What is CultMoney and who owns it?",
      a: "CultMoney is a premium wealth management and financial advisory brand operated by Sahiani Finvest Pvt Ltd. The firm was founded by Mahesh Mittapalli, dedicated to bringing structured, transparent, and high-impact wealth advisory lifecycles to clients."
    },
    {
      q: "Is CultMoney registered with AMFI?",
      a: "Yes, Sahiani Finvest Pvt Ltd (operating under the brand name CultMoney) is an AMFI registered Mutual Fund Distributor with ARN code ARN-276771. Registration Date: 13/09/2023 | Validity: 31/10/2028."
    },
    {
      q: "What advisory and investment services do you offer?",
      a: "We provide comprehensive wealth advisory desks including custom asset allocation, mutual fund distribution, portfolio restructuring, Systematic Investment Plans (SIP), Systematic Withdrawal Plans (SWP), tax optimization, and bespoke high-net-worth (HNW) financial planning."
    },
    {
      q: "Where is CultMoney located and how can I contact the desks?",
      a: "Our corporate advisory desk is located at D No 3-4-126, 1st Floor, Mallapur, Nacharam – Habsiguda Road, Hyderabad - 500076. You can call our advisory desk at +91 9160110888 or email us directly at info@cultmoney.com."
    },
    {
      q: "How does CultMoney approach portfolio transparency?",
      a: "We believe in client-first transparency. All commission disclosures, asset allocation models, performance statements, and advisory lifecycle milestones are documented and shared live via our secure Client Portfolio Portal."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.cultmoney.in/#organization",
        "name": "CultMoney",
        "legalName": "Sahiani Finvest Pvt Ltd",
        "url": "https://www.cultmoney.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.cultmoney.in/CultMoneyicon.svg"
        },
        "sameAs": [
          "https://www.facebook.com/cultmoney",
          "https://www.linkedin.com/company/cultmoney"
        ]
      },
      {
        "@type": "FinancialService",
        "@id": "https://www.cultmoney.in/#service",
        "name": "CultMoney - Premium Wealth Management",
        "url": "https://www.cultmoney.in",
        "logo": "https://www.cultmoney.in/CultMoneyicon.svg",
        "telephone": "+91 9160110888",
        "email": "info@cultmoney.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "D No 3-4-126, 1st Floor, Mallapur, Nacharam – Habsiguda Road",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "postalCode": "500076",
          "addressCountry": "IN"
        },
        "priceRange": "$$$",
        "parentOrganization": {
          "@id": "https://www.cultmoney.in/#organization"
        },
        "knowsAbout": [
          "Wealth Management",
          "Mutual Funds Distribution",
          "Financial Advisory",
          "Systematic Withdrawal Plan (SWP)",
          "SIP Planning",
          "Portfolio Management Services"
        ],
        "areaServed": "IN"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 14 }
    }
  };

  const offerServices = [
    {
      title: 'Shares',
      desc: 'We provide expert guidance and support for your stock market investments. Our team helps you understand market trends and make informed investment decisions.',
      icon: <TrendingUp className="w-7 h-7 text-primary" />
    },
    {
      title: 'Mutual Funds',
      desc: 'Mutual funds are professionally managed investment portfolios designed to achieve financial goals. We offer a wide range of mutual fund investment solutions.',
      icon: <DollarSign className="w-7 h-7 text-primary" />
    },
    {
      title: 'Insurance',
      desc: 'Insurance is a financial product that provides protection against financial losses. We help you choose suitable insurance plans for health, life, and business protection.',
      icon: <Shield className="w-7 h-7 text-primary" />
    }
  ];

  const whyChooseUsFeatures = [
    {
      title: 'Shares',
      desc: 'Professional investment guidance and market analysis to help you make informed trading decisions.',
      icon: <TrendingUp className="w-5 h-5 text-primary" />
    },
    {
      title: 'Mutual Funds',
      desc: 'Diversified mutual fund investment options designed for long-term wealth creation.',
      icon: <DollarSign className="w-5 h-5 text-primary" />
    },
    {
      title: 'Insurance',
      desc: 'Comprehensive insurance solutions tailored to your personal and business requirements.',
      icon: <Shield className="w-5 h-5 text-primary" />
    },
    {
      title: 'FD And Bonds',
      desc: 'Secure investment opportunities with fixed returns and stable financial growth.',
      icon: <Award className="w-5 h-5 text-primary" />
    },
    {
      title: 'PMS And AIF',
      desc: 'Portfolio management services and alternative investment funds for premium wealth management.',
      icon: <BarChart2 className="w-5 h-5 text-primary" />
    },
    {
      title: 'Taxation',
      desc: 'Professional tax planning and compliance solutions for individuals and businesses.',
      icon: <Landmark className="w-5 h-5 text-primary" />
    }
  ];

  const testimonials = [
    {
      text: '“CultMoney Financial Services has completely transformed my investment planning journey. Their professional guidance and support helped me make confident financial decisions.”',
      author: 'Aravind K.',
      desc: 'Independent Investor'
    },
    {
      text: '“The team at CultMoney Financial Services provides excellent financial advice and investment strategies. Their service quality and client support are outstanding.”',
      author: 'Rajesh Kumar',
      desc: 'Business Director'
    },
    {
      text: '“My investment experience has been smooth and rewarding because of CultMoney Financial Services. Their experts helped me achieve better returns.”',
      author: 'Srinivas Murthy',
      desc: 'HNI Client'
    },
    {
      text: '“Thanks to CultMoney Financial Services for their professional support and investment solutions. Their team truly understands client financial goals.”',
      author: 'Nisha Sharma',
      desc: 'Corporate Executive'
    },
    {
      text: '“CultMoney Financial Services has been a great partner for financial planning. Their trusted support and personalized solutions helped me significantly.”',
      author: 'Priya Reddy',
      desc: 'Consulting Professional'
    }
  ];

  return (
    <div className="relative pt-24 overflow-x-hidden bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Background soft styling decoration */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90 z-0"></div>

      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center py-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ x: -15 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 space-y-8"
            >
              <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-200/60 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  AMFI Registered Mutual Fund Distributor
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-display tracking-tight text-slate-950 leading-tight">
                We Build your Strong <br />
                <span className="text-gradient">Financial Success</span>
              </h1>

              <p className="text-base md:text-lg text-slate-500 max-w-2xl leading-relaxed">
                CultMoney Financial Services is committed to providing comprehensive financial solutions that are tailored to meet your unique needs and goals. Whether you&apos;re an individual, family, or business, our experienced team is here to guide you through the complexities of financial planning, taxation, investment management, and more.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  href="/services/financial-services"
                  className="flex items-center space-x-2 bg-brand-gradient text-white font-semibold px-8 py-4 rounded-full shadow-glow-green hover:brightness-110 active:scale-95 transition-all duration-300"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/about"
                  aria-label="Discover more about Cultmoney's financial services and background"
                  className="bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold px-8 py-4 rounded-full transition-all duration-300"
                >
                  Discover More
                </Link>
              </div>
            </motion.div>

            {/* Right Media Graphic */}
            <motion.div 
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 relative"
            >
              <div className="glass-panel p-3 rounded-4xl bg-white/80 overflow-hidden shadow-premium">
                <div className="relative h-[320px] md:h-[400px] w-full rounded-3xl overflow-hidden">
                  <Image 
                    src="/images/hero_finance_luxury.png"
                    alt="CultMoney Luxury Wealth Management Office"
                    fill
                    sizes="(max-w-768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  
                  {/* Overlay badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur border border-slate-200/50 p-4 rounded-2xl flex items-center justify-between shadow-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold">AMFI License</span>
                        <span className="text-xs font-bold text-slate-800">ARN-276771 Verified</span>
                      </div>
                    </div>
                    <span className="text-[10px] bg-[#1B5E20]/10 text-[#1B5E20] font-bold px-2.5 py-1 rounded-full">
                      100% Certified
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. SIP Section */}
      <section className="py-24 relative z-10 bg-slate-50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-6">
              <div className="glass-panel p-3 rounded-4xl bg-white shadow-sm">
                <div className="relative h-[280px] md:h-[350px] w-full rounded-3xl overflow-hidden">
                  <Image 
                    src="/images/sip_savings.png"
                    alt="SIP Planner and Savings Concept"
                    fill
                    sizes="(max-w-768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E20]">Compounding Calculator</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-950">
                SIP Planner
              </h2>
              <div className="inline-block bg-[#1B5E20]/10 text-[#1B5E20] font-bold text-xs px-3 py-1 rounded-full">
                Daily SIP
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Take charge of your long-term dreams by estimating systematic gains. Start small, accumulate steadily, and leverage compounding dynamics to secure a strong financial cushion.
              </p>
              <div className="pt-2">
                <Link
                  href="/services/mutual-fund-calculator"
                  aria-label="Calculate systematic investment returns now"
                  className="inline-flex items-center space-x-2 bg-brand-gradient text-white font-semibold px-8 py-4 rounded-full shadow-glow-green hover:brightness-110 transition-all duration-300"
                >
                  <span>Calculate Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. What We Offer Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E20]">Service Packages</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-950">
              What We Offer:
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base">
              At CultMoney Financial Services, we offer a comprehensive suite of financial services designed to help you achieve your financial goals and secure your financial future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerServices.map((offer, idx) => (
              <div 
                key={idx}
                className="glass-panel p-8 rounded-3xl flex flex-col justify-between hover:scale-[1.02] bg-white"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm">
                    {offer.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 font-display">{offer.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{offer.desc}</p>
                </div>
                <div className="pt-8">
                  <Link
                    href="/services/financial-services"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-[#1B5E20] hover:text-slate-900 transition-colors"
                  >
                    <span>Learn more <span className="sr-only">about our {offer.title} services</span></span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-24 relative z-10 bg-slate-50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E20]">Key Advantages</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-950">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsFeatures.map((feat, idx) => (
              <div 
                key={idx}
                className="glass-panel p-6 rounded-3xl bg-white flex space-x-4 items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  {feat.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-800 font-display">{feat.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Financial Freedom Section (Interactive Presentation Frame) */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E20]">Your Destination</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 mt-2">
              Financial Freedom
            </h2>
          </div>

          {/* Luxury Video Overlay Mockup */}
          <div className="max-w-5xl mx-auto">
            <div className="glass-panel p-4 rounded-4xl bg-white shadow-premium relative">
              <div className="relative h-[320px] md:h-[480px] w-full rounded-3xl overflow-hidden bg-slate-950">
                <Image 
                  src="/images/financial_freedom.png"
                  alt="Financial Freedom Lifestyle"
                  fill
                  sizes="(max-w-1024px) 100vw, 80vw"
                  className="object-cover opacity-80"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/20 hover:bg-slate-950/30 transition-all duration-300">
                  <div className="w-20 h-20 rounded-full bg-white text-primary flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-300">
                    <Play className="w-8 h-8 fill-primary translate-x-0.5" />
                  </div>
                  <span className="text-white text-xs font-semibold uppercase tracking-widest mt-4">
                    Watch Introduction Video
                  </span>
                </div>

                {/* Progress bar timeline */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center space-x-3 text-white text-[10px] font-mono">
                  <span>0:00</span>
                  <div className="flex-grow h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '35%' }}></div>
                  </div>
                  <span>4:15</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Founder Section */}
      <section className="py-24 bg-slate-50/30 border-y border-slate-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left portrait */}
            <div className="lg:col-span-5">
              <div className="glass-panel p-3 rounded-4xl bg-white shadow-sm relative group overflow-hidden">
                <div className="relative h-[350px] md:h-[480px] w-full rounded-3xl overflow-hidden">
                  <Image 
                    src="/images/founder_portrait.jpeg"
                    alt="Mahesh Mittapalli - Founder, MD & CEO"
                    fill
                    sizes="(max-w-768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay badge with experience */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-slate-100/50 flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-800">20+ Years</div>
                      <div className="text-xs text-slate-500 font-medium">Financial Leadership</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right letter */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E20]">Founder & Leadership</span>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 leading-tight">Mahesh Mittapalli</h2>
                <p className="text-sm md:text-base font-semibold text-secondary tracking-wide flex flex-wrap items-center gap-2">
                  <span>MBA, NISM, CWM</span>
                  <span className="hidden sm:inline text-slate-300">&bull;</span>
                  <span>Founder, MD & CEO</span>
                </p>
              </div>
              <div className="h-1 w-20 bg-brand-gradient rounded-full"></div>
              
              <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
                <p>
                  <strong>Mahesh Mittapalli (MBA, NISM, CWM)</strong> is the Founder, MD & CEO of Cult Money. A seasoned financial leader with over two decades of experience across State Bank of India, HDFC Life, Prabhudas Lilladher, and Geojit Financial Services, Mahesh specializes in comprehensive wealth management, portfolio planning, mutual funds, insurance, and strategic business growth.
                </p>
                <p>
                  Under his leadership, Sahiani Finvest / Cult Money is dedicated to delivering transparent, high-impact financial guidance that helps individuals and businesses achieve lasting financial growth and stability.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-4 items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 block text-base font-display">Mahesh Mittapalli</span>
                  <span className="text-xs text-slate-500 font-medium">Founder, MD & CEO</span>
                </div>
                <span className="text-xs bg-secondary/10 text-secondary px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">
                  Cult Money
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Company Mission Section */}
      <section className="py-24 relative z-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E20]">Our Core Mission</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 leading-tight">
            We bring innovation and creative Financial freedom to the CultMoney Financial Services
          </h2>
          <p className="text-slate-500 max-w-3xl mx-auto text-base leading-relaxed">
            Performance-driven financial solutions and personalized services designed to empower individuals and businesses in achieving long-term financial growth and success.
          </p>
        </div>
      </section>

      {/* 8. Stats Section */}
      <section className="py-16 bg-white border-y border-slate-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <p className="text-4xl md:text-5xl font-extrabold text-slate-950 font-display">
                <Counter value="20" suffix=" Years" />
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Industry Experience
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl md:text-5xl font-extrabold text-slate-950 font-display">
                <Counter value="200" suffix=" +" />
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Happy Customers
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl md:text-5xl font-extrabold text-slate-950 font-display">
                <Counter value="10" suffix=" cr" />
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Managing AUM
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl md:text-5xl font-extrabold text-slate-950 font-display">
                <Counter value="25" />
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Business Partners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E20]">Testimonials</span>
            <div className="flex items-center justify-center space-x-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900">
              Excellent 4.8 of 5 stars rating
            </h2>
            <p className="text-slate-600 text-xs uppercase tracking-wider font-semibold">
              Based on client reviews
            </p>
          </div>

          <div className="flex overflow-x-auto gap-8 pb-8 no-scrollbar snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            {testimonials.map((test, idx) => (
              <div 
                key={idx}
                className="glass-panel p-8 rounded-3xl bg-slate-50 flex flex-col justify-between min-w-[300px] md:min-w-[400px] max-w-[450px] shrink-0 snap-start snap-always"
              >
                <p className="text-sm text-slate-600 italic leading-relaxed mb-6">
                  {test.text}
                </p>
                <div>
                  <span className="font-bold text-slate-800 block">{test.author}</span>
                  <span className="text-xs text-slate-500">{test.desc}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9.5 FAQ Section for SEO / AEO / GEO */}
      <section className="py-24 bg-slate-50 border-y border-slate-200/50 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E20]">Frequently Asked Questions</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900">
              Wealth Advisory FAQ
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Clear, transparent answers to common questions about our wealth advisory and financial services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="glass-panel rounded-2xl bg-white border border-slate-200/60 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between text-slate-900 font-semibold text-base focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 text-sm text-slate-600 border-t border-slate-100 pt-4 leading-relaxed">
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

      {/* 10. Call to Action */}
      <section className="py-24 relative overflow-hidden z-10 bg-white border-t border-slate-200/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 bg-white border border-slate-200/60 p-12 rounded-4xl shadow-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E20]">Connect With Us</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 max-w-2xl mx-auto">
            Ready to Begin Your Wealth Creation Journey?
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            Get connected with certified investment specialists to craft or review your existing asset structure. Book your premium advisory session today.
          </p>
          <div className="flex justify-center space-x-4 pt-4">
            <Link 
              href="/contact"
              className="bg-brand-gradient text-white font-bold px-8 py-4 rounded-full shadow-glow-green hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Schedule Advisor Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="https://wa.me/919160110888" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Cultmoney WhatsApp advisor"
              className="bg-[#075E54] text-white font-bold px-8 py-4 rounded-full hover:brightness-110 transition-all duration-300 shadow-sm"
            >
              WhatsApp Advisor
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
