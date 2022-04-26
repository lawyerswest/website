import Business from '~/components/business';
import Estates from '~/components/estates';
import Footer from '~/components/footer';
import Hero from '~/components/hero';
import Insurance from '~/components/insurance';
import James from '~/components/james';
import Tim from '~/components/tim';

export default function Index() {
  return (
    <main>
      <Hero />
      <div className='bg-gray-800' id='expertise'>
        <div className='max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
          <h2 className='text-3xl leading-9 font-extrabold tracking-tight text-gray-300 sm:text-4xl sm:leading-10'>
            We are here to help.
            <br />
            <span className='text-cyan-500'>Our expertise &#x2193;</span>
          </h2>
        </div>
      </div>
      <Estates />
      <Insurance />
      <Business />
      <div className='bg-gray-800' id='team'>
        <div className='max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
          <h2 className='text-3xl leading-9 font-extrabold tracking-tight text-gray-300 sm:text-4xl sm:leading-10'>
            The right people make all the difference.
            <br />
            <span className='text-cyan-500'>Meet our team</span>
          </h2>
        </div>
      </div>
      <Tim />
      <James />
      <Footer />
    </main>
  );
}
