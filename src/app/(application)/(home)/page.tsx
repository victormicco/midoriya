import Image from "next/image";
import Navbar from "@/components/navbar";
import HeroSection from "@/app/(application)/(home)/components/heroSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Footer />
    </main>
  );
}
