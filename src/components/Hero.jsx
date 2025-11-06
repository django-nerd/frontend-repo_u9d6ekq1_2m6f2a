import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[60vh] sm:h-[72vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white dark:from-neutral-950/40 dark:via-neutral-950/30 dark:to-neutral-950 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-sm">
          AIPRMT
        </h1>
        <p className="mt-3 text-base sm:text-lg text-neutral-700 dark:text-neutral-200 max-w-2xl">
          Discover, copy, and remix world‑class AI Image, Video, and Text prompts — crafted for creators and pros.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="#images" className="px-5 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-sm">Explore Image Prompts</a>
          <a href="#text" className="px-5 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium">Browse Text Prompts</a>
        </div>
      </div>
    </section>
  );
}
