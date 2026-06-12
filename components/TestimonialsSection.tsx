"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  time: string;
  review: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Emily Smith",
    role: "Property Investor",
    time: "9 Months Ago",
    review:
      "The team showed excellent professionalism and market knowledge. ",
    rating: 5,
  },
  {
    name: "Shahab Nisar",
    role: "Luxury Home Buyer",
    time: "9 Months Ago",
    review:
      "A truly premium experience from start to finish. The team understood my requirements and made the complete buying journey smooth.",
    rating: 5,
  },
  {
    name: "Anju Pandey",
    role: "Villa Owner",
    time: "9 Months Ago",
    review:
      "From knowing very little about property to finalizing my dream home, the support was excellent and stress-free.",
    rating: 5,
  },
  {
    name: "Resmi Mukunda",
    role: "Apartment Buyer",
    time: "9 Months Ago",
    review:
      "Amazing company with honest support and professional guidance. They helped me choose the right property with confidence.",
    rating: 5,
  },
];

export default function PremiumTestimonials() {
  const [current, setCurrent] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxSlide = Math.max(testimonials.length - visibleCards, 0);

  const nextSlide = () => {
    setCurrent((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  return (
    <section className="relative overflow-hidden  py-16 md:py-24">
      <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-[#8B5E3C]/10 blur-[110px]" />
      <div className="absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-black/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.38em] text-[#8B5E3C]">
            Testimonials
          </span>

          <h2 className="font-serif text-4xl font-normal uppercase tracking-[0.08em] text-[#111111] sm:text-5xl md:text-6xl">
            What Clients Say About Us
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#5f5047] sm:text-base">
            Trusted experiences from clients who found premium properties with
            expert guidance and seamless support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
          className="relative mt-14 px-10"
        >
          <div className="overflow-hidden py-6">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                width: `${(testimonials.length / visibleCards) * 100}%`,
                transform: `translateX(-${
                  current * (100 / testimonials.length)
                }%)`,
              }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="shrink-0 px-3"
                  style={{
                    width: `${100 / testimonials.length}%`,
                  }}
                >
                  <TestimonialCard item={item} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-[#111111] shadow-sm transition hover:bg-[#111111] hover:text-white"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-[#111111] shadow-sm transition hover:bg-[#111111] hover:text-white"
          >
            <ChevronRight size={22} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[30px] border border-[#eadfd5] bg-white p-6 transition-all duration-500 hover:-translate-y-1">
      <div className="absolute right-6 top-6 text-[#8B5E3C]/10 transition duration-700 group-hover:scale-110">
        <Quote size={74} />
      </div>

      <div className="relative">
        <div className="flex items-center gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#8B5E3C] to-[#111111] text-lg font-semibold text-white">
            {item.name.charAt(0)}
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#8B5E3C]">
              {item.name}
            </h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[#9b8b80]">
              {item.role}
            </p>
          </div>
        </div>

        <p className="mt-7 line-clamp-5 text-[15px] leading-8 text-[#4c4038]">
          {item.review}
        </p>
      </div>

      <div className="relative mt-8 border-t border-[#eadfd5] pt-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={20}
                className={
                  i < item.rating
                    ? "fill-[#8B5E3C] text-[#8B5E3C]"
                    : "fill-[#d8c8ba] text-[#d8c8ba]"
                }
              />
            ))}
          </div>

          <button
            type="button"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#111111] text-white transition hover:bg-[#8B5E3C]"
          >
            <ArrowUpRight size={18} />
          </button>
        </div>

        <p className="mt-4 text-sm font-medium text-[#9b8b80]">{item.time}</p>
      </div>
    </article>
  );
}