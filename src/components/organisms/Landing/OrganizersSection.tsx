import SectionWrapper from '@/components/molecules/SectionWrapper';

import Image from 'next/image';

const Company = ({ name, logoSrc }: { name: string; logoSrc: string }) => (
  <div className="h-16 w-16">
    <Image src={logoSrc} alt={name} height={64} width={64} />
  </div>
);

const OrganizersSection = () => (
  <SectionWrapper right background="alt">
    <div className="py-16">
      <h2 className="mb-4 text-4xl font-bold text-gray-100">Organizado por:</h2>
      <div className="grid grid-cols-2 gap-3">
        <Company name="eagerworks" logoSrc="eagerworks-logo.svg" />
        <Company name="eagerworks" logoSrc="1950labs-logo.svg" />
      </div>
    </div>
  </SectionWrapper>
);

export default OrganizersSection;
