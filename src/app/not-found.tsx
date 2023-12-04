import { Button, Headline, Title } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="container my-16 flex items-center justify-center h-full flex-col">
      <Headline title="ERROR 404" subtitle="Page Not Fond" />
      <Button variant="outlined" href="/" className="w-fit">
        Back to Home
      </Button>
    </div>
  );
}
