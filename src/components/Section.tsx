import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

export interface VSSectionProps {
  children: React.ReactNode;
  anchor?: string;
  handleChange?: (visible: boolean) => void;
}

export function Section({ children, anchor, handleChange = () => {} }: VSSectionProps) {
  const [active, setActive] = useState(false);

  return (
    <VisibilitySensor
      partialVisibility
      offset={{ top: 500 }}
      onChange={(isVisible) => {
        setActive(isVisible || active);
        handleChange(isVisible || active);
      }}
    >
      <section
        className="max-w-7xl px-4 md:px-8 lg:px-12 pt-4 mx-auto mb-20 transition-all duration-700"
        style={{ opacity: active ? 1 : 0 }}
        id={anchor}
      >
        {children}
      </section>
    </VisibilitySensor>
  );
}
