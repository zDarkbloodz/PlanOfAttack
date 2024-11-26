import React from 'react';
import PlanOfAttack from './components/PlanOfAttack';
import { CyberBackground } from './components/CyberBackground';

function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <CyberBackground />
      <div className="relative z-10">
        <PlanOfAttack />
      </div>
    </div>
  );
}

export default App;