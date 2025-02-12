export default function Experience() {
  const experiences = [
    {
      title: "Programmer",
      company: "Finartz",
      date: "Nov 2021 - Jun 2023",
      location: "Istanbul, Türkiye",
      description: [
        "Worked on the Payment Facilitator Project, my first enterprise-level project",
        "Used various Design Patterns and Architectures",
        "Wrote Tests",
        "Built and Fixed Front End features",
        "Made performance improvements on queries and did indexing on Databases",
        "Used Scripting tools",
      ],
    },
    {
      title: "Software Specialist",
      company: "Creditwest Bank",
      date: "Jun 2021 - Sep 2021",
      location: "Nicosia, Cyprus",
      description: [
        "Developed QR Code entry application for COVID which is actively used",
        "Made Database designs and implemented them",
        "Built backend and frontend for backoffice application",
        "Built frontend for employees with QR code scanner",
        "Built a Progressive Web App",
      ],
    },
  ]

  return (
    <section id="experience" className="mb-16">
      <h2 className="text-3xl font-bold mb-4 text-center">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">
              {exp.title} at {exp.company}
            </h3>
            <p className="text-gray-600 mb-2">
              {exp.date} | {exp.location}
            </p>
            <ul className="list-disc list-inside text-gray-700">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

