import React, { useEffect, useRef, useState } from 'react';
//@ts-expect-error
import NET from 'vanta/dist/vanta.net.min';
import { theme } from '../../Base.styles';
//@ts-expect-error
import * as THREE from 'three';

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
      //@ts-expect-error
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      className="absolute left-0 top-0 min-h-screen min-w-full w-full z-[-1] shadow-inner pointer-events-none"
      ref={myRef}
      style={{ opacity: 0.35 }}
    ></div>
  );
};
