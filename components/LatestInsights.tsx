"use client";

import { motion } from "framer-motion";

type Blog = {
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
};

const blogs: Blog[] = [
  {
    category: "Blogs",
    date: "June 7, 2026",
    title: "READY VS OFF-PLAN PROPERTY IN DUBAI",
    description:
      "Dubai's real estate market attracts thousands of investors every year.",
    image: "/images/off-plan-property-dubai.webp",
  },
  {
    category: "Blogs",
    date: "May 28, 2026",
    title: "STEP-BY-STEP PROCESS FOR BUYING PROPERTY IN DUBAI",
    description:
      "Buying property in Dubai is a simple, well-structured process that attracts global investors each year",
    image: "/images/step-by-step-process-for-buying-property.webp",
  },
  {
    category: "Blogs",
    date: "May 21, 2026",
    title: "HOW MUCH DOES IT COST TO BUY AN APARTMENT IN DUBAI?",
    description:
      "Dubai remains a top destination for real estate investment, attracting apartment buyers",
    image: "/images/Apartment-Prices-Dubai.webp",
  },
];

export default function LatestInsights() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 45, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="font-serif text-4xl font-normal uppercase tracking-[0.08em] text-black sm:text-5xl md:text-6xl">
            Explore Our Latest Insights
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-center text-base leading-8 text-black sm:text-lg">
            We are here to assist you with everything related to property
            services in a more professional and detailed manner.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 65 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.9,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="group"
            >
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-black/45 px-5 py-5 text-white backdrop-blur-md">
                  <span className="text-base font-medium">{blog.category}</span>
                  <span className="h-6 w-px bg-white/70" />
                  <span className="text-base font-medium">{blog.date}</span>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-serif text-[24px] font-normal uppercase leading-[1.45] tracking-wide text-[#08213f]">
                  {blog.title}
                </h3>

                <p className="mt-3 text-[17px] leading-7 text-[#52627a]">
                  {blog.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}