"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/MotionDiv";

const cranes = [
  {
    name: "ZOOMLION ZTC500",
    images: [
      "/services/mobile-crane.jpg",
      "/services/heavy-lifting.jpg",
      "/services/tower-crane.jpg",
      "/services/planning.jpg",
    ],
    description:
      "50 Ton mobile crane, refurbished and ready for heavy industrial and construction projects.",
  },
  {
    name: "ZOOMLION ZTC500 – Refurbished",
    images: [
      "/services/heavy-lifting.jpg",
      "/services/mobile-crane.jpg",
      "/services/planning.jpg",
    ],
    description:
      "Well-maintained crane with updated cabin and safety compliance.",
  },

  
  {
    name: "ZOOMLION ZTC500",
    images: [
      "/services/mobile-crane.jpg",
      "/services/heavy-lifting.jpg",
      "/services/tower-crane.jpg",
     
    ],
    description:
      "50 Ton mobile crane, refurbished and ready for heavy industrial and construction projects.",
  },

  {
    name: "XCMG QY25K",
    images: [
      "/services/redcrane.jpg",
      "/services/redcrane2.jpg",
      "/services/redcrane3.jpg",
    ],
    description:
      "25 Ton hydraulic mobile crane suitable for city and industrial lifting.",
  },

  {
    name: "TADANO ATF 70G",
    images: [
      "/services/redcrane4.jpg",
      "/services/redcrane3.jpg",
    ],
    description:
      "70 Ton all-terrain crane with excellent reach and stability.",
  },

  {
    name: "LIEBHERR LTM 1100",
    images: [
      "/services/jcb.jpg",
      "/services/jcb2.jpg",
      "/services/jcb3.jpg",
    ],
    description:
      "100 Ton crane for heavy industrial and infrastructure projects.",
  },


];

export default function RentPage() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* PAGE HEADER */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Crane <span className="text-primary">Rental</span>
          </h1>
          <p className="text-muted-foreground mt-2 max-w-xl">
            Browse our cranes and send an instant inquiry via WhatsApp.
          </p>
        </MotionDiv>

        {/* CRANES */}
        <div className="space-y-16">
          {cranes.map((crane, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-start">

                {/* IMAGES */}
                <div className="w-full">
                  {/* MAIN IMAGE */}
                  <Image
                    src={crane.images[0]}
                    alt={crane.name}
                    width={700}
                    height={450}
                    className="w-full h-[220px] sm:h-[280px] md:h-[340px] object-cover rounded-xl mb-3"
                  />

                  {/* SCROLL GALLERY */}
                  <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
                    {crane.images.map((img, i) => (
                      <div key={i} className="snap-start flex-shrink-0">
                        <Image
                          src={img}
                          alt={`${crane.name} ${i + 1}`}
                          width={180}
                          height={120}
                          className="h-24 w-36 sm:h-28 sm:w-44 object-cover rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="w-full">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                    {crane.name}
                  </h3>

                  <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                    {crane.description}
                  </p>

                  <a
                    href={`https://wa.me/919879317452?text=I%20am%20interested%20in%20renting%20${encodeURIComponent(
                      crane.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="w-full sm:w-auto">
                      Inquiry on WhatsApp
                    </Button>
                  </a>
                </div>

              </div>
            </MotionDiv>
          ))}
        </div>

      </div>
    </section>
  );
}
