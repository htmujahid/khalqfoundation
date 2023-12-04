'use client';
import Image from 'next/image';
import { Card } from '.';
import { CopyIcon } from '../assets';

type DonateCardProps = {
  bankName: string;
  accountNumber: string;
  accountTitle: string;
};

export function DonateCard({
  bankName,
  accountNumber,
  accountTitle,
}: DonateCardProps) {
  return (
    <Card>
      <div id="donate-card" className="p-8">
        <div className="pb-5">
          <Image
            width={200}
            height={200}
            src={`/assets/images/accounts/${bankName.toLowerCase()}.png`}
            className="h-12 w-auto"
            alt={bankName}
          />
        </div>
        <div className="pt-3">
          <p className="pb-1 text-gray-dark">Bank Name</p>
          <div className="flex gap-2">
            <p className="text-2xl font-medium" id="bank-name">
              {bankName}
            </p>
            <button
              className="active:opacity-60"
              onClick={() => navigator.clipboard.writeText(bankName)}
            >
              <CopyIcon className="h-5 w-5 text-primary" />
            </button>
          </div>
        </div>
        <div className="pt-3">
          <p className="pb-1 text-gray-dark">Bank Account Number</p>
          <div className="flex gap-2">
            <p className="text-2xl font-medium" id="bank-number">
              {accountNumber}
            </p>
            <button
              className="active:opacity-60"
              onClick={() => navigator.clipboard.writeText(accountNumber)}
            >
              <CopyIcon className="h-5 w-5 text-primary" />
            </button>
          </div>
        </div>
        <div className="pt-3">
          <p className="pb-1 text-gray-dark">Account Title</p>
          <div className="flex gap-2">
            <p className="text-2xl font-medium" id="bank-title">
              {accountTitle}
            </p>
            <button
              className="active:opacity-60"
              onClick={() => navigator.clipboard.writeText(accountTitle)}
            >
              <CopyIcon className="h-5 w-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
