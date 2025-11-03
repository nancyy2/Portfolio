import React from 'react'
import { motion } from 'framer-motion'

const links = ['About','Skills','Projects','Achievements','Education','Contact']

export default function Navbar(){
  return (
    <motion.header initial={{y:-30, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6}} className="sticky top-0 z-50 bg-transparent py-4">
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="text-xl font-bold text-slate-100">Nancy<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">Yadav</span></div>
        <ul className="hidden md:flex gap-6 text-slate-300">
          {links.map(l=>(
            <li key={l}><a href={'#'+l.toLowerCase()} className="hover:text-white transition">{l}</a></li>
          ))}
        </ul>
        <div className="md:hidden text-slate-300">☰</div>
      </nav>
    </motion.header>
  )
}
