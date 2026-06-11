"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Community = {
  name: string;
  properties: string;
  image: string;
};

const communities: Community[] = [
  {
    name: "Business Bay",
    properties: "18 Properties",
    image: "/images/communities/business-bay-resize.webp",
  },
  {
    name: "Meydan",
    properties: "10 Properties",
    image: "/images/communities/meydan-resize.webp",
  },
  {
    name: "Dubai Marina",
    properties: "24 Properties",
    image: "/images/communities/dubai-marina-resize-2.webp",
  },
  {
    name: "Jebel Ali",
    properties: "12 Properties",
    image: "/images/communities/jebel-ali-resize.webp",
  },
  {
    name: "Downtown Dubai",
    properties: "30 Properties",
    image: "/images/communities/damac-hills-resize.webp",
  },
  {
    name: "Palm Jumeirah",
    properties: "16 Properties",
    image: "/images/communities/downtown-dubai-resize.webp",
  },
  {
    name: "Dubai Hills",
    properties: "21 Properties",
    image: "/images/communities/international-city-resize.webp",
  },
  {
    name: "Bluewaters Island",
    properties: "9 Properties",
    image: "/images/communities/banner3.webp",
  },
];

export default function CommunitiesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        return track.scrollWidth - window.innerWidth;
      };

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount() + 600}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f7f9fc] py-20"
    >
      <div className="mx-auto max-w-[1500px] px-5 text-center sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-[34px] uppercase leading-none text-black sm:text-[44px] lg:text-[54px]"
        >
          Communities
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-5 max-w-[760px] text-[15px] leading-[1.8] text-black sm:text-[17px]"
        >
          Explore Dubai’s most sought-after neighborhoods, each offering
          distinctive lifestyles and investment potential.
        </motion.p>
      </div>

      <div className="mt-14 w-full">
        <div
          ref={trackRef}
          className="flex w-max gap-6 px-5 pb-12 sm:px-10 lg:px-16"
        >
          {communities.map((item) => (
            <article
              key={item.name}
              className="group relative h-[360px] w-[82vw] shrink-0 overflow-hidden rounded-[22px] bg-black shadow-[0_24px_80px_rgba(15,23,42,0.16)] transition duration-700 hover:-translate-y-3 hover:shadow-[0_42px_110px_rgba(15,23,42,0.26)] sm:w-[430px] lg:h-[400px] lg:w-[480px]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent transition duration-700 group-hover:from-black/95" />

              <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                Dubai, UAE
              </div>

              <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white opacity-0 backdrop-blur-md transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight size={18} />
              </div>

              <div className="absolute bottom-0 left-0 right-0 translate-y-[44px] border-t border-white/15 bg-white/10 px-5 py-5 text-white backdrop-blur-xl transition duration-700 ease-out group-hover:translate-y-0">
                <h3 className="font-serif text-[23px] uppercase tracking-[0.05em] sm:text-[26px]">
                  {item.name}
                </h3>

                <div className="mt-4 h-px w-14 bg-white/35 transition-all duration-700 group-hover:w-28" />

                <p className="mt-4 flex items-center gap-2 text-[13px] text-white/85">
                  <MapPin size={14} />
                  Prime Dubai Location
                </p>

                <p className="mt-2 text-[14px] font-medium text-white">
                  {item.properties}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}