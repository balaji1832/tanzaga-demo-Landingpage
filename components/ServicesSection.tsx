"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Residential Sales & Leasing",
    description:
      "Premium residential buying, selling, and leasing solutions tailored for refined property goals.",
    image: "/images/services/service-1.webp",
  },
  {
    title: "Commercial Sales & Leasing",
    description:
      "Strategic commercial real estate support for offices, retail, and investment spaces.",
    image: "/images/services/service-2.webp",
  },
  {
    title: "Holiday Homes",
    description:
      "End-to-end holiday home advisory for short-term rental performance and guest-ready assets.",
    image: "/images/services/service-3.webp",
  },
  {
    title: "Investment Consultancy",
    description:
      "Insight-led property investment guidance focused on growth, yield, and long-term value.",
    image: "/images/services/service-4.webp",
  },
];

export default function ServicesSection() {
  return (
    <section className="overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-14 xl:px-20">
      <div className="mx-auto max-w-[1680px]">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 25, letterSpacing: "0.14em" }}
            whileInView={{ opacity: 1, y: 0, letterSpacing: "0.055em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[34px] uppercase leading-none text-black sm:text-[44px] lg:text-[54px]"
          >
            Services
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="group flex w-fit items-center gap-3 rounded-full bg-[#ad7566] px-6 py-3 text-[14px] font-semibold text-white transition duration-500 hover:-translate-y-1 hover:bg-[#936052]"
          >
            View All Services
            <ArrowRight size={20} strokeWidth={1.5} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 border border-[#d9e3ef] lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.85,
                delay: index * 0.09,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid min-h-[380px] grid-cols-1 overflow-hidden border-b border-[#d9e3ef] bg-white md:grid-cols-2 lg:border-r"
            >
              <div className="relative h-[270px] overflow-hidden bg-[#eef3f8] md:h-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-[1300ms] ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 transition duration-700 group-hover:bg-black/18" />

                <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/35 bg-black/25 text-white opacity-0 backdrop-blur-md transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </div>
              </div>

              <div className="relative flex min-h-[360px] flex-col justify-center p-6 pb-12 sm:p-8 sm:pb-14">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0875cf]">
                  0{index + 1} / Service
                </p>

                <h3 className="font-serif text-[24px] uppercase leading-[1.25] tracking-[0.04em] text-black transition duration-500 group-hover:text-[#0875cf] sm:text-[28px]">
                  {service.title}
                </h3>

                <div className="mt-5 h-px w-14 bg-[#ad7566]/45 transition-all duration-700 group-hover:w-28" />

                <p className="mt-5 max-w-[430px] text-[13.5px] leading-[1.75] text-[#53627c]">
                  {service.description}
                </p>

                <button className="mt-7 inline-flex w-fit items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#ad7566] transition duration-500 hover:text-[#0875cf]">
                  Learn More
                  <ArrowRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#0875cf] transition-all duration-700 group-hover:w-full" />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="h-16 sm:h-20" />
      </div>
    </section>
  );
}