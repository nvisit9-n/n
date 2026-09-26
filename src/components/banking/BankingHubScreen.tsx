import React, { useState } from 'react';
import { 
  Landmark, 
  Building2, 
  ArrowRight, 
  BookOpen, 
  Award, 
  HelpCircle, 
  Search, 
  CheckCircle2, 
  Clock, 
  Layers,
  FileText,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Coins
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { CANONICAL_INSTITUTIONS, CanonicalInstitution } from '../../data/canonicalInstitutionsData';
import { OfficialTrustBadge } from '../common/OfficialTrustBadge';
import { NepalFlagEmblem } from '../common/NepalFlagEmblem';

export const BankingHubScreen: React.FC = () => {
  const { setActiveTab, openNoteReader, startQuiz, tText } = useApp();
  const [selectedInstId, setSelectedInstId] = useState<string>('all');
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<'all' | '4' | '5' | '6'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const bankingInstitutions = CANONICAL_INSTITUTIONS.filter(i => i.isBanking);

  const filteredInstitutions = bankingInstitutions.filter(inst => {
    const matchesInst = selectedInstId === 'all' || inst.id === selectedInstId;
    const matchesLevel = selectedLevelFilter === 'all' || inst.levels.some(l => l.levelNumber === selectedLevelFilter);
    const matchesSearch = !searchQuery || 
      inst.nameNe.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inst.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inst.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesInst && matchesLevel && matchesSearch;
  });

  return (
    <div className="space-y-10 pb-16 animate-fadeIn">
      {/* Top Breadcrumb & Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <NepalFlagEmblem className="w-4 h-5 drop-shadow-xs" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-2.5 py-0.5 rounded-md border border-sky-200 dark:border-sky-800">
              Primary Brand Ecosystem
            </span>
            <OfficialTrustBadge 
              sourceName="नेपाल राष्ट्र बैंक तथा बैंक तथा वित्तीय संस्था ऐन" 
              verifiedYearBS="२०८१/८२ अद्यावधिक" 
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {tText('बैंकिङ्ग तयारी हब (Banking Exam Ecosystem)', 'Banking Exam Preparation Hub')}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
            नेपाल राष्ट्र बैंक (केन्द्रीय बैंक), सरकारी वाणिज्य बैंकहरू (RBB, ADBL, NBL), नागरिक लगानी कोष, कर्मचारी सञ्चय कोष तथा वाणिज्य बैंकहरूको सम्पूर्ण परीक्षा तयारी।
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('mock-tests')}
            className="px-4 py-2.5 text-xs font-bold text-white bg-slate-950 dark:bg-sky-600 hover:bg-slate-800 rounded-xl transition shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <Award className="w-4 h-4 text-sky-400" />
            <span>Banking Mock Tests</span>
          </button>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={tText('बैंक, ऐन वा पद खोज्नुहोस्...', 'Search banks, acts, or posts...')}
            className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-500 text-slate-900 dark:text-white"
          />
        </div>

        {/* Level Filters */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-bold text-slate-500 mr-1">तह (Level):</span>
          {(['all', '4', '5', '6'] as const).map(lvl => (
            <button
              key={lvl}
              type="button"
              onClick={() => setSelectedLevelFilter(lvl)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                selectedLevelFilter === lvl
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {lvl === 'all' ? 'सबै तहहरू (All)' : `तह ${lvl} (Level ${lvl})`}
            </button>
          ))}
        </div>
      </div>

      {/* Institutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInstitutions.map((inst) => (
          <div
            key={inst.id}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6 hover:shadow-xl hover:border-sky-500/50 transition-all duration-200 group"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-900 flex items-center justify-center text-sky-700 dark:text-sky-300 font-mono font-black text-sm">
                    {inst.code}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 uppercase">
                      {inst.category}
                    </span>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white mt-1 group-hover:text-sky-600 transition-colors">
                      {inst.nameNe}
                    </h3>
                  </div>
                </div>

                {inst.requiresPreTest && (
                  <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold text-[10px] border border-emerald-200 dark:border-emerald-800 shrink-0">
                    Pre-Test आवश्यक
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                {inst.descriptionNe}
              </p>

              {/* Levels & Posts */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  उपलब्ध पद तथा तहहरू:
                </span>
                <div className="space-y-1.5">
                  {inst.levels.map(l => (
                    <div key={l.levelNumber} className="flex items-center justify-between text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white">{l.levelTitleNe}</span>
                        <p className="text-[10px] text-slate-500 line-clamp-1">{l.minimumQualificationNe}</p>
                      </div>
                      <span className="text-[10px] font-bold text-sky-600 font-mono shrink-0 ml-2">
                        {l.totalPhases} चरण
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Focus Areas */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-slate-500 block">मुख्य परीक्षा केन्द्रित विषय:</span>
                <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                  {inst.keyExamFocusNe.slice(0, 2).map((focus, fIdx) => (
                    <li key={fIdx} className="truncate">{focus}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
              <a
                href={inst.officialCareersUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 inline-flex items-center gap-1 font-medium"
              >
                <span>आधिकारिक नोटिस</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                type="button"
                onClick={() => setActiveTab('practice')}
                className="px-4 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>तयारी सुरु गर्नुहोस्</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankingHubScreen;
