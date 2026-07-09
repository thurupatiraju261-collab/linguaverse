import { useScrollReveal, useAnimatedCounters } from '../hooks/useAnimations';
import Hero from '../components/home/Hero';
import FeaturedLanguages from '../components/home/FeaturedLanguages';
import TrustStats from '../components/home/TrustStats';
import PricingPlans from '../components/home/PricingPlans';

export default function Home() {
  useScrollReveal();
  useAnimatedCounters();
  return (
    <>
      <main id="main">
        <Hero />
        <FeaturedLanguages />
        <TrustStats />
        <PricingPlans />
      </main>
    </>
  );
}
