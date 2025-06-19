'use client';

import { useEffect, useState } from "react";
import { MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, Navbar, NavbarButton, NavBody, NavItems } from "./ui"
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../logo";
import MagicButton from "../MagicButton";
import CustomModal from "@/components/ui/customModal";

export  const NavBar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const {theme, setTheme} = useTheme();
    const [isClient, setIsClient] = useState(false)
  
 
    useEffect(() => {
      setIsClient(true)
    }, []);


    if (!isClient) return null;

    return (
      <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
            <Logo />
          <div className="flex items-center gap-4 z-50">
            {/* <NavbarButton
              variant="secondary"
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark')
              }}
              className="cursor-pointer"
            >
                {theme === 'dark' ? '🌞' : '🌙'}
            </NavbarButton> */}
            
            <CustomModal buttomText='Contact us'>
               Whats going on&
            </CustomModal>
          </div>
          <NavItems items={navItems} />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <Logo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              
              <MagicButton
                  title='Contact us'
                  position='righ'
                  className='md:w-auto md:mt-0 w-[150px] mt-0  h-[2.5rem]'
              />
              <MagicButton
                handleClick={() => setIsMobileMenuOpen(false)}
                position='righ'
                className="w-full"
                title="Book a call"
              />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>

    )
}