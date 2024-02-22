'use client'
import React from 'react'
import { isAuthenticated, userStatus } from "@/util/jotai_util";
import { useAtom } from "jotai";
const Display = () => {
    const [auth] = useAtom(isAuthenticated);
    const [userInfo] = useAtom(userStatus);
  return (
    <h2>
        {auth ? 
          `Welcome, ${userInfo?.name}`
       : 'Please Log In'       
      }
      </h2>
  )
}

export default Display