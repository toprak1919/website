export default function Education() {
  const education = [
    {
      degree: "Master's Degree, Philosophy and Computer Science",
      school: "University Of Bayreuth",
      date: "Oct 2024 - Current",
      location: "Bayreuth, Germany",
      website: "https://www.uni-bayreuth.de",
    },
    {
      degree: "Bachelor's Degree, Software Engineering",
      school: "Eastern Mediterranean University",
      date: "Sep 2019 - Jul 2023",
      location: "Famagusta, Cyprus",
      website: "https://www.emu.edu.tr",
    },
    {
      degree: "High School",
      school: "Bülent Ecevit High School",
      date: "Sep 2015 - Jun 2019",
      location: "Nicosia, Cyprus",
      website: "http://beal.mebnet.net/",
    },
  ]

  return (
    <section id="education" className="mb-16">
      <h2 className="text-3xl font-bold mb-4 text-center">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-600">{edu.school}</p>
            <p className="text-gray-600">
              {edu.date} | {edu.location}
            </p>
            <a href={edu.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

