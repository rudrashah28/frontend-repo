import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* BRAND */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded bg-primary flex items-center justify-center">
                <Image
                  src="/mainlogo.jpg"
                  alt="Helly Equipment & Leasing"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              <div className="leading-tight">
                <p className="text-lg font-bold tracking-tight">
                  Helly <span className="text-primary">Equipment</span>
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                  & Leasing
                </p>
              </div>
            </Link>

            
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-bold uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services" className="hover:text-primary">Services</Link></li>
              <li><Link href="/rent" className="hover:text-primary">Rent</Link></li>
              <li><Link href="#about" className="hover:text-primary">About</Link></li>
              <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-bold uppercase mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Tower Cranes</li>
              <li>Mobile Cranes</li>
              <li>Heavy Lifting</li>
              <li>Project Planning</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-bold uppercase mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +91 98793 17452
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                hellyequipmentllp@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                Gujarat, India
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <span>© 2024 Helly Equipment & Leasing</span>
          <span>Licensed & Insured</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
