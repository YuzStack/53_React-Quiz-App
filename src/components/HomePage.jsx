function HomePage() {
  return (
    <main className='flex min-h-screen flex-col px-3 py-2'>
      <h1 className='mx-auto w-fit text-2xl font-bold text-[#61dafb]'>
        React Quiz App
      </h1>
      <div className='mt-[10vh] flex-1 space-y-7'>
        <section>
          <h2 className='w-fit text-lg font-semibold'>Stats at a Glance</h2>
          <div className='mt-3 flex flex-wrap justify-center gap-3'>
            <div className='flex w-fit flex-col items-center gap-1 rounded-lg bg-slate-100 p-2 text-gray-700'>
              <span className='text-lg font-bold'>
                <i className='fa-solid fa-question'></i>
              </span>
              <p className='text-center text-sm'>5 Questions</p>
            </div>
            <div className='flex w-fit flex-col items-center gap-1 rounded-lg bg-slate-100 p-2 text-gray-700'>
              <span className='text-lg font-bold'>
                <i className='fa-regular fa-clock'></i>
              </span>
              <p className='text-center text-sm'>No Time Limit</p>
            </div>
            <div className='flex w-fit flex-col items-center gap-1 rounded-lg bg-slate-100 p-2 text-gray-700'>
              <span className='text-lg font-bold'>
                <i className='fa-solid fa-signal'></i>
              </span>
              <p className='text-center text-sm'>Intermediate Level</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className='w-fit text-lg font-semibold'>Topic Coverage</h2>
          <ul className='mt-2 list-inside list-disc space-y-1.5'>
            <li>⚛️ State Management & Lifting State</li>
            <li>🔗 The useEffect Lifecycle</li>
            <li>📜 List Rendering & Keys</li>
            <li>🧮 Derived State Logic</li>
          </ul>
        </section>
        <section className='flex justify-center p-5 py-7'>
          <button className='cursor-pointer rounded-xl bg-[#61dafb] px-3 py-2 text-lg text-gray-700 duration-300 hover:bg-[#61dafbe4]'>
            Start Quiz &rarr;
          </button>
        </section>
      </div>
      <footer className='text-center'>
        Designed and Developed by{' '}
        <a
          className='text-purple-400 underline active:text-purple-500'
          href='https://www.linkedin.com/in/yusuf-oyinlola'
          target='_blank'
        >
          Yusuf Oyinlola
        </a>{' '}
        as part of my React Mastery Journey.
      </footer>
    </main>
  );
}

export default HomePage;
