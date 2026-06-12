"use client";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function StickyContactButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-4">
      {/* Phone */}
      <a
        href="tel:+971506337953"
        aria-label="Call Us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2879BC] text-white shadow-lg transition-all duration-300 hover:scale-110"
      >
        <FaPhoneAlt size={22} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/971506337953"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
}