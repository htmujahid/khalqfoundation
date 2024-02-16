import { Heading } from '@/components/ui';
import { ProjectCard } from '@/components/card';

const previousProjects = [
  {
    id: 1,
    title: 'Eid ul Fitr 2021',
    description:
      'Eid is a time of joy and happiness. We distributed food to the poor and needy.',
    image: '/assets/images/projects/eid-fitr.jpg',
    url: '#',
  },
  {
    id: 2,
    title: 'Ramadan 2021',
    description:
      'Ramadan is a time of blessings and forgiveness. We distributed food to the poor and needy.',
    image: '/assets/images/projects/ramadan.jpg',
    url: '#',
  },
  {
    id: 3,
    title: 'Ramadan 2022',
    description:
      'Ramadan is a time of blessings and forgiveness. We distributed food to the poor and needy.',
    image: '/assets/images/projects/ramadan-2.jpg',
    url: '#',
  },
  {
    id: 4,
    title: 'Eid ul Fitr 2022',
    description:
      'Eid is a time of joy and happiness. We distributed food to the poor and needy.',
    image: '/assets/images/projects/eid-fitr.jpg',
    url: '#',
  },
  {
    id: 5,
    title: 'Ramadan 2023 Ration Drive',
    description:
      'Ration drive for those who are unable to afford food for themselves and their families.',
    image: '/assets/images/projects/ration-2.jpg',
    url: '#',
  },
  {
    id: 6,
    title: 'Clothes Drive',
    description:
      'Clothes drive for the poor and needy, to help them live a better life.',
    image: '/assets/images/projects/clothes.jpg',
    url: '#',
  },
];

export function PreviousProjects() {
  return (
    <div className="container">
      <Heading level={1} className="text-center mb-8">
        Previous Projects
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3 xl:gap-6 mb-14">
        {previousProjects.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
        {!previousProjects.length && (
          <div className="text-center">No Previous Projects</div>
        )}
      </div>
    </div>
  );
}
