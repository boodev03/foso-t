"use client";
import Image from "next/image";
import Link from "next/link";
import { AppleIcon } from "./icons/AppleIcon";
import { PlayStoreIcon } from "./icons/PlayStoreIcon";
import SelectLanguage from "./SelectLanguage";
import { Button } from "./ui/button";

const companyInfo = {
  name: "Viet Hung Auto Production Trading Joint Stock Company",
  taxCode: "0305094228",
  address: "13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam.",
  phone: "0283 760 7607",
  openingHour: "09:00 - 22:00 from Mon - Fri",
};

const sitemap = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Article",
    href: "/article",
  },
  {
    title: "Cart",
    href: "/cart",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const legal = [
  {
    title: "Privacy policy",
    href: "/privacy-policy",
  },
  {
    title: "Cookie policy",
    href: "/cookie-policy",
  },
  {
    title: "Delivery policy",
    href: "/delivery-policy",
  },
  {
    title: "FAQs",
    href: "/faqs",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-white py-10 lg:py-[96px]">
      {/* Main Footer Content */}
      <div className="px-4 container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-8">
          {/* Company Information */}
          <div className="flex flex-col gap-6 lg:gap-8 flex-[1.5]">
            <div>
              <div className="text-[#637381] text-sm sm:text-base leading-6">
                <span className="text-[#013065] font-semibold text-lg sm:text-xl lg:text-2xl leading-1">
                  Viet Hung Auto Production Trading Joint Stock Company
                </span>
                <br />
                <br />
                <p>
                  <span className="text-sm sm:text-base font-normal text-[#637381]">
                    Tax code:
                  </span>{" "}
                  <span className="text-sm sm:text-base font-semibold text-[#637381]">
                    {companyInfo.taxCode}
                  </span>
                </p>
                <p>
                  <span className="text-sm sm:text-base font-normal text-[#637381]">
                    Address:
                  </span>{" "}
                  <span className="text-sm sm:text-base font-semibold text-[#637381]">
                    {companyInfo.address}
                  </span>
                </p>
                <p>
                  <span className="text-sm sm:text-base font-normal text-[#637381]">
                    Phone number:
                  </span>{" "}
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="text-sm sm:text-base underline font-semibold text-[#637381]"
                  >
                    {companyInfo.phone}
                  </a>
                </p>
                <p>
                  <span className="text-sm sm:text-base font-normal text-[#637381]">
                    Opening hour:
                  </span>{" "}
                  <span className="text-sm sm:text-base font-semibold text-[#637381]">
                    {companyInfo.openingHour}
                  </span>
                </p>
              </div>
            </div>
            {/* Bo Cong Thuong Certificate */}
            <div className="w-[150px] h-[57px] sm:w-[180px] sm:h-[68px] lg:w-[200px] lg:h-[76px] relative">
              <Image src="/bo_cong_thuong.png" alt="Bo Cong Thuong" fill />
            </div>
          </div>

          {/* Navigation Links Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-between flex-1">
            {/* Sitemap */}
            <div className="flex flex-col gap-6 lg:gap-8 flex-1">
              <h3 className="text-[#013065] font-semibold text-lg sm:text-xl lg:text-2xl font-epilogue">
                Site map
              </h3>
              <div className="flex flex-col gap-3">
                {sitemap.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-[#637381] text-sm sm:text-base hover:text-[#1C252E] hover:font-semibold transition-colors flex items-baseline group"
                  >
                    <span className="w-0 group-hover:w-4 border-b-[1.5px] border-[#1C252E] opacity-0 group-hover:opacity-100 duration-300 transition-all group-hover:mr-2"></span>
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-6 lg:gap-8 flex-1">
              <h3 className="text-[#013065] font-semibold text-lg sm:text-xl lg:text-2xl font-epilogue">
                Legal
              </h3>
              <div className="flex flex-col gap-3">
                {legal.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-[#637381] text-sm sm:text-base hover:text-[#1C252E] hover:font-semibold transition-colors flex items-baseline group"
                  >
                    <span className="w-0 group-hover:w-4 border-b-[1.5px] border-[#1C252E] opacity-0 group-hover:opacity-100 duration-300 transition-all group-hover:mr-2"></span>
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Download App */}
          <div className="flex flex-col gap-6 lg:gap-8 w-full sm:w-[280px] lg:w-[230px]">
            <h3 className="text-[#013065] font-semibold text-lg sm:text-xl lg:text-2xl font-epilogue">
              Download App
            </h3>

            {/* App Store Buttons */}
            <div className="flex flex-col gap-3">
              {/* Google Play Store */}
              <Button className="bg-[#1C252E] [&_svg]:!size-auto rounded-xl px-4 sm:px-5 py-[14px] sm:py-[18px] flex items-center justify-between gap-[10px] sm:gap-[14px] w-full h-12 sm:h-14 lg:h-16">
                <p className="shrink-0">
                  <PlayStoreIcon />
                </p>
                <div className="flex flex-col items-start">
                  <span className="text-white text-xs sm:text-sm leading-4 sm:leading-5">
                    Get It On
                  </span>
                  <span className="text-white font-semibold text-sm sm:text-base leading-5 sm:leading-6">
                    Google Play Store
                  </span>
                </div>
              </Button>

              {/* Apple App Store */}
              <Button className="bg-[#0373F3] [&_svg]:!size-auto rounded-xl px-4 sm:px-5 py-2 flex items-center justify-between gap-[8px] sm:gap-[10px] w-full h-12 sm:h-14 lg:h-16">
                <p className="shrink-0">
                  <AppleIcon />
                </p>
                <div className="flex flex-col items-start">
                  <span className="text-white text-xs sm:text-sm leading-4 sm:leading-5">
                    Download from
                  </span>
                  <span className="text-white font-semibold text-sm sm:text-base leading-5 sm:leading-6">
                    Apple App Store
                  </span>
                </div>
              </Button>
            </div>

            {/* Language Selector */}
            <div className="flex justify-start lg:justify-end">
              <SelectLanguage showIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
