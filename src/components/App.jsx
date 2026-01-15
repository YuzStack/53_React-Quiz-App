import { useState } from 'react';
import HomePage from './HomePage';

function App() {
  const [mode, setMode] = useState('start');

  return (
    <div className='min-h-screen bg-[#0f172a] text-slate-100'>
      <HomePage />
    </div>
  );
}

export default App;
