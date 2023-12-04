import { Card } from '@/components/card';
import { Button, Heading } from '@/components/ui';
import Image from 'next/image';

export function Ongoing() {
  return (
    <div className="container">
      <Heading level={1} className="text-center">
        Ongoing Case
      </Heading>
      <Card>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-16 gap-y-8 p-9">
          <div className="mx-auto overflow-hidden rounded-3xl">
            <Image
              src="/assets/images/cases/ongoing.jpg"
              alt="ongoing"
              className="w-auto h-auto hover:scale-105 transition-all duration-300"
              width={500}
              height={500}
            />
          </div>
          <div className="sm:mx-auto lg:mx-0">
            <div className="pb-4 text-center sm:text-left">
              <span className="inline-block px-5 py-1 rounded-xl text-primary text-sm border border-primary">
                Verified
              </span>
            </div>
            <Heading level={2} className="font-serif text-center sm:text-left">
              Student Tution Fee
            </Heading>
            <div className="py-4 2xl:py-6">
              <p className="w-full text-center sm:text-left xl:w-[450px] text-lg text-gray-dark max-h-36 sm:h-20 overflow-hidden">
                No act of kindness, no matter how small, is ever wasted.” We
                need your support to help a young girl who is unable to bear her
                expenditure of education. Donate as much as you can to keep her
                dream alive. Your little help can be a cause of making someone
                life So Even your minutest contribution is appreciated. Please
                be the hand of hope and help her out.
              </p>
            </div>
            <div className="flex justify-center sm:justify-start">
              <div className="pr-4 sm:pr-10 border-r ">
                <p className="text-gray-dark">Goal</p>
                <p className="font-medium font-bold pt-1">PKR 25,000/-</p>
              </div>
              <div className="px-4 sm:px-10 border-r ">
                <p className="text-gray-dark">Raised</p>
                <p className="font-medium font-bold pt-1">PKR 25,000/-</p>
              </div>
              <div className="pl-4 sm:pl-10">
                <p className="text-gray-dark">Remaining</p>
                <p className="font-medium font-bold pt-1">PKR 0.00/-</p>
              </div>
            </div>
            <div className="pt-4 2xl:pt-10 pb-4">
              <a href="/donate">
                <Button variant="primary" className="w-full sm:w-fit">
                  Donate Now
                </Button>
              </a>
            </div>
            <p>
              <span className="text-gray-dark">Need more details? </span>
              <span className="underline text-primary font-medium">
                <a href="/contact">Contact Us</a>
              </span>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
