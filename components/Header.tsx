"use client";

import Link from "next/link";
import { ChevronDown, Globe2, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type MenuConfig = {
  title: string;
  desc?: string;
  image?: string;
  items: string[];
  simple?: boolean;
};

const navItems = ["Buy", "Rent", "Off-Plan", "Developers", "Areas", "Services", "Blog", "More"];

const currencies = ["RUB", "CNY", "JPY", "SAR", "GBP", "EUR", "INR", "USD", "AED"];

const menuData: Record<string, MenuConfig> = {
  Buy: {
    title: "BUY PROPERTIES",
    simple: true,
    items: ["APARTMENTS", "PENTHOUSES", "VILLAS", "COMMERCIAL", "TOWNHOUSES", "SEE ALL PROPERTIES"],
  },
  Rent: {
    title: "RENT PROPERTIES",
    simple: true,
    items: ["APARTMENTS", "PENTHOUSES", "VILLAS", "COMMERCIAL", "TOWNHOUSES", "SEE ALL PROPERTIES"],
  },
  "Off-Plan": {
    title: "PROJECTS",
    desc: "Explore our extensive selection of properties available for buying, renting, or selling.",
    image: "/images/menu-projects.webp",
    items: ["APARTMENTS", "PENTHOUSES", "VILLAS", "TOWNHOUSES", "COMMERCIAL", "SEE ALL PROJECTS"],
  },
  Developers: {
    title: "DEVELOPERS",
    desc: "Explore our comprehensive real estate services designed specifically to cater to your requirements.",
    image: "/images/menu-developers.webp",
    items: ["EMAAR", "ALDAR", "DAMAC", "IMTIAZ", "SOBHA", "OMNIYAT", "BINGHATTI", "NAKHEEL", "ELLINGTON PROPERTIES", "ALL DEVELOPERS", "MERAAS"],
  },
  Areas: {
    title: "AREAS",
    desc: "An Award-Winning Real Estate Brokerage Team in UAE",
    image: "/images/menu-areas.webp",
    items: ["DOWNTOWN", "DUBAI MARINA", "PALM JUMEIRAH", "JUMEIRAH LAKE TOWERS", "DUBAI CREEK HARBOUR", "BUSINESS BAY", "DUBAI HILLS ESTATE", "EMAAR BEACHFRONT", "BLUEWATERS ISLAND", "ALL AREAS IN DUBAI"],
  },
  Services: {
    title: "SERVICES",
    desc: "Explore our comprehensive real estate services designed specifically to cater to your requirements.",
    image: "/images/menu-services.webp",
    items: ["RESIDENTIAL SALES & LEASING", "COMMERCIAL SALES & LEASING", "PROPERTY/PORTFOLIO MANAGEMENT", "HOLIDAY HOMES", "MORTGAGE SERVICES", "INVESTMENT CONSULTANCY"],
  },
  More: {
    title: "MORE",
    desc: "Explore our comprehensive real estate services designed specifically to cater to your requirements.",
    image: "/images/menu-more.webp",
    items: ["ABOUT US", "OUR TEAM", "AWARDS", "CAREERS", "CONTACT US"],
  },
};

const moreTop = ["GOLDEN VISA", "DUBAI GUIDES", "VIRTUAL PROPERTY TOUR", "FAQ’S"];
const moreMedia = ["NEWS", "CELEBRATIONS", "BLOGS", "AWARDS"];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [sideOpen, setSideOpen] = useState(false);
  const [mobileActive, setMobileActive] = useState<string | null>(null);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [currency, setCurrency] = useState("AED");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const openMenu = (item: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrencyOpen(false);
    if (menuData[item]) setActiveMenu(item);
  };

  const closeMenuSlow = () => {
    timerRef.current = setTimeout(() => setActiveMenu(null), 180);
  };

  const closeAll = () => {
    setActiveMenu(null);
    setSideOpen(false);
    setCurrencyOpen(false);
    setMobileActive(null);
  };

  useEffect(() => {
    document.body.style.overflow = sideOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sideOpen]);

  return (
    <>
      {(sideOpen || currencyOpen) && (
        <button
          onClick={closeAll}
          className="fixed inset-0 z-30 bg-transparent"
          aria-label="Close menu"
        />
      )}

      <header
        onMouseLeave={closeMenuSlow}
        onMouseEnter={() => timerRef.current && clearTimeout(timerRef.current)}
        className="fixed left-0 top-0 z-50 w-full border-b border-[#d9e3ef] bg-white"
      >
        <div className="flex h-[80px] items-center px-[24px] max-xl:h-[76px] max-xl:px-[18px]">
          <Link href="/" className="mr-[42px] block shrink-0 max-xl:mr-auto">
            <img
              src="/images/logo-1.png"
              alt="Tanzaga"
              className="h-[42px] w-[184px] object-contain object-left sm:h-[46px] sm:w-[200px] lg:h-[58px] lg:w-[255px] xl:h-[62px] xl:w-[275px]" />
          </Link>

          <nav className="hidden h-full flex-1 items-center gap-[27px] xl:flex">
            {navItems.map((item) => {
              const isActive = activeMenu === item;

              return (
                <Link
                  key={item}
                  href="#"
                  onMouseEnter={() => openMenu(item)}
                  className={`relative flex h-full items-center gap-[7px] text-[15.5px] font-normal leading-none transition-all duration-300 ${isActive ? "text-[#0875cf]" : "text-[#34415d] hover:text-[#0875cf]"
                    }`}
                >
                  {item}

                  {item !== "Blog" && (
                    <ChevronDown
                      size={15}
                      strokeWidth={1.6}
                      className={`transition-all duration-500 ${isActive ? "rotate-180" : ""
                        }`}
                    />
                  )}

                  <span
                    className={`absolute bottom-0 left-0 h-[3px] bg-black transition-all duration-500 ${isActive ? "w-full opacity-100" : "w-0 opacity-0"
                      }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center">
            <div className="relative z-50">
              <button
                onClick={() => {
                  setCurrencyOpen(!currencyOpen);
                  setActiveMenu(null);
                }}
                className="flex h-[50px] items-center gap-2 border border-[#d9e3ef] bg-white px-[18px] text-[18px] text-[#0875cf] transition hover:bg-[#f7fbff] max-md:h-[46px] max-md:px-[13px] max-md:text-[16px]"
              >
                {currency}
                <ChevronDown
                  size={16}
                  className={`transition duration-300 ${currencyOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              <div
                className={`absolute left-0 top-[54px] z-[80] w-[160px] overflow-hidden rounded-[6px] border border-[#d9e3ef] bg-white shadow-[0_18px_35px_rgba(15,23,42,0.18)] transition-all duration-300 max-md:top-[50px] ${currencyOpen
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
              >
                {currencies.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setCurrency(item);
                      setCurrencyOpen(false);
                    }}
                    className={`flex h-[40px] w-full items-center justify-between px-[16px] text-left text-[16px] transition hover:bg-[#e7f5ff] ${currency === item ? "bg-[#dff2ff] text-black" : "text-[#111827]"
                      }`}
                  >
                    {item}
                    {currency === item && <span>✓</span>}
                  </button>
                ))}
              </div>
            </div>

            <button className="flex h-[50px] items-center gap-2 border-y border-r border-[#d9e3ef] bg-white px-[18px] text-[18px] text-black transition hover:bg-[#f7fbff] max-md:h-[46px] max-md:px-[13px] max-md:text-[16px]">
              <Globe2 size={22} className="text-[#0875cf] max-md:size-[20px]" /> EN
            </button>

            <button
              onClick={() => {
                setSideOpen(!sideOpen);
                setActiveMenu(null);
                setCurrencyOpen(false);
              }}
              className="ml-3 flex h-[50px] w-[54px] items-center justify-center border border-[#d9e3ef] bg-white text-[#71829c] transition hover:bg-[#f7fbff] max-md:h-[46px] max-md:w-[50px]"
              aria-label="Toggle menu"
            >
              {sideOpen ? (
                <X size={34} strokeWidth={1.35} />
              ) : (
                <Menu size={34} strokeWidth={1.35} />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu */}
        <div
          className={`absolute left-0 top-[80px] hidden w-full transition-all duration-500 ease-out xl:block ${activeMenu
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
            }`}
        >
          {activeMenu && menuData[activeMenu] && (
            <div className="ml-[268px] w-[960px] border border-[#e8edf4] bg-white shadow-[0_18px_42px_rgba(15,23,42,0.10)]">
              {menuData[activeMenu].simple ? (
                <div className="px-[18px] py-[22px]">
                  <h3 className="mb-[20px] font-serif text-[19px] uppercase leading-none text-[#0875cf]">
                    {menuData[activeMenu].title}
                  </h3>

                  <div className="grid grid-cols-2 border border-[#edf1f6]">
                    {menuData[activeMenu].items.map((label) => (
                      <Link
                        href="#"
                        key={label}
                        className="group flex min-h-[58px] items-center border-b border-r border-[#edf1f6] px-[22px] font-serif text-[19px] uppercase leading-none text-black transition duration-300 hover:bg-[#f6f8fb] hover:text-[#0875cf]"
                      >
                        <span className="mr-0 w-0 overflow-hidden text-[21px] transition-all duration-300 group-hover:mr-2 group-hover:w-[20px]">
                          →
                        </span>
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-[360px_1fr]">
                  <div className="border-r border-[#edf1f6] p-[20px]">
                    <h3 className="font-serif text-[20px] uppercase leading-none text-black">
                      {menuData[activeMenu].title}
                    </h3>

                    <p className="mt-[12px] max-w-[310px] text-[15px] leading-[1.45] text-[#43506a]">
                      {menuData[activeMenu].desc}
                    </p>

                    <div className="mt-[18px] h-[170px] overflow-hidden bg-[#eef2f7]">
                      <img
                        src={menuData[activeMenu].image}
                        alt={activeMenu}
                        className="h-full w-full object-cover transition duration-700 hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 border-l border-[#edf1f6]">
                    {menuData[activeMenu].items.map((label) => (
                      <Link
                        href="#"
                        key={label}
                        className="group flex min-h-[67px] items-center border-b border-r border-[#edf1f6] px-[24px] font-serif text-[19px] uppercase leading-none text-black transition duration-300 hover:bg-[#f6f8fb] hover:text-[#0875cf]"
                      >
                        <span className="mr-0 w-0 overflow-hidden text-[21px] transition-all duration-300 group-hover:mr-2 group-hover:w-[20px]">
                          →
                        </span>
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Desktop Right Menu */}
      <aside
        className={`fixed right-0 top-[80px] z-40 hidden h-[calc(100vh-80px)] w-[374px] bg-white transition-all duration-500 ease-out xl:block ${sideOpen
          ? "pointer-events-auto translate-x-0 opacity-100"
          : "pointer-events-none translate-x-full opacity-0"
          }`}
      >
        <div className="h-full overflow-y-auto pt-[18px]">
          {moreTop.map((item) => (
            <Link
              href="#"
              key={item}
              className="block px-[28px] py-[18px] font-serif text-[23px] uppercase leading-none text-black transition hover:bg-[#f5f7fb] hover:text-[#0875cf]"
            >
              {item}
            </Link>
          ))}

          <div className="mt-[16px] bg-[#f4f6fa] px-[18px] py-[13px] text-[18px] text-[#53627c]">
            Media
          </div>

          {moreMedia.map((item) => (
            <Link
              href="#"
              key={item}
              className="block px-[28px] py-[18px] font-serif text-[23px] uppercase leading-none text-black transition hover:bg-[#f5f7fb] hover:text-[#0875cf]"
            >
              {item}
            </Link>
          ))}
        </div>
      </aside>

      {/* Tablet / Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#eef2f8] pt-[76px] transition-all duration-500 ease-out xl:hidden ${sideOpen
          ? "pointer-events-auto translate-x-0 opacity-100"
          : "pointer-events-none translate-x-full opacity-0"
          }`}
      >
        <div className="h-full overflow-y-auto px-[14px] pb-[28px] pt-[14px] sm:px-[42px]">
          <div className="space-y-[12px]">
            {navItems.map((item) => {
              const hasMenu = Boolean(menuData[item]);
              const isOpen = mobileActive === item;

              return (
                <div key={item}>
                  <button
                    onClick={() => {
                      if (item === "Blog") return;
                      if (hasMenu) setMobileActive(isOpen ? null : item);
                    }}
                    className="flex w-full items-center justify-between border border-[#d9e3ef] bg-white px-[22px] py-[18px] font-serif text-[22px] uppercase leading-none text-[#0875cf] sm:text-[24px]"
                  >
                    {item}

                    {item !== "Blog" && (
                      <ChevronDown
                        size={21}
                        className={`transition duration-500 ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </button>

                  {hasMenu && (
                    <div
                      className={`grid overflow-hidden transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden">
                        {item === "More" ? (
                          <div className="mt-[10px] bg-[#f4f6fa] p-[7px]">
                            <p className="px-[18px] py-[12px] text-[18px] text-[#53627c]">
                              More
                            </p>

                            <div className="bg-white">
                              {moreTop.map((label) => (
                                <Link
                                  href="#"
                                  key={label}
                                  className="block border-b border-[#edf1f6] px-[14px] py-[12px] font-serif text-[20px] uppercase text-black"
                                >
                                  {label}
                                </Link>
                              ))}
                            </div>

                            <p className="mt-[12px] px-[18px] py-[12px] text-[18px] text-[#53627c]">
                              Media
                            </p>

                            <div className="bg-white">
                              {moreMedia.map((label) => (
                                <Link
                                  href="#"
                                  key={label}
                                  className="block border-b border-[#edf1f6] px-[14px] py-[12px] font-serif text-[20px] uppercase text-black"
                                >
                                  {label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="mt-[10px] border border-[#edf1f6] bg-white">
                            {menuData[item].items.map((label) => (
                              <Link
                                href="#"
                                key={label}
                                className="block border-b border-[#edf1f6] px-[18px] py-[13px] font-serif text-[20px] uppercase text-black last:border-b-0"
                              >
                                {label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <Link
            href="#"
            className="mt-[22px] flex h-[52px] items-center justify-center rounded-[5px] bg-[#ad7566] text-[15px] font-semibold text-white"
          >
            Spend a Day With Tanzaga
          </Link>
        </div>
      </div>
    </>
  );
}