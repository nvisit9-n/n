import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Award, 
  BookOpen, 
  ShieldCheck, 
  Landmark, 
  TrendingUp, 
  FileText,
  BarChart3,
  Scale
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { CANONICAL_INSTITUTIONS, CanonicalInstitution } from '../../data/canonicalInstitutionsData';
import { OfficialTrustBadge } from '../common/OfficialTrustBadge';
import { NepalFlagEmblem } from '../common/NepalFlagEmblem';

const PE_SECTORS = [
  { id: 'all', labelNe: 'सबै क्षेत्रहरू', labelEn: 'All Sectors' },
  { id: 'financial', labelNe: 'वित्तीय क्षेत्र (Financial)', descNe: 'NRB, RBB, ADBL, NBL, EPF, CIT' },
  { id: 'utility', labelNe: 'जनउपयोगी क्षेत्र (Public Utility)', descNe: 'नेपाल विद्युत प्राधिकरण, नेपाल टेलिकम, खानेपानी संस्थान' },
  { id: 'trading', labelNe: 'व्यापारिक क्षेत्र (Commercial / Trading)', descNe: 'नेपाल आयल निगम, खाद्य व्यवस्था तथा व्यापार कम्पनी' },
  { id: 'industrial', labelNe: 'औद्योगिक क्षेत्र (Industrial)', descNe: 'उदयपुर सिमेन्ट, हेटौंडा सिमेन्ट' },
  { id: 'social', labelNe: 'सामाजिक तथा सेवा क्षेत्र (Social & Service)', descNe: 'नेपाल वायुसेवा निगम, सांस्कृतिक संस्थान' }
];

export const PublicEnterprisesOverviewScreen: React.FC = () => {
  const { setActiveTab, selectQuizSubCategory, tText } = useApp();
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const publicEnterprises = CANONICAL_INSTITUTIONS.filter(i => i.isPublicEnterprise);

  const filteredPEs = publicEnterprises.filter(inst => {
    const matchSearch = !searchQuery || 
      inst.nameNe.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inst.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inst.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSearch;
  });

  return (
    <div className="space-y-10 pb-20 animate-fadeIn">
      {/* Header & Verification */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <NepalFlagEmblem className="w-4 h-5 drop-shadow-xs" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-md border border-amber-200 dark:border-amber-800">
              Ministry of Finance Enterprise Classification
            </span>
            <OfficialTrustBadge 
              sourceName="अर्थ मन्त्रालय सार्वजनिक संस्थान वार्षिक स्थिति समीक्षा प्रतिवेदन" 
              verifiedYearBS="२०८१/८२ अद्यावधिक" 
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {tText('सार्वजनिक संस्थानहरू (Public Enterprises Hub)', 'Public Enterprises Overview')}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
            नेपाल सरकारको लगानी रहेका ४४ सार्वजनिक संस्थानहरूको आधिकारिक वर्गीकरण, वित्तीय अवस्था, ऐन-कानुन तथा पदपूर्ति प्रणाली।
          </p>
        </div>

        {/* 50 Sets Practice Link */}
        <button
          onClick={() => {
            selectQuizSubCategory('sangathit');
            setActiveTab('quiz');
          }}
          className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#0B2046] hover:bg-[#153468] text-white font-bold text-xs shadow-sm transition active:scale-95 cursor-pointer"
        >
          <Award className="w-4 h-4" />
          <span>संस्थान ५० सेट प्रिटेस्ट इन्जिन</span>
        </button>
      </div>

      {/* Architecture Clarification Callout */}
      <div className="bg-amber-50/80 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800/60 rounded-3xl p-6 sm:p-7 text-amber-950 dark:text-amber-100 space-y-2.5">
        <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase text-amber-800 dark:text-amber-400">
          <ShieldCheck className="w-4 h-4" />
          <span>डाटा मोडल स्पष्टीकरण (Canonical Entity Classification)</span>
        </div>
        <h2 className="text-base sm:text-lg font-bold">
          एउटै संस्थाको बहु-वर्गीकरण तर अद्वितीय डाटाबेस रेकर्ड (One Institution = One Canonical Record)
        </h2>
        <p className="text-xs sm:text-sm text-amber-900/80 dark:text-amber-200/80 leading-relaxed">
          नेपाल सरकारका धेरै संस्थाहरू (जस्तै नेपाल बैंक, राष्ट्रिय वाणिज्य बैंक, नेपाल विद्युत प्राधिकरण, नेपाल टेलिकम) एकैसाथ <strong>PUBLIC ENTERPRISE</strong> र <strong>SANGATHIT SANSTHA</strong> दुवै वर्गमा पर्दछन्। हाम्रो प्रणालीमा कुनै पनि दोहोरो (duplicate) रेकर्ड नराखी एकीकृत क्यानोनिकल रेकर्ड र ट्यागिङ प्रणालीमार्फत आधिकारिक खोजी तथा अध्ययन सम्भव बनाइएको छ।
        </p>
      </div>

      {/* MoF 6 Sector Classification Cards */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-sky-600" />
          <span>अर्थ मन्त्रालयद्वारा निर्धारित ६ प्रमुख क्षेत्रगत वर्गीकरण (MoF 6 Key Sectors)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PE_SECTORS.filter(s => s.id !== 'all').map(sector => (
            <div 
              key={sector.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 hover:border-slate-300 transition-all shadow-2xs space-y-1.5"
            >
              <div className="font-bold text-slate-900 dark:text-white text-sm">
                {sector.labelNe}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {sector.descNe}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="संस्थान वा ऐन खोज्नुहोस्..."
            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-500"
          />
        </div>

        <div className="text-xs text-slate-500">
          प्रमाणित सार्वजनिक संस्थानहरू: <strong>{filteredPEs.length}</strong>
        </div>
      </div>

      {/* Enterprises Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPEs.map(inst => (
          <div 
            key={inst.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-amber-300 dark:hover:border-amber-700 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-black font-mono bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  {inst.code}
                </span>
                <span className="text-[11px] text-slate-500">
                  {inst.category}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {inst.nameNe}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {inst.nameEn}
                </p>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                {inst.descriptionNe}
              </p>

              {/* Legal Charter */}
              <div className="text-[11px] bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                <strong className="text-slate-800 dark:text-white">ऐन / प्रबन्धपत्र:</strong> {inst.actOrCharterNe}
              </div>

              {/* Focus Points */}
              <div className="space-y-1 pt-1">
                <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                  परीक्षा प्राथमिकता:
                </div>
                <ul className="space-y-1">
                  {inst.keyExamFocusNe.slice(0, 2).map((focus, i) => (
                    <li key={i} className="text-[11px] text-slate-600 dark:text-slate-400 flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 shrink-0" />
                      <span className="line-clamp-1">{focus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
              <a
                href={inst.officialCareersUrl || inst.officialWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline"
              >
                <span>सूचना / Career</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={() => {
                  selectQuizSubCategory('sangathit');
                  setActiveTab('quiz');
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 text-xs font-bold transition active:scale-95 cursor-pointer"
              >
                <span>प्रिटेस्ट सेट अभ्यास</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
