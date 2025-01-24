import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className="text-white body-font bg-[#61abc2]">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl text-white">Assignment 01</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href='/about' className="mr-5 hover:text-gray-900">About</Link>
      <Link href='/contact' className="mr-5 hover:text-gray-900">Contact Us</Link>
      <Link href='/service' className="mr-5 hover:text-gray-900">Service</Link>
    </nav>
  </div>
</header>
  )
}
