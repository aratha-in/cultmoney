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
  title: 'CultMoney - Premium Wealth Management',
  description: 'Secure your future with CultMoney. Operated by Sahiani Finvest Pvt Ltd, we offer premium wealth management, mutual funds, and custom investment plans.',
  keywords: 'Wealth Management, CultMoney, Investment Advisor, Best Wealth Management India, Top Financial Advisors Hyderabad, Mutual Funds Distributor, SIP Investment, SWP Planning, Portfolio Management Services, Financial Planning India, AMFI Registered Distributor, Sahiani Finvest, Wealth Advisors Hyderabad, Private Wealth Management, High Net Worth Individual (HNWI) Wealth Services, Bespoke Investment Advisory, Asset Allocation, Retirement Planning India, Tax Saving Investments',
  metadataBase: new URL('https://www.cultmoney.in'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/CultMoneyicon.svg',
    shortcut: '/CultMoneyicon.svg',
    apple: '/CultMoneyicon.svg',
  },
  openGraph: {
    title: 'CultMoney - Premium Wealth Management',
    description: 'Secure your future with CultMoney. Operated by Sahiani Finvest Pvt Ltd, we offer premium wealth management, mutual funds, and custom investment plans.',
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
    title: 'CultMoney - Premium Wealth Management',
    description: 'Secure your future with CultMoney. Operated by Sahiani Finvest Pvt Ltd, we offer premium wealth management, mutual funds, and custom investment plans.',
    images: ['/images/financial_freedom.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          /* Critical above-the-fold layout styles to prevent FOUC & render blocking layout shifts */
          .bg-hero-gradient { background: radial-gradient(circle at 10% 20%, rgba(76, 175, 80, 0.05) 0%, rgba(6, 50, 123, 0.05) 90.2%); }
          .text-gradient { background: linear-gradient(135deg, #4CAF50 0%, #06327B 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
          .glass-panel { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.4); }
        ` }} />
      </head>
      <body className="bg-white text-slate-900 font-sans min-h-screen flex flex-col relative selection:bg-primary selection:text-white">
        {/* Background Gradients */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-hero-glow" />
        
        {/* Main Application Container */}
        <Navbar />
        <main className="flex-grow z-10">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
