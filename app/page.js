'use client'
import { useEffect, useState } from 'react'
import GameCarousel from './components/GameCarousel'
import TournamentCarousel from './components/TournamentCarousel'
import FollowList from './components/FollowList'
import { followDummy } from './constants/dummydata'
import Image from 'next/image'
import Link from 'next/link'
import { MdKeyboardArrowRight } from "react-icons/md"

export default function HomePage() {
  const [games, setGames] = useState([])
  const [tournaments, setTournaments] = useState([])
  const [loading, setLoading] = useState(true)   // ✅ track loading state

  useEffect(() => {
    async function fetchData() {
      try {
        const [gamesRes, tournRes] = await Promise.all([
          fetch('https://67c9566f0acf98d07089d293.mockapi.io/games').then(r => r.json()),
          fetch('https://67c9566f0acf98d07089d293.mockapi.io/tournaments').then(r => r.json())
        ])
        setGames(gamesRes)
        setTournaments(tournRes)
      } catch (err) {
        setGames([])
        setTournaments([])
      } finally {
        setLoading(false) // ✅ hide loader after fetch
      }
    }
    fetchData()
  }, [])

  return (
    <>

      {/* 🎥 Hero Video Section */}
      <section className="relative w-full h-[320px] max-md:hidden md:h-[480px] lg:h-[560px] mt-6 rounded-2xl overflow-hidden shadow-xl">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="assets/videos/hero-1.mp4" type="video/mp4" />
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
            Play your favorite games, compete with the best, and win big rewards.
          </p>
          <div className="mt-5 flex gap-4">
            <button className="bg-[#0CF285] text-black font-semibold px-6 py-2 rounded-lg shadow hover:scale-105 transition">
              Get Started
            </button>
            <button className="bg-white/20 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-white/30 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Premium Banner */}
      <section className="mt-4">
        <div className="card-add">
          <div className='flex items-center justify-between w-full'>
            <div className='flex gap-4 md:gap-8'>
              <h2 className='text-black font-bold text-xl md:text-2xl'>Gamehok</h2> 
              <div className="px-4 py-1 premium text-black font-semibold rounded-md skew-x-[-15deg] shadow-sm">
                <span className="inline-block skew-x-[15deg]">Premium</span>
              </div>
            </div>
            <button className='font-sans w-[80px] h-[28px] rounded-md flex items-center justify-center bg-[#FA7B4D] text-[14px] pl-2 pr-2 pt-1.5 pb-1.5'>
              Get Now
            </button>
          </div>
          <div className='w-full'>
            <p className='text-black font-semibold'>
              Upgrade to premium membership and get 100 
              <Image src="/assets/images/Two-Tickets.png" width={20} height={20} alt='two Tickets' className='inline' /> 
              and many other premium features.
            </p>
          </div>
          <div className='text-[#01A74B] text-sm font-bold w-full'>
            <Link href="#">
              View All Feature <MdKeyboardArrowRight className='inline text-2xl' /> 
            </Link>
          </div>
        </div>
        <div className='mt-2 flex items-center justify-center gap-2'>
          <div className='slider-circle'></div>
          <div className='slider-circle'></div>
          <div className='slider-circle'></div>
        </div>
      </section>


      {/* Loader or Content */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0CF285]"></div>
          <p className="text-gray-400 mt-3">Loading data...</p>
        </div>
      ) : (
        <div>
          <GameCarousel games={games} />
          <TournamentCarousel tournaments={tournaments} title="Compete in Battles" />
          <div className="mt-8 mb-12">
            <FollowList list={followDummy} />
          </div>
        </div>
      )}
    </>
  )
}
