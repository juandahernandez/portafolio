import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import "./particles.css";

const ParticlesLib = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <div
      className="particles-container"
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            modes: {
              bubble: {
                distance: 400,
                duration: 1,
                opacity: 0.8,
                size: 200,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: darkMode ? "#50F33A" : "#15920D",
            },
            links: {
              color: darkMode ? "#50F33A" : "#15920D",
              distance: 100,
              enable: true,
              opacity: 0.7,
              width: 7,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 1000,
              },
              value: 50,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 3,
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesLib;
