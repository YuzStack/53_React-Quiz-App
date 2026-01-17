import { useState } from 'react';

function Quiz({
  question,
  onNextQuestion,
  percentCompl,
  isLastQues,
  onSetScreen,
}) {
  const [selectedAnsIdx, setSelectedAnsIdx] = useState(null);

  const handleSelAns = function (ansIdx) {
    setSelectedAnsIdx(ansIdx);
  };

  const handleNextQues = function () {
    if (selectedAnsIdx === null) return;

    onNextQuestion(selectedAnsIdx);
    setSelectedAnsIdx(null);
  };

  const handleFinishQuiz = function () {
    if (selectedAnsIdx === null) return;

    onNextQuestion(selectedAnsIdx);
    onSetScreen('result');
  };

  return (
    <div className='flex flex-col gap-10 px-3 py-2'>
      <div className='mt-[2.5vh] flex items-center gap-2.5'>
        <div className='h-2 w-full overflow-hidden rounded-full bg-slate-700'>
          <div
            className={`h-full bg-[#61dafb] duration-300`}
            style={{ width: `${percentCompl}%` }}
          ></div>
        </div>
        <span>{percentCompl}%</span>
      </div>

      <div className='space-y-2'>
        <p className='text-xl font-bold'>Question {question.id}:</p>
        <p className='mb-6 text-xl font-semibold'>{question.question}</p>

        <div className='flex flex-col gap-3'>
          {question.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleSelAns(i)}
              className={`${selectedAnsIdx === i ? 'border-[#61dafb] bg-slate-800' : 'border-slate-600'} cursor-pointer rounded-lg border px-2.5 py-1.5 text-start duration-200`}
              aria-label='answer'
            >
              {option}
            </button>
          ))}
        </div>

        <div className='float-right mt-5'>
          {isLastQues ? (
            <button
              onClick={handleFinishQuiz}
              className={`${selectedAnsIdx !== null ? 'cursor-pointer bg-[#61dafb] hover:bg-[#61dafbe4]' : 'cursor-not-allowed bg-[#61dafbaf]'} rounded-lg px-2 py-1 text-lg text-gray-700 duration-300`}
            >
              Finish &rarr;
            </button>
          ) : (
            <button
              onClick={handleNextQues}
              className={`${selectedAnsIdx !== null ? 'cursor-pointer bg-[#61dafb] hover:bg-[#61dafbe4]' : 'cursor-not-allowed bg-[#61dafbaf]'} rounded-lg px-2 py-1 text-lg text-gray-700 duration-300`}
            >
              Next &rarr;
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
