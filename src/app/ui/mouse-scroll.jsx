'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function MouseScroll() {
  const mouseScrollRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        mouseScrollRef.current.style.visibility = 'hidden'
      } else {
        mouseScrollRef.current.style.visibility = 'visible'
      }
    }
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='justify-self-center' ref={mouseScrollRef}>
      <Image
        src='/images/mouseScroll.svg'
        width={46}
        height={46}
        alt='Mouse Scroll'
        className='animate-bounce'
      />
    </div>
  )
}
