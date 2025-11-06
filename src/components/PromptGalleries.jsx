import React, { useMemo, useState } from 'react';
import { Search, Filter, Copy, ChevronDown, Film } from 'lucide-react';

const categories = ['All', 'Portrait', 'Landscape', 'Cyberpunk', 'Minimal', 'Fantasy'];

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop', title: 'Neon Cityscape', category: 'Cyberpunk', prompt: 'Ultra-detailed neon cyberpunk city, rainy reflections, 35mm bokeh, dusk' },
  { id: 2, src: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1200&auto=format&fit=crop', title: 'Minimal Desk', category: 'Minimal', prompt: 'Clean minimal workspace, soft daylight, high-key, shot on film' },
  { id: 3, src: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1200&auto=format&fit=crop', title: 'Fantasy Forest', category: 'Fantasy', prompt: 'Misty enchanted forest, golden hour shafts of light, volumetric fog' },
  { id: 4, src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop', title: 'Abstract Shapes', category: 'Minimal', prompt: 'Abstract geometric composition, soft gradients, modern art poster' },
  { id: 5, src: 'https://images.unsplash.com/photo-1658929638325-4b9f73b8bdb1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwQ2l0eXNjYXBlfGVufDB8MHx8fDE3NjI0NTE2NjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Portrait Glow', category: 'Portrait', prompt: 'Dramatic portrait with rim light, kodak portra 400, shallow depth' },
  { id: 6, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop', title: 'Mountain Range', category: 'Landscape', prompt: 'Epic mountain landscape, clouds rolling, ultra wide vista, sunrise' },
];

function SectionHeader({ emoji, title, anchor }) {
  return (
    <div id={anchor} className="flex items-center justify-between mb-4">
      <h2 className="text-xl sm:text-2xl font-semibold">
        <span className="mr-2">{emoji}</span>{title}
      </h2>
      <a href="#" className="text-sm text-orange-600 dark:text-orange-400 hover:underline">View all</a>
    </div>
  );
}

function ImageCard({ item }) {
  const copy = () => {
    navigator.clipboard.writeText(item.prompt);
  };
  return (
    <div className="rounded-xl overflow-hidden border border-neutral-200/70 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-3 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium">{item.title}</p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">{item.category}</p>
        </div>
        <button onClick={copy} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs">
          <Copy size={14} /> Copy Prompt
        </button>
      </div>
    </div>
  );
}

export default function PromptGalleries() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');

  const filtered = useMemo(() => {
    return images.filter(i => (cat === 'All' || i.category === cat) && (i.title.toLowerCase().includes(q.toLowerCase()) || i.prompt.toLowerCase().includes(q.toLowerCase())));
  }, [q, cat]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="flex-1 flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 bg-white dark:bg-neutral-900">
          <Search size={18} className="text-neutral-500" />
          <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search prompts, styles, moods..." className="w-full bg-transparent outline-none placeholder:text-neutral-400 text-sm" />
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <select value={cat} onChange={(e)=>setCat(e.target.value)} className="appearance-none pl-3 pr-8 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm">
              {categories.map(c => <option key={c}>{c}</option>)}
            </select>
            <ChevronDown size={16} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500" />
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <Filter size={16} /> Filters
          </button>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <SectionHeader emoji="🔥" title="Today's Trending Prompts" anchor="images" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.slice(0,3).map(item => <ImageCard key={item.id} item={item} />)}
          </div>
        </div>

        <div>
          <SectionHeader emoji="🎉" title="Special Prompts for Upcoming Festivals" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.slice(2,5).map(item => <ImageCard key={item.id} item={item} />)}
          </div>
        </div>

        <div>
          <SectionHeader emoji="🖼️" title="Main Image Gallery" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(item => <ImageCard key={item.id} item={item} />)}
          </div>
        </div>

        <div>
          <SectionHeader emoji="🎬" title="AI Video Prompts" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.slice(1,4).map(item => (
              <div key={`v-${item.id}`} className="rounded-xl overflow-hidden border border-neutral-200/70 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
                <div className="aspect-video w-full bg-neutral-200/70 dark:bg-neutral-800 flex items-center justify-center">
                  <Film className="text-neutral-600" />
                </div>
                <div className="p-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium">{item.title} — Video</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Storyboard & motion prompt</p>
                  </div>
                  <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs">
                    <Copy size={14} /> Copy Prompt
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
