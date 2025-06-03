import React from 'react';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { SectionNavigation } from './components/SectionNavigation';
import { Overview } from './components/sections/Overview';
import { LogVolume } from './components/sections/LogVolume';
import { Architecture } from './components/sections/Architecture';
import { Performance } from './components/sections/Performance';
import { Pricing } from './components/sections/Pricing';
import { Maintenance } from './components/sections/Maintenance';
import { Recommendation } from './components/sections/Recommendation';
import { FinalThoughts } from './components/sections/FinalThoughts';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Layout>
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 lg:sticky lg:top-24 h-fit">
            <SectionNavigation />
          </aside>
          <main className="flex-1">
            <Overview />
            <LogVolume />
            <Architecture />
            <Performance />
            <Pricing />
            <Maintenance />
            <Recommendation />
            <FinalThoughts />
          </main>
        </div>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;