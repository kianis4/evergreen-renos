export default function TestimonialCard({ name, feedback }: { name: string; feedback: string }) {
  return (
    <div className="p-4 border rounded shadow">
      <blockquote className="italic">&quot;{feedback}&quot;</blockquote>
      <footer className="mt-2 font-bold">- {name}</footer>
    </div>
  );
}

  