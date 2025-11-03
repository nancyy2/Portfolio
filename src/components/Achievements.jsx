import React from 'react'
import { motion } from 'framer-motion'

const items = [
  'Built multiple full-stack projects including a ChatGPT Clone and E-Commerce app.',
  'Designed responsive and accessible user interfaces.',
  'Converted complex codebases across languages with zero runtime errors.',
  'Recognized for quick learning and problem-solving.'
]

export default function Achievements(){
  return (
    <section id="achievements" className="section py-12">
      <motion.h2 className="section-title" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}}>Achievements</motion.h2>
      <motion.ul className="mt-4 space-y-2 max-w-3xl mx-auto text-slate-300" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}}>
        {items.map((it,i)=> <li key={i}>• {it}</li>)}
      </motion.ul>
    </section>
  )
}
