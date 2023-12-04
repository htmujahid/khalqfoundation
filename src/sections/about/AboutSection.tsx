import { Heading, Headline } from '@/components/ui';
import Image from 'next/image';

export function AboutSection() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="order-2 lg:order-1 text-center sm:text-left">
          <Headline
            title="ABOUT US"
            subtitle="Our Journey to Serve the Society"
          />
          <Heading level={5} className="mt-2 sm:mt-4 text-gray-dark">
            Started in 2020, a student group united to create a positive impact
            in their community. Despite growth and expansion, their goal to
            serve society has remained constant.
          </Heading>
        </div>
        <div className="order-1 lg:order-2">
          <Image
            src="/assets/images/courtesy.png"
            alt="Courtesy"
            width={500}
            height={500}
            className="sm:ml-auto w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
}
