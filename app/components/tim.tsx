import image from '../assets/tim.jpg';

export default function TeamMember() {
  return (
    <div className='flex flex-col items-center'>
      <div className='max-w-screen-xl grid gap-4 md:grid-cols-3 md:gap-12 mx-4 mt-6 mb-12'>
        <div className='bg-white md:ml-auto md:mr-0'>
          <div className='w-64 lg:w-72'>
            <img src={image} alt='Tim Maledy' />
          </div>
        </div>
        <div className='col-span-2 flex flex-col justify-center'>
          <div className='max-w-2xl'>
            <h2 className='mt-2 mb-6 text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10'>
              Tim Maledy
            </h2>
            <p className='mt-3 text-base md:text-lg leading-7 text-gray-800 space-y-4'>
              Tim is a senior litigator providing clients with skilled
              experience insurance, construction, estate, and commercial
              litigation matters.
            </p>
            <p className='mt-3 text-base md:text-lg leading-7 text-gray-800 space-y-4'>
              He has successfully conducted many trials, prosecuted and defended
              appeals, and prevailed as counsel before the Supreme Court of
              Canada.
            </p>
            <div className='mt-8'>
              <span className='inline-flex rounded-md shadow-sm mr-4 mb-4'>
                <a
                  href='mailto:tim@lawyerswest.ca'
                  className='inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 hover:text-gray-500 bg-gray-100 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150'
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
                  tim@lawyerswest.ca
                </a>
              </span>
              <span className='inline-flex rounded-md shadow-sm'>
                <a
                  href='tel:+17785887047'
                  className='inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 hover:text-gray-500 bg-gray-100 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150'
                >
                  <svg
                    className='-ml-1 mr-2 h-5 w-5 text-gray-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                  </svg>
                  (778) 588-7047
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
