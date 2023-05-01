import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import Logo from "../public/assets/Logo_Purbani.png";
import NavLinks from "../constants/navlinks.js";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileName, setProfileName] = useState("");

  const handleSearch = () => {
    "logic for handling search";
  };

  return (
    <div className="flex justify-center w-full relative z-20 ">
      <div className="flex items-center justify-between w-3/4  h-24 border-b border-gray-400">
        <div>
          <Image src={Logo} width={184} height={48} alt={"logo"} />
        </div>
        <div>
          <div className="text-lg flex gap-9 font-semibold">
            <Link className="" href={"/"}>
              <a className="text-color_white hover:text-color_brand transition-all duration-500">
                Mission
              </a>
            </Link>
            <Link href={"/"}>
              <a className="text-color_white hover:text-color_brand transition-all duration-500">
                Vision
              </a>
            </Link>
            <Link href={"/"}>
              <a className="text-color_white hover:text-color_brand transition-all duration-500">
                Values
              </a>
            </Link>
            <Link href={"/"}>
              <a className="text-color_white hover:text-color_brand transition-all duration-500">
                Notices
              </a>
            </Link>
          </div>
        </div>
        <div className="">
          <button className="w-24 h-11 rounded-xl bg-color_brand text-color_white hover:bg-color_white hover:text-color_brand transition-all duration-500">
            Forms
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
