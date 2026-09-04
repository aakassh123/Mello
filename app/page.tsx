import { Hero } from "@/components/home/Hero";
import { DiscoverSection } from "@/components/home/DiscoverSection";
import { TrendingSection } from "@/components/home/TrendingSection";
import { FindPeopleSection } from "@/components/home/FindPeopleSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeaturedTrips } from "@/components/home/FeaturedTrips";
import { NightlifeSection } from "@/components/home/NightlifeSection";
import { SocialProof } from "@/components/home/SocialProof";
import { CreateCTA } from "@/components/home/CreateCTA";
import { InstagramSection } from "@/components/home/InstagramSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DiscoverSection />
      <TrendingSection />
      <FindPeopleSection />
      <HowItWorks />
      <FeaturedTrips />
      <NightlifeSection />
      <SocialProof />
      <CreateCTA />
      <InstagramSection />
      <FinalCTA />
    </>
  );
}
