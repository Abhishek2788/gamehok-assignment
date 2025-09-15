'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function BottomNav() {
  const pathname = usePathname()
  const [activeId, setActiveId] = useState(null)
  const items = [
    { href: '/', icon: '/assets/icons/home.svg', label: 'Home', id: '1' },
    { href: '/tournaments', icon: '/assets/icons/cup.svg', label: 'My Tournament', id: '2' },
    { href: '/notFound', icon: '/assets/icons/profile.svg', label: 'Social', id: '3' },
    { href: '/notFound', icon: '/assets/icons/message.svg', label: 'Chats', id: '4' },
  ]

  return (
    <nav className="bottom-nav">
      <div className="nav-container">
        {items.map(i => {
          const active = (pathname === i.href && activeId === null) || activeId === i.id
          return (
            <Link 
              key={i.id} 
              href={i.href} 
              onClick={() => setActiveId(i.id)}
              className={`nav-item ${active ? 'active' : ''}`}
            >
              <div className="icon-wrapper">
                <Image src={i.icon} alt={i.label} width={24} height={24}/>
              </div>
              <span className="label text-[10px]">{i.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
