import { Heading } from '@/components/ui';
import { TeamCard } from '@/components/card';

const teamMembers = [
  {
    name: 'Sadaan Mehmood',
    designation: 'President',
  },
  {
    name: 'Shahzaib Shah',
    designation: 'Vice President',
  },
  {
    name: 'Talha Mujahid',
    designation: 'Web & IT',
  },
];

export function Team() {
  return (
    <div className="container">
      <Heading level={1} className="text-center mb-4">
        Office Bearers
      </Heading>
      <div className="flex gap-10 justify-center flex-wrap">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
        {!teamMembers.length && (
          <div className="text-center">
            <p className="text-2xl font-medium pt-3">No Team Members</p>
          </div>
        )}
      </div>
    </div>
  );
}
