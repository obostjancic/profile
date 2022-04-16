import React from 'react';

export const Badge = ({ name }: { name: string }) => (
  <span
    className="inline-block my-1 mx-0.5 py-1 px-3 border rounded-md bg-gradient-to-br from-prim-light to-prim-dark text-white font-bold text-sm"
    key={name}
  >
    {name}
  </span>
);
