import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex  flex-col bg-cover bg-no-repeat" 
  ${inter}`}
    >
      <Header />
      <Navbar />
      <Hero />
    </main>
  );
}
