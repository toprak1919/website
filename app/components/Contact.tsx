"use client"

import { Mail, Github, Linkedin, Globe } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="text-center">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <div className="flex justify-center space-x-6">
        <a href="mailto:toprakdikici28@gmail.com" className="text-gray-700 hover:text-blue-600">
          <Mail className="h-8 w-8" />
          <span className="sr-only">Email</span>
        </a>
        <a
          href="https://github.com/toprak1919"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600"
        >
          <Github className="h-8 w-8" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/toprak-tarkan-dikici"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600"
        >
          <Linkedin className="h-8 w-8" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="https://toprakdikici.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600"
        >
          <Globe className="h-8 w-8" />
          <span className="sr-only">Personal Website</span>
        </a>
      </div>
    </section>
  )
}

