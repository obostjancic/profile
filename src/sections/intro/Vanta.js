import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import NET from 'vanta/dist/vanta.net.min';
import { theme } from '../../components';
import * as THREE from 'three';

const CanvasWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  background-color: ${theme.backgroundOverlay};
  z-index: -1;
  box-shadow: inset 0px 0px 100px #a6c3cf;
  pointer-events: none;
`;

export const Vanta = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          maxDistance: 30.0,
          spacing: 20.0,
          color: theme.primary,
          backgroundColor: theme.backgroundDark,
          THREE: THREE,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <CanvasWrapper ref={myRef} style={{ opacity: 0.35 }}></CanvasWrapper>;
};
