import React from 'react'
import { motion } from 'framer-motion'

export default function Education(){
  return (
    <section id="education" className="section py-12">
      <motion.h2 className="section-title" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}}>Education</motion.h2>
      <motion.div className="max-w-2xl mx-auto mt-4 text-slate-300" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}}>
        <div className="card p-4">
          <h3 className="font-semibold text-slate-100">Bachelor of Computer Applications (BCA) — Pursuing</h3>
          <p className="mt-1">Location: Sitapur, Uttar Pradesh</p>
        </div>
      </motion.div>
    </section>
  )
}
