import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/hooks/use-toast";
import WhatsAppFloating from "@/components/WhatsAppFloating";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <Header />
          <main className="pt-16 md:pt-20">{children}</main>
          <WhatsAppFloating/>
          <Footer/>
        </ToastProvider>
      </body>
    </html>
  );
}
