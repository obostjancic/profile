import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const VSParagraph = ({ direction, children }) => {
  const [active, setActive] = useState(false);

  return (
    <VisibilitySensor
      partialVisibility={true}
      onChange={isVisible => {
        setActive(isVisible === true ? true : active);
      }}
    >
      <p style={{ visibility: active ? "visible" : "hidden" }} className={active ? `from-${direction}` : ""}>
        {children}
      </p>
    </VisibilitySensor>
  );
};

export default VSParagraph;
