import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section id="home" className="pt-12 pb-20">
      <div className="hero-grid">
        <motion.div initial={{opacity:0, x:-30}} animate={{opacity:1, x:0}} transition={{duration:0.7}} className="">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-100">Hi, I'm <span className="accent">Nancy Yadav</span></h1>
          <p className="mt-4 text-slate-300 max-w-xl">Aspiring Full Stack Developer from Sitapur, Uttar Pradesh. Pursuing BCA. Sharp-minded, quick learner, and passionate about building clean, scalable web apps.</p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-5 py-2 rounded-md bg-gradient-to-r from-violet-600 to-cyan-500 text-black font-semibold">View Projects</a>
            <a href="#contact" className="px-5 py-2 rounded-md border border-slate-700 text-slate-200">Contact Me</a>
          </div>
          <div className="mt-6 text-slate-400">Tech: React · JavaScript · Python · Django · Node.js · Tailwind</div>
        </motion.div>

        <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:0.8}} className="card p-6">
          <div className="w-full h-full rounded-lg bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-4">
            <h3 className="text-slate-100 font-semibold">Contact Snapshot</h3>
            <p className="text-slate-300 mt-3">Sitapur, Uttar Pradesh · BCA Student</p>
            <div className="mt-4 space-y-2">
              <div className="text-sm text-slate-400">Email</div>
              <div className="text-sm text-slate-100">nancyyadav67890@gmail.com</div>
              <div className="mt-3 text-sm text-slate-400">GitHub</div>
              <div className="text-sm text-slate-100">https://github.com/nancyy2</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
