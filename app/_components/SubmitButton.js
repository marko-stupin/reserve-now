"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ children, pendingLabel }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-accent-500 px-8 py-4 text-accent-50 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-accent-500 disabled:text-accent-50"
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
