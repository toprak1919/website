export default function Skills() {
  const skills = ["JavaScript", "TypeScript", "React", "Node.js", "Python", "AWS", "Docker", "GraphQL", "SQL", "NoSQL"]

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

