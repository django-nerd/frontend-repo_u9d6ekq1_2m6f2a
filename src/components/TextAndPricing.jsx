import React, { useMemo, useState } from 'react';
import { Copy, ChevronDown, CheckCircle2 } from 'lucide-react';

const textPrompts = [
  { id: 1, title: 'SEO Blog Outline', author: 'AIPRMT Labs', tags: ['SEO', 'Blogging', 'Content'], prompt: 'Create an SEO-optimized blog outline about {topic} targeting {audience} with keywords: {keywords}.' },
  { id: 2, title: 'YouTube Script Hook', author: 'CreatorKit', tags: ['YouTube', 'Hook', 'Script'], prompt: 'Write five punchy video hooks under 12 seconds for a video about {topic}.' },
  { id: 3, title: 'UX Microcopy', author: 'ProductWriter', tags: ['UX', 'Microcopy', 'App'], prompt: 'Generate friendly, concise microcopy for an in-app tooltip explaining {feature}.' },
  { id: 4, title: 'Job Description Builder', author: 'HR Sensei', tags: ['HR', 'ATS', 'Hiring'], prompt: 'Draft a role description for {role} with responsibilities, requirements, and success metrics.' },
  { id: 5, title: 'Email Sequence (Cold Outreach)', author: 'GrowthOps', tags: ['Email', 'Sales', 'B2B'], prompt: 'Create a 3-step cold email sequence to reach {persona} about {offer} with a friendly tone.' },
];

function Toolbar({ q, setQ, cat, setCat, sort, setSort }) {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
      <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search prompts..." className="w-full md:w-1/2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm" />
      <div className="flex items-center gap-2">
        <Dropdown value={cat} onChange={setCat} options={["All","SEO","YouTube","UX","HR","Email"]} label="Category" />
        <Dropdown value={sort} onChange={setSort} options={["Trending","Newest","A-Z"]} label="Sort By" />
      </div>
    </div>
  );
}

function Dropdown({ value, onChange, options, label }) {
  return (
    <div className="relative">
      <select value={value} onChange={(e)=>onChange(e.target.value)} className="appearance-none pl-3 pr-8 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm">
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
      <ChevronDown size={16} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500" />
    </div>
  );
}

function Row({ item }) {
  const copy = () => navigator.clipboard.writeText(item.prompt);
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 items-center border-b border-neutral-200/60 dark:border-neutral-800 py-3">
      <div className="md:col-span-4">
        <p className="font-medium">{item.title}</p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">by {item.author}</p>
      </div>
      <div className="md:col-span-4 flex flex-wrap gap-2">
        {item.tags.map(t => (
          <span key={t} className="px-2 py-1 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300 text-xs border border-amber-200/50 dark:border-amber-500/20">{t}</span>
        ))}
      </div>
      <div className="md:col-span-4 flex md:justify-end">
        <button onClick={copy} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm">
          <Copy size={16} /> Copy Prompt
        </button>
      </div>
    </div>
  );
}

function Pricing() {
  const tiers = [
    {
      name: 'Basic', price: 'Free', features: ['Browse galleries', 'Copy prompts', 'Community access']
    },
    {
      name: 'Pro', price: '$9/mo', features: ['Everything in Basic', 'Unlimited collections', 'Priority updates']
    },
    {
      name: 'Business', price: '$29/mo', features: ['Team seats (5)', 'Private workspaces', 'Premium support']
    },
  ];
  return (
    <div className="mt-14">
      <h3 className="text-2xl font-semibold text-center mb-6">Premium Plans</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map(t => (
          <div key={t.name} className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
            <div className="flex items-baseline justify-between">
              <p className="text-lg font-semibold">{t.name}</p>
              <p className="text-xl font-bold text-orange-600 dark:text-orange-400">{t.price}</p>
            </div>
            <ul className="mt-4 space-y-2">
              {t.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm"><CheckCircle2 className="text-orange-500" size={16} /> {f}</li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-full bg-orange-500 hover:bg-orange-600 text-white py-2 font-medium">Choose {t.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200/60 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
        <div>
          <p className="font-semibold mb-2">Company</p>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Resources</p>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
            <li><a href="#" className="hover:underline">Docs</a></li>
            <li><a href="#" className="hover:underline">Community</a></li>
            <li><a href="#" className="hover:underline">Changelog</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Legal</p>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Terms</a></li>
            <li><a href="#" className="hover:underline">Security</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Follow</p>
          <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300">
            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center hover:text-orange-600">X</a>
            <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center hover:text-orange-600">YT</a>
            <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center hover:text-orange-600">GH</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-neutral-500 dark:text-neutral-400 pb-8">© {new Date().getFullYear()} AIPRMT. All rights reserved.</div>
    </footer>
  );
}

export default function TextAndPricing() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const [sort, setSort] = useState('Trending');

  const filtered = useMemo(() => {
    let f = textPrompts.filter(p => (cat === 'All' || p.tags.includes(cat)) && (p.title.toLowerCase().includes(q.toLowerCase()) || p.prompt.toLowerCase().includes(q.toLowerCase())));
    if (sort === 'A-Z') f = [...f].sort((a,b)=>a.title.localeCompare(b.title));
    if (sort === 'Newest') f = [...f].reverse();
    return f;
  }, [q, cat, sort]);

  return (
    <section id="text" className="bg-neutral-50 dark:bg-neutral-950/40 border-t border-neutral-200/60 dark:border-neutral-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">✍️ AI Text Prompt Catalog (for ChatGPT, Gemini, etc.)</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6">Browse a curated library of production-ready text prompts with clean filters and quick copy.</p>

        <Toolbar q={q} setQ={setQ} cat={cat} setCat={setCat} sort={sort} setSort={setSort} />

        <div className="mt-6 rounded-xl border border-neutral-200/70 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 items-center bg-neutral-50 dark:bg-neutral-900/60 border-b border-neutral-200/60 dark:border-neutral-800 px-4 py-3 text-xs font-medium text-neutral-600 dark:text-neutral-300">
            <div className="md:col-span-4">Title</div>
            <div className="md:col-span-4">Use Case</div>
            <div className="md:col-span-4 md:text-right">Action</div>
          </div>
          <div className="px-4">
            {filtered.map(item => <Row key={item.id} item={item} />)}
          </div>
        </div>

        <Pricing />
        <Footer />
      </div>
    </section>
  );
}
