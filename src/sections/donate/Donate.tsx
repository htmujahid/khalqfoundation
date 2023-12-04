import { accounts } from '@/data';
import { Title } from '@/components/ui';
import { DonateCard } from '@/components/card';

export function Donate() {
  return (
    <div className="container my-16">
      <Title subtitle="You can send your donations on any of the following accounts">
        Donate Now
      </Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mx-auto sm:w-full mt-12 mb-16">
        {accounts.map((account, index) => (
          <DonateCard key={index} {...account} />
        ))}

        {accounts.length === 0 && 'No Account Information Available'}
      </div>
    </div>
  );
}
