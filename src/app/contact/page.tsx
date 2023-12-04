import { ContactDetails, SocialMedia } from '@/sections/contact';

export default function Contact() {
  return (
    <div className="py-4 sm:py-16">
      <ContactDetails />
      <div className="h-16" />
      <SocialMedia />
    </div>
  );
}
