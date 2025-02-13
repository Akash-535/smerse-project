import Hero from "@/components/Hero";
import TheVision from "@/components/TheVision";
import Project from "@/components/Project";
import AboutUs from "@/components/AboutUs";

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
