"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Search,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    title: "THE DAMAC ISLANDS",
    location: "Damac Island - Dubai - United Arab Emirates",
    price: "AED 2,250,000",
    status: "Under Construction",
    type: "Townhouse",
    images: [
      "/images/projects/image---2024-11-15T235229.webp",
      "/images/projects/image---2024-11-15T235235.webp",
      "/images/projects/image---2024-11-15T235240.webp",
    ],
  },
  {
    title: "EMAAR ST. REGIS RESIDENCES",
    location:
      "St. Regis Residences, Financial Center Road, Downtown Dubai - United Arab Emirates",
    price: "AED 2,150,000",
    status: "Under Construction",
    type: "Apartment",
    images: [
      "/images/projects/the_st_regis_residences_financial_center_road_dubai_for_sale-(7).webp",
      "/images/projects/the_st_regis_residences_financial_center_road_dubai_for_sale-(9).webp",
      "/images/projects/the_st_regis_residences_financial_center_road_dubai_for_sale-(10).webp",
    ],
  },
  {
    title: "MERCEDES-BENZ PLACES",
    location: "Mercedes Benz Places By Binghatti - Dubai - United Arab Emirates",
    price: "AED 10,500,000",
    status: "Under Construction",
    type: "Apartment",
    images: [
      "/images/projects/Mercedes-Benz-Places-2.webp",
      "/images/projects/Mercedes-Benz-Places-3.webp",
      "/images/projects/Mercedes-Benz-Places-10.webp",
    ],
  },
  {
    title: "EXPO Valley",
    location: "EXPO City - Dubai - United Arab Emirates",
    price: "AED 18,500,000",
    status: "New Launch",
    type: "Villa",
    images: [
      "/images/projects/Natural_Reserve_01.webp",
      "/images/projects/Natural_reserve_02.webp",
      "/images/projects/Natural_reserve_03.webp",
    ],
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [active, setActive] = useState(0);

  const prevImage = () => {
    setActive((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActive((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <article className="group overflow-hidden border border-[#d8e3ef] bg-white shadow-[0_14px_40px_rgba(15,23,42,0.04)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_65px_rgba(15,23,42,0.12)]">
      <div className="relative h-[270px] overflow-hidden bg-[#e9eef5] sm:h-[300px] lg:h-[315px] xl:h-[335px]">
        {project.images.map((img, imgIndex) => (
          <motion.img
            key={img}
            src={img}
            alt={project.title}
            initial={false}
            animate={{
              opacity: active === imgIndex ? 1 : 0,
              scale: active === imgIndex ? 1 : 1.06,
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-70 transition duration-700 group-hover:opacity-100" />

        <div className="absolute right-3 top-3 flex flex-wrap justify-end gap-2">
          <span className="bg-white/95 px-2.5 py-[5px] text-[10px] font-medium text-[#0875cf] shadow-sm backdrop-blur-md">
            {project.status}
          </span>
          <span className="bg-white/95 px-2.5 py-[5px] text-[10px] font-medium text-[#0875cf] shadow-sm backdrop-blur-md">
            {project.type}
          </span>
        </div>

        <button
          onClick={prevImage}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/20 text-white opacity-0 backdrop-blur-md transition duration-500 hover:-translate-x-1 hover:bg-white hover:text-black group-hover:opacity-100"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
        </button>

        <button
          onClick={nextImage}
          aria-label="Next image"
          className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/20 text-white opacity-0 backdrop-blur-md transition duration-500 hover:translate-x-1 hover:bg-white hover:text-black group-hover:opacity-100"
        >
          <ArrowRight size={16} strokeWidth={1.5} />
        </button>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
          {project.images.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setActive(dotIndex)}
              aria-label={`Show image ${dotIndex + 1}`}
              className={`h-[4px] rounded-full transition-all duration-500 ${
                active === dotIndex
                  ? "w-7 bg-white"
                  : "w-2 bg-white/55 hover:bg-white"
              }`}
            />
          ))}
        </div>

        <div className="absolute inset-x-4 bottom-8 translate-y-5 rounded-lg border border-white/20 bg-white/14 px-4 py-3 text-white opacity-0 shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[9px] uppercase tracking-[0.18em] text-white/70">
                Starting From
              </p>
              <h4 className="mt-1 text-[14px] font-semibold text-white">
                {project.price}
              </h4>
            </div>

            <button className="shrink-0 rounded-full border border-white/35 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] transition hover:bg-white hover:text-black">
              Details
            </button>
          </div>
        </div>
      </div>

      <div className="px-5 py-5">
        <h3 className="text-[14px] font-semibold uppercase tracking-[0.08em] text-black">
          {project.title}
        </h3>

        <p className="mt-2 flex items-start gap-2 text-[12px] leading-5 text-[#53627c]">
          <MapPin size={14} className="mt-[2px] shrink-0 text-[#0875cf]" />
          {project.location}
        </p>
      </div>

      <div className="flex items-end justify-between border-t border-[#d8e3ef] px-5 py-4">
        <div>
          <p className="text-[11px] text-[#69758d]">Starting From</p>
          <p className="mt-1 text-[15px] font-semibold text-[#0875cf]">
            {project.price}
          </p>
        </div>

        <button className="translate-y-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#ad7566] opacity-0 transition duration-500 hover:text-[#0875cf] group-hover:translate-y-0 group-hover:opacity-100">
          View →
        </button>
      </div>
    </article>
  );
}

export default function LatestProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleProjects = useMemo(() => {
    return [0, 1, 2].map(
      (offset) => projects[(currentIndex + offset) % projects.length]
    );
  }, [currentIndex]);

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section className="overflow-hidden bg-[#f7f9fc] px-5 py-20 md:px-10 lg:px-14">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-[1780px]"
      >
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, letterSpacing: "0.18em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.04em" }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[30px] uppercase text-black md:text-[38px]"
          >
            Latest Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-3 text-[13px] text-black"
          >
            Discover our curated selection of premium properties showcasing the
            best in Dubai real estate!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.25 }}
            className="mx-auto mt-6 grid max-w-[470px] grid-cols-[1fr_1fr_70px] border border-[#d9e3ef] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
          >
            <button className="flex h-11 items-center gap-2 px-4 text-[12px] text-[#43506a]">
              <MapPin size={15} className="text-[#0875cf]" />
              Location
            </button>

            <button className="flex h-11 items-center justify-between border-l border-[#d9e3ef] px-4 text-[12px] text-[#43506a]">
              Property Type
              <ChevronDown size={14} />
            </button>

            <button className="flex h-11 items-center justify-center border-l border-[#d9e3ef] text-[#0875cf] transition hover:bg-[#eef6ff]">
              <Search size={16} />
            </button>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-11 flex items-center justify-between"
        >
          <button
            onClick={prevPage}
            className="group flex items-center gap-3 text-[13px] uppercase text-black"
          >
            <ArrowLeft
              size={22}
              strokeWidth={1.5}
              className="transition group-hover:-translate-x-1"
            />
            Prev
          </button>

          <button className="rounded-full bg-[#ad7566] px-6 py-3 text-[13px] font-semibold text-white shadow-[0_14px_30px_rgba(173,117,102,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#966354]">
            Explore Projects →
          </button>

          <button
            onClick={nextPage}
            className="group flex items-center gap-3 text-[13px] uppercase text-black"
          >
            Next
            <ArrowRight
              size={22}
              strokeWidth={1.5}
              className="transition group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}