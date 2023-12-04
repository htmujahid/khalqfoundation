import { CaseSection, PreviousCases } from '@/sections/cases';

export default function Cases() {
  return (
    <div className="py-4 sm:py-16">
      <CaseSection />
      <div className="h-16" />
      <PreviousCases />
    </div>
  );
}
