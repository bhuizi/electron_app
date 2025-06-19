import { createRoot } from 'react-dom/client';
import { Button } from "@/components/ui/button"

const root = createRoot(document.body);
root.render(
  <section className='flex min-h-svh flex-col items-center justify-center bg-neutral-800 text-white'>
    <p className="text-sm">Hello from React!</p>
      <Button>Click me</Button>
  </section>
);
