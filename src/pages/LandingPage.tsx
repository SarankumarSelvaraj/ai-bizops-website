import React from 'react';
import { Box } from '@mui/material';
import { HeroSection } from '../components/HeroSection';
import { SocialProofBar } from '../components/SocialProofBar';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { AIShowcaseSection } from '../components/AIShowcaseSection';
import { PricingCards } from '../components/PricingCards';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CTABanner } from '../components/CTABanner';

export const LandingPage: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      <SocialProofBar />
      <FeaturesGrid />
      <AIShowcaseSection />
      <PricingCards />
      <TestimonialsSection />
      <CTABanner />
    </Box>
  );
};
