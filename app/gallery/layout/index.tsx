import { LayoutProps } from 'framer-motion';
import React, { ReactElement, ReactNode } from 'react';

type LayautProps = {
    children: ReactNode,
}

const Layout = ({children}: LayautProps) => {
  return (
    <div
        className='md:mt-40 mt-32 mb-20 mx-5'
    >
        {children}
    </div>
  )
}

export default Layout