import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";
const style = {
  nav: `bg-gray-900 flex justify-between items-center h-20 p-4`,
  heading: `text-3xl`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user)
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>LetsChat</h1>
     {user ? <LogOut /> :<SignIn />}
    </div>
  );
};

export default Navbar;
