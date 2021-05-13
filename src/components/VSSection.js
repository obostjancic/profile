import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Section } from "./Wrappers";

export const VSSection = ({ children, intro, anchor, handleChange = () => {} }) => {
  const [active, setActive] = useState(false);

  return (
    <VisibilitySensor
      partialVisibility={true}
      offset={{ top: 500 }}
      onChange={isVisible => {
        setActive(isVisible || active);
        handleChange(isVisible || active);
      }}
    >
      <Section id={anchor} active={active} intro={intro}>
        {children}
      </Section>
    </VisibilitySensor>
  );
};
