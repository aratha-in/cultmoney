'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Clock3, 
  CalendarCheck, 
  Globe, 
  Facebook, 
  Linkedin, 
  Instagram,
  ArrowRight,
  CheckCircle,
  MessageSquare
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const floatingOrb = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingOrbReverse = {
    animate: {
      y: [0, 15, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] text-slate-900 overflow-hidden font-sans selection:bg-[#4CAF50] selection:text-white relative pt-20">
      
      {/* Dynamic Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          variants={floatingOrb}
          animate="animate"
          className="absolute -top-40 -left-40 w-96 h-96 bg-[#4CAF50]/5 rounded-full blur-[100px]"
        />
        <motion.div 
          variants={floatingOrbReverse}
          animate="animate"
          className="absolute top-[40%] right-[-100px] w-[500px] h-[500px] bg-[#06327B]/5 rounded-full blur-[120px]"
        />
        <motion.div 
          variants={floatingOrb}
          animate="animate"
          className="absolute bottom-[-100px] left-[20%] w-80 h-80 bg-[#379237]/5 rounded-full blur-[90px]"
        />
      </div>

      {/* 1. HERO SECTION (Light Theme Consistent with Home & About) */}
      <section className="relative py-20 md:py-28 overflow-hidden z-10 flex items-center justify-center bg-white border-b border-slate-100">
        {/* Background Image with elegant light overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80" 
            alt="CultMoney Luxury Wealth Management Office"
            fill
            sizes="100vw"
            priority
            className="w-full h-full object-cover opacity-[0.07]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-[#F8FAF8]/98 to-white backdrop-blur-[1px]"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[#4CAF50] block">
              SAHIANI FINANCIAL SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-display tracking-tight text-slate-950 leading-tight">
              Contact <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">Us</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-medium"
          >
            Contact us today — choose from the options below to reach our qualified team. We are here to help you with expert financial guidance and investment support.
          </motion.p>

          {/* Floating Glass Badges */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-6"
          >
            {[
              { text: "Trusted Financial Advisory", icon: <ShieldCheck className="w-5 h-5 text-[#4CAF50]" /> },
              { text: "24×7 Client Assistance", icon: <Clock3 className="w-5 h-5 text-[#4CAF50]" /> },
              { text: "Wealth Management Experts", icon: <CalendarCheck className="w-5 h-5 text-[#4CAF50]" /> }
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white/80 border border-slate-200/60 backdrop-blur-md rounded-2xl py-4 px-6 flex items-center justify-center space-x-3 text-slate-800 text-sm font-semibold shadow-sm hover:shadow-md transition-all"
              >
                {badge.icon}
                <span>{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. TOP CONTACT CARDS SECTION */}
      <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Card 1: Reach Us */}
          <motion.div 
            variants={fadeIn}
            whileHover={{ y: -8, boxShadow: "0 30px 60px -15px rgba(10, 37, 64, 0.08)" }}
            className="bg-white border border-slate-200/60 rounded-[24px] p-8 shadow-md flex flex-col items-center text-center space-y-4 group transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#06327B]/5 text-[#06327B] flex items-center justify-center group-hover:bg-[#06327B] group-hover:text-white transition-all duration-300 shadow-sm">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#06327B] tracking-tight font-display">Reach Us</h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs font-medium">
              P No 62 Laxma Reddy Colony<br />
              Boduppal Hyderabad Telangana
            </p>
          </motion.div>

          {/* Card 2: Email */}
          <motion.div 
            variants={fadeIn}
            whileHover={{ y: -8, boxShadow: "0 30px 60px -15px rgba(10, 37, 64, 0.08)" }}
            className="bg-white border border-slate-200/60 rounded-[24px] p-8 shadow-md flex flex-col items-center text-center space-y-4 group transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#4CAF50]/5 text-[#4CAF50] flex items-center justify-center group-hover:bg-[#4CAF50] group-hover:text-white transition-all duration-300 shadow-sm">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#06327B] tracking-tight font-display">Email Address</h3>
            <a 
              href="mailto:info@cultmoney.com" 
              className="text-slate-600 hover:text-[#4CAF50] text-sm font-bold transition-colors leading-relaxed"
            >
              info@cultmoney.com
            </a>
          </motion.div>

          {/* Card 3: Phones */}
          <motion.div 
            variants={fadeIn}
            whileHover={{ y: -8, boxShadow: "0 30px 60px -15px rgba(10, 37, 64, 0.08)" }}
            className="bg-white border border-slate-200/60 rounded-[24px] p-8 shadow-md flex flex-col items-center text-center space-y-4 group transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#379237]/5 text-[#379237] flex items-center justify-center group-hover:bg-[#379237] group-hover:text-white transition-all duration-300 shadow-sm">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#06327B] tracking-tight font-display">Contact Numbers</h3>
            <div className="flex flex-col space-y-1">
              <a 
                href="tel:+919160110888" 
                className="text-slate-600 hover:text-[#4CAF50] text-sm font-bold transition-colors"
              >
                +91 9160110888
              </a>
              <a 
                href="tel:+916304114920" 
                className="text-slate-600 hover:text-[#4CAF50] text-sm font-bold transition-colors"
              >
                +91 6304114920
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. CONSULTATION SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Premium Form */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white border border-slate-200/60 rounded-[32px] p-8 md:p-12 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#4CAF50] block">
                  ADVISORY SERVICE DESK
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#06327B] tracking-tight font-display">
                  Request Free Consultation
                </h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                  Connect with our experienced financial advisors for personalized financial planning, wealth management, investment guidance, retirement planning, and taxation solutions.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2 relative">
                    <label className={`text-xs font-bold transition-colors ${focusedField === 'name' ? 'text-[#4CAF50]' : 'text-slate-600'}`}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full bg-slate-50/50 border rounded-2xl py-3.5 px-5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none transition-all duration-300 ${focusedField === 'name' ? 'border-[#4CAF50] bg-white ring-4 ring-[#4CAF50]/10 shadow-md' : 'border-slate-200'}`}
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  {/* Phone Number field */}
                  <div className="space-y-2 relative">
                    <label className={`text-xs font-bold transition-colors ${focusedField === 'phone' ? 'text-[#4CAF50]' : 'text-slate-600'}`}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full bg-slate-50/50 border rounded-2xl py-3.5 px-5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none transition-all duration-300 ${focusedField === 'phone' ? 'border-[#4CAF50] bg-white ring-4 ring-[#4CAF50]/10 shadow-md' : 'border-slate-200'}`}
                      placeholder="e.g. +91 98765 43210"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="space-y-2 relative">
                  <label className={`text-xs font-bold transition-colors ${focusedField === 'email' ? 'text-[#4CAF50]' : 'text-slate-600'}`}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-slate-50/50 border rounded-2xl py-3.5 px-5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none transition-all duration-300 ${focusedField === 'email' ? 'border-[#4CAF50] bg-white ring-4 ring-[#4CAF50]/10 shadow-md' : 'border-slate-200'}`}
                    placeholder="e.g. john@company.com"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2 relative">
                  <label className={`text-xs font-bold transition-colors ${focusedField === 'message' ? 'text-[#4CAF50]' : 'text-slate-600'}`}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-slate-50/50 border rounded-2xl py-3.5 px-5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none resize-none transition-all duration-300 ${focusedField === 'message' ? 'border-[#4CAF50] bg-white ring-4 ring-[#4CAF50]/10 shadow-md' : 'border-slate-200'}`}
                    placeholder="Describe your wealth planning goals or questions..."
                  />
                </div>

                {/* Submit button with animations */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-[#4CAF50] to-[#06327B] text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center justify-center space-x-2"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Schedule Consultation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#379237] to-[#06327B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                </motion.button>

                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#4CAF50]/10 border border-[#4CAF50]/20 text-[#379237] text-sm py-4 px-5 rounded-2xl flex items-center space-x-3 font-semibold justify-center"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Inquiry submitted! Our wealth manager will call you within 24 business hours.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Right Side: Google Map & Contact Details Card */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            {/* Embedded Google Map with grayscale overlay to fit light theme */}
            <div className="bg-white border border-slate-200 rounded-[28px] overflow-hidden h-[300px] shadow-lg relative group">
              <iframe
                src="https://maps.google.com/maps?q=P%20No%2062%20Laxma%20Reddy%20Colony%20Boduppal%20Hyderabad%20Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Sidebar Details Block */}
            <div className="bg-white border border-slate-200/60 rounded-[28px] p-8 shadow-lg flex-grow space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#4CAF50]">
                  OFFICE ASSISTANCE
                </span>
                <h3 className="text-2xl font-bold text-[#06327B] font-display">Get In Touch</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#06327B] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 block tracking-wider">
                      Reach Us
                    </span>
                    <p className="text-slate-700 text-sm font-semibold">
                      P No 62 Laxma Reddy Colony Boduppal Hyderabad Telangana
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 border-t border-slate-100 pt-4">
                  <Mail className="w-5 h-5 text-[#06327B] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 block tracking-wider">
                      Email Address
                    </span>
                    <a href="mailto:info@cultmoney.com" className="text-slate-700 hover:text-[#4CAF50] text-sm font-bold transition-colors">
                      info@cultmoney.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 border-t border-slate-100 pt-4">
                  <Phone className="w-5 h-5 text-[#06327B] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 block tracking-wider">
                      Phone Numbers
                    </span>
                    <div className="flex flex-col space-y-0.5">
                      <a href="tel:+919160110888" className="text-slate-700 hover:text-[#4CAF50] text-sm font-bold transition-colors">
                        +91 9160110888
                      </a>
                      <a href="tel:+916304114920" className="text-slate-700 hover:text-[#4CAF50] text-sm font-bold transition-colors">
                        +91 6304114920
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 4. INFORMATION STRIP SECTION (Light Background with White Cards consistent with About page) */}
      <section className="py-24 bg-slate-50 border-y border-slate-200/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient(circle at bottom right, rgba(76, 175, 80, 0.03), transparent) pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">
              STAY CONNECTED WITH OUR EXPERTISE
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-[#06327B]">
              Wealth Advisory Insights
            </h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Card 1: Client Support */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -8 }}
              className="bg-white border border-slate-200/60 rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#4CAF50]/10 flex items-center justify-center text-[#4CAF50]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold font-display text-[#06327B]">Client Support</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                  This contact section provides multiple ways to reach out and emphasizes the accessibility of CultMoney Financial Services to support your financial needs.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Business Hours */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -8 }}
              className="bg-white border border-slate-200/60 rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#06327B]/5 flex items-center justify-center text-[#06327B]">
                  <Clock3 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold font-display text-[#06327B]">Business Hours</h4>
                <div className="space-y-1 text-slate-500 text-xs font-medium">
                  <p className="font-bold text-slate-700">Monday to Friday:</p>
                  <p>9:00 AM – 5:00 PM</p>
                  <p className="font-bold text-slate-700 mt-2">Saturday and Sunday:</p>
                  <p>Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Follow Us */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -8 }}
              className="bg-white border border-slate-200/60 rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#379237]/10 flex items-center justify-center text-[#4CAF50]">
                  <Globe className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold font-display text-[#06327B]">Follow Us</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                  Stay connected on social media for financial updates, investment insights, market trends, and wealth management tips.
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-2">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-50 hover:bg-[#06327B] text-slate-600 hover:text-white hover:scale-110 transition-all shadow-sm">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-50 hover:bg-[#379237] text-slate-600 hover:text-white hover:scale-110 transition-all shadow-sm">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-50 hover:bg-[#06327B]/60 text-slate-600 hover:text-white hover:scale-110 transition-all shadow-sm">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Card 4: Schedule a Consultation */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -8 }}
              className="bg-white border border-slate-200/60 rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#4CAF50]/10 flex items-center justify-center text-[#4CAF50]">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold font-display text-[#06327B]">Schedule Today</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                  Ready to take the next step? Schedule a consultation with one of our experts and plan your financial future today.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* 6. CTA SECTION (Dark Brand Gradient Strip matching other pages) */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#379237] to-[#06327B] p-10 md:p-16 shadow-2xl text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10"
        >
          {/* Subtle moving graphic inside CTA */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none translate-x-20 -translate-y-20"></div>
          
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4CAF50] bg-white/10 px-3 py-1 rounded-full inline-block">
              BEGIN YOUR WEALTH PORTFOLIO
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display leading-tight">
              Would you like to start a Wealth Creation with us?
            </h2>
            <p className="text-emerald-50/80 text-sm md:text-base leading-relaxed font-light">
              At CultMoney Financial Services, we’re here to assist you with all your financial needs. Whether you have questions, need advice, or want to schedule a consultation, we invite you to reach out to us. Our experienced financial team is ready to provide trusted guidance and support for your financial journey.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-4 items-center w-full lg:w-auto">
            <motion.a 
              href="tel:+919160110888"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#06327B] hover:bg-[#F8FAF8] font-bold text-center py-4 px-8 rounded-full shadow-lg flex items-center space-x-3 tracking-wide transition-all group w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4 shrink-0 group-hover:rotate-12 transition-transform" />
              <span>+91 9160110888</span>
            </motion.a>
            <motion.a 
              href="https://wa.me/919160110888"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Cultmoney WhatsApp advisor"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#075E54] hover:bg-[#054c43] text-white font-bold text-center py-4 px-8 rounded-full shadow-lg flex items-center space-x-3 tracking-wide transition-all w-full sm:w-auto justify-center"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>WhatsApp Advisor</span>
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* 7. BOTTOM MAP SECTION */}
      <section className="py-20 bg-white border-t border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4CAF50] block">
              VISIT OUR HEADQUARTERS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#06327B] tracking-tight font-display">
              Our Office Location
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Visit our office for direct consultation and personalized financial guidance.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-slate-200 rounded-[28px] overflow-hidden shadow-xl h-[450px] relative group"
          >
            <iframe
              src="https://maps.google.com/maps?q=P%20No%2062%20Laxma%20Reddy%20Colony%20Boduppal%20Hyderabad%20Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter grayscale opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
