import React, { useEffect, useRef, useState } from 'react';
// @ts-expect-error
import NET from 'vanta/dist/vanta.net.min';
// @ts-expect-error
import * as THREE from 'three';
import theme from '../../base.styles';

export default function Vanta() {
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
          points: 15.0,
          maxDistance: 35,
          spacing: 25,

          color: theme.primary,
          backgroundColor: 'white',
          THREE,
        }),
      );
    }
    return () => {
      // @ts-expect-error
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      className="absolute left-0 top-0 min-h-screen min-w-full w-full -z-1 shadow-inner pointer-events-none"
      ref={myRef}
      style={{ opacity: 0.35 }}
    />
  );
}
