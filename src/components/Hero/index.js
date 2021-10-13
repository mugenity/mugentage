import React from "react"
import { Container } from "./styles"
import Snowfall from "react-snowfall"
import { motion } from "framer-motion"
import { isBrowser } from "../../utils.js"

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
      {isBrowser && <Snowfall color="white" snowflakeCount={12} />}

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
