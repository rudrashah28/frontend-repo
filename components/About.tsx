import { CheckCircle } from "lucide-react";

const highlights = [
  "Family-owned and operated for over 20 years",
  "Fleet of  cranes from leading manufacturers",
  "Fully licensed, bonded, and insured",
  "Serving the tri-state area and beyond",
  "Competitive pricing with no hidden fees",
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* STATS + DECORATION WRAPPER */}
          <div className="relative">

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4">
              {/* CEO */}
              <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition">
                <img
                  src="/team/ceo.jpg"
                  alt="CEO"
                  className="w-35 h-35 mx-auto rounded-lg object-cover mb-4"
                  
                />
                <p className="font-semibold"></p>
                <p className="text-sm text-muted-foreground"></p>
                <p className="text-primary font-bold mt-2"></p>
              </div>

              {/* COO */}
              <div className="bg-card p-6 rounded-lg border border-border text-center mt-8 hover:shadow-lg transition">
                <img
                  src="/team/ceo.jpg"
                  alt="COO"
                  className="w-35 h-35 mx-auto rounded-lg object-cover mb-4"
                />
                <p className="font-semibold"></p>
                <p className="text-sm text-muted-foreground">
                 
                </p>
                <p className="text-primary font-bold mt-2"></p>
              </div>

              {/* Operations */}
              <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition">
                <img
                  src="/team/ceo.jpg"
                  alt="Operations"
                  className="w-35 h-35 mx-auto rounded-lg object-cover mb-4"
                />
                <p className="font-semibold"></p>
                <p className="text-sm text-muted-foreground"></p>
              </div>

              {/* Safety */}
              <div className="bg-card p-8 rounded-lg border border-border text-center mt-8 hover:shadow-lg transition">
                <img
                  src="/team/ceo.jpg"
                  alt="Operations"
                  className="w-35 h-35 mx-auto rounded-lg object-cover mb-4"
                />
                <p className="text-5xl font-bold text-primary mb-2"></p>
                <p className="text-muted-foreground"></p>
              </div>
            </div>

            {/* DECORATION */}
            <div className="absolute -z-10 inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <span className="inline-block text-primary text-sm uppercase tracking-widest mb-4">
              Why Choose Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The Area&apos;s Most Trusted Crane Company
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
             For over two decades, Helly Equipment & Leasing has been delivering dependable crane and equipment services to contractors and industrial clients. Our reputation is built on safety compliance, operational excellence, and long-term client trust.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
