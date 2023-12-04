import { Heading, Headline } from '@/components/ui';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="container my-24 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="order-2 lg:order-1 text-center sm:text-left">
          <Headline
            title="KHLAQ FOUNDATION"
            subtitle="Give hope and change lives of those in need"
          />
          <Heading level={5}>
            Together, we can make a positive impact on the world by helping
            those who are less fortunate.
          </Heading>
          <Button
            className="mt-4 sm:mt-16 sm:w-fit"
            variant="primary"
            href="/donate"
          >
            Donate Now
          </Button>
        </div>
        <div className="order-1 lg:order-2">
          <Image
            src="/assets/images/hero.png"
            alt=""
            className="ml-auto w-auto h-auto"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
