import {
  Help,
  Hero,
  Impact,
  Join,
  Ongoing,
  Testimonials,
} from '@/sections/home';

export default function Home() {
  return (
    <main>
      <Hero />
      <Impact />
      <div className="h-16" />
      <Help />
      <div className="h-16" />
      <Ongoing />
      <div className="h-16" />
      <Testimonials />
      <div className="h-16" />
      <Join />
      <div className="h-16" />
    </main>
  );
}
