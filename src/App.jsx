import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import PromptGalleries from './components/PromptGalleries.jsx';
import TextAndPricing from './components/TextAndPricing.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors duration-300 font-inter">
      <Header />
      <main>
        <Hero />
        <PromptGalleries />
        <TextAndPricing />
      </main>
    </div>
  );
}

export default App;
