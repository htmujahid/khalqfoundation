import Image from 'next/image';
import { Card } from '.';
import { Heading } from '../ui';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
};

export function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <Card>
      <div className="grid grid-cols-1 items-center gap-x-16 gap-y-8 p-4 md:p-9">
        <div className="mx-auto rounded-3xl overflow-hidden w-full">
          <Image
            src={image}
            alt={title}
            className="h-auto object-center w-full object-cover hover:scale-110 transition-all duration-300 ease-in-out"
            height={240}
            width={240}
          />
        </div>
        <div className="sm:mx-auto lg:mx-0">
          <Heading level={3}>{title}</Heading>
          <div className="py-4 2xl:py-6">
            <p className="w-full text-center sm:text-left text-lg text-gray-dark max-h-36 sm:h-20 overflow-hidden">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
