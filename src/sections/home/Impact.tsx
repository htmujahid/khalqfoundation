import {
  ChartBarIcon,
  DocumentIcon,
  DollarIcon,
  PersonIcon,
} from '@/components/assets';
import { Card } from '@/components/card';

const impactList = [
  {
    icon: <DocumentIcon />,
    title: '100+',
    description: 'Cases Solved',
  },
  {
    icon: <PersonIcon />,
    title: '500+',
    description: 'Regular Donors',
  },
  {
    icon: <ChartBarIcon />,
    title: '100%',
    description: 'Cases Solving Rate',
  },
  {
    icon: <DollarIcon />,
    title: '2.7M+',
    description: 'Funds Collected',
  },
];

export function Impact() {
  return (
    <div className="container">
      <Card>
        <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-4 align-center justify-items-center">
          {impactList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center justify-center p-2 sm:p-8"
            >
              <div className="flex items-center justify-center w-16 h-16 text-primary rounded-full">
                {item.icon}
              </div>
              <p className="mt-4 text-4xl font-bold mb-2.5 font-serif">
                {item.title}
              </p>
              <p className="text-lg mb-5">{item.description}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
