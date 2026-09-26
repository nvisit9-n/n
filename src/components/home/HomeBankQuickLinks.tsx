import React from 'react';
import { Trophy, ChevronRight, Landmark } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface QuickBank {
  id: string;
  code: string;
  nameNe: string;
  ringColor: string;
  bgLight: string;
  textColor: string;
}

export const HomeBankQuickLinks: React.FC = () => {
  const { setActiveTab } = useApp();

  const banks: QuickBank[] = [
    {
      id: 'nrb',
      code: 'NRB',
      nameNe: 'नेपाल राष्ट्र बैंक',
      ringColor: 'border-emerald-500',
      bgLight: 'bg-emerald-50',
      textColor: 'text-emerald-700',
    },
    {
      id: 'rbb',
      code: 'RBB',
      nameNe: 'राष्ट्रिय वाणिज्य बैंक',
      ringColor: 'border-amber-500',
      bgLight: 'bg-amber-50',
      textColor: 'text-amber-700',
    },
    {
      id: 'adbl',
      code: 'ADBL',
      nameNe: 'कृषि विकास बैंक',
      ringColor: 'border-blue-500',
      bgLight: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    {
      id: 'nbl',
      code: 'NBL',
      nameNe: 'नेपाल बैंक लिमिटेड',
      ringColor: 'border-rose-500',
      bgLight: 'bg-rose-50',
      textColor: 'text-rose-700',
    },
    {
      id: 'epf',
      code: 'EPF',
      nameNe: 'कर्मचारी सञ्चय कोष',
      ringColor: 'border-teal-500',
      bgLight: 'bg-teal-50',
      textColor: 'text-teal-700',
    },
    {
      id: 'cit',
      code: 'CIT',
      nameNe: 'नागरिक लगानी कोष',
      ringColor: 'border-purple-500',
      bgLight: 'bg-purple-50',
      textColor: 'text-purple-700',
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
      {/* Title & Subtitle */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0052FF] flex items-center justify-center shrink-0">
          <Trophy className="w-5 h-5 stroke-[2]" />
        </div>
        <div>
          <h4 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-tight">
            संगठित संस्थाका प्रमुख अवसरहरू
          </h4>
          <p className="text-xs text-slate-500 font-medium">
            Pre-Test पास गरेपछि तपाईंको लागि खुल्ने संस्थाहरू
          </p>
        </div>
      </div>

      {/* Row of Bank Circles with Next Button */}
      <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
        {banks.map((bank) => (
          <button
            key={bank.id}
            type="button"
            onClick={() => setActiveTab('banking')}
            title={bank.nameNe}
            className={`w-11 h-11 rounded-full ${bank.bgLight} border-2 ${bank.ringColor} flex items-center justify-center font-black text-xs ${bank.textColor} shadow-2xs hover:scale-110 active:scale-95 transition-all cursor-pointer`}
          >
            {bank.code}
          </button>
        ))}

        {/* Carousel Next Arrow Circle */}
        <button
          type="button"
          onClick={() => setActiveTab('sangathit-sanstha')}
          className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          title="See More Institutions"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.2]" />
        </button>
      </div>
    </div>
  );
};
