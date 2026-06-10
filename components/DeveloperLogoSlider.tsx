const logos = [
  "/images/developer-1767708864-695d18c042d47.png",
  "/images/developer-1768226743-6964ffb777691.webp",
  "/images/developer-1768226776-6964ffd8a2e78.webp",
  "/images/developer-1768226815-6964ffff0cd41.webp",
  "/images/developer-1768226867-69650033b8b9f.webp",
  "/images/developer-1768226995-696500b397de6.webp",
  "/images/developer-1768227098-6965011a2dd98.webp",
];

export default function DeveloperLogoSlider() {
  return (
    <section className="overflow-hidden bg-white py-14">
      <div className="relative flex min-h-[260px] w-full items-center">
        <div className="flex animate-logo-scroll items-center gap-14 whitespace-nowrap">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="group flex shrink-0 items-center justify-center"
            >
              <img
                src={logo}
                alt="Developer logo"
                className="max-h-[150px] max-w-[250px] object-contain grayscale opacity-55 transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100 group-hover:drop-shadow-[0_18px_28px_rgba(0,0,0,0.16)]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}