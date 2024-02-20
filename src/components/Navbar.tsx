'use client'
import React from 'react'
import Image from 'next/image'
import Mobilenav from './Mobilenav'
import { showMenu, toggleAuth } from '@/util/jotai_util';
import { useAtom } from 'jotai';
import AuthButton from './AuthButton';

const Navbar = () => {
    const [_, menuToggle] = useAtom(showMenu);
const [auth, authToggle] = useAtom(toggleAuth);
  return (
    <section >
        <nav className="py-10">
          <div className="container px-4 mx-auto">
            <div className="flex items-center justify-between relative">
              <div className="p-4 " >
                <Image src={'vercel.svg'} alt={'Vercel logo'} width={116} height={100}/>
              </div>
              <button className="lg:hidden" onClick={menuToggle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.77614 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z" fill="#000"></path>
                </svg>
              </button>
              <div className="hidden lg:block ml-auto mr-14">
                <ul className="inline-flex">
                  <li className="mr-8">Home</li>
                  <li className="mr-8">Products</li>
                  <li className="mr-8">Resources</li>
                  <li>Pricing</li>
                </ul>
                
        
              </div>
              <div className='hidden lg:block '>

              <AuthButton mobile={false}/>


      </div>
        </div>
          </div>
        </nav>
        
        <Mobilenav/>
      </section>
  )
}

export default Navbar