"use client";

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles"; // Use full instead of basic

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // Use full load to support all options
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: {
            value: "#ffffff",
          },
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: [
              "#ff0000",
              "#00ff00",
              "#0000ff",
              "#ffff00",
              "#00ffff",
              "#ff00ff",
            ],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 2,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
