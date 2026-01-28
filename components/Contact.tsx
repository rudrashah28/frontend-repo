"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "  Gujarat, India",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+919879317452",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hellyequipmentllp@gmail.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri: 6AM-6PM | 24/7 Emergency",
  },
];

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("http://127.0.0.1:8000/api/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error("Failed to submit");
    }

    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  } catch (error) {
    toast({
      title: "Submission Failed",
      description: "Please try again later.",
     
    });
  }
};


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* CONTACT INFO */}
          <div>
            <span className="inline-block text-primary text-sm uppercase tracking-widest mb-4">
              Get In Touch
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>

            <p className="text-muted-foreground text-lg mb-10">
              Contact us today for a free quote. Our team is ready to discuss your
              lifting needs and provide tailored solutions.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm uppercase text-muted-foreground">
                      {item.label}
                    </p>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="bg-background p-8 md:p-10 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-6">
              Request a Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <Textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />

              <Button type="submit" className="w-full">
                Send Request
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

<a
  href="https://wa.me/919876543210?text=Hello%20I%20need%20a%20crane%20quotation"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center justify-center w-full bg-green-500 text-black py-3 rounded-lg font-semibold hover:bg-green-600 transition"
>
  Chat on WhatsApp
</a>


export default Contact;
