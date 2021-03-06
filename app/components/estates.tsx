import {
  DocumentDuplicateIcon,
  ScaleIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Estate Planning',
    description: [
      'Preparation of wills, powers of attorney, representation agreements',
      'Implementation of alter ego, joint partner, family trusts',
      'Corporate reorganizations related to estate planning',
    ],
    icon: UserGroupIcon,
  },
  {
    name: 'Estate Litigation',
    description: [
      'Undue Influence',
      'Validity of Wills',
      'Wills Variation Claims',
      'Breaches of Trust',
      'Improper Administration',
    ],
    icon: ScaleIcon,
  },
  {
    name: 'Estate and Trust Administration',
    description: [
      'Administration of estates and probate matters',
      'Advising trustees on duties and obligations',
      'Administration of intervivos trusts',
    ],
    icon: DocumentDuplicateIcon,
  },
];

export default function Example() {
  return (
    <div className='overflow-hidden bg-gray-50'>
      <div className='relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8'>
        <svg
          className='absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4'
          width={404}
          height={784}
          fill='none'
          viewBox='0 0 404 784'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='8b1b5f72-e944-4457-af67-0c6d15a99f38'
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits='userSpaceOnUse'
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className='text-gray-200'
                fill='currentColor'
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill='url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)'
          />
        </svg>

        <div className='relative lg:grid lg:grid-cols-3 lg:gap-x-8'>
          <div className='lg:col-span-1'>
            <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Estates and Trusts
            </h2>
          </div>
          <dl className='mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0'>
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className='flex h-12 w-12 items-center justify-center rounded-md bg-gray-800 text-cyan-300'>
                    <feature.icon className='h-6 w-6' aria-hidden='true' />
                  </div>
                  <p className='mt-5 text-lg font-medium leading-6 text-gray-900'>
                    {feature.name}
                  </p>
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  <ul className='list-disc list-inside lg:list-outside'>
                    {feature.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
