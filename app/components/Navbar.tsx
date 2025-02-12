"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Toprak Tarkan Dikici
          </Link>
          <div className="space-x-4">
            <Link href="#about" className="text-gray-600 hover:text-gray-800">
              About
            </Link>
            <Link href="#interests" className="text-gray-600 hover:text-gray-800">
              Interests
            </Link>
            <Link href="#projects" className="text-gray-600 hover:text-gray-800">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

