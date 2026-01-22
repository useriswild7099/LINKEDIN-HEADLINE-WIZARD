import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white border-b border-linkedin-border pt-12 pb-16 px-6 mb-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-linkedin-text-primary mb-4">
          Design Your High-Converting LinkedIn Headline
        </h1>
        <p className="text-lg text-linkedin-text-secondary mb-8 max-w-2xl mx-auto">
          Create the perfect LinkedIn headline in seconds. Use proven formulas to rank in search, impress visitors, and convert leads.
        </p>
        <div className="flex justify-center gap-4">
          <button className="btn-primary px-6 py-2 rounded-full text-base">
            Start Designing
          </button>
          <button className="btn-secondary px-6 py-2 rounded-full text-base">
            View Examples
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
