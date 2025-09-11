// 'use client'
// import Image from 'next/image'

// export default function Header(){
//   return (
//     <header className="app-header">
//       <div className="app-container w-full flex items-center justify-between">
//         <div className="relative hover:cursor-pointer">
//             <div className='w-12 h-12 bg-amber-50 rounded-full flex items-center'>
//               <Image src="/assets/images/user.png" alt="user" width={60} height={60} className="avatar"/>
//             </div>
//             <Image src="/assets/images/user-menu.png"  alt="user-menu" width={25} height={25} className="absolute -bottom-1 -right-3 px-1 rounded-full"/>
//         </div>

//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-1 w-32 h-6 bg-[#01A74B] rounded-4xl pl-4 pr-4 pt-2 pb-2">
//             <div className="flex items-center gap-1">
//               <Image src="/assets/images/Two-Tickets.png" alt='tickets' width={16} height={16} />
//               <span className='text-[12px]'>245</span>
//             </div>
//             <div className='w-0.5 h-full bg-white'></div>
//             <div className="flex items-center gap-1">
//               <Image src="/assets/images/Coins.png" alt='coins'width={16} height={16} />
//               <span className='text-[12px]'>2456</span>
//             </div>
//           </div>

//           <div className="relative hover:cursor-pointer">
//             <Image src="/assets/images/alert.png" alt="alert" width={30} height={30} className="rounded-md"/>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }







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
              <span className='text-sm font-semibold text-white'>245</span>
            </div>
            <span className='w-0.5 h-5 bg-white/40'></span>
            <div className="flex items-center gap-1">
              <Image src="/assets/images/Coins.png" alt='coins' width={18} height={18} />
              <span className='text-sm font-semibold text-yellow-400'>2456</span>
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
