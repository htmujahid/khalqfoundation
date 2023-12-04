import { Card } from '@/components/card';
import { Title } from '@/components/ui';

const reviews = [
  {
    name: 'Ahmad Raza',
    message:
      'Khalq Foundation has so far shown promising services and great dedication in their charity work. This youth led initiative is one of it\'s kind and should be cherished.',
  },
  {
    name: 'Shanzal Noor',
    message:
      'At an age when people think only of themselves, these young people think of others. more power to you people.',
  },
  {
    name: 'Waqar Azeem',
    message:
      'Ankhain Band ker k or Dil khoon k madad karin. Highly recommended',
  },
];

export function Testimonials() {
  return (
    <div className="container">
      <div className="py-10">
        <Title subtitle="Here's how our donors say about us">
          Testimonials
        </Title>
        <div className="items flex gap-4 sm:gap-8 justify-center flex-wrap">
          {reviews.map((review, index) => (
            <Card key={index} className="h-min">
              <div className="p-6 sm:px-8 sm:py-10 flex-shrink-0 w-5/6 sm:w-[420px] h-min">
                <div className="flex gap-3 items-center">
                  <div>
                    <p className="font-semibold text-2xl">{review.name}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-lg whitespace-normal text-gray-dark">
                    {review.message}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
