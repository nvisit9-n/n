import React, { useState, useMemo } from 'react';
import { 
  FileCheck2, 
  Search, 
  Filter, 
  Calendar, 
  Building2, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Layers, 
  AlertCircle,
  ShieldCheck,
  RefreshCw,
  FileText,
  Users
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { OFFICIAL_RESULTS_DATA, OfficialResultItem, ResultCategory } from '../../data/resultsData';
import { CANONICAL_INSTITUTIONS } from '../../data/canonicalInstitutionsData';
import { OfficialTrustBadge } from '../common/OfficialTrustBadge';
import { NepalFlagEmblem } from '../common/NepalFlagEmblem';

const CATEGORIES: { id: ResultCategory | 'all'; labelNe: string; labelEn: string }[] = [
  { id: 'all', labelNe: 'सबै नतिजाहरू', labelEn: 'All Results' },
  { id: 'Pre-Test Results', labelNe: 'पूर्वयोग्यता नतिजा', labelEn: 'Pre-Test Results' },
  { id: 'PSC Results', labelNe: 'लोक सेवा नतिजा', labelEn: 'PSC Results' },
  { id: 'Institution Results', labelNe: 'संस्थान नतिजा', labelEn: 'Institution Results' },
  { id: 'Written Results', labelNe: 'लिखित परीक्षा नतिजा', labelEn: 'Written Results' },
  { id: 'Interview Results', labelNe: 'अन्तर्वार्ता नतिजा', labelEn: 'Interview Results' },
  { id: 'Final Results', labelNe: 'अन्तिम सिफारिस योग्यताक्रम', labelEn: 'Final Results' }
];

export const ResultsSystemScreen: React.FC = () => {
  const { tText, setActiveTab } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<ResultCategory | 'all'>('all');
  const [selectedInstitution, setSelectedInstitution] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredResults = useMemo(() => {
    return OFFICIAL_RESULTS_DATA.filter(item => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchInst = selectedInstitution === 'all' || item.institutionId === selectedInstitution;
      const matchLevel = selectedLevel === 'all' || item.levelNe.includes(selectedLevel);
      const matchQuery = !searchQuery || 
        item.titleNe.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.institutionNameNe.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.advertisementNumber.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchInst && matchLevel && matchQuery;
    });
  }, [selectedCategory, selectedInstitution, selectedLevel, searchQuery]);

  return (
    <div className="space-y-10 pb-20 animate-fadeIn">
      {/* Top Header & Verification Status */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <NepalFlagEmblem className="w-4 h-5 drop-shadow-xs" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800">
              Verified Official Results Gateway
            </span>
            <OfficialTrustBadge 
              sourceName="लोक सेवा आयोग तथा आधिकारिक संस्थान सूचना पोर्टल" 
              verifiedYearBS="२०८१/८२ अद्यावधिक" 
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {tText('परीक्षाफल तथा नतिजा प्रणाली (Official Results Hub)', 'Official Examination Results Hub')}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
            पूर्वयोग्यता परीक्षा, लोक सेवा आयोग तथा संगठित संस्थाहरूका लिखित परीक्षा, अन्तर्वार्ता तथा अन्तिम योग्यताक्रम नतिजाहरू।
          </p>
        </div>

        {/* Live Source Monitor Workflow pill */}
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs text-xs text-slate-600 dark:text-slate-300">
          <RefreshCw className="w-3.5 h-3.5 text-emerald-600 animate-spin" style={{ animationDuration: '4s' }} />
          <span>स्रोत अनुगमन: <strong className="text-emerald-600 dark:text-emerald-400">सक्रिय (Live Monitored)</strong></span>
        </div>
      </div>

      {/* Official Automated Pipeline Visualizer */}
      <div className="bg-gradient-to-r from-slate-900 to-sky-950 text-white rounded-3xl p-6 sm:p-7 shadow-lg border border-sky-800/40 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-sky-300 font-semibold">
                Official Verification Architecture
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                नतिजा प्रमाणीकरण प्रक्रिया (Source-to-Publish Workflow)
              </h2>
            </div>
            <span className="text-xs bg-white/10 text-sky-200 px-3 py-1 rounded-full border border-white/10 self-start sm:self-auto font-mono">
              Traceable • Anti-Hallucination
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 pt-2">
            {[
              { step: '१', title: 'Official Source', desc: 'psc.gov.np, nrb.org.np' },
              { step: '२', title: 'Fetch', desc: 'Secure crawl & webhooks' },
              { step: '३', title: 'Parse', desc: 'PDF / Text parsing' },
              { step: '४', title: 'Classify', desc: 'Level, Post, Cycle' },
              { step: '५', title: 'Deduplicate', desc: 'Unique advert ID' },
              { step: '६', title: 'Verify', desc: 'Admin QA crosscheck' },
              { step: '७', title: 'Publish', desc: 'Push to candidate feed' }
            ].map((node, i) => (
              <div key={node.step} className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/10 text-center">
                <div className="w-5 h-5 rounded-full bg-sky-500/30 text-sky-300 font-mono text-[10px] font-bold flex items-center justify-center mx-auto mb-1">
                  {node.step}
                </div>
                <div className="text-xs font-bold text-white truncate">{node.title}</div>
                <div className="text-[10px] text-sky-200/70 truncate">{node.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0B2046] text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              {cat.labelNe}
            </button>
          ))}
        </div>

        {/* Secondary Filter Row */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          <div className="sm:col-span-6 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="नतिजा, विज्ञापन नम्बर वा पद खोज्नुहोस्..."
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="sm:col-span-3">
            <select
              value={selectedInstitution}
              onChange={e => setSelectedInstitution(e.target.value)}
              className="w-full px-3 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-700 dark:text-slate-300 focus:outline-none"
            >
              <option value="all">सबै संस्थानहरू (All)</option>
              <option value="psc">लोक सेवा आयोग (PSC)</option>
              {CANONICAL_INSTITUTIONS.map(inst => (
                <option key={inst.id} value={inst.id}>{inst.shortName} - {inst.nameNe}</option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-3">
            <select
              value={selectedLevel}
              onChange={e => setSelectedLevel(e.target.value)}
              className="w-full px-3 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-700 dark:text-slate-300 focus:outline-none"
            >
              <option value="all">सबै तहहरू (All Levels)</option>
              <option value="४">तह ४ (Level 4)</option>
              <option value="५">तह ५ (Level 5)</option>
              <option value="६">तह ६ / अधिकृत (Level 6)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count & Status Indicator */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <span>देखाउँदै: <strong>{filteredResults.length}</strong> नतिजाहरू</span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          सबै नतिजाहरू प्रथम-पक्ष आधिकारिक स्रोतबाट प्रमाणीकरण गरिएका छन्
        </span>
      </div>

      {/* Results List Cards */}
      <div className="space-y-4">
        {filteredResults.map(item => (
          <div 
            key={item.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 hover:border-sky-300 dark:hover:border-sky-700 transition-all shadow-xs"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                    {item.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {item.levelNe}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {item.advertisementNumber}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    {item.verificationStatus}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {item.titleNe}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400 pt-1">
                  <div className="flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.institutionNameNe}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>प्रकाशन मिति: <strong>{item.publishedDateBS}</strong> ({item.publishedDateAD})</span>
                  </div>
                  {item.examDateBS && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>परीक्षा मिति: {item.examDateBS}</span>
                    </div>
                  )}
                  {item.totalCandidatesSelected > 0 && (
                    <div className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-semibold">
                      <Users className="w-3.5 h-3.5" />
                      <span>छनोट संख्या: {item.totalCandidatesSelected.toLocaleString('ne-NP')} जना</span>
                    </div>
                  )}
                </div>

                {/* Key Highlights bullet list */}
                {item.keyHighlightsNe && item.keyHighlightsNe.length > 0 && (
                  <div className="pt-2">
                    <ul className="space-y-1">
                      {item.keyHighlightsNe.map((highlight, idx) => (
                        <li key={idx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* View Official Result Action CTA */}
              <div className="flex lg:flex-col items-center lg:items-end gap-2.5 shrink-0 pt-2 lg:pt-0">
                <a
                  href={item.officialSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B2046] hover:bg-[#153468] text-white text-xs font-bold shadow-xs transition active:scale-95 cursor-pointer"
                >
                  <span>VIEW OFFICIAL RESULT</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {item.category === 'Pre-Test Results' && (
                  <button
                    onClick={() => setActiveTab('pre-test')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                  >
                    <span>प्रिटेस्ट पोर्टल</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        {filteredResults.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
            <FileText className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 dark:text-white mb-1">कुनै नतिजा फेला परेन</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              कृपया अन्य क्याटगोरी वा खोज शब्द चयन गरी पुनः प्रयास गर्नुहोस्।
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
