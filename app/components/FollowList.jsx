'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function FollowList({ list = [] }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg text-[#F2F2F2] font-semibold">People to Follow</h3>
        <Link href="#"><div className="muted text-sm"><span className='text-[#0CF285] text-sm'>View More</span></div></Link>
      </div>

      <div className="flex flex-col gap-8">
        {list.map(p => (
          <div key={p.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className='relative w-10 h-10'><Image src={p.profileImagePath || '/assets/images/gamer-1.jpg'} fill alt={p.name} className='rounded-full' /></div>
              <div>
                <div className="font-medium text-[14px]">{p.name}</div>
              </div>
            </div>
            <button className="px-3 py-1 rounded-md bg-[#002E14] text-white text-[12px] hover:bg-[#024c22]">Follow</button>
          </div>
        ))}
      </div>
    </div>
  )
}
