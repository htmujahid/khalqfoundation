import { Title } from '@/components/ui';
import { Card } from '@/components/card';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '@/components/assets';

const socialMediaAccounts = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/khalqfoundationpakistan',
    icon: <FacebookIcon />,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/khalqfoundationpakistan/',
    icon: <InstagramIcon />,
  },
  {
    name: 'Linkedin',
    link: 'https://linkedin.com/in/KhalqPakistan',
    icon: <LinkedinIcon />,
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/khalqfoundationpakistan',
    icon: <FacebookIcon />,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/khalqfoundationpakistan/',
    icon: <InstagramIcon />,
  },
  {
    name: 'Linkedin',
    link: 'https://linkedin.com/in/KhalqPakistan',
    icon: <LinkedinIcon />,
  },
];

export function SocialMedia() {
  return (
    <div className="container">
      <Title subtitle="Know More About Us?">Social Media</Title>
      <div className="flex justify-center flex-wrap gap-6 w-full">
        {socialMediaAccounts.map((account, index) => (
          <Card key={index}>
            <div className="h-28 w-28 hover:bg-opacity-70 duration-300">
              <a
                href={account.link}
                target="blank"
                className="h-full w-full flex items-center justify-center rounded-3xl"
              >
                <span className="h-16 w-16 rounded-full text-white bg-gray-dark p-2 hover:bg-primary">
                  {account.icon}
                </span>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
