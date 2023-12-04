import { Card } from '@/components/card';
import { Title } from '@/components/ui';

const reviews = [
  {
    name: 'Ahmad Raza',
    message:
      "Khalq Foundation has so far shown promising services and great dedication in their charity work. This youth led initiative is one of it's kind and should be cherished.",
  },
  {
    name: 'Waqar Azeem',
    message:
      'Ankhain Band ker k or Dil khoon k madad karin. Highly recommended',
  },
  {
    name: 'Shanzal Noor',
    message:
    'At an age when people think only of themselves, these young people think of others. more power to you people.',
  },
  {
    name: 'Ali Raza',
    message:
      'Khalq Foundation is a great initiative by the passionate students whow want to make a positive change in society.',
  },
  {
    name: 'Amna Khan',
    message:
      'Every single penny you donate will be used for the betterment of the society. I highly recommend you to donate for this noble cause.',
  },
  {
    name: 'Muhammad Zaid',
    message:
      "I'm really impressed by their work and dedication. I wish them all the best for their future endeavors.",
  },
];

export function Testimonials() {
  return (
    <div className="container">
      <div className="py-10">
        <Title subtitle="Here's how our donors say about us">
          Testimonials
        </Title>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <Card className="h-min">
                  <div className="p-8 flex-shrink-0 w-5/6 h-min">
                    <div className="flex gap-3 items-center">
                      <div>
                        <p className="font-semibold text-2xl">{review.name}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-lg text-gray-dark">{review.message}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
