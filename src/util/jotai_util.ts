import { atom } from "jotai";

export const menu = atom(false);

export const showMenu = atom(
    (get) => get(menu),
    (_get, set) => {
      set(menu, (menu) => !menu);
    }
  );
  

  export const isAuthenticated = atom(false);

  export const toggleAuth = atom(
    (get) => get(isAuthenticated),
    (_get, set) => {
      set(isAuthenticated, (isAuthenticated) => !isAuthenticated);
    }
  );

export const userStatus = atom((get) => {
  const isAuth = get(isAuthenticated);
  return isAuth ? { name: 'Charles' } : null;
});