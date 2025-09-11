'use client'
import { formatGameName } from '@/lib/format'
import Image from 'next/image'
import Link from 'next/link'

export default function GameCarousel({ games = [], title = "Play Tournament By Games" }) {


  return (
    <section className="mt-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg text-[#F2F2F2] font-semibold">{title}</h3>
        <div>
          <Link href="/games" className="muted ml-3"><span className='text-[#0CF285] text-sm'>View All</span></Link>
        </div>
      </div>

      <div id="games-scroll" className="h-scroll" style={{padding: '6px 0'}}>
        {games.map(g => (
          <Link key={g.id} href='#'>
            <div className="h-card w-40 md:w-64">
              <Image src={g.imagePath || '/assets/images/game-placeholder.jpg'} alt={g.gameName} width={320} height={160} className="img-round"/>
              <div className="mt-3">
                <div className="font-medium text-center">{formatGameName(g.gameName)}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className='h-[1px] w-full bg-[#414141] mt-5'></div>
    </section>
  )
}
