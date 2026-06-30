import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
