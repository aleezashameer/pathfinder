import React from 'react';

function TabSwitcher({ tab, setTab }) {
  return (
    <div className="flex space-x-4 p-4 bg-white shadow">
      <button
        className={`px-4 py-2 rounded ${tab === 'apply' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setTab('apply')}
      >
        Apply Now
      </button>
      <button
        className={`px-4 py-2 rounded ${tab === 'resume' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setTab('resume')}
      >
        Build Resume
      </button>
    </div>
  );
}

export default TabSwitcher; 