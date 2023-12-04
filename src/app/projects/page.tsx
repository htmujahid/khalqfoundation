import {
  OngoingProjects,
  PreviousProjects,
  ProjectSection,
  UpcomingProjects,
} from '@/sections/projects';

export default function Projects() {
  return (
    <div className="py-4 sm:py-16">
      <ProjectSection />
      <div className="h-16" />
      <OngoingProjects />
      <UpcomingProjects />
      <PreviousProjects />
    </div>
  );
}
