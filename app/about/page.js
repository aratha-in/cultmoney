'use client';

import { motion } from 'framer-motion';
import { Eye, Target, Users, Search, PenTool, Code, TrendingUp, Rocket, Award, Check, Shield, Calendar, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <main className="font-sans antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFA] to-[#FFFFFF] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 py-24 lg:flex lg:items-center lg:gap-14">
          {/* Left side – text */}
          <motion.div
            className="lg:w-1/2 space-y-8 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#0F172A] leading-[1.05]">
                Who We{" "}
                <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">
                  Are
                </span>
              </h1>

              <h2 className="text-xl font-bold text-[#4CAF50] uppercase tracking-[0.15em]">
                Welcome to CultMoney Financial Services
              </h2>
            </div>

            <div className="space-y-7">
              <p className="text-lg md:text-xl text-[#334155] leading-[1.9] max-w-2xl">
                Choose CultMoney Financial Services for their expert team,
                personalized financial planning, transparent practices,
                and comprehensive range of services designed to meet your
                unique financial goals.
              </p>

              <p className="text-lg md:text-xl text-[#334155] leading-[1.9] max-w-2xl">
                At CultMoney Financial Services, we are dedicated to guiding
                our clients through the complexities of the financial world.
                Our team of experienced professionals offers personalized
                financial planning, investment management, tax optimization,
                and retirement planning.
              </p>

              <p className="text-lg md:text-xl text-[#334155] leading-[1.9] max-w-2xl">
                We prioritize transparency, integrity, and a client-centric
                approach, ensuring that your financial goals are at the
                forefront of everything we do. Whether you&apos;re planning for
                the future, managing your wealth, or looking for expert
                financial advice, CultMoney Financial Services is here to help
                you navigate your financial journey with confidence.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 pt-4">
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#4CAF50] to-[#06327B] text-white font-bold shadow-xl hover:scale-105 transition-all duration-300">
                Get Started
              </button>

              <button className="px-8 py-4 rounded-2xl border-2 border-[#4CAF50] text-[#4CAF50] font-bold hover:bg-[#4CAF50]/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
          {/* Right side – image */}
          <motion.div
            className="lg:w-1/2 mt-12 lg:mt-0 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury finance office"
                width={1200}
                height={750}
                className="rounded-3xl object-cover transform hover:scale-105 transition-transform duration-500"
              />
              {/* Floating glass cards */}
              <div className="absolute left-6 top-6 bg-white/30 backdrop-blur-lg rounded-xl p-3 shadow-md">
                <h3 className="text-xs font-medium text-slate-800">18+ Years Experience</h3>
              </div>
              <div className="absolute right-6 bottom-8 bg-white/30 backdrop-blur-lg rounded-xl p-3 shadow-md">
                <h3 className="text-xs font-medium text-slate-800">200+ Clients</h3>
              </div>
              <div className="absolute left-6 bottom-6 bg-white/30 backdrop-blur-lg rounded-xl p-3 shadow-md">
                <h3 className="text-xs font-medium text-slate-800">Trusted Financial Planning</h3>
              </div>
            </div>


          </motion.div>
        </div>
      </section>

      {/* Vision / Mission / People */}
      <section className="py-24 bg-gradient-to-b from-[#F8FAF8] to-[#EEF7EF]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <motion.div
            className="glass-card p-8 rounded-2xl text-center bg-white/30 backdrop-blur-lg"
            whileHover={{ y: -5, boxShadow: "0 12px 20px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Eye className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-sm text-slate-600">
              We are responsible in client engagement, focused on offering suitable products to our clients while creating long‑term financial wealth and stability through trusted financial services and professional guidance.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="glass-card p-8 rounded-2xl text-center bg-white/30 backdrop-blur-lg"
            whileHover={{ y: -5, boxShadow: "0 12px 20px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Target className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-sm text-slate-600">
              To become India’s leading financial services company by delivering the best financial solutions to our clients. We aim to extend high‑quality financial services, build strong client trust, provide growth opportunities to employees, and contribute to society with responsibility and integrity through strong corporate governance.
            </p>
          </motion.div>

          {/* People */}
          <motion.div
            className="glass-card p-8 rounded-2xl text-center bg-white/30 backdrop-blur-lg"
            whileHover={{ y: -5, boxShadow: "0 12px 20px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Users className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Our People</h3>
            <p className="text-sm text-slate-600">
              We are a team of committed and experienced professionals dedicated to supporting our vision and helping clients achieve financial freedom through trusted guidance, strategic planning, and personalized financial solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6‑D Process */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Our 6‑D Process
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left column steps */}
            <div className="space-y-12">
              {[
                { icon: <Search className="w-8 h-8 text-primary" />, title: "Discover", desc: "We take the time to understand your financial goals, aspirations, and challenges. By discovering what’s important to you, we tailor our financial services and investment strategies to fit your unique requirements and long‑term objectives." },
                { icon: <PenTool className="w-8 h-8 text-primary" />, title: "Design", desc: "Based on our discoveries, we design personalized financial strategies aligned with your goals. Whether it’s wealth management, retirement planning, investment planning, or tax optimization, we craft a financial roadmap that works effectively for you." },
                { icon: <Code className="w-8 h-8 text-primary" />, title: "Develop", desc: "We develop a comprehensive financial roadmap to help you achieve your objectives. This includes detailed action plans, milestone tracking, investment recommendations, and financial growth strategies designed to maximize your future success." }
              ].map((step, i) => (
                <motion.div key={i} className="relative pl-12" whileHover={{ scale: 1.02 }}>
                  <div className="absolute left-0 top-0 text-7xl font-extrabold text-primary opacity-10">{`0${i + 1}`}</div>
                  <div className="flex items-center mb-4">
                    {step.icon}
                    <h4 className="ml-3 text-xl font-semibold text-slate-800">{step.title}</h4>
                  </div>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Right column steps */}
            <div className="space-y-12">
              {[
                { icon: <TrendingUp className="w-8 h-8 text-primary" />, title: "Drive", desc: "We continuously monitor your financial plan and make adjustments whenever necessary to ensure consistent progress. Our proactive financial approach helps clients stay on track and adapt confidently to changing market conditions and financial circumstances." },
                { icon: <Rocket className="w-8 h-8 text-primary" />, title: "Deploy", desc: "Once your financial strategy is finalized, we deploy the required resources and implement the investment and financial solutions efficiently. Our team works closely with clients to ensure smooth execution and reliable support throughout the process." },
                { icon: <Award className="w-8 h-8 text-primary" />, title: "Deliver", desc: "We are committed to delivering measurable financial results that truly matter. Our success is defined by client satisfaction, financial growth, wealth creation, and the successful achievement of long‑term financial goals." }
              ].map((step, i) => (
                <motion.div key={i} className="relative pl-12" whileHover={{ scale: 1.02 }}>
                  <div className="absolute left-0 top-0 text-7xl font-extrabold text-primary opacity-10">{`0${i + 4}`}</div>
                  <div className="flex items-center mb-4">
                    {step.icon}
                    <h4 className="ml-3 text-xl font-semibold text-slate-800">{step.title}</h4>
                  </div>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              alt="Business handshake"
              width={800}
              height={600}
              className="rounded-2xl object-cover shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl font-bold text-slate-800">Why Choose Us?</h2>
            <p className="text-base text-slate-600">
              Choose CultMoney Financial Services for their expert team, personalized financial planning, transparent practices, and comprehensive range of services designed to meet your unique financial goals and secure your financial future.
            </p>
            {/* Accordion */}
            <div className="space-y-4">
              {[
                { title: "Best Quality Services", desc: "CultMoney Financial Services offers premium financial solutions including investment management, comprehensive financial planning, tax optimization, retirement planning, wealth creation strategies, and personalized advisory services. Our services are designed to help clients achieve financial stability, long‑term growth, and secure financial freedom." },
                { title: "24×7 Live Support", desc: "Our 24×7 Live Support ensures that assistance is always available whenever you need it. No matter the time of day or day of the week, our dedicated support team is ready to provide guidance, answer your questions, and resolve your concerns efficiently. We believe financial support should never be limited by time, which is why we remain accessible to help you make confident financial decisions whenever required." },
                { title: "Result Oriented Projects", desc: "At CultMoney Financial Services, we focus on delivering result‑oriented financial solutions designed to achieve measurable success. Our approach begins with setting clear and achievable objectives, supported by detailed planning and defined performance metrics. We continuously monitor progress, manage risks proactively, and optimize resources to ensure the best possible outcomes. Through regular evaluation, stakeholder engagement, and data‑driven strategies, we create financial plans that are practical, effective, and aligned with your long‑term goals." },
                { title: "Award Winning Support Team", desc: "Our award‑winning support team is committed to delivering exceptional customer service and expert financial assistance. Backed by highly trained professionals and recognized for service excellence, we provide fast, reliable, and personalized support tailored to your unique financial needs. Whether you need investment guidance, financial planning assistance, or quick solutions to your concerns, our team is always ready to help with professionalism and dedication." },
                { title: "Best ROI Techniques", desc: "We utilize proven ROI‑driven strategies designed to maximize financial growth and investment performance. Our process includes setting SMART financial goals, conducting detailed cost‑benefit analysis, optimizing resources, and leveraging data‑driven decision‑making. By continuously reviewing market trends, managing risks effectively, and using advanced financial tools and technologies, we help clients achieve better returns while maintaining long‑term financial stability and security." },
                { title: "Experienced Professionals", desc: "Our team consists of experienced financial professionals with deep industry knowledge and a proven track record of success. With years of expertise in investment planning, taxation, wealth management, and financial advisory services, we provide reliable guidance tailored to your financial objectives. As trusted advisors and skilled practitioners, we are committed to helping individuals and businesses make informed decisions and achieve sustainable financial growth." }
              ].map((item, i) => (
                <Accordion key={i} title={item.title} content={item.desc} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-to-br from-[#06327B] to-[#081B33] text-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: 18, label: "Years Professional Experience" },
            { value: 200, label: "Satisfied Customers" },
            { value: 25, label: "Partners Registered" },
            { value: 10, label: "Expert Team Members" }
          ].map((stat, i) => (
            <motion.div key={i} className="space-y-2" whileInView={{ opacity: [0, 1], y: [20, 0] }} transition={{ duration: 0.6, delay: i * 0.2 }}>
              <div className="text-5xl font-extrabold">{stat.value}+</div>
              <p className="text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#379237] to-[#06327B] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Would you like to start a Wealth Creation with us?
          </h2>
          <p className="text-base max-w-2xl mx-auto">
            At CultMoney Financial Services, we’re here to assist you with all your financial needs. Whether you have questions, need expert advice, or want to schedule a consultation, we invite you to reach out to us. Our experienced team is ready to provide the trusted financial guidance and professional support you deserve for your financial journey.
          </p>
          <a href="tel:+919160110888" className="inline-block px-8 py-3 bg-white text-[#06327B] font-bold rounded-full hover:scale-105 transition-transform">
            +91 9160110888
          </a>
        </div>
      </section>
    </main>
  );
}

// Simple Accordion component
function Accordion({ title, content }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="bg-slate-50 border border-slate-200/60 rounded-xl overflow-hidden hover:bg-slate-100/50 transition-colors">
      <button
        className="w-full flex justify-between items-center p-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base font-semibold text-slate-800">{title}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          className="text-primary font-bold"
        >
          ▾
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
          {content}
        </div>
      </motion.div>
    </div>
  );
}
