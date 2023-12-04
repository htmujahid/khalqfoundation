import { BankNoteIcon, PeopleIcon } from '@/components/assets';
import { Card } from '@/components/card';
import { Button, Heading, Title } from '@/components/ui';

export function Help() {
  return (
    <div className="container">
      <Title subtitle="Here's how you can help us in our work & projects etc">
        How You Can Help
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 justify-between items-center">
        <Card>
          <div className="bg-white rounded-3xl shadow-md p-10 lg:py-12 lg:px-20">
            <div className="flex justify-center pt-4 py-9">
              <BankNoteIcon className="h-16 w-16 text-primary" />
            </div>
            <div className="">
              <Heading level={3} className="font-serif pb-5 sm:text-center">
                Our Projects
              </Heading>
              <Heading level={6} className="text-gray-dark sm:text-center">
                Our community projects are designed to serve the needs of our
                neighbourhoods
              </Heading>
            </div>
            <div className="pt-6 flex justify-center">
              <Button href="/projects" variant="outlined">
                Check More
              </Button>
            </div>
          </div>
        </Card>
        <Card>
          <div className="bg-white rounded-3xl shadow-md p-10 lg:py-12 lg:px-20">
            <div className="flex justify-center pt-4 py-9">
              <PeopleIcon className="h-16 w-16 text-primary" />
            </div>
            <div className="">
              <Heading level={3} className="font-serif pb-5 sm:text-center">
                Our Cases
              </Heading>
              <Heading level={6} className="text-gray-dark sm:text-center">
                Our individual cases are focused on helping those in need with
                specific and immediate needs.
              </Heading>
            </div>
            <div className="pt-6 flex justify-center">
              <Button href="/cases" variant="outlined">
                Check More
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
