import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DottedSeparator } from './dotteed-separator'
import { Navigation } from './Navigation'

export const Sidebar = () => {
  return (
    <aside className='h-full p-4 bg-neutral-100 w-full'>
        <Link href="/">
            <Image src="/logo.svg" alt='logo' width={164} height={48}/>
        </Link>
        <DottedSeparator className='my-4'/>
        <Navigation/>
    </aside>
  )
}

