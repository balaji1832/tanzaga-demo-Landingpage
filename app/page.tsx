import DeveloperLogoSlider from "@/components/DeveloperLogoSlider";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden pt-[88px]">
        <div className="absolute inset-0 bg-[url('/images/banner.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 flex min-h-[calc(100vh-88px)] items-center px-6 md:px-20">
          <div className="max-w-6xl">
            <h1 className="font-serif text-[42px] uppercase leading-[1.15] tracking-[0.08em] text-white md:text-[78px]">
              Buy, Rent, or Sell Your Spaces <br />
              We Make It Easy For You
            </h1>

            <div className="mt-10 max-w-[980px] rounded-2xl bg-[#5d574d]/85 p-5 backdrop-blur-md">
              <div className="mb-5 flex gap-1">
                {["Buy", "Rent", "Off-Plan"].map((item, index) => (
                  <button
                    key={item}
                    className={`h-14 min-w-[125px] rounded-lg border border-white/20 px-8 text-lg font-medium text-white ${
                      index === 0 ? "bg-[#ad7566]" : "bg-white/5"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="grid overflow-hidden rounded-lg bg-white md:grid-cols-[1fr_180px_245px_135px]">
                <input
                  placeholder="Search area or project for sale..."
                  className="h-14 px-5 outline-none"
                />
                <button className="h-14 border-l px-5 text-left">Beds</button>
                <button className="h-14 border-l px-5 text-left">
                  Price Range
                </button>
                <button className="h-14 bg-[#ad7566] font-semibold text-white">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DeveloperLogoSlider />
    </main>
  );
}