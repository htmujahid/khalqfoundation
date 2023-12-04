'use client';
import { Title } from '@/components/ui';
import { Card } from '@/components/card';
import { CopyIcon, MailIcon, PhoneIcon } from '@/components/assets';

const email = 'queries@khalqfoundation.org';
const phone = '+92 315 4381490';

export function ContactDetails() {
  return (
    <div className="container">
      <Title subtitle="You can contact us if you have any queries">
        Contact Details
      </Title>
      <div className="flex justify-center flex-wrap gap-x-10 gap-y-4">
        <Card className="w-full sm:w-[450px]">
          <div className="h-full p-8 gap-10">
            <div className="flex gap-2 items-center justify-center sm:justify-start pb-2 mx-auto">
              <MailIcon className="h-6" />
              <p className="text-lg text-center sm:text-left text-gray-dark">
                Email Us
              </p>
            </div>
            <p
              id="email"
              className="font-medium text-xl sm:text-2xl text-center sm:text-left"
            >
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
        </Card>

        <Card className="w-full sm:w-[450px]">
          <div className="h-full p-8">
            <div className="flex gap-2 items-center justify-center sm:justify-start pb-2 mx-auto">
              <PhoneIcon className="h-6" />
              <p className="text-lg text-center sm:text-left text-gray-dark">
                Mobile/Whatsapp
              </p>
            </div>
            <div className="flex gap-2 mx-auto w-fit sm:w-full">
              <p
                id="phone"
                className="font-medium text-xl sm:text-2xl text-center sm:text-left"
              >
                <a href={`tel:${phone}`}>{phone}</a>
              </p>
              <button
                className="active:opacity-60"
                onClick={() => navigator.clipboard.writeText(phone)}
              >
                <CopyIcon className="h-5 w-5 text-primary" />
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
