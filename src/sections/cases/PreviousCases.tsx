import { Card } from '@/components/card';
import { Heading } from '@/components/ui';

const cases = [
  {
    id: 1,
    title: 'Student Fees',
    category: 'Education',
    amount: 'Rs. 50,000',
    start_date: '2021-01-01',
    end_date: '2021-01-31',
  },
  {
    id: 2,
    title: 'Widow House Construction',
    category: 'Construction',
    amount: 'Rs. 500,000',
    start_date: '2021-02-01',
    end_date: '2021-02-28',
  },
  {
    id: 3,
    title: 'Operate Medical Expenses',
    category: 'Medical',
    amount: 'Rs. 100,000',
    start_date: '2021-03-01',
    end_date: '2021-03-31',
  },
  {
    id: 4,
    title: 'Orphan Monthly Expenses',
    category: 'Monthly',
    amount: 'Rs. 50,000',
    start_date: '2021-04-01',
    end_date: '2021-04-30',
  },
  {
    id: 5,
    title: 'Student Tution Fees',
    category: 'Education',
    amount: 'Rs. 50,000',
    start_date: '2021-05-01',
    end_date: '2021-05-31',
  },
  {
    id: 6,
    title: 'Widow Monthly Expenses',
    category: 'Monthly',
    amount: 'Rs. 50,000',
    start_date: '2021-06-01',
    end_date: '2021-06-30',
  },
  {
    id: 7,
    title: 'Orphan Monthly Expenses',
    category: 'Monthly',
    amount: 'Rs. 50,000',
    start_date: '2021-07-01',
    end_date: '2021-07-31',
  },
  {
    id: 8,
    title: 'Student Fees',
    category: 'Education',
    amount: 'Rs. 50,000',
    start_date: '2021-08-01',
    end_date: '2021-08-31',
  },
];

export function PreviousCases() {
  return (
    <div className="container">
      <Heading level={1} className="text-center mb-8">
        Cases History
      </Heading>
      <Card className="overflow-hidden">
        <div className="overflow-x-visible">
          <div className="py-2 align-middle overflow-x-auto">
            <table className="flex flex-col divide-y divide-gray-200 rounded-lg min-w-[620px]">
              <thead className="p-4  rounded-t-lg">
                <tr className="">
                  <th></th>

                  <th className="text-left w-1/12">ID</th>

                  <th className="text-left w-3/12">Title</th>

                  <th className="text-left w-3/12">Category</th>

                  <th className="text-left w-3/12">Amount</th>

                  <th className="w-2/12 text-right">Date</th>
                </tr>
              </thead>
              <tbody>
                {cases.length === 0 && (
                  <tr>
                    <td className="text-center">No Cases</td>
                  </tr>
                )}
                {cases.map((item) => (
                  <tr key={item.id} className='hover:bg-gray'>
                    <td></td>

                    <td className="w-1/12 p-4">{item.id}</td>

                    <td className="w-3/12 p-4 whitespace-nowrap">{item.title}</td>

                    <td className="w-3/12 p-4 whitespace-nowrap">{item.category}</td>

                    <td className="w-3/12 p-4 whitespace-nowrap">{item.amount}</td>

                    <td className="w-2/12 p-4 text-right whitespace-nowrap">
                      {item.end_date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
}
