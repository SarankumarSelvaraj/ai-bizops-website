import React from 'react';
import { Box } from '@mui/material';
import { HeroSection } from '../components/HeroSection';
import { SocialProofBar } from '../components/SocialProofBar';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { AIShowcaseSection } from '../components/AIShowcaseSection';
import { PricingCards } from '../components/PricingCards';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CTABanner } from '../components/CTABanner';
import { VideoSection } from '../components/VideoSection';
import { TrustBadges } from '../components/TrustBadges';
import { StatsSection } from '../components/StatsSection';

export const LandingPage: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      <TrustBadges />
      <SocialProofBar />
      <StatsSection />
      <VideoSection />
      <FeaturesGrid />
      <AIShowcaseSection />
      <TestimonialsSection />
      <PricingCards />
      <CTABanner />
    </Box>
  );
};
