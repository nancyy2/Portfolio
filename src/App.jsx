import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App(){
  return (
    <div className="bg-[#0b1020] text-slate-200 min-h-screen antialiased">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
        <footer className="py-10 text-center text-slate-400">© 2025 Nancy Yadav — Made with ❤</footer>
      </main>
    </div>
  )
}
