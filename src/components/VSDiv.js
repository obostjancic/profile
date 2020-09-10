import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const VSDiv = ({ childStyle, direction, children }) => {
  const [active, setActive] = useState(false);

  return (
    <VisibilitySensor
      partialVisibility={true}
      onChange={isVisible => {
        setActive(isVisible === true ? true : active);
      }}
    >
      <div
        style={{ visibility: active ? "visible" : "hidden", ...childStyle }}
        className={active ? `from-${direction}` : ""}
      >
        {children}
      </div>
    </VisibilitySensor>
  );
};

export default VSDiv;
