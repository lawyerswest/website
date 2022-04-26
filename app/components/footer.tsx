export default function Footer() {
  return (
    <div className='bg-gray-800' id='contact'>
      <div className='max-w-screen-xl mx-auto text-center pt-12 pb-8 px-4 sm:px-6 lg:py-10 lg:px-8'>
        <h2 className='text-3xl leading-9 font-extrabold tracking-tight text-cyan-500 sm:text-4xl sm:leading-10 border-solid border-b-2 border-cyan-500 pb-3 w-64 mx-auto'>
          Contact Us
        </h2>
        <div className='mt-12 flex flex-col items-center'>
          <div className='inline-flex mb-6 rounded-md shadow-sm'>
            <a
              href='tel:+17785887051'
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 tracking-tight font-medium rounded-md text-gray-900 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:border-gray-700 focus:shadow-outline-cyan active:bg-gray-700 transition ease-in-out duration-150'
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
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 tracking-tight font-medium rounded-md text-gray-900 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition ease-in-out duration-150'
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

      <div className='max-w-screen-xl mx-auto pt-2 pb-6 px-4 overflow-hidden sm:px-6 lg:px-8'>
        <address
          className='font-normal mb-4 not-italic text-center text-gray-300 text-lg tracking-tight leading-7'
          id='contact'
        >
          <div className='font-extrabold leading-9 text-2xl text-gray-300'>
            Lawyers West LLP
          </div>
          <div className='mb-4'>
            101-566 Lougheed Hwy <br />
            Coquitlam, BC V3K 3S3
          </div>
        </address>
        <div className='flex items-center justify-center mb-6 text-gray-400 hover:text-gray-500'>
          <a href='https://g.page/LawyersWestLLP?share'>
            map
            <svg
              className='h-5 inline ml-1 w-5'
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
        <hr className='border-gray-600 w-64 mx-auto' />
        <div className='mt-8'>
          <p className='text-center text-base leading-6 text-gray-400'>
            &copy; 2020 Lawyers West LLP
          </p>
        </div>
      </div>
    </div>
  );
}
