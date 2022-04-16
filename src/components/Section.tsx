import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

export interface VSSectionProps {
  children: React.ReactNode;
  intro?: boolean;
  anchor?: string;
  handleChange?: (visible: boolean) => void;
}

export const Section = ({ children, intro, anchor, handleChange = () => {} }: VSSectionProps) => {
  const [active, setActive] = useState(false);

  return (
    <VisibilitySensor
      partialVisibility={true}
      offset={{ top: 500 }}
      onChange={(isVisible) => {
        setActive(isVisible || active);
        handleChange(isVisible || active);
      }}
    >
      <section
        className="max-w-[1280px] px-12 pt-4 mx-auto mb-20 "
        style={{ opacity: active ? 1 : 0 }}
        id={anchor}
      >
        {children}
      </section>
    </VisibilitySensor>
  );
};
