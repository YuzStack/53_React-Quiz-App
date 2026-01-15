function Quiz() {
  return (
    <div className='flex flex-col gap-10 px-3 py-2'>
      <div className='mt-[2.5vh] h-2 w-full overflow-hidden rounded-full bg-slate-700'>
        <div className='h-full w-[20%] bg-[#61dafb] duration-300'></div>
      </div>
      <div className='space-y-2'>
        <p className='text-xl font-bold'>Question 3:</p>
        <p className='mb-6 text-xl font-semibold'>
          Which of the following is true about 'Lifting State Up' in React?
        </p>
        <div className='flex flex-col gap-3'>
          <button
            className='cursor-pointer rounded-lg border border-slate-600 px-2.5 py-1.5 text-start duration-200 hover:border-[#61dafb] hover:bg-slate-800'
            aria-label='answer'
          >
            It moves state to the nearest common ancestor of components that
            need it.
          </button>
          <button
            className='cursor-pointer rounded-lg border border-slate-600 px-2.5 py-1.5 text-start duration-200 hover:border-[#61dafb] hover:bg-slate-800'
            aria-label='answer'
          >
            It involves using the 'useLift' hook to move state globally.
          </button>
          <button
            className='cursor-pointer rounded-lg border border-slate-600 px-2.5 py-1.5 text-start duration-200 hover:border-[#61dafb] hover:bg-slate-800'
            aria-label='answer'
          >
            It is a way to pass data from a parent to a child via props.
          </button>
          <button
            className='cursor-pointer rounded-lg border border-slate-600 px-2.5 py-1.5 text-start duration-200 hover:border-[#61dafb] hover:bg-slate-800'
            aria-label='answer'
          >
            It moves state to the nearest common ancestor of components that
            need it.
          </button>
        </div>
        <div className='mt-5 flex justify-center'>
          <button className='cursor-pointer rounded-lg bg-[#61dafbaf] px-2 py-1 text-lg text-gray-700 duration-300 hover:bg-[#61dafbe4]'>
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
