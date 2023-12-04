import Image from 'next/image';
import { Card } from '.';

type TeamCardProps = {
  name: string;
  designation: string;
};

export function TeamCard({ name, designation }: TeamCardProps) {
  return (
    <Card>
      <div className="flex items-center flex-col p-6 w-[290px]">
        <div className="max-w-[240px] h-[200px] rounded-lg mx-auto overflow-hidden">
          <Image
            src="/assets/images/default.png"
            className="w-auto h-auto"
            alt={name}
            width={300}
            height={300}
          />
        </div>
        <div className="text-center">
          <p className="text-2xl font-medium pt-3">{name}</p>
          <p className="text-lg text-gray-dark">{designation}</p>
        </div>
      </div>
    </Card>
  );
}
