import React, { useState } from 'react';

interface PreviewCardProps {
  headline: string;
  name: string;
  avatarUrl?: string; // Optional, placeholder used if null
}

const PreviewCard: React.FC<PreviewCardProps> = ({ headline, name, avatarUrl }) => {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  const MAX_MOBILE_CHARS = 65; // Approximate sweet spot for mobile truncation

  return (
    <div className="card p-4 space-y-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <h3 className="text-sm font-semibold text-linkedin-text-secondary uppercase tracking-wider">Live Preview</h3>
        <div className="flex bg-gray-100 rounded p-0.5">
          <button
            onClick={() => setViewMode('desktop')}
            className={`px-3 py-1 text-xs font-medium rounded transition-all ${
              viewMode === 'desktop' ? 'bg-white shadow-sm text-linkedin-text-primary' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Desktop
          </button>
          <button
            onClick={() => setViewMode('mobile')}
            className={`px-3 py-1 text-xs font-medium rounded transition-all ${
              viewMode === 'mobile' ? 'bg-white shadow-sm text-linkedin-text-primary' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Mobile
          </button>
        </div>
      </div>

      <div className={`border border-gray-200 rounded-lg overflow-hidden bg-white ${
        viewMode === 'mobile' ? 'max-w-[320px] mx-auto' : 'w-full'
      }`}>
        {/* Mock LinkedIn Header Background */}
        <div className="h-16 bg-[#A0B4B7] w-full relative">
           <div className="absolute -bottom-8 left-4 w-16 h-16 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
             {avatarUrl ? (
               <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
             ) : (
               <div className="w-full h-full flex items-center justify-center bg-gray-400 text-white font-bold text-xl">
                 {name.charAt(0)}
               </div>
             )}
           </div>
        </div>

        <div className="pt-10 px-4 pb-4">
           <div className="font-semibold text-lg leading-tight text-linkedin-text-primary mb-0.5">
             {name || "Your Name"}
           </div>
           <div className={`text-sm text-linkedin-text-secondary leading-snug ${viewMode === 'mobile' ? 'line-clamp-2' : ''}`}>
             {headline || "Your Headline Will Appear Here..."}
           </div>
           
           {viewMode === 'mobile' && headline.length > MAX_MOBILE_CHARS && (
             <div className="mt-2 flex items-center gap-1.5 text-xs text-linkedin-warning bg-orange-50 p-2 rounded border border-orange-100">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                 <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
               </svg>
               <span>Potential truncation on mobile ({headline.length} chars)</span>
             </div>
           )}

           <div className="mt-2 text-xs text-linkedin-text-secondary">
             Talks about #marketing, #growth, and #startups
           </div>
           
           <div className="mt-2 text-xs text-linkedin-text-secondary">
             City, Country
           </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
