function Hero (): JSX.Element {
  return (
    <section className=''>
      <div className='relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center '>
        <div className='flex justify-center items-center m-8'>
          <img
            className='h-40 sm:h-80 md:translate-x-44 md:absolute'
            src='funko001.png'
            alt=''
          />
        </div>
        <div className='flex flex-col sm:mx-auto sm:max-w-xl text-center text-white'>
          <h1 className='text-3xl font-extrabold sm:text-6xl '>FUNKO POP</h1>
          <strong className='mt-4 font-extrabold sm:text-5xl text-purple-400 sm:block p-3 bg-melrose-800'>
            Get your funko Now!.
          </strong>
          <p className='mt-4 sm:text-xl sm:leading-relaxed'>
            Funko designs and sells unique pop culture collectibles,
            accessories, and toys.
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <a
              className='block w-full rounded bg-purple-400 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto'
              href='#search'
            >
              Get Started
            </a>

            <a
              className='block w-full rounded px-12 py-3 text-sm font-medium text-purple-600 bg-slate-100 shadow hover:text-purple-700 focus:outline-none focus:ring active:text-purple-500 sm:w-auto'
              href='/about'
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
