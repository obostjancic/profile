import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

export const VSSection = ({ children, intro }) => {
  const [active, setActive] = useState(false);

  return (
    <VisibilitySensor
      partialVisibility={true}
      onChange={isVisible => {
        setActive(isVisible || active);
      }}
    >
      <div className={active ? "vs-section" : "hidden"} style={intro && { margin: "0 auto" }}>
        {children}
      </div>
    </VisibilitySensor>
  );
};
