'use client'

import { MobileLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'




const MobileNavbelow = () => {

    const pathname = usePathname();

  return (
    <nav className="mobile-nav-container">
        
   
    {MobileLinks.map((item) =>
    {
        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
        return(
            <Link href={item.route} key={item.label} className={cn("menu-item", {'btn-nav':isActive})}>
                
                <Image
                src={item.imgURL}
                alt={item.label}
                width={33}
                height={33}
                
                className={cn({'brightness-[3] invert-0 menu-icon': isActive})} />
               
                
            </Link>
            
        )
    }
    )}
    
</nav>
  )
}

export default MobileNavbelow