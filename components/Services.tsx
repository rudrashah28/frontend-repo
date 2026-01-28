"use client";

import { MotionDiv } from "@/components/MotionDiv";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "ZOOMLION ZTC500",
    image: "/services/mobile-crane.jpg",
    specs: [
      "Changed cabin to new",
      "Boom length: 39 meter",
      "Counter weight: 6.5 ton",
      "Original: 2013 | Refurbished: 2022",
    ],
    price: "Custom Quote",
  },
  {
    title: "ZOOMLION ZTC500",
    image: "/services/heavy-lifting.jpg",
    specs: [
      "Heavy duty tower crane",
      "Excellent lifting stability",
      "Well maintained condition",
      "Ready for site deployment",
    ],
    price: "Custom Quote",
  },
  {
    title: "ZOOMLION ZTC500",
    image: "/services/redcrane.jpg",
    specs: [
      "Ideal for heavy lifting",
      "Industrial grade performance",
      "Certified & tested",
      "Available on short notice",
    ],
    price: "Custom Quote",
  },
  {
    title: "Project Planning",
    image: "/services/jcb.jpg",
    specs: [
      "Expert lift planning",
      "Site safety analysis",
      "Crane selection support",
      "Execution supervision",
    ],
    price: "Custom Quote",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-primary">Equipment & Services</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl">
            High-performance cranes and professional lifting solutions available for rent.
          </p>
        </MotionDiv>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full">

                  {/* IMAGE */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />

                  {/* TITLE */}
                  <h3 className="font-semibold text-lg mb-2">
                    {service.title}
                  </h3>

                  {/* SPECS */}
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    {service.specs.map((spec, i) => (
                      <li key={i}>• {spec}</li>
                    ))}
                  </ul>

                  {/* PRICE */}
                  <p className="text-primary font-bold mb-4">
                    {service.price}
                  </p>

                  {/* RENT BUTTON */}
                  <a
                    href={`https://wa.me/+919879317452?text=I%20am%20interested%20in%20renting%20${encodeURIComponent(
                      service.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto"
                  >
                    <Button className="w-full">
                      Rent Now
                    </Button>
                  </a>

                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>

      </div>
    </section>
  );
}
