export default function Footer() {
  return (
    <div className='bg-gray-800' id='contact'>
      <div className='mx-auto max-w-screen-xl px-4 pt-12 pb-8 text-center sm:px-6 lg:py-10 lg:px-8'>
        <h2 className='mx-auto w-64 border-b-2 border-solid border-cyan-500 pb-3 text-3xl font-extrabold leading-9 tracking-tight text-cyan-500 sm:text-4xl sm:leading-10'>
          Contact Us
        </h2>
        <div className='mt-12 flex flex-col items-center'>
          <div className='mb-6 inline-flex rounded-md shadow-sm'>
            <a
              href='tel:+17785887051'
              className='focus:shadow-outline-cyan inline-flex items-center rounded-md border border-transparent bg-gray-300 px-4 py-2 text-sm font-medium leading-5 tracking-tight text-gray-900 transition duration-150 ease-in-out hover:bg-gray-400 focus:border-gray-700 focus:outline-none active:bg-gray-700'
            >
              <svg
                className='-ml-1 mr-2 h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z'
                />
              </svg>
              (778) 588-7051
            </a>
          </div>
          <div className='inline-flex rounded-md shadow-sm'>
            <a
              href='mailto:office@lawyerswest.ca'
              className='focus:shadow-outline-gray inline-flex items-center rounded-md border border-transparent bg-gray-300 px-4 py-2 text-sm font-medium leading-5 tracking-tight text-gray-900 transition duration-150 ease-in-out hover:bg-gray-400 focus:border-gray-700 focus:outline-none active:bg-gray-700'
            >
              <svg
                className='-ml-1 mr-2 h-5 w-5'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'
                  clipRule='evenodd'
                />
              </svg>
              office@lawyerswest.ca
            </a>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-screen-xl overflow-hidden px-4 pt-2 pb-6 sm:px-6 lg:px-8'>
        <address
          className='mb-4 text-center text-lg font-normal not-italic leading-7 tracking-tight text-gray-300'
          id='contact'
        >
          <div className='text-2xl font-extrabold leading-9 text-gray-300'>
            Lawyers West LLP
          </div>
          <div className='mb-4'>
            101-566 Lougheed Hwy <br />
            Coquitlam, BC V3K 3S3
          </div>
        </address>
        <div className='mb-6 flex items-center justify-center text-gray-400 hover:text-gray-500'>
          <a href='https://g.page/LawyersWestLLP?share'>
            map
            <svg
              className='ml-1 inline h-5 w-5'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </a>
        </div>
        <hr className='mx-auto w-64 border-gray-600' />
        <div className='mt-8'>
          <p className='text-center text-base leading-6 text-gray-400'>
            &copy; 2020 Lawyers West LLP
          </p>
        </div>
      </div>
    </div>
  );
}
