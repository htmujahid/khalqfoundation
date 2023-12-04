import Image from 'next/image';
import { accounts } from '@/data';

type CaseCardProps = {
  id: string;
  type: string;
  description: string;
  required: string;
  collected: string;
  remaining: string;
};

export function CaseCard({
  id,
  type,
  description,
  required,
  collected,
  remaining,
}: CaseCardProps) {
  return (
    <div className="relative h-[450px] w-[350px] sm:w-[400px] overflow-hidden rounded-3xl bg-white pt-4 ring-1 ring-gray-900/5">
      <div className="text-center text-xl font-bold">
        KHALQ Foundation Pakistan
      </div>
      <div className="mx-auto my-2 w-fit font-bold">
        <div className="rounded-full border py-1 px-2">
          {type} # {id}
        </div>
      </div>
      <div className="px-6">
        <p className="hide-scrollbar h-[140px] overflow-y-scroll text-justify text-sm">
          {description}
        </p>
        <p className="mt-3 text-justify text-sm">
          For Details Please Contact: 0315-4381490
        </p>
        <div className="my-2 flex justify-between text-center text-sm font-semibold">
          <div className="w-full rounded-l-full border">
            Required <span className="block">{required ?? '-'}</span>
          </div>
          <div className="w-full border">
            Collected <span className="block">{collected ?? '-'}</span>
          </div>
          <div className="w-full rounded-r-full border">
            Remaining <span className="block">{remaining ?? '-'}</span>
          </div>
        </div>
      </div>
      <div className="bg-red-600 py-1 text-center text-lg font-bold text-white">
        FOR DONATIONS
      </div>
      <div className="relative bg-primary px-6 pt-3 pb-5 text-white">
        <div className="hide-scrollbar overflow-x-auto unselectable flex justify-between gap-3">
          {accounts.map((account, index) => (
            <div className="shrink-0 text-center" key={index}>
              <div className="mx-auto w-full rounded-full bg-white border border-white py-1 px-2">
                <Image
                  src={`/assets/images/accounts/${account.bankName.toLowerCase()}.png`}
                  alt=""
                  className="h-4 mx-auto w-auto"
                  width={16}
                  height={16}
                />
              </div>
              <p className="mt-1 h-4 overflow-hidden text-xs w-24 mx-auto">
                {account.accountTitle}
              </p>
              <p className="text-sm">{account.accountNumber}</p>
            </div>
          ))}
          {accounts.length === 0 && (
            <div className="text-center">
              <p className="text-xs">No Account Information Available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
