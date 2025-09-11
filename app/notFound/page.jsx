'use client'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center text-white p-8 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none">
        <div className="w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full"></div>
      </div>

      {/* Big 404 glowing text */}
      <h1 className="text-7xl md:text-9xl font-extrabold text-[#0CF285] drop-shadow-[0_0_15px_#0CF285] animate-pulse">
        404
      </h1>
      
      {/* Subtitle */}
      <h2 className="mt-4 text-xl md:text-3xl font-bold tracking-widest text-center">
        Oops! Page Not Found
      </h2>
      <p className="mt-2 text-gray-400 text-center max-w-md">
        Looks like you took a wrong turn in the arena. The page you’re looking for doesn't exist.
      </p>

      {/* CTA Button */}
      <Link 
        href="/"
        className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-[#01A74B] to-[#0CF285] text-black font-bold shadow-[0_0_15px_#0CF285] hover:scale-105 transition-transform"
      >
        Back to Home
      </Link>
    </div>
  )
}
