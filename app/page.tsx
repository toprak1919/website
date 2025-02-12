import Introduction from "./components/Introduction"
import Interests from "./components/Interests"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Introduction />
      <Interests />
      <Projects />
      <Contact />
    </main>
  )
}

