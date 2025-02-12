"use client"

import { ArrowUpRight, Newspaper } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Ultimate Snake Game",
      description: "A modern take on the classic Snake game with a Game Boy-inspired UI and additional features.",
      link: "https://github.com/toprak1919/ultimate-snake-game",
      linkText: "View Project",
    },
    {
      title: "Minds Halls Game",
      description: "Developed 'Minds Halls' within 3 days with a team for Scream Jam 2023. Made with Unity.",
      link: "https://endlessgates.itch.io/minds-halls",
      linkText: "View Project",
    },
    {
      title: "Telegram AI Bot",
      description: "A Telegram Bot that combines various AI tools and LLM providers. Uses RevChatGPT APIs.",
      link: "https://github.com/toprak1919/TelegramBot",
      linkText: "View Project",
    },
    {
      title: "Arsinex Front-End",
      description:
        "Worked on front-end development using WebSocket and Vue.js for Cyprus's first blockchain exchange platform.",
      link: "https://www.kibrispostasi.com/c50-EKONOMI/n407147-kktcin-ilk-kripto-para-platformu-arsinex",
      linkText: "Check the News",
    },
  ]

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 inline-flex items-center"
            >
              {project.linkText}
              {project.linkText === "Check the News" ? (
                <Newspaper className="ml-1 h-4 w-4" />
              ) : (
                <ArrowUpRight className="ml-1 h-4 w-4" />
              )}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

