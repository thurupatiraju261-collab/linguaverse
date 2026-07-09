import { useScrollReveal, useAnimatedCounters } from '../hooks/useAnimations';
import AboutBanner from '../components/about/AboutBanner';
import MissionVision from '../components/about/MissionVision';
import WhyLinguaVerse from '../components/about/WhyLinguaVerse';
import OurValues from '../components/about/OurValues';
import OurStory from '../components/about/OurStory';

export default function About() {
  useScrollReveal();
  useAnimatedCounters();
  return (
    <>
      <main id="main">
        <AboutBanner />
        <MissionVision />
        <WhyLinguaVerse />
        <OurValues />
        <OurStory />
      </main>
    </>
  );
}
