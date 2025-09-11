'use client'
import Image from 'next/image'

export default function Header(){
  return (
    <header className="app-header">
      <div className="app-container w-full flex items-center justify-between">
        
        {/* User Avatar */}
        <div className="relative hover:scale-105 hover:cursor-pointer">
          <div className='w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#0CF285] shadow-lg shadow-emerald-800/40'>
            <Image src="/assets/images/user.png" alt="user" width={40} height={40} className="rounded-full" priority />
          </div>
        </div>

        {/* Tickets & Coins */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-[#05693B] to-[#01A74B] rounded-full shadow-md shadow-green-900/50">
            <div className="flex items-center gap-1">
              <Image src="/assets/images/Two-Tickets.png" alt='tickets' width={18} height={18} />
              <span className='text-sm text-white'>245</span>
            </div>
            <span className='w-0.5 h-5 bg-white/40'></span>
            <div className="flex items-center gap-1">
              <Image src="/assets/images/Coins.png" alt='coins' width={18} height={18} />
              <span className='text-sm text-white'>2456</span>
            </div>
          </div>

          {/* Notifications */}
          <div className="relative cursor-pointer hover:scale-110 transition-transform duration-300">
            <Image src="/assets/images/Alert.png" alt="alert" width={28} height={28} className="rounded-md"/>
          </div>
        </div>
      </div>
    </header>
  )
}
