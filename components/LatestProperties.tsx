"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  BedDouble,
  Bath,
  Maximize2,
  MapPin,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

type Property = {
  title: string;
  location: string;
  price: string;
  images: string[];
  type: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 70,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: "easeOut",
    },
  },
};

const properties: Property[] = [
  {
    title: "Luxurious 6-Bedroom Villa in Morocco Phase 2",
    location: "Morocco DAMAC Lagoons - Dubai - United Arab Emirates",
    price: "AED 32,687,000",
    images: [
      "/images/morocco-at-damac-lagoons-13.webp",
      "/images/morocco-at-damac-lagoons-14.webp",
      "/images/morocco-at-damac-lagoons-11.webp",
    ],
    type: "Villa",
    bedrooms: "6 Bedrooms",
    bathrooms: "7 Bathrooms",
    area: "25475 Sq.Ft",
  },
  {
    title: "1 BR Apartment for Sale in Safa One - Tower A",
    location: "Safa One De GRISOGONO, Al Safa Park - Dubai",
    price: "AED 2,000,000",
    images: [
      "/images/2-(38).webp",
      "/images/1-(48).webp",
      "/images/3-(35).webp",
    ],
    type: "Apartment",
    bedrooms: "1 Bedroom",
    bathrooms: "2 Bathrooms",
    area: "839 Sq.Ft",
  },
  {
    title: "Large 7-Bedroom Villa in Cavalli Estates, Damac Hills",
    location: "DAMAC Cavalli Estates Villas - Dubai - United Arab Emirates",
    price: "AED 28,494,000",
    images: [
      "/images/Screenshot_2024-03-01-13-50-25-26_40deb401b9ffe8e1df2f1cc5ba480b12.webp",
      "/images/Screenshot_2024-03-01-13-51-03-13_40deb401b9ffe8e1df2f1cc5ba480b12.webp",
      "/images/cavalli-estates-7.webp",
    ],
    type: "Villa",
    bedrooms: "7 Bedrooms",
    bathrooms: "8 Bathrooms",
    area: "17531 Sq.Ft",
  },
];

export default function LatestProperties() {
  return (
    <section className="relative overflow-hidden py-14 md:py-4 ">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#b18478]/20 blur-[90px]" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#17233a]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.38em] text-[#b18478]">
            Premium Collection
          </span>

          <h2 className="font-serif text-4xl font-normal tracking-wide text-[#111] sm:text-5xl md:text-6xl">
            Latest Properties For You
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Discover handpicked luxury residences crafted for refined living,
            investment growth, and premium lifestyle experiences.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-9 flex max-w-5xl flex-col rounded-[26px] border border-white/70 bg-white/80 p-2 shadow-[0_25px_90px_rgba(15,23,42,0.09)] backdrop-blur-xl lg:flex-row lg:items-center"
        >
          <div className="grid grid-cols-2 rounded-2xl bg-[#f1e8e1] p-1">
            <button
              type="button"
              className="cursor-pointer rounded-xl bg-[#a9796d] px-6 py-4 text-sm font-semibold text-white shadow-md"
            >
              Buy
            </button>

            <button
              type="button"
              className="cursor-pointer rounded-xl px-6 py-4 text-sm font-semibold text-[#3a2a25] transition hover:bg-white"
            >
              Rent
            </button>
          </div>

          <button
            type="button"
            className="mt-2 flex flex-1 cursor-pointer items-center justify-between rounded-2xl px-5 py-4 text-sm text-slate-700 transition hover:bg-white lg:ml-3 lg:mt-0"
          >
            Property Type
            <ChevronDown size={18} />
          </button>

          <div className="mt-2 flex flex-1 items-center gap-3 rounded-2xl px-5 py-4 text-sm text-slate-500 transition hover:bg-white lg:mt-0">
            <MapPin size={20} className="text-[#a9796d]" />
            <span>Location</span>
          </div>

          <button
            type="button"
            className="mt-2 flex cursor-pointer items-center justify-center gap-3 rounded-2xl bg-[#17233a] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d1728] lg:mt-0"
          >
            Search
            <Search size={20} />
          </button>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((item, index) => (
            <PropertyCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ item, index }: { item: Property; index: number }) {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % item.images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) =>
      prev === 0 ? item.images.length - 1 : prev - 1
    );
  };

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      custom={index}
      whileHover={{
        y: -12,
        transition: { duration: 0.45, ease: "easeOut" },
      }}
      className="group overflow-hidden rounded-[30px] border border-white bg-white shadow-[0_24px_80px_rgba(15,23,42,0.09)] transition-all duration-700 hover:shadow-[0_40px_110px_rgba(15,23,42,0.17)]"
    >
      <div className="relative h-[270px] overflow-hidden sm:h-[320px]">
        <motion.img
          key={item.images[activeImage]}
          src={item.images[activeImage]}
          alt={item.title}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-[#a9796d] shadow-md">
          {item.type}
        </div>

        <div className="absolute right-5 top-5 rounded-full bg-[#17233a] px-4 py-2 text-xs font-semibold text-white shadow-md">
          Buy
        </div>

        <button
          type="button"
          onClick={prevImage}
          className="absolute left-4 top-1/2 grid h-10 w-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/25 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          onClick={nextImage}
          className="absolute right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/25 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
        >
          <ChevronRight size={22} />
        </button>

        <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 gap-2">
          {item.images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveImage(i)}
              className={`h-1.5 cursor-pointer rounded-full transition-all duration-500 ${
                activeImage === i
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/45 hover:bg-white"
              }`}
            />
          ))}
        </div>

        <span className="absolute bottom-20 right-5 hidden rounded-full bg-white/20 px-4 py-2 text-xs font-medium text-white backdrop-blur-md sm:block">
          Off-Plan
        </span>

        <div className="absolute bottom-0 left-0 grid w-full grid-cols-3 border-t border-white/20 bg-black/35 text-white backdrop-blur-md">
          <Info icon={<BedDouble size={16} />} text={item.bedrooms} />
          <Info icon={<Bath size={16} />} text={item.bathrooms} />
          <Info icon={<Maximize2 size={16} />} text={item.area} />
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="font-serif text-lg leading-snug text-[#111] sm:text-xl">
          {item.title}
        </h3>

        <div className="mt-5 flex items-start gap-2 text-sm leading-6 text-slate-500">
          <MapPin size={18} className="mt-1 shrink-0 text-[#a9796d]" />
          <p className="line-clamp-1">{item.location}</p>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <p className="text-lg font-bold text-[#a9796d] sm:text-xl">
            {item.price}
          </p>

          <button
            type="button"
            className="group/btn flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#17233a] text-white transition hover:bg-[#a9796d]"
          >
            <ArrowUpRight
              size={18}
              className="transition duration-300 group-hover/btn:rotate-45"
            />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function Info({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center justify-center gap-2 px-2 py-4 text-[11px] font-medium sm:px-3 sm:text-sm">
      {icon}
      <span className="truncate">{text}</span>
    </div>
  );
}