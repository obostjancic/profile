import React from 'react';

export default function Badge({ name }: { name: string }) {
  return (
    <span
      className="inline-block my-1 mx-0.5 py-1 px-3 border rounded-lg bg-gradient-to-br from-prim-light to-prim-dark text-white font-bold text-sm"
      key={name}
    >
      {name}
    </span>
  );
}
