"use client"

import Image from "next/image"

export default function Introduction() {
  return (
    <section id="about" className="mb-16 text-center">
      <div className="relative w-48 h-48 mx-auto mb-4">
        <Image
          src="/55843714.jpg"
          alt="Profile Image"
          width={192}
          height={192}
          className="rounded-full object-cover"
          priority
        />
      </div>
      <h1 className="text-4xl font-bold mb-2 dark:text-white">Toprak Tarkan Dikici</h1>
      <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-4">Software Engineer & Philosophy Student</h2>
      <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
        I'm pursuing a Master's degree in Philosophy and Computer Science. My goal is to deepen my understanding of
        rapidly evolving technologies and apply my diverse skill set to solve complex real-world problems. I'm excited
        about exploring the intersection of philosophy and technology, particularly in the field of machine learning.
      </p>
    </section>
  )
}

