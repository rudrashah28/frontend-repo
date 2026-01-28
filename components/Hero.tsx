"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/MotionDiv";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <img
        src="/hero-crane.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        alt="Crane"
      />

      {/* CONTENT */}
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-primary">
          Premier Crane Services
        </h1>

        <p className="mt-4 max-w-xl text-muted-foreground">
          Safe, reliable, and professional heavy lifting solutions for
          construction and industrial projects.
        </p>

        <div className="mt-6 flex gap-4 flex-wrap">
          
      
            
      
          {/* CALL NOW → PHONE DIALER */}
          <a href="tel:+919879317452">
            <Button variant="outline">
              Call Now
            </Button>
          </a>

        </div>
      </MotionDiv>
    </section>
  );
}
