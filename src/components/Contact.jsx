import React, {useState} from 'react'
import { motion } from 'framer-motion'

export default function Contact(){
  const [status, setStatus] = useState('')
  function handleSubmit(e){
    e.preventDefault()
    const form = new FormData(e.target)
    // Using mailto as fallback - inform user
    const name = form.get('name')
    const email = form.get('email')
    const message = form.get('message')
    const mailto = `mailto:nancyyadav67890@gmail.com?subject=${encodeURIComponent('Portfolio contact from '+name)}&body=${encodeURIComponent(message + '\n\nContact: '+email)}`
    window.location.href = mailto
    setStatus('Opening your email client...')
  }
  return (
    <section id="contact" className="section py-12">
      <motion.h2 className="section-title" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}}>Contact</motion.h2>
      <motion.form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-6 grid gap-3" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}}>
        <input name="name" required placeholder="Your name" className="p-3 rounded bg-transparent border border-slate-700 text-slate-200"/>
        <input name="email" type="email" required placeholder="Your email" className="p-3 rounded bg-transparent border border-slate-700 text-slate-200"/>
        <textarea name="message" rows="5" required placeholder="Message" className="p-3 rounded bg-transparent border border-slate-700 text-slate-200"></textarea>
        <div className="flex items-center justify-between">
          <button className="px-4 py-2 rounded bg-gradient-to-r from-violet-600 to-cyan-500 text-black font-semibold">Send Email</button>
          <div className="text-slate-400 text-sm">{status}</div>
        </div>
      </motion.form>
    </section>
  )
}
