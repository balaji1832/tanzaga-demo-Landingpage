import Link from "next/link";

const quickLinks = [
  ["Buy", "Rent", "Sell", "Privacy Policy"],
  ["Services", "About Us", "Careers", "Medias"],
  ["Projects", "Developers", "Communities", "Awards"],
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.4 8h4.2v15H.4V8Zm7.2 0h4v2.05h.06c.56-1.06 1.94-2.18 3.99-2.18 4.27 0 5.06 2.8 5.06 6.45V23h-4.2v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V23H7.6V8Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 4.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6Zm0 2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6Zm5.2-2.4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[19px] w-[19px] fill-current">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.7 15.4V8.6l6 3.4-6 3.4Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
        <path d="M15.1 8.1H18V4h-3.4C10.8 4 9 6.3 9 9.3V12H6v4.3h3V24h4.5v-7.7h3.7l.6-4.3h-4.3V9.7c0-1.2.3-1.6 1.6-1.6Z" />
      </svg>
    ),
  },
  {
    name: "X",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
        <path d="M18.9 2h3.3l-7.2 8.2L23.5 22h-6.6l-5.2-6.8L5.8 22H2.5l7.7-8.8L2 2h6.8l4.7 6.2L18.9 2Zm-1.2 18h1.8L7.8 3.9H5.9L17.7 20Z" />
      </svg>
    ),
  },
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-[4px] h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.6 2.63a2 2 0 0 1-.45 2.11L9 10.67a16 16 0 0 0 4.33 4.33l1.21-1.21a2 2 0 0 1 2.11-.45c.85.28 1.73.48 2.63.6A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-[5px] h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-[4px] h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-[1680px] grid-cols-1 gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[1.25fr_0.85fr_0.75fr] lg:gap-16 lg:px-24 xl:px-28">
        <div>
          <img
            src="/images/logo-1.png"
            alt="Tanzaga"
            className="w-[230px] object-contain sm:w-[230px] lg:w-[250px]"
          />

          <p className="mt-7 max-w-[650px] text-[15px] leading-[1.65] text-[#263b5f] sm:text-[16px]">
            Tanzaga International Property Investment is an esteemed,
            award-winning real estate brokerage headquartered in Dubai, UAE. With
            over a decade of unmatched expertise, we have established ourselves
            as industry leaders, celebrated for our exceptional service standards
            and in-depth knowledge of both local and international real estate
            markets.
          </p>
        </div>

        <div>
          <h3 className="text-[18px] font-bold uppercase text-[#0875cf]">
            Quick Links
          </h3>

          <div className="mt-7 grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-3">
            {quickLinks.map((column, index) => (
              <div key={index} className="space-y-4">
                {column.map((link) => (
                  <Link
                    href="#"
                    key={link}
                    className="block text-[15px] text-[#263b5f] transition duration-300 hover:-translate-y-[3px] hover:text-[#0875cf]"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="border-l border-[#d9e3ef] pl-12 max-lg:border-l-0 max-lg:pl-0">
          <h3 className="text-[18px] font-bold uppercase text-[#0875cf]">
            Contact
          </h3>

          <div className="mt-7 space-y-5 text-[15px] leading-7 text-black">
            <p className="flex gap-3">
              <span className="text-[#0875cf]">
                <PhoneIcon />
              </span>
              <span>800 72 888</span>
            </p>

            <p className="flex gap-3">
              <span className="text-[#0875cf]">
                <MailIcon />
              </span>
              <span>info@Tanzaga.ae</span>
            </p>

            <p className="flex gap-3">
              <span className="text-[#0875cf]">
                <LocationIcon />
              </span>
              <span>
                1601, Control Tower, Motor City, Dubai, United Arab Emirates
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-y border-[#c7deef] bg-[#dff2ff]">
        <div className="mx-auto flex max-w-[1680px] flex-col items-center justify-between gap-5 px-6 py-6 sm:px-10 md:flex-row lg:px-24 xl:px-28">
          <p className="text-center text-[15px] font-medium text-[#0875cf] md:text-left">
            All Rights Reserved 2026 @ Tanzaga International Property Investment
          </p>

          <div className="flex items-center gap-7 text-[#a77768]">
            {socialLinks.map((social) => (
              <Link
                href="#"
                key={social.name}
                aria-label={social.name}
                className="transition duration-300 hover:-translate-y-[4px] hover:text-[#0875cf]"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}