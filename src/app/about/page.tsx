import { AboutSection, Team } from '@/sections/about';

export default function About() {
  return (
    <div className="py-4 sm:py-16">
      <AboutSection />
      <div className="h-16" />
      <Team />
    </div>
  );
}
