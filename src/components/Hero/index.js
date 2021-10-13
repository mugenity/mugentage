import React from "react"
import { Container } from "./styles"
import Particles from "react-particles-js"
import { motion } from "framer-motion"

const Hero = () => {
  const text = "The Secret of Art & Soul !"

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <Container>
      {/* <Snowfall color="white" snowflakeCount={12} /> */}
      <Particles
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <motion.div className="content">
        <div className="title">
          <motion.h2 variants={sentence} initial="hidden" animate="visible">
            {text.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              )
            })}
          </motion.h2>
        </div>
      </motion.div>
    </Container>
  )
}

export default Hero
