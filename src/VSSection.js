import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

export const VSSection = ({ children }) => {
  const [active, setActive] = useState(false);

  return (
    <VisibilitySensor
      partialVisibility={true}
      onChange={isVisible => {
        setActive(isVisible || active);
      }}
    >
      <div className={active ? "section" : "hidden"}>{children}</div>
    </VisibilitySensor>
  );
};
