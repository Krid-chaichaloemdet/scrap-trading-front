import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import RegisterButton from "../featureButton/RegisterButton";
import LoginButton from "../featureButton/LoginButton";
import LoginFeat from "../features/LoginFeat";
import logo from "../assets/logo3.jpg";
import { useAuth } from "../hooks/use-auth";
import { getAccessToken } from "../utils/local-storage";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [home, setHome] =useState(null)
  const [register, setRegister] =useState(null)

  const { authUser, logout } = useAuth();

  return (
    <header className="flex justify-between items-center   shadow-lg    top-0 h-28 gap  z-100 bg-yellow-500 text-2xl">
      <div className="px-10 py-5 justify-self-start rounded-md cursor-pointer ">
        <Link to="/">
          <img className="w-40 h-20  rounded-lg" src={logo} alt="" />
        </Link>
      </div>
      <div className="flex gap-16">
 <div 

        className=" justify-self-start rounded-md cursor-pointer hover:bg-gray-200 p-5 ">
          <Link to="/">HOME</Link>
        </div>
 



        
        {!getAccessToken() ? (
          <div className=" justify-self-start  rounded-md cursor-pointer hover:bg-gray-200 p-5">
            <Link to="/register">REGISTER</Link>
          </div>
        ) : (
          ""
        )}
        {!getAccessToken() ? (
          <div className="justify-self-start rounded-md cursor-pointer hover:bg-gray-200 p-5">
            <Link to="/login">LOGIN</Link>
          </div>
        ) : (
          ""
        )}

        {authUser?.role && (
          <div className=" justify-self-start  rounded-full cursor-pointer hover:bg-gray-200  p-5 bg-yellow-700">
            <Link to="/adminMode">ADMIN MODE</Link>
          </div>
        )}
       {getAccessToken() ? <div className="justify-self-start rounded-full cursor-pointer bg-yellow-700 hover:bg-gray-200   p-5">
          <Link to="/userProfilepage"> USER {authUser?.firstName}</Link>
        </div> : ""}
        {getAccessToken() ? (
          <div className=" justify-self-start rounded-md cursor-pointer hover:bg-gray-200   p-5">
            <div onClick={logout}>LOGOUT</div>
          </div>
        ) : (
          ""
        )}
        {/* <div
onClick={()=>console.log(authUser)}
>11</div> */}
      </div>
    </header>
  );
}
