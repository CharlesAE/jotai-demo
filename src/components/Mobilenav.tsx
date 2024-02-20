
'use client'

import React from 'react'
import Image from 'next/image'
import { showMenu, toggleAuth} from '@/util/jotai_util';
import { useAtom } from 'jotai';
import AuthButton from './AuthButton';

const Mobilenav = () => {
    const [menu, menuToggle] = useAtom(showMenu);
  return (
    <div className={`${menu ? "fixed top-0 left-0 bottom-0" : 'hidden'} navbar-backdrop   bg-black bg-opacity-75  w-3/4 max-w-xs z-50`}>
          <div ></div>
          <nav className="relative flex flex-col h-full p-8 bg-white shadow-md">
            <div className="flex items-center justify-between mb-12">
              <a className="items-center" href="#" >
              <Image src={'vercel.svg'} alt={'Vercel logo'} width={116} height={100}/>
              </a>
              
            </div>
            <div>
              <ul>
              <li className="py-3" onClick={menuToggle}>Home</li>
                  <li className="py-3" onClick={menuToggle}>Products</li>
                  <li className="py-3" onClick={menuToggle}>Resources</li>
                  <li className="py-3" onClick={menuToggle}>Pricing</li></ul>
            </div>
            <AuthButton mobile/>
          </nav>
        </div>
  )
}

export default Mobilenav