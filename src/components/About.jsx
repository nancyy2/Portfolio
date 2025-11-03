import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="section py-12">
      <motion.h2 className="section-title" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}}>About Me</motion.h2>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}} className="text-slate-300 max-w-3xl mx-auto">I am Nancy, an aspiring Full Stack Developer pursuing BCA. I focus on building accessible, responsive web applications and enjoy learning new technologies. My projects include a ChatGPT-like chatbot interface, an E-Commerce platform, and this portfolio.</motion.p>
    </section>
  )
}
