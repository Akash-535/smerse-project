import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import TheVision from "@/components/TheVision";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutUs />
      <TheVision />
      <Project />
    </div>
  );
}
