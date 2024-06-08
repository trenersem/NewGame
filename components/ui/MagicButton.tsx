'use client'

import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string, icon: React.ReactNode, position: string,
    handleClick?: () => void, otherClasses?: string
}) => {
    function isSafari() {
        if (typeof navigator !== 'undefined') {
            const ua = navigator.userAgent;
            return ua.includes("Safari") && !ua.includes("Chrome");
        }
        return false; // Якщо navigator не доступний, вважаємо, що це не Safari.
    }

  return !isSafari() ? (
    <button
        className="relative inline-flex h-12 overflow-hidden rounded-lg w-full p-[1px] focus:outline-none md:w-60 md:mt-10 "
        onClick={handleClick}
    >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span 
            className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2
            ${otherClasses}`}
        >
           {position === 'left' && icon}
           {title}
           {position === 'right' && icon}
        </span>
    </button> 
  ) : (
      <button
        className="bg-slate-800  md:w-60 md:mt-10 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"
        onClick={handleClick}
    >
        <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative flex h-12 w-full space-x-2 items-center z-10 rounded-full bg-zinc-950  ring-1 ring-white/10 ">
            <span 
            className={`inline-flex h-full w-full cursor-pointer rounded-full items-center justify-center bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2
            ${otherClasses}`}
            >
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </span>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  )
}

export default MagicButton
