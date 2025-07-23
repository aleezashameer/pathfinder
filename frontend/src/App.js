import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TabSwitcher from './components/TabSwitcher';
import ApplyNow from './pages/ApplyNow';
import BuildResume from './pages/BuildResume';

function App() {
  const [tab, setTab] = useState('apply');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <TabSwitcher tab={tab} setTab={setTab} />
      <main className="p-4">
        {tab === 'apply' ? <ApplyNow /> : <BuildResume />}
      </main>
    </div>
  );
}

export default App; 