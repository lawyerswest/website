import image from '../assets/james.jpg';

export default function TeamMember() {
  return (
    <div className='flex flex-col items-center'>
      <div className='mx-4 mt-6 mb-12 grid max-w-screen-xl gap-4 md:grid-cols-3 md:gap-12'>
        <div className='bg-white md:ml-auto md:mr-0'>
          <div className='w-64 lg:w-72'>
            <img src={image} alt='Tim Maledy' />
          </div>
        </div>
        <div className='col-span-2 flex flex-col justify-center'>
          <div className='max-w-2xl'>
            <h2 className='mt-2 mb-6 text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10'>
              James Maledy
            </h2>
            <p className='mt-3 space-y-4 text-base leading-7 text-gray-800 md:text-lg'>
              James represents clients in range of fields, including commercial,
              insurance, estates and employment matters.
            </p>
            <p className='mt-3 space-y-4 text-base leading-7 text-gray-800 md:text-lg'>
              He has successfully advocated for his clients in the Provincial,
              Supreme and Appellant Courts of British Columbia.
            </p>
            <div className='mt-8'>
              <span className='mr-4 mb-4 inline-flex rounded-md shadow-sm'>
                <a
                  href='mailto:james@lawyerswest.ca'
                  className='focus:shadow-outline-indigo inline-flex items-center rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out hover:text-gray-500 focus:border-indigo-700 focus:outline-none active:bg-indigo-700'
                >
                  <svg
                    className='-ml-1 mr-2 h-5 w-5 text-gray-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'
                      clipRule='evenodd'
                    />
                  </svg>
                  james@lawyerswest.ca
                </a>
              </span>
              <span className='inline-flex rounded-md shadow-sm'>
                <a
                  href='tel:+17783831451'
                  className='focus:shadow-outline-indigo inline-flex items-center rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out hover:text-gray-500 focus:border-indigo-700 focus:outline-none active:bg-indigo-700'
                >
                  <svg
                    className='-ml-1 mr-2 h-5 w-5 text-gray-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                  </svg>
                  (778) 383-1451
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
