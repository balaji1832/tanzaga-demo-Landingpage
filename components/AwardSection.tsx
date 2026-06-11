"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AwardSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const hero = heroRef.current;

    if (!section || !hero) return;

    const ctx = gsap.context(() => {
      gsap.to(hero, {
        y: -80,
        opacity: 0,
        scale: 0.96,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "70% top",
          scrub: 1.3,
        },
      });

      gsap.from(".award-image", {
        x: -55,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".award-content",
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".award-heading", {
        y: 45,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".award-content",
          start: "top 72%",
          once: true,
        },
      });

      gsap.from(".award-para", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".award-content",
          start: "top 70%",
          once: true,
        },
      });

      gsap.from(".award-btn", {
        y: 24,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        delay: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".award-content",
          start: "top 68%",
          once: true,
        },
      });

      gsap.from(".award-stat", {
        y: 28,
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        stagger: 0.15,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: ".award-stats",
          start: "top 82%",
          once: true,
        },
      });

      document.querySelectorAll<HTMLElement>(".stat-number").forEach((el) => {
        const target = Number(el.dataset.target || 0);
        const prefix = el.dataset.prefix || "";
        const suffix = el.dataset.suffix || "";
        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 2.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".award-stats",
            start: "top 82%",
            once: true,
          },
          onUpdate: () => {
            const value =
              target >= 1000
                ? Math.floor(counter.value).toLocaleString()
                : Math.floor(counter.value).toString();

            el.innerText = `${prefix}${value}${suffix}`;
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white">
      {/* Sticky Video Hero */}
      <div className="sticky top-0 z-0 h-screen overflow-hidden bg-black">
        <video
          src="/videos/home-banner-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/43" />

        <div
          ref={heroRef}
          className="relative z-10 flex h-screen items-center px-5 sm:px-8 md:px-14 lg:px-20"
        >
          <div className="max-w-5xl ">
            <motion.h1
              initial={{ y: 45, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-[28px] uppercase leading-[1.15] tracking-[0.06em] text-white sm:text-[36px] md:text-[44px] xl:text-[52px]"
            >
              Buy, Rent, or Sell Your Spaces <br />
              We Make It Easy For You
            </motion.h1>

            <motion.div
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.15,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 max-w-[720px] hidden lg:block rounded-xl bg-[#5d574d]/80 p-4 backdrop-blur-md"
            >
              <div className="mb-4 flex gap-2 ">
                {["Buy", "Rent", "Off-Plan"].map((item, index) => (
                  <button
                    key={item}
                    className={`h-11 min-w-[88px] rounded-md border border-white/20 px-4 text-sm font-medium text-white sm:min-w-[105px] sm:px-6 ${
                      index === 0 ? "bg-[#ad7566]" : "bg-white/5"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="grid overflow-hidden rounded-md bg-white sm:grid-cols-[1fr_110px] md:grid-cols-[1fr_135px_175px_110px]">
                <input
                  placeholder="Search area or project for sale..."
                  className="h-11 min-w-0 px-4 text-sm outline-none"
                />

                <button className="h-11 border-t px-4 text-left text-sm sm:border-l sm:border-t-0">
                  Beds
                </button>

                <button className="h-11 border-t px-4 text-left text-sm md:border-l md:border-t-0">
                  Price Tanzaga
                </button>

                <button className="h-11 bg-[#ad7566] text-sm font-semibold text-white">
                  Search
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* White Section Naturally Covers Video */}
      <div className="relative z-20 min-h-screen bg-white px-5 py-14 sm:px-8 md:px-14 lg:px-20">
        <div className="award-content mx-auto grid w-full max-w-[1650px] grid-cols-1 gap-8 lg:grid-cols-[460px_1fr] xl:grid-cols-[520px_1fr]">
          <div className="award-image border border-[#eadfd8] p-2">
            <img
              src="/images/team-award.png"
              alt="Award winning real estate team"
              className="h-[280px] w-full object-cover sm:h-[360px] md:h-[410px] lg:h-[500px] xl:h-[520px]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="award-heading font-serif text-[25px] uppercase leading-[1.25] tracking-[0.04em] text-black sm:text-[31px] lg:text-[38px] xl:text-[42px]">
              An Award-Winning Real Estate <br className="hidden md:block" />
              Brokerage Team in UAE
            </h2>

            <p className="award-para mt-5 lg:8 max-w-[960px] text-[14px] leading-[1.7] text-black sm:text-[15px] md:text-[16px]">
              Tanzaga International Property Investment is an esteemed,
              award-winning real estate brokerage headquartered in Dubai, UAE.
              With over a decade of unmatched expertise, we have established
              ourselves as industry leaders, celebrated for our exceptional
              service standards and in-depth knowledge of both local and
              international real estate markets.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <motion.button
                whileHover={{ y: -4 }}
                className="award-btn rounded-full border border-[#d9e3ef] px-6 py-2.5 text-sm"
              >
                Our Profile →
              </motion.button>

              <motion.button
                whileHover={{ y: -4 }}
                className="award-btn rounded-full bg-[#ad7566] px-6 py-2.5 text-sm font-medium text-white"
              >
                Book a Call →
              </motion.button>
            </div>

            <div className="award-stats mt-8 lg:mt-15 grid border border-[#eadfd8] sm:grid-cols-3">
              <div className="award-stat border-b border-[#eadfd8] px-5 py-5 text-center sm:border-b-0 sm:border-r">
                <h3
                  className="stat-number font-serif text-[30px] text-[#0875cf] md:text-[36px] xl:text-[40px]"
                  data-prefix="AED "
                  data-target="8"
                  data-suffix="B+"
                >
                  AED 0B+
                </h3>
                <p className="mt-1 text-sm text-black">Property Sales</p>
              </div>

              <div className="award-stat border-b border-[#eadfd8] px-5 py-5 text-center sm:border-b-0 sm:border-r">
                <h3
                  className="stat-number font-serif text-[30px] text-[#0875cf] md:text-[36px] xl:text-[40px]"
                  data-target="6500"
                  data-suffix="+"
                >
                  0+
                </h3>
                <p className="mt-1 text-sm text-black">Properties Sold</p>
              </div>

              <div className="award-stat px-5 py-5 text-center">
                <h3
                  className="stat-number font-serif text-[30px] text-[#0875cf] md:text-[36px] xl:text-[40px]"
                  data-target="25"
                  data-suffix="+"
                >
                  0+
                </h3>
                <p className="mt-1 text-sm text-black">Languages Spoken</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}