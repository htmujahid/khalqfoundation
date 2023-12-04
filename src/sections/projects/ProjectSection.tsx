import { Heading, Headline } from '@/components/ui';
import Image from 'next/image';

export function ProjectSection() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="order-2 lg:order-1 text-center sm:text-left">
          <Headline
            title="OUR PROJECTS"
            subtitle="Our Journey to Serve the Society"
          />
          <Heading level={5} className="sm:mt-4 text-gray-dark">
            Our community projects are designed to serve the needs of our
            neighbourhoods
          </Heading>
        </div>
        <div className="order-1 lg:order-2">
          <Image
            src="/assets/images/courtesy.png"
            alt="Courtesy"
            className="mr-auto lg:mr-0 ml-auto w-auto h-auto"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
