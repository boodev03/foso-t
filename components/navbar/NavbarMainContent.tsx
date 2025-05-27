"use client";

import Image from "next/image";
import { CartIcon } from "../icons/CartIcon";
import { UserIcon } from "../icons/UserIcon";
import SelectLanguage from "../SelectLanguage";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import HamburgerMenu from "./HamburgerMenu";
import NavbarSearch from "./NavbarSearch";

export default function NavbarMainContent() {
  return (
    <div className="container mx-auto py-3 px-4">
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-8">
        {/* Mobile Hamburger Menu - only visible on small screens */}
        <div className="lg:hidden order-1">
          <HamburgerMenu />
        </div>

        {/* Logo */}
        <div className="w-[120px] h-[60px] sm:w-[150px] sm:h-[75px] lg:w-[200px] lg:h-[90px] relative flex-shrink-0 order-2 lg:order-1 mr-auto">
          <Image
            src="/sunfil_logo.png"
            alt="Sunfil Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Desktop Search */}
        <div className="flex-1 min-w-0 hidden lg:block order-2">
          <NavbarSearch />
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-1 sm:gap-2 lg:gap-4 flex-shrink-0 order-3 lg:order-3">
          <div className="hidden sm:block lg:block">
            <SelectLanguage />
          </div>

          {/* Cart */}
          <Button
            variant="ghost"
            className="flex items-center hover:bg-brand-50 py-1 rounded-full gap-1 sm:gap-2 relative transition-opacity px-1 sm:px-2"
          >
            <div className="relative">
              <p className="shrink-0">
                <CartIcon />
              </p>
              <Badge className="absolute -top-2 -right-2 bg-[#FF5A3D] text-white rounded-full size-4 sm:size-5 flex items-center justify-center text-xs font-medium shadow-md">
                12
              </Badge>
            </div>
            <span className="text-primary font-medium text-sm sm:text-base hidden lg:inline">
              Giỏ hàng
            </span>
          </Button>

          {/* User account */}
          <Button
            variant="ghost"
            className="flex hover:bg-brand-50 py-1 rounded-full items-center gap-1 sm:gap-2 transition-opacity px-1 sm:px-2"
          >
            <p className="shrink-0">
              <UserIcon />
            </p>
            <span className="text-primary font-medium text-sm sm:text-base hidden lg:inline">
              Tài khoản
            </span>
          </Button>
        </div>

        {/* Mobile Search - appears on next row */}
        <div className="w-full order-4 lg:hidden">
          <NavbarSearch />
        </div>
      </div>
    </div>
  );
}
