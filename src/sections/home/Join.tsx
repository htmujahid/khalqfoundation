import { Card } from '@/components/card';
import { Button, Title } from '@/components/ui';

const joinUrl = 'https://forms.gle/9qj6R6J1zq3ZK9Wb9';

export function Join() {
  return (
    <div className="container">
      <Card>
        <div className="flex items-center flex-col p-10 flex-shrink-0">
          <Title subtitle="Make a Difference in Your Community by Joining Our Team of Volunteers">
            Join Our Team
          </Title>
          <Button variant="primary" href={joinUrl}>
            Join Us
          </Button>
        </div>
      </Card>
    </div>
  );
}
