"use client"

export default function Interests() {
  const interests = [
    {
      title: "Machine Learning",
      description: "Exploring various ML algorithms and their applications in real-world scenarios.",
    },
    {
      title: "Natural Language Processing",
      description: "Interested in developing AI models that can understand and generate human language.",
    },
    {
      title: "Computer Vision",
      description: "Fascinated by the potential of AI to interpret and analyze visual information from the world.",
    },
    {
      title: "Ethics in AI",
      description:
        "Studying the philosophical implications and ethical considerations of AI development and deployment.",
    },
  ]

  return (
    <section id="interests" className="mb-16">
      <h2 className="text-3xl font-bold mb-4 text-center">Areas of Interest</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {interests.map((interest, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
            <p className="text-gray-600">{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

