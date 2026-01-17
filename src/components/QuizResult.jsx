import { Footer } from './HomePage';

function QuizResult({
  score,
  numQues,
  scorePercent,
  onSetScreen,
  onResetScore,
}) {
  const handleRestartQuiz = function () {
    onResetScore();
    onSetScreen('quiz');
  };

  const handleGoBackHome = function () {
    onResetScore();
    onSetScreen('home');
  };

  return (
    <div className='flex min-h-screen flex-col justify-between px-3 py-2'>
      <section className='mt-[10vh] flex flex-col gap-4'>
        <div className='flex items-center gap-3'>
          <div className='h-20 w-20 rounded-full bg-gray-800 p-2 text-slate-100'>
            <span className='text-5xl'>{score}</span>{' '}
            <span className='text-4xl text-slate-400'>/</span>{' '}
            <span className='text-2xl text-slate-400'>{numQues}</span>
          </div>
          <span className='text-xl'>–</span>
          <span className='text-xl font-semibold text-[#61dafb]'>
            {getResultStr(scorePercent)[0]}
          </span>
        </div>
        <p className='text-lg'>{getResultStr(scorePercent)[1]}</p>
      </section>

      <nav className='mx-auto flex w-fit gap-7'>
        <button
          onClick={handleRestartQuiz}
          className='rounded-lg bg-[#61dafb] px-3 py-2 text-gray-700'
        >
          Restart Quiz
        </button>
        <button
          onClick={handleGoBackHome}
          className='rounded-lg bg-[#61dafb] px-3 py-2 text-gray-700'
        >
          Back to Home
        </button>
      </nav>

      <Footer />
    </div>
  );
}

const getResultStr = function (resultPercentage) {
  switch (true) {
    case resultPercentage >= 90:
      return ['React Architect! 🏆', "You've mastered the core concepts."];
    case resultPercentage >= 70 && resultPercentage < 90:
      return [
        'Senior Developer 🥈',
        'Great job, just a few tiny details to polish.',
      ];
    case resultPercentage >= 50 && resultPercentage < 70:
      return [
        'Junior Developer 🥉',
        "Good start! A quick review of Jonas's lectures will get you to the top.",
      ];
    default:
      return ['Student 🌱', 'Keep learning! Every bug is a teacher.'];
  }
};

export default QuizResult;
