import { Hero, Navbar, Section2, Section3 } from "@/components";

export default function Home() {
  return (
    <div className="overflow-hidden w-full bg-[#FBFBFB]">
      <div className="main-hero-bg mb-14">
        <Navbar />
        <Hero />
      </div>
      <main className="flex flex-col justify-center mb-5">
        <Section2 />
        <Section3 />
      </main>
    </div>
  );
}
