"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SpendDayWithTanzanga() {
  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 45, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.95, ease: "easeOut" }}
          className="grid items-center gap-7 rounded-[26px] bg-[#8B5E3C] p-5 sm:p-7 md:p-9 lg:grid-cols-[1fr_0.9fr] lg:p-10"
        >
          <div className="max-w-[640px]">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
              Concierge Experience
            </span>

            <h2 className="font-serif text-3xl font-normal uppercase leading-tight tracking-[0.04em] text-white sm:text-4xl md:text-5xl">
              Spend A Day With Tanzanga
            </h2>

            <p className="mt-5 max-w-[620px] text-sm leading-7 text-white/90 sm:text-base">
              Explore premium properties with our dedicated concierge service.
              We help you discover spaces that match your lifestyle, investment
              goals, and personal requirements with complete guidance.
            </p>

            <button
              type="button"
              className="mt-6 inline-flex cursor-pointer items-center gap-4 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition duration-300 hover:bg-black hover:text-white sm:text-base"
            >
              Book Your Day
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative h-[230px] overflow-hidden rounded-[20px] sm:h-[300px] md:h-[340px] lg:h-[360px]">
            <img
              src="/images/banner-section-image.webp"
              alt="Spend a day with Tanzanga"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}