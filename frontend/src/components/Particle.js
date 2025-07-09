import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="particle-wrapper"> 
      <Particles
        id="firefly-particles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          background: {
            color: { value: "#e85870" }, 
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true,
            },
          },
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#ffffff", 
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.2,
              random: true,
            },
            size: {
              value: { min: 2, max: 6 },
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "bounce",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Particle;
