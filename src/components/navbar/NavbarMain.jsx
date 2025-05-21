"use client";

import React from "react";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarLinks } from "./NavbarLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <nav className="max-w-[1300px] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange">
        <div className="flex-none">
          <NavbarLogo />
        </div>
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
      </div>
      {/* Hamburger Menu */}
      <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-orange border-[0.5px]">
        <button
          className="text-2xl p-3 border border-orange-50 rounded-full text-white"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu size={24} className="cursor-pointer" />
        </button>
      </div>
    </nav>
  );
};
