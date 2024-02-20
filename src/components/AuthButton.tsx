import React from 'react'
import { showMenu, toggleAuth} from '@/util/jotai_util';
import { useAtom } from 'jotai';
const AuthButton = () => {
    const [menu, menuToggle] = useAtom(showMenu);

    const [auth, authToggle] = useAtom(toggleAuth);
    function logIn() {
        authToggle();
        menuToggle();
      }
  return (
    <div className="mt-auto">
    <div>
      
    {auth ? (
<button className="block py-3 text-center font-bold" onClick={logIn} > Log Out</button>
) : (
<button className="block py-3 text-center font-bold" onClick={logIn} > Log In</button>
)}
      </div>
  </div>
  )
}

export default AuthButton