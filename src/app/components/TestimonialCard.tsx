export default function TestimonialCard({ name, feedback }: { name: string; feedback: string }) {
    return (
      <div className="p-4 border rounded shadow">
        <p className="italic">"{feedback}"</p>
        <p className="mt-2 font-bold">- {name}</p>
      </div>
    );
  }
  