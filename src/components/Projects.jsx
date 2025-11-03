import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'ChatGPT Clone',
    desc: 'An AI-powered conversational chatbot built with React that mimics ChatGPT’s UI and response system. It provides a seamless chatting experience with context-aware conversation history.',
    tech: 'React · JavaScript · API Integration'
  },

  {
    id: 3,
    title: 'Personal Portfolio',
    desc: 'A modern dark-themed personal portfolio showcasing skills, projects, and achievements — built to highlight professional growth and technical expertise.',
    tech: 'React · Tailwind · Framer Motion'
  },
  {
    id: 4,
    title: 'Student Management System',
    desc: 'A Django-based application to manage student records, attendance, and grades with an intuitive admin dashboard and secure data handling.',
    tech: 'Python · Django · SQLite'
  },
  {
    id: 5,
    title: 'Package Detector Dashboard',
    desc: 'An AI-powered maritime tracking system converting a TypeScript project to Python, enhancing data visualization and ship analytics for smarter insights.',
    tech: 'Python · Flask · React · Data Visualization'
  },
  {
    id: 6,
    title: 'Fetch Git Data',
    desc: 'A web app that fetches and visualizes GitHub user data like repositories, followers, and activity, using GitHub API for real-time data updates.',
    tech: 'React · GitHub API · JavaScript'
  },
  {
    id: 7,
    title: 'Fashion Website (Urban Attire)',
    desc: 'A stylish front-end fashion brand site built with pure HTML, CSS, and JavaScript, emphasizing elegant design, image carousels, and responsiveness.',
    tech: 'HTML · CSS · JavaScript · Bootstrap'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="section py-12">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-3 gap-6 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {projects.map(p => (
          <motion.article
            key={p.id}
            whileHover={{ y: -6 }}
            className="card p-5"
          >
            <h3 className="text-lg font-semibold text-slate-100">{p.title}</h3>
            <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
            <p className="mt-3 text-xs text-cyan-400">{p.tech}</p>
            <div className="mt-4 flex gap-2">
              <a className="text-sm px-3 py-1 rounded bg-slate-800 text-slate-200 cursor-pointer">
                View
              </a>
              <a className="text-sm px-3 py-1 rounded border border-slate-700 text-slate-300 cursor-pointer">
                Source
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
