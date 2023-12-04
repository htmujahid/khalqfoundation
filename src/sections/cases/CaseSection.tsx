import { Heading, Headline } from '@/components/ui';
import Image from 'next/image';

export function CaseSection() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="order-2 lg:order-1">
          <Headline
            title="OUR CASES"
            subtitle="Changing Lives, One Case at a Time"
          />
          <Heading level={5} className="mt-4 text-gray-dark">
            Our individual cases are focused on helping those in need with
            specific and immediate needs.
          </Heading>
        </div>
        <div className="order-1 lg:order-2">
          <Image
            src="/assets/images/courtesy.png"
            alt="Courtesy"
            className="ml-auto w-auto h-auto"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
