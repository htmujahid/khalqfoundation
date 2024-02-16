import { Heading } from '@/components/ui';
import { ProjectCard } from '@/components/card';

const ongoingProjects = [
  {
    id: 1,
    title: 'Ration Drive',
    description:
      'Ration drive for those who are unable to afford food for themselves and their families.',
    image: '/assets/images/projects/ration-1.jpg',
    url: '#',
  },
];

export function OngoingProjects() {
  return (
    <div className="container">
      <Heading level={1} className="text-center mb-8">
        Ongoing Projects
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3 xl:gap-6 mb-14">
        {ongoingProjects.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
        {!ongoingProjects.length && (
          <div className="text-center">No Ongoing Projects</div>
        )}
      </div>
    </div>
  );
}
