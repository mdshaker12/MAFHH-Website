"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  const phoneNumber = "918106248423";

  const message = encodeURIComponent(
    "Hi, I came from your website. I want to build an ERP or software for my business."
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 
                 bg-green-500 hover:bg-green-600 
                 text-white p-4 rounded-full 
                 shadow-xl hover:scale-110 
                 transition-all duration-300 
                 z-50"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}