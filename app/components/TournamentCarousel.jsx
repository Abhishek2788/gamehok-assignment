'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Users } from 'lucide-react'
import { epochToLocalString } from '@/lib/format'

export default function TournamentCarousel({ tournaments = [], title = "Tournaments" }) {
  return (
    <section className="mt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg text-[#F2F2F2] font-semibold pl-3">{title}</h3>
        <Link href="/tournaments">
          <span className="text-[#0CF285] pr-3 text-sm hover:underline">View All</span>
        </Link>
      </div>

      {/* Horizontal Scroll */}
      <div className="h-scroll">
        {tournaments.map(t => {
          const prizeTotal = t.prizeCoins
            ? t.prizeCoins.split(",").reduce((a, b) => a + +b, 0)
            : 0

          return (
            <Link href={`/tournaments/${t.id}`} key={t.id}className='block'>
              <div
                className="relative  rounded-2xl overflow-hidden shadow-lg border border-gray-800 min-w-[280px] max-w-[300px] flex-shrink-0"
              >
                {/* Thumbnail */}
                <div className="relative">
                  <Image
                    src={t.thumbnailPath || '/assets/images/tourn-placeholder.jpg'}
                    alt={t.name}
                    width={300}
                    height={160}
                    className="w-full h-[160px] object-cover"
                  />

                  {/* Status badge */}
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {t.status === "upcoming"
                      ? "Registration Open"
                      : t.status === "ongoing"
                      ? "Live"
                      : "Completed"}
                  </span>

                  {/* Registered count */}
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                    <Users size={14} /> {t.registeredCount}/{t.totalCount}
                  </div>

                  {/* Organizer logo */}
                  <div className="absolute -bottom-4 right-2 w-10 h-10">
                    <Image
                      src={t.organizerDetails?.profileImagePath || "/assets/images/redbull.png"}
                      alt={t.organizerDetails?.name || "Organizer"}
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-white"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 bg-gradient-to-b from-[#56E293] to-[#062E17]">
                  <h4 className="text-sm font-semibold text-white truncate">{t.name}</h4>
                  <p className="text-[10px] font-semibold text-white">By {t.organizerDetails?.name}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 my-2">
                    <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">{t.gameName}</span>
                    <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">{t.teamSize}</span>
                    <span className="flex gap-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                      Entry - {t.entryFees}
                      <Image src='/assets/svg/coin.svg' width={12} height={12} alt='coin' />
                    </span>
                  </div>

                  {/* Start Date */}
                  <div className="flex items-center gap-1 text-gray-300 text-xs mb-1">
                    <Image src='/assets/svg/timer.svg' width={16} height={16} alt='timer' />
                    <span>{epochToLocalString(t.tournamentStartTime)}</span>
                  </div>

                  {/* Prize Pool */}
                  <div className="flex items-center justify-between gap-1 text-gray-300 text-xs mb-1">
                    <div className="flex items-center gap-1 text-gray-300 text-xs mb-1">
                      <Image src='/assets/svg/trophy.svg' width={16} height={16} alt='trophy' />
                      <span>Prize Pool - {prizeTotal}</span>
                    </div>
                    <div>
                      <Image src='/assets/svg/chevron-right.svg' width={16} height={16} alt='chevron-right' />
                    </div>
                  </div>
                  
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
