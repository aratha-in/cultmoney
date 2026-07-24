import Link from 'next/link';
import Image from 'next/image';
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, CheckCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-slate-800 text-slate-400 pt-16 pb-8 relative z-10 overflow-hidden">
      {/* Decorative gradient accents */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          {/* Column 1: About / Logo */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group">
              <div className="relative w-56 h-14 overflow-hidden rounded-lg flex-shrink-0">
                <Image
                  src="/images/Wlogo.png"
                  alt="CultMoney Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-300">
              CultMoney Financial Services — We Build your Strong Financial Success. Empowering wealth creation through expert guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-primary/20 hover:text-white flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-4 h-4 text-slate-300 hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-primary/20 hover:text-white flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-4 h-4 text-slate-300 hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-primary/20 hover:text-white flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-4 h-4 text-slate-300 hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-primary/20 hover:text-white flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-4 h-4 text-slate-300 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 font-display">
              Company
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-primary transition-colors">Services Desk</Link>
              </li>
              <li>
                <Link href="/quick-links" className="text-slate-300 hover:text-primary transition-colors">Document Center</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Desks */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 font-display">
              Advisory Desks
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/financial-services" className="text-slate-300 hover:text-primary transition-colors">Financial Services</Link>
              </li>
              <li>
                <Link href="/services/mutual-fund-calculator" className="text-slate-300 hover:text-primary transition-colors">Mutual Fund Calculator</Link>
              </li>
              <li>
                <Link href="/services/product-distribution" className="text-slate-300 hover:text-primary transition-colors">Product Distribution</Link>
              </li>
              <li>
                <Link href="/services/swp" className="text-slate-300 hover:text-primary transition-colors">SWP Planning</Link>
              </li>
              <li>
                <Link href="/services/wealth-management" className="text-slate-300 hover:text-primary transition-colors">Wealth Management</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 font-display">
              Get In Touch
            </h3>
            <div className="flex items-start space-x-3 text-sm text-slate-300">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>D No 3-4-126, 1st Floor, Mallapur, Nacharam – Habsiguda Road, Hyderabad - 500076</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-slate-300">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a href="tel:+919160110888" className="hover:text-primary transition-colors">+91 9160110888</a>
            </div>
            <div className="flex items-center space-x-3 text-sm text-slate-300">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href="mailto:info@cultmoney.com" className="hover:text-primary transition-colors">info@cultmoney.com</a>
            </div>
            <div className="flex items-center space-x-2 text-xs bg-slate-900/60 border border-slate-800 px-3 py-2 rounded-lg text-slate-200 shadow-sm w-fit">
              <Shield className="w-4 h-4 text-primary" />
              <span className="font-semibold">AMFI Registered Distributor</span>
            </div>
          </div>
        </div>

        {/* Regulatory, Compliance & Disclaimers */}
        <div className="py-8 text-xs text-slate-400 border-b border-slate-800 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/40 p-4 rounded-xl border border-slate-800 shadow-sm">
            <div className="flex items-start space-x-2 bg-white p-3 rounded-md shadow-sm">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <p className="text-black">
                <strong>AMFI registration details:</strong> CultMoney Financial Services is an AMFI registered Mutual Fund Distributor with ARN code <strong>ARN-276771</strong>. Initial Registration Date: 13/09/2023 | Validity: 31/10/2028.
              </p>
            </div>
          </div>
          <p className="leading-relaxed text-slate-400">
            <strong>DISCLAIMER:</strong> Mutual Fund investments are subject to market risks, read all scheme related documents carefully. Past performance is not an indicator of future returns. CultMoney Financial Services does not guarantee any assured returns on investments. All calculator inputs and outputs are for illustrative projections and educational purposes only.
          </p>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CultMoney Finvest Pvt Ltd. All Rights Reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Developed by <a href="https://aratha.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline font-semibold">Aratha</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
