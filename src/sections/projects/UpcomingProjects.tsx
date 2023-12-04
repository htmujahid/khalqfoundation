import { Heading } from '@/components/ui';
import { ProjectCard } from '@/components/card';

const upcomingProjects = [
  {
    id: 1,
    title: 'Blood Drive',
    description:
      "Donate blood to save lives. Donate blood and make a difference in someone's life. ",
    image: '/assets/images/projects/blood.jpg',
    url: '#',
  },
  {
    id: 2,
    title: 'Medical Camp',
    description:
      'Health is wealth. Medical camp for the poor and needy. You can support us by donating.',
    image: '/assets/images/projects/medical.jpg',
    url: '#',
  },
];

export function UpcomingProjects() {
  return (
    <div className="container">
      <Heading level={1} className="text-center mb-8">
        Upcoming Projects
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3 xl:gap-6 mb-14">
        {upcomingProjects.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
        {!upcomingProjects.length && (
          <div className="text-center">No Upcoming Projects</div>
        )}
      </div>
    </div>
  );
}
