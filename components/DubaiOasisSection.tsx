"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";

const slides = [
  {
    title: "VOLTA TOWERS",
    location: "Damac Volta - Dubai - United Arab Emirates",
    price: "AED 2,250,000",
    handover: "Q2 2028",
    image: "/images/d-2.webp",
  },
  {
    title: "MERCEDES-BENZ PLACES",
    location: "Downtown Dubai - United Arab Emirates",
    price: "AED 10,500,000",
    handover: "Q4 2026",
    image: "/images/d-1.webp",
  },
  {
    title: "EMAAR BEACHFRONT",
    location: "Dubai Harbour - United Arab Emirates",
    price: "AED 3,100,000",
    handover: "Q1 2027",
    image: "/images/d-3.webp",
  },
  {
    title: "THE DAMAC ISLANDS",
    location: "Damac Island - Dubai - United Arab Emirates",
    price: "AED 2,250,000",
    handover: "Q3 2029",
    image: "/images/d-4.webp",
  },
];

const benefits = [
  "100% Property Ownership",
  "Attractive Loan Options",
  "10-Year Golden Visa",
  "Tax Free Income",
  "8-10% Return On Investment",
  "Safest City In The World",
];

export default function DubaiOasisSection() {
  const [active, setActive] = useState(0);
  const current = slides[active];

  const nextSlide = () => setActive((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="overflow-hidden bg-gradient-to-br from-white via-[#f8fbff] to-[#edf6ff] px-5 py-16 sm:px-8 lg:px-14 xl:px-20">
      <div className="mx-auto grid max-w-[1760px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.88fr_1fr] xl:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-5 inline-flex rounded-full border border-[#d9e3ef] bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0875cf] shadow-sm">
            Invest in Dubai
          </span>

          <h2 className="font-serif text-[27px] uppercase leading-[1.26] tracking-[0.035em] text-black sm:text-[33px] lg:text-[39px] xl:text-[44px]">
            Dubai: A Global Oasis of Ambition, Innovation, and Luxury Living
          </h2>

          <p className="mt-6 max-w-[780px] text-[14px] leading-[1.85] text-[#263b5f] sm:text-[15px] lg:text-[16px]">
            Dubai is a thriving city embodying the pinnacle of ambition and
            innovation. At the heart of the United Arab Emirates, it has risen
            from desert sands to become a global center of commerce and luxury.
            Here, you’ll discover a dynamic blend of tradition and modernity,
            unparalleled investment opportunities, and a lifestyle that redefines
            luxury.
          </p>

          <div className="mt-8 flex items-center gap-5">
            <h3 className="font-serif text-[16px] uppercase tracking-[0.09em] text-black">
              Benefits
            </h3>
            <span className="h-px flex-1 bg-[#d8e3ef]" />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 rounded-2xl border border-white bg-white/70 p-4 shadow-[0_22px_70px_rgba(15,23,42,0.06)] backdrop-blur-md sm:grid-cols-2">
            {benefits.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: 0.15 + index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group border border-[#e5edf6] bg-white px-4 py-3 font-serif text-[12.5px] uppercase text-black transition duration-500 hover:-translate-y-1 hover:border-[#ad7566] hover:text-[#0875cf] hover:shadow-[0_16px_40px_rgba(15,23,42,0.09)] sm:text-[13.5px]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 55, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[24px] border border-white bg-white p-2 shadow-[0_35px_100px_rgba(15,23,42,0.15)]">
            <div className="relative h-[380px] overflow-hidden rounded-[18px] bg-[#dce5ef] sm:h-[450px] lg:h-[520px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  initial={{ opacity: 0, scale: 1.08, x: 45 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 1.02, x: -35 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/25 to-transparent" />

              <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/15 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-white backdrop-blur-md">
                Featured
              </div>

              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-md transition hover:-translate-x-1 hover:bg-white hover:text-black"
              >
                <ArrowLeft size={18} strokeWidth={1.5} />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-md transition hover:translate-x-1 hover:bg-white hover:text-black"
              >
                <ArrowRight size={18} strokeWidth={1.5} />
              </button>

              <div className="absolute bottom-0 left-0 right-0">
                <div className="px-5 pb-4 sm:px-7">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.title}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
                    >
                      <div>
                        <h3 className="font-serif text-[21px] uppercase tracking-[0.05em] text-white sm:text-[26px]">
                          {current.title}
                        </h3>

                        <p className="mt-1.5 flex items-start gap-2 text-[12.5px] text-white/85 sm:text-[13.5px]">
                          <MapPin size={14} className="mt-[2px] shrink-0" />
                          {current.location}
                        </p>
                      </div>

                      <div className="w-fit rounded-xl border border-white/18 bg-white/12 px-4 py-2.5 text-white backdrop-blur-md">
                        <p className="text-[9px] uppercase tracking-[0.16em] text-white/65">
                          From
                        </p>
                        <p className="mt-0.5 text-[15px] font-semibold">
                          {current.price}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* <div className="bg-black/78 px-5 py-3 text-center text-white backdrop-blur-xl">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={current.handover}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.4 }}
                      className="text-[13px] font-medium sm:text-[14px]"
                    >
                      Handover : {current.handover}
                    </motion.p>
                  </AnimatePresence>
                </div> */}
              </div>
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-5">
            <button
              onClick={prevSlide}
              aria-label="Previous project"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#d8e3ef] bg-white text-black shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <ArrowLeft size={21} strokeWidth={1.4} />
            </button>

            <div className="flex items-center gap-2.5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    active === index
                      ? "w-8 bg-[#0875cf]"
                      : "w-2.5 bg-[#b9c8d8] hover:bg-[#0875cf]/70"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next project"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#d8e3ef] bg-white text-black shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <ArrowRight size={21} strokeWidth={1.4} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}