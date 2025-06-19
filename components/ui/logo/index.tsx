import { useTheme } from 'next-themes';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Logo = () => {
      const {theme} = useTheme();

    //   useEffect(() => {

    //   }, [theme])
  return (
     <Link
        href='/'
        className='h-10 z-50 cursor-pointer flex justify-center items-center '
    >
        <Image
            src={theme ==='dark' ? '/TestLogo.svg' :'/TestLogo.svg'}
            alt='logo'
            height={100}
            width={100}
        />
    </Link>
  )
}

export default Logo