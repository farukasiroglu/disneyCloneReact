import React from "react";
import Logo from "../assets/Images/logo.png";
import profile from "../assets/Images/profile.png";
import { useState } from "react";

import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import Nav from "./Nav";

function Header() {
    const [toggle, setToggle] = useState(false);

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex items-center justify-between gap-8 px-8 p-5">
      <div className="flex gap-8 items-center">
        <img
          src={Logo}
          alt="logo"
          className="w-[80px] md:w-[115px] object-cover"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <Nav name={item.name} Icon={item.icon} />
          ))}
        </div>
        {/* Mobil Menu */}
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) => index < 3 && <Nav name={""} Icon={item.icon} />
          )}
        </div>
        <div className="md:hidden" onClick={()=>setToggle (!toggle)}>
          <Nav name={""} Icon={HiDotsVertical} />
          {toggle ? <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 px-5 py-4 p-3">
            {menu.map(
              (item, index) =>
                index > 2 && <Nav name={item.name} Icon={item.icon}/>
            )}
          </div>:null}
        </div>
      </div>
      <img src={profile} alt="profile" className="w-[40px] rounded-full" />
    </div>
  );
}

export default Header;
