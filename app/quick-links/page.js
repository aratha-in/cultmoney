'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, ShieldCheck, BadgeCheck, FileText, FolderOpen, 
  Landmark, ChevronDown, Download, ExternalLink, X, FileDown
} from 'lucide-react';

export default function QuickLinks() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  // Category Configuration with specified documents and URLs
  const categories = useMemo(() => [
    {
      id: 'kyc-info',
      title: 'Know Your KYC',
      icon: ShieldCheck,
      color: 'from-[#4CAF50] to-[#379237]',
      docs: [
        { title: 'CDSL CVL KRA', link: 'https://www.cvlkra.com/' },
        { title: 'NDML KRA', link: 'https://kra.ndml.in/kra-web/jsps/pos/KYCClientInquiry_NEW.jsp' },
        { title: 'CAMS KRA', link: 'https://www.camskra.com/' },
        { title: 'KARVY KRA', link: 'https://www.karvykra.com/index.aspx?ReturnUrl=%2f' }
      ]
    },
    {
      id: 'kyc-validate',
      title: 'Validate Your KYC',
      icon: BadgeCheck,
      color: 'from-[#06327B] to-[#1E4E9B]',
      docs: [
        { title: 'CVL KRA Validation', link: 'https://validate.cvlindia.com/CVLKRAVerification_V1/' },
        { title: 'NDML KYC Validation', link: 'https://kra.ndml.in/kra/web/v3/#/kyc/initiate' },
        { title: 'CAMS KRA Validation', link: 'https://www.camskra.com/PanDetailsUpdate.aspx' },
        { title: 'KARVY KRA Validation', link: 'https://www.karvykra.com/KYC_Validation/Default.aspx' }
      ]
    },
    {
      id: 'kyc-forms',
      title: 'KYC Related Forms',
      icon: FileText,
      color: 'from-[#379237] to-[#06327B]',
      docs: [
        { title: 'Individual KYC Form', link: 'https://resources.investwellonline.com/forms/Individual_KYC.pdf' },
        { title: 'CAMS KRA Non Individual Form', link: 'https://resources.investwellonline.com/forms/CAMSKRA_Non_Individual.pdf' },
        { title: 'CVL KRA Individual Form', link: 'https://www.cvlindia.com/CVLINDIA_DOC/pdf/KYCFormIndividual_jan22.pdf' },
        { title: 'CVL KRA Non Individual Form', link: 'https://www.cvlindia.com/CVLINDIA_DOC/pdf/KYCFormNonIndividual_jan22.pdf' }
      ]
    },
    {
      id: 'other-forms',
      title: 'Other Forms',
      icon: FolderOpen,
      color: 'from-[#06327B] to-[#379237]',
      docs: [
        { title: 'CAMS FATCA Individual', link: 'https://resources.investwellonline.com/forms/CAMS_FATCA-Individuals.pdf' },
        { title: 'CAMS FATCA Non Individual', link: 'https://resources.investwellonline.com/forms/CAMS_FATCA_Non_Individual.pdf' },
        { title: 'KFINTECH FATCA CRS Individual', link: 'https://resources.investwellonline.com/forms/KFINTECH_FATCA_CRS_Declaration_form_Individual.pdf' },
        { title: 'KFINTECH FATCA UBO Non Individuals', link: 'https://resources.investwellonline.com/forms/KFINTECH_FATCA_UBO_NON_INDIVIDUALS.pdf' }
      ]
    },
    {
      id: 'mf-forms',
      title: 'Mutual Fund Common Forms',
      icon: Landmark,
      color: 'from-[#379237] to-[#06327B]',
      isGrid: true, // Grid display layout for the 43 mutual funds
      docs: [
        { title: '360 One Mutual Fund', link: 'https://drive.google.com/file/d/1-SaR8nbukFCV16AalnjG5Tlmmf934zOL/view' },
        { title: 'Aditya Birla Mutual Fund', link: 'https://drive.google.com/file/d/1-SRS12pO7m7WjEzlVjwzw9ZjbYDHgqI5/view' },
        { title: 'Axis Mutual Fund', link: 'https://drive.google.com/file/d/1050uG19nZ2B0Ly0zkfsPrWqxan7UVh3z/view' },
        { title: 'Bajaj Finserv Mutual Fund', link: 'https://drive.google.com/file/d/101BvMYHzGCj3cSsuUSrMZtdmqVf8r9L3/view' },
        { title: 'Bandhan Mutual Fund', link: 'https://drive.google.com/file/d/105sMKhH2IpjD4M48aisX_hEYIMMu5fA6/view' },
        { title: 'Baroda BNP Mutual Fund', link: 'https://drive.google.com/file/d/107gN2R2SaijwaqLPpvxqTf3WmN26a8HJ/view' },
        { title: 'BOI Mutual Fund', link: 'https://drive.google.com/file/d/10BFp-pEfAm750rHCo77rch7ZOmRrs__f/view' },
        { title: 'Canara Robeco Mutual Fund', link: 'https://drive.google.com/file/d/1-dKu09H7VcfLS3p1u3pK64NmGQU7J8HH/view' },
        { title: 'DSP Mutual Fund', link: 'https://drive.google.com/file/d/1-cYqbPZQOlA0Mz6qK04XGhKcTEuQMhYM/view' },
        { title: 'Edelweiss Mutual Fund', link: 'https://drive.google.com/file/d/1-Yk7HTsfjXAwNmD2pju2Wq1LtXbQirwx/view' },
        { title: 'Franklin Templeton Mutual Fund', link: 'https://drive.google.com/file/d/10ER0Ag5H28e6eNK6HL5vA87sABf-mW06/view' },
        { title: 'Groww Mutual Fund', link: 'https://drive.google.com/file/d/10Km2K73l0KabI92LpKhyZ8YVt5zsR-8N/view' },
        { title: 'HDFC Mutual Fund', link: 'https://drive.google.com/file/d/10MuPfkZa-2ztZtTcNfEVEZ9HGJhj9c_w/view' },
        { title: 'Helios Mutual Fund', link: 'https://drive.google.com/file/d/10OR9DZ8W01pa8nlDhtI4fC4RmXB4Frnp/view' },
        { title: 'HSBC Mutual Fund', link: 'https://drive.google.com/file/d/10PCOsUbVS0IpldN5hHOqfpdRa0giVgcg/view' },
        { title: 'ICICI Mutual Fund', link: 'https://drive.google.com/file/d/10RCDAWPwfI45MYn4q4MFVLAGgr24zxSG/view' },
        { title: 'Invesco Mutual Fund', link: 'https://drive.google.com/file/d/10ZcsDBHHYoPreJ7nNMo0hD5AQp3MqVNk/view' },
        { title: 'ITI Mutual Fund', link: 'https://drive.google.com/file/d/10_P7wpJtxWPEXRYsWHLWBQDOvJpA_LCh/view' },
        { title: 'JM Mutual Fund', link: 'https://drive.google.com/file/d/10o8VEM_thR_fxtGm-HJ00Cpnf09q9PL8/view' },
        { title: 'Kotak Mutual Fund', link: 'https://drive.google.com/file/d/11-JsnyBbVAYSLvovcq5eSv7T03i-pTOa/view' },
        { title: 'LIC Mutual Fund', link: 'https://drive.google.com/file/d/11LmLIJdBpVfPGAwApBSMj46fy8dA0Ucu/view' },
        { title: 'Mahindra Manulife Mutual Fund', link: 'https://drive.google.com/file/d/1340RzDsDUvgcrjMZkqym1qEjL0veNp_2/view' },
        { title: 'Mirae Asset Mutual Fund', link: 'https://drive.google.com/file/d/13A9_hb6BL8PhRlSf8S-7icRmrkyHhsnf/view' },
        { title: 'Motilal Oswal Mutual Fund', link: 'https://drive.google.com/file/d/13CSC-MzOjRg228kZSp_Bzqnce9TDLF0R/view' },
        { title: 'Navi Mutual Fund', link: 'https://drive.google.com/file/d/1204DyLeeC-FeyABsYb7Ss9GP3A12kmpQ/view' },
        { title: 'Nippon India Mutual Fund', link: 'https://drive.google.com/file/d/12l_IJBiHwAnk_oo8PT99IEeMfGbJOqYt/view' },
        { title: 'NJ Mutual Fund', link: 'https://drive.google.com/file/d/12y8kDZIVmHOZOjJ58w7HehqkCG8J-Ufm/view' },
        { title: 'Old Bridge Mutual Fund', link: 'https://drive.google.com/file/d/13DNMQDWj_blshdXDaPphPt88aR4Amxz6/view' },
        { title: 'PGIM India Mutual Fund', link: 'https://drive.google.com/file/d/130iFYwteVVKmbMEbEXlAhoQu5eLF79kb/view' },
        { title: 'PPFAS Mutual Fund', link: 'https://drive.google.com/file/d/132BzIuwep4ghTZeFZVLIVsdhVVgLS36B/view' },
        { title: 'Quant Mutual Fund', link: 'https://drive.google.com/file/d/13QhG5Rk1-GKxig8X50w8lGaDZ5aIOyTh/view' },
        { title: 'Quantum Mutual Fund', link: 'https://drive.google.com/file/d/13RDvhLxFwmCnhLCgs4RosFIFe4MzlLXQ/view' },
        { title: 'Sahara Mutual Fund', link: 'https://drive.google.com/file/d/13Zm1j1MU0fTV4hK6bcgzcD8g8pSlHdcQ/view' },
        { title: 'Samco Mutual Fund', link: 'https://drive.google.com/file/d/13_tXXxc-Y-MRZ97XR_mVXfHvv86mGoe2/view' },
        { title: 'SBI Mutual Fund', link: 'https://drive.google.com/file/d/13ppkdoft0QL_yXHPtkKNRzKP2kFDaIsM/view' },
        { title: 'Shriram Mutual Fund', link: 'https://drive.google.com/file/d/13EAjCXZRuy3kPjBTqkYphGXAegbh1YUR/view' },
        { title: 'Sundaram Mutual Fund', link: 'https://drive.google.com/file/d/13J2DrRUXdeTusueOJJhDBucVkPHU0xv7/view' },
        { title: 'Tata Mutual Fund', link: 'https://drive.google.com/file/d/13PG6M42j9VS6bgukuFjBU2Zp8NqZSjfp/view' },
        { title: 'Taurus Mutual Fund', link: 'https://drive.google.com/file/d/13QgCw6_1QKvQ4lFAa7pQunF2AlXBtUrU/view' },
        { title: 'Trust Mutual Fund', link: 'https://drive.google.com/file/d/13k2xmLs69Inw2ncUm4aA49GPglzvX_SF/view' },
        { title: 'Union Mutual Fund', link: 'https://drive.google.com/file/d/11HiJUTfCAUfLK_KFx9MhSnmYluv_lNF4/view' },
        { title: 'UTI Mutual Fund', link: 'https://drive.google.com/file/d/11JUXVp-_CviELLRdaIyBQ7Mm1rIAn20q/view' },
        { title: 'WhiteOak Mutual Fund', link: 'https://drive.google.com/file/d/116BNa-tzm7-u6gpQMUe2qsOXcWnOJBdY/view' }
      ]
    }
  ], []);

  // Handle Search Input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Clear Search Input
  const clearSearch = () => {
    setSearchTerm('');
  };

  // Filter Categories & Documents based on query
  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return categories;

    const query = searchTerm.toLowerCase().trim();
    return categories.map(category => {
      const matchedDocs = category.docs.filter(doc => 
        doc.title.toLowerCase().includes(query)
      );

      // If category title matches, we keep all its documents
      if (category.title.toLowerCase().includes(query)) {
        return category;
      }

      // Otherwise, only keep matching documents
      if (matchedDocs.length > 0) {
        return {
          ...category,
          docs: matchedDocs
        };
      }

      return null;
    }).filter(Boolean);
  }, [searchTerm, categories]);

  // Determine which category should be open.
  // In search mode, we auto-expand categories that have results to improve UX.
  const isCategoryOpen = (index) => {
    if (searchTerm.trim() !== '') return true;
    return activeCategory === index;
  };

  const toggleCategory = (index) => {
    if (searchTerm.trim() !== '') return; // Lock open during search
    setActiveCategory(activeCategory === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAF8] text-slate-900 font-sans antialiased overflow-x-hidden pt-24 pb-20">
      
      {/* Premium Background Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-[#4CAF50]/10 blur-[130px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#06327B]/10 blur-[150px] animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-[30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#379237]/8 blur-[140px]"></div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* 1. HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto space-y-6 pt-10">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-[#379237] bg-[#379237]/10 px-4 py-1.5 rounded-full"
          >
            Client Resources
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold font-display tracking-tight text-slate-950 leading-tight"
          >
            Document & <span className="bg-gradient-to-r from-[#4CAF50] to-[#06327B] bg-clip-text text-transparent">Resource Center</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-sans"
          >
            Download KYC registration files, AMC common transaction templates, liquid fund requests, and tax forms instantly.
          </motion.p>
        </section>

          {/* 2. SEARCH SECTION */}
          <motion.section 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex items-center bg-white/20 backdrop-blur-xl border border-slate-200/30 rounded-2xl p-2 shadow-glow-premium space-x-2">
              {/* Search Icon */}
              <Search className="w-5 h-5 text-slate-500 flex-shrink-0" />

              <input
                type="text"
                placeholder="Search resources (e.g. KYC, SIP, Mutual Fund…)"
                aria-label="Search resources"
                value={searchTerm}
                onChange={handleSearch}
                className="flex-1 bg-transparent border-none focus:outline-none text-slate-800 placeholder-slate-500 text-sm sm:text-base"
              />

              {/* Result count badge */}
              {searchTerm && (
                <span className="text-xs text-slate-500 whitespace-nowrap mr-2">
                  {filteredCategories.length} result{filteredCategories.length === 1 ? '' : 's'}
                </span>
              )}

              {/* Clear Button */}
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.section>

        {/* 3. RESOURCE ACCORDION SECTION */}
        <section className="max-w-4xl mx-auto space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, idx) => {
              const isOpen = isCategoryOpen(idx);
              const IconComponent = cat.icon;

              return (
                <motion.div
                  layout
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`bg-white rounded-3xl border transition-all duration-300 shadow-sm overflow-hidden ${
                    isOpen 
                      ? 'border-[#4CAF50]/40 shadow-premium' 
                      : 'border-slate-200/70 hover:border-[#4CAF50]/30 hover:shadow-md'
                  }`}
                >
                  {/* Category Header Button */}
                  <button
                    onClick={() => toggleCategory(idx)}
                    className="w-full flex items-center justify-between p-6 sm:p-7 text-left focus:outline-none bg-white hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-sm shrink-0`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <span className="font-semibold text-slate-800 text-lg sm:text-xl font-display tracking-tight">
                          {cat.title}
                        </span>
                        <p className="text-xs text-slate-400 font-medium">
                          {cat.docs.length} {cat.docs.length === 1 ? 'Resource' : 'Resources'} Available
                        </p>
                      </div>
                    </div>
                    {/* Chevron toggler - Hidden in search because it is locked open */}
                    {!searchTerm && (
                      <div className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'bg-[#4CAF50]/10 border-[#4CAF50]/20 text-[#379237]' : 'text-slate-400 bg-slate-50'
                      }`}>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </div>
                    )}
                  </button>

                  {/* Category Inner Documents */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden border-t border-slate-100"
                      >
                        <div className="p-6 sm:p-8 bg-slate-50/40">
                          {cat.isGrid ? (
                            // Premium Grid Layout for Mutual Funds (43 items)
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                              {cat.docs.map((doc, docIdx) => (
                                <motion.div
                                  key={docIdx}
                                  whileHover={{ y: -4, shadow: '0 12px 20px rgba(0,0,0,0.05)' }}
                                  className="relative group bg-white border border-slate-200/50 rounded-2xl p-5 shadow-sm hover:border-[#4CAF50]/40 overflow-hidden flex flex-col justify-between h-40 transition-all duration-300"
                                >
                                  {/* Glassmorphism top border strip */}
                                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#379237] to-[#06327B]"></div>
                                  
                                  <div className="space-y-3">
                                    <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-[#4CAF50]/10 flex items-center justify-center text-slate-400 group-hover:text-[#379237] transition-colors shrink-0">
                                      <Landmark className="w-4 h-4" />
                                    </div>
                                    <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#06327B] transition-colors line-clamp-2 leading-snug">
                                      {doc.title}
                                    </h4>
                                  </div>

                                  <div className="pt-2 flex items-center justify-between border-t border-slate-100 mt-2">
                                    <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">PDF Document</span>
                                    <a
                                      href={doc.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#379237] hover:text-[#06327B] transition-colors group-hover:translate-x-0.5"
                                    >
                                      <span>Download</span>
                                      <FileDown className="w-3.5 h-3.5" />
                                    </a>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          ) : (
                            // Elegant Two Column List Layout for standard categories
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {cat.docs.map((doc, docIdx) => (
                                <motion.div
                                  key={docIdx}
                                  whileHover={{ scale: 1.01, x: 2 }}
                                  className="flex items-center justify-between bg-white border border-slate-200/50 rounded-2xl p-4.5 shadow-sm hover:border-[#4CAF50]/30 transition-all duration-300"
                                >
                                  <div className="flex items-center space-x-3.5 overflow-hidden">
                                    <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                                      <FileText className="w-4.5 h-4.5" />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-700 truncate tracking-tight">{doc.title}</span>
                                  </div>
                                  <a 
                                    href={doc.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-xl bg-[#379237]/8 hover:bg-[#379237]/20 text-[#379237] transition-all flex items-center justify-center shadow-sm"
                                    title="Open Document Link"
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                  </a>
                                </motion.div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            {/* Zero state matched documents */}
            {filteredCategories.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-white border border-slate-200/60 rounded-3xl shadow-sm space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <p className="text-base font-bold text-slate-700">No resources found</p>
                  <p className="text-sm text-slate-400">We couldn&apos;t find matching files for &ldquo;{searchTerm}&rdquo;</p>
                </div>
                <button 
                  onClick={clearSearch}
                  className="px-6 py-2 border border-slate-200 hover:bg-slate-50 rounded-full text-xs font-semibold transition-colors text-slate-600"
                >
                  Clear search query
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* 4. CTA SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto pt-8"
        >
          <div className="relative overflow-hidden bg-white border border-slate-200/60 p-8 sm:p-12 rounded-4xl shadow-glow-premium text-center space-y-6">
            {/* Top tiny gradient line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#379237] to-[#06327B]"></div>
            
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#379237] bg-[#379237]/10 px-3.5 py-1 rounded-full">
                Interactive Platforms
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 leading-tight">
                Need Live Transaction Portals?
              </h3>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                For online mutual fund buying, selling, or SIP changes, log directly into the BSE StarMF secure portal or NSE NMF client systems.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="/portfolio-login"
                className="inline-flex items-center space-x-2 bg-gradient-to-br from-[#379237] to-[#06327B] hover:brightness-110 text-white font-bold px-8 py-4 rounded-full shadow-glow-green hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                <span>Go to secure client portals</span>
                <ExternalLink className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
