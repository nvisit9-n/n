import React from 'react';
import { Award, FileText, Trophy, BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0B132A] text-slate-400 border-t border-slate-800/80 text-xs py-3.5 px-4 sm:px-6 lg:px-8 z-20">
      <div className="max-w-[1700px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        
        {/* Left Copyright Notice */}
        <div className="text-slate-400 font-medium">
          © 2025 Banking Tayari Nepal <span className="text-slate-600 mx-1.5">|</span> सबै अधिकार सुरक्षित ।
        </div>

        {/* Right Platform Statistics Badges */}
        <div className="flex items-center flex-wrap justify-center gap-3 sm:gap-6 text-slate-300 font-semibold text-[11px] sm:text-xs">
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Trusted by 10,000+ Students</span>
          </div>

          <span className="hidden sm:inline text-slate-700">|</span>

          <div className="flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-blue-400" />
            <span>10,000+ Practice Questions</span>
          </div>

          <span className="hidden sm:inline text-slate-700">|</span>

          <div className="flex items-center gap-1.5">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>100+ Mock Tests</span>
          </div>

          <span className="hidden sm:inline text-slate-700">|</span>

          <div className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>15+ Bank Exam Syllabus</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
