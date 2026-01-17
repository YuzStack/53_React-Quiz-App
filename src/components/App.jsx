import { useState } from 'react';
import HomePage from './HomePage';
import Quiz from './Quiz';
import QuizResult from './QuizResult';
import QUESTIONS from '../questions';

function App() {
  const [screen, setScreen] = useState('home');
  const [activeQuesIdx, setActiveQuesIdx] = useState(0);
  const [score, setScore] = useState(0);

  const curQues = QUESTIONS[activeQuesIdx];
  const percentCompl = (activeQuesIdx / QUESTIONS.length) * 100;
  const isLastQues = activeQuesIdx === QUESTIONS.length - 1;
  const scorePercent = (score / QUESTIONS.length) * 100;

  const handleNextQues = function (selectedAnsIdx) {
    if (curQues.correctAnswer === selectedAnsIdx)
      setScore(curScore => ++curScore);
    setActiveQuesIdx(curActiveQuesIdx => (isLastQues ? 0 : ++curActiveQuesIdx));
  };

  const handleResetScore = function () {
    setScore(0);
  };

  return (
    <div className='min-h-screen bg-[#0f172a] text-slate-100'>
      {screen === 'home' ? (
        <HomePage questions={QUESTIONS} onSetScreen={setScreen} />
      ) : screen === 'quiz' ? (
        <Quiz
          question={curQues}
          onNextQuestion={handleNextQues}
          percentCompl={percentCompl}
          isLastQues={isLastQues}
          onSetScreen={setScreen}
        />
      ) : (
        <QuizResult
          score={score}
          numQues={QUESTIONS.length}
          scorePercent={scorePercent}
          onSetScreen={setScreen}
          onResetScore={handleResetScore}
        />
      )}
    </div>
  );
}

export default App;
