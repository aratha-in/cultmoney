import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'Cultmoney - Premium Wealth Management & Investment Advisory',
  description: 'Cultmoney (Sahiani Finvest Pvt Ltd) is a premier wealth management and financial advisory firm. We offer customized investment plans, mutual funds, SIP, SWP, and high-net-worth portfolio solutions.',
  keywords: 'Wealth Management, Investment Advisor, Mutual Funds, SIP, SWP, Portfolio Management, Cultmoney, Financial Planning, AMFI Registered Distributor, Sahiani Finvest',
  metadataBase: new URL('https://www.cultmoney.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cultmoney - Premium Wealth Management & Investment Advisory',
    description: 'Cultmoney (Sahiani Finvest Pvt Ltd) is a premier wealth management and financial advisory firm. We offer customized investment plans, mutual funds, SIP, SWP, and high-net-worth portfolio solutions.',
    url: 'https://www.cultmoney.in',
    siteName: 'Cultmoney',
    images: [
      {
        url: '/images/financial_freedom.png',
        width: 1200,
        height: 630,
        alt: 'Cultmoney Financial Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cultmoney - Premium Wealth Management & Investment Advisory',
    description: 'Cultmoney (Sahiani Finvest Pvt Ltd) is a premier wealth management and financial advisory firm.',
    images: ['/images/financial_freedom.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-dark text-gray-100 font-sans min-h-screen flex flex-col relative selection:bg-primary selection:text-dark">
        {/* Background Gradients and Floating Orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="glow-orb bg-[#4CAF50] w-[500px] h-[500px] top-[-100px] left-[-100px] animate-pulse-slow"></div>
          <div className="glow-orb bg-[#06327B] w-[600px] h-[600px] bottom-[-200px] right-[-100px] animate-float-slow"></div>
          <div className="glow-orb bg-[#379237] w-[400px] h-[400px] top-[40%] right-[10%] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Main Application Container */}
        <Navbar />
        <main className="flex-grow z-10">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
