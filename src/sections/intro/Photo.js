import React from "react";
import styled from "styled-components";
import { Transition, Border, theme } from "../../components";

const PhotoWrapper = styled.div`
  ${Transition({ duration: 0.3 })}
  ${Border({ size: 1 })}
  min-height: 128px;
  max-width: 128px;
  margin: 0 auto;
  border-radius: 50%;
  pointer-events: auto;

  &:hover {
    -webkit-box-shadow: 0 0 10px ${theme.primary};
    box-shadow: 0 0 10px ${theme.primary};
  }
`;

export const Photo = () => (
  <PhotoWrapper style={{ background: "url(profile-photo-square.jpg)", backgroundSize: "contain" }} />
);
