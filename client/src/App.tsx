import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default App;
