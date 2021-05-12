import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

export const VSSection = ({ children, intro, anchor, handleChange = () => {} }) => {
  const [active, setActive] = useState(false);

  return (
    <VisibilitySensor
      partialVisibility={true}
      offset={{ top: 500 }}
      onChange={isVisible => {
        setActive(isVisible || active);
        console.log("calling");
        handleChange(isVisible || active);
      }}
    >
      <div
        id={anchor}
        className={active ? "vs-section" : "hidden"}
        style={intro && { margin: "0 auto", pointerEvents: "none" }}
      >
        {children}
      </div>
    </VisibilitySensor>
  );
};
