"use client";

export default function WhatsAppFloating() {
  const phoneNumber = "919876543210"; // replace with company number

  const message = encodeURIComponent(
    "Hello, I am interested in your crane services."
  );

  return (
    <a
      href={`https://wa.me/${+919879317452}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
    >
      <img
        src="/whatsapp.png"
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
  );
}
