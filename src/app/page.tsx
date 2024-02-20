
'use client'
import Navbar from "@/components/Navbar";
import { isAuthenticated, toggleAuth, userStatus } from "@/util/jotai_util";
import { useAtom } from "jotai";
import Image from "next/image";

export default function Home() {
  const [auth] = useAtom(isAuthenticated);
  const [userInfo] = useAtom(userStatus);
  return (
    <section className="h-screen p-12">
      {auth ? (
        <div>
          <h2>Welcome, {userInfo?.name}</h2>
        </div>
      ) : (
        <p>Please log in.</p>
      )}
    </section>
  );
}
