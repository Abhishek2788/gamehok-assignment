'use client'
import TournamentCarousel from "@/app/components/TournamentCarousel"
import { useEffect, useState } from "react"

export default function TournamentsPage() {
  const [tournaments, setTournaments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://67c9566f0acf98d07089d293.mockapi.io/tournaments")
      .then(res => res.json())
      .then(setTournaments)
      .catch(() => setTournaments([]))
      .finally(setLoading(false))
  }, [])

  return (
    <main>

      {/* 🎥 Hero Video Section */}
      <section className="relative w-full h-[320px] md:h-[480px] lg:h-[560px] mt-6 rounded-2xl overflow-hidden shadow-xl">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="assets/videos/hero-4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001208] via-black/30 to-transparent" />

        {/* Content on top of video */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg">
            Join Exciting <span className="text-[#0CF285]">Tournaments</span>
          </h1>
          <p className="text-gray-200 mt-3 text-sm md:text-lg max-w-xl">
            A true gamer never leaves the battlefield till loss or win - Booyah.
          </p>
        </div>
      </section>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0CF285]"></div>
          <p className="text-gray-400 mt-3">Loading data...</p>
        </div>
      ): (
        <TournamentCarousel tournaments={tournaments} title="Tournaments" />
      )}
    </main>
  )
}
