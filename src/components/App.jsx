import { useState } from 'react';
import HomePage from './HomePage';
import Quiz from './Quiz';
import QuizResult from './QuizResult';

function App() {
  const [mode, setMode] = useState('start');

  return (
    <div className='min-h-screen bg-[#0f172a] text-slate-100'>
      <HomePage />
      {/* <Quiz /> */}
      {/* <QuizResult /> */}
    </div>
  );
}

export default App;
