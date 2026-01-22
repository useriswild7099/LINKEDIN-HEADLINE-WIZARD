import React, { useState, useEffect } from 'react';
import PreviewCard from './PreviewCard';

interface WizardData {
  role: string;
  company: string;
  audience: string;
  result: string;
  proof: string;
  keyword: string;
}

const HeadlineWizard: React.FC = () => {
  const [data, setData] = useState<WizardData>({
    role: '',
    company: '',
    audience: '',
    result: '',
    proof: '',
    keyword: ''
  });

  const [generatedHeadlines, setGeneratedHeadlines] = useState<string[]>([]);
  const [selectedHeadline, setSelectedHeadline] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>('Analysing your input...');

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem('headline_wizard_data');
    if (saved) {
      try {
        setData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved data", e);
      }
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('headline_wizard_data', JSON.stringify(data));
  }, [data]);


  // ... (inside handleGenerate)
  const handleGenerate = async () => {
    setIsLoading(true);
    setShowResults(false);
    
    const messages = [
      "Mapping your experience to proven LinkedIn frameworks…",
      "Scanning high-converting headline structures…",
      "Optimizing for clarity, authority, and relevance…",
      "Balancing keywords with credibility…",
      "Prioritizing outcomes over buzzwords…",
      "Removing fluff. Maximizing impact."
    ];
    setLoadingMessage(messages[Math.floor(Math.random() * messages.length)]);
    
    // Simulate API/Processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const { role, company, audience, result, proof, keyword } = data;
    const safeRole = role || 'Founder';
    const safeCompany = company || 'MyCompany';
    const safeAudience = audience || 'Clients';
    const safeResult = result || 'Grow Revenue';
    const safeProof = proof || 'Helping 50+ Brands';
    const safeKeyword = keyword || 'Growth';

    const formulas = [
      // Core Value-Based
      `Helping ${safeAudience} ${safeResult} | ${safeRole} | ${safeProof}`,
      `Helping ${safeAudience} achieve ${safeResult} using ${safeKeyword}`,
      `I help ${safeAudience} ${safeResult} without complexity`,
      // Role + Authority
      `${safeRole} @ ${safeCompany} | ${safeProof} | Expert in ${safeKeyword}`,
      `${safeRole} helping ${safeAudience} with ${safeKeyword}`,
      `${safeRole} | ${safeKeyword} | ${safeResult}`,
      `Founder of ${safeCompany} | ${safeResult}`,
      // Result-Driven
      `${safeResult} for ${safeAudience} using ${safeKeyword}`,
      `Helping ${safeAudience} get ${safeResult}`,
      `Achieved ${safeResult} for ${safeAudience} | ${safeKeyword}`,
      `Scaling ${safeAudience} to ${safeResult}`,
      // Credibility
      `${safeResult} | Backed by ${safeProof}`,
      `${safeRole} | Worked with ${safeCompany} & many more`,
      `${safeResult} | Case studies inside`,
      // SaaS-Founder
      `Building ${safeCompany} for ${safeAudience}`,
      `Founder @ ${safeCompany} | Solving problems for ${safeAudience}`,
      `Helping ${safeAudience} with ${safeKeyword} tools`,
      `Bootstrapped ${safeCompany} to ${safeResult}`,
      // Keyword SEO
      `${safeKeyword} for ${safeAudience}`,
      `${safeKeyword} | ${safeResult} | ${safeRole}`,
      `${safeAudience} + ${safeKeyword} = ${safeResult}`,
      // Creator
      `Sharing insights on ${safeKeyword} to help ${safeAudience}`,
      `Daily insights on ${safeKeyword}`,
      `Helping you ${safeResult}`,
      `Documenting my journey building ${safeCompany}`,
      // Conversion Short
      `${safeResult} | ${safeKeyword}`,
      `Helping ${safeAudience}`,
      `${safeResult} made simple`,
      `${safeKeyword} that works`,
      // Hybrid
      `Helping ${safeAudience} ${safeResult} | Built ${safeCompany}`,
      `${safeRole} | ${safeResult} | ${safeKeyword}`,
      `${safeAudience} → ${safeResult} with ${safeCompany}`,
      `Built ${safeCompany} to help ${safeAudience} ${safeResult}`
    ];

    // Select a mix of 6 diverse headlines
    const distinctSelection = [
      formulas[0],  // Classic Value
      formulas[3],  // Authority @ Company
      formulas[7],  // Result Driven
      formulas[14], // SaaS Founder
      formulas[20], // Creator/Insight
      formulas[28]  // Hybrid
    ];

    setGeneratedHeadlines(distinctSelection);
    setSelectedHeadline(distinctSelection[0]);
    setIsLoading(false);
    setShowResults(true);
  };

  // ... (inside JSX)
        {isLoading && (
          <div className="card p-12 flex flex-col items-center justify-center text-center animate-fade-in">
             <div className="mb-4">
               <svg className="animate-spin h-8 w-8 text-linkedin-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
               </svg>
             </div>
             <h3 className="text-lg font-semibold text-linkedin-text-primary mb-2">Analysing your input</h3>
             <p className="text-linkedin-text-secondary">{loadingMessage}</p>
          </div>
        )}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column: Inputs */}
      <div className="space-y-6">
        <div className="card p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-linkedin-text-primary">1. Build Your Persona</h2>
            <span className="text-xs font-medium text-linkedin-text-secondary bg-gray-100 px-2 py-1 rounded">All fields optional</span>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-linkedin-text-secondary mb-1">Your Role</label>
                <input 
                  type="text" 
                  name="role"
                  value={data.role}
                  onChange={handleChange}
                  placeholder="e.g. Founder" 
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-linkedin-text-secondary mb-1">Company / Product</label>
                <input 
                  type="text" 
                  name="company"
                  value={data.company}
                  onChange={handleChange}
                  placeholder="e.g. Acme Corp" 
                  className="input-field"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-linkedin-text-secondary mb-1">Target Audience</label>
              <input 
                type="text" 
                name="audience"
                value={data.audience}
                onChange={handleChange}
                placeholder="e.g. B2B Founders" 
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-linkedin-text-secondary mb-1">Main Result / Benefit</label>
              <input 
                type="text" 
                name="result"
                value={data.result}
                onChange={handleChange}
                placeholder="e.g. scale revenue" 
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-linkedin-text-secondary mb-1">Social Proof</label>
              <input 
                type="text" 
                name="proof"
                value={data.proof}
                onChange={handleChange}
                placeholder="e.g. Ex-Google" 
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-linkedin-text-secondary mb-1">Top Keyword</label>
              <input 
                type="text" 
                name="keyword"
                value={data.keyword}
                onChange={handleChange}
                placeholder="e.g. SEO" 
                className="input-field"
              />
            </div>

            <div className="pt-2">
              <button 
                onClick={handleGenerate}
                disabled={isLoading}
                className="w-full btn-primary py-2.5 text-base flex justify-center items-center gap-2"
              >
                {isLoading ? 'Generating...' : 'Generate Headlines'}
              </button>
            </div>
          </div>
        </div>

        {isLoading && (
          <div className="card p-12 flex flex-col items-center justify-center text-center animate-fade-in">
             <div className="mb-4">
               <svg className="animate-spin h-8 w-8 text-linkedin-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
               </svg>
             </div>
             <h3 className="text-lg font-semibold text-linkedin-text-primary mb-2">Analysing your input</h3>
             <p className="text-linkedin-text-secondary">{loadingMessage}</p>
          </div>
        )}

        {showResults && (
           <div className="card p-6 animate-fade-in">
             <h2 className="text-xl font-semibold text-linkedin-text-primary mb-4">3. Select & Copy</h2>
             <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
               {generatedHeadlines.map((headline, idx) => (
                 <div 
                   key={idx}
                   onClick={() => setSelectedHeadline(headline)}
                   className={`p-3 rounded-lg border cursor-pointer transition-all ${
                     selectedHeadline === headline 
                       ? 'border-linkedin-blue bg-blue-50/50 ring-1 ring-linkedin-blue' 
                       : 'border-gray-200 hover:border-linkedin-blue hover:bg-gray-50'
                   }`}
                 >
                   <div className="flex justify-between items-start gap-2">
                     <p className="text-sm text-linkedin-text-primary font-medium">{headline}</p>
                     <button 
                       onClick={(e) => {
                         e.stopPropagation();
                         copyToClipboard(headline);
                       }}
                       className="text-xs text-linkedin-blue font-semibold hover:underline shrink-0"
                     >
                       Copy
                     </button>
                   </div>
                   <div className="mt-1 flex gap-2">
                      <span className={`text-[10px] font-medium ${headline.length > 220 ? 'text-red-600' : 'text-gray-400'}`}>
                        {headline.length} chars
                      </span>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        )}
      </div>

      {/* Right Column: Preview */}
      <div className="space-y-6 lg:sticky lg:top-20 h-fit">
        <h2 className="text-xl font-semibold text-linkedin-text-primary">2. Live Preview</h2>
        {isLoading ? (
            <div className="border border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center bg-gray-50 min-h-[200px] opacity-50">
                <div className="text-4xl mb-2 grayscale">🤔</div>
                <h3 className="text-sm font-semibold text-linkedin-text-secondary">Thinking...</h3>
            </div>
        ) : showResults ? (
            <PreviewCard 
              headline={selectedHeadline} 
              name="Your Name" 
            />
        ) : (
            <div className="border border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center bg-gray-50 min-h-[200px]">
                <div className="text-4xl mb-2">👋</div>
                <h3 className="text-sm font-semibold text-linkedin-text-secondary">Ready to assist</h3>
                <p className="text-xs text-gray-500 mt-1 max-w-[200px]">
                  Fill in your details and click Generate to see your profile preview here.
                </p>
            </div>
        )}
        
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-linkedin-text-secondary">
          <p className="font-semibold text-linkedin-text-primary mb-1">💡 Pro Tip</p>
          <p>
            The first 60-80 characters are crucial. Usually, only this much is visible when you comment on posts or appear in search results on mobile. Ensure your "Hook" or main value prop is at the very beginning!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadlineWizard;
