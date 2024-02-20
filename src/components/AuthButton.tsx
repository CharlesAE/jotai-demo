import React from 'react'
import { showMenu, toggleAuth} from '@/util/jotai_util';
import { useAtom } from 'jotai';
const AuthButton = ({mobile}:{mobile:boolean}) => {
    const [_, menuToggle] = useAtom(showMenu);

    const [auth, authToggle] = useAtom(toggleAuth);
    function logIn() {
        authToggle();
        if (mobile){
          menuToggle();
        }
        
      }
  return (
    <div className="mt-auto">
    <div>
      
    
<button className="block py-3 text-center font-bold" onClick={logIn} >{auth ? 'Log out' : 'Log in'}</button>

      </div>
  </div>
  )
}

export default AuthButton