import React from 'react'
import { motion } from 'framer-motion'

const skills = ['HTML','CSS','JavaScript','React','Node.js','Python','Django','Tailwind','Git','SQL']

export default function Skills(){
  return (
    <section id="skills" className="section py-12">
      <motion.h2 className="section-title" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}}>Skills</motion.h2>
      <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto mt-6" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}}>
        {skills.map(s=>(
          <div key={s} className="card p-3 text-center text-slate-200">{s}</div>
        ))}
      </motion.div>
    </section>
  )
}
