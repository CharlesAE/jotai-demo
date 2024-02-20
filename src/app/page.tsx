
'use client'
import Navbar from "@/components/Navbar";
import { isAuthenticated, userStatus } from "@/util/jotai_util";
import { useAtom } from "jotai";

export default function Home() {
  const [auth] = useAtom(isAuthenticated);
  const [userInfo] = useAtom(userStatus);
  return (
    <section className="h-screen p-12">
      <h2>
        {auth ? 
          `Welcome, ${userInfo?.name}`
       : 'Please Log In'       
      }
      </h2>
    </section>
  );
}
