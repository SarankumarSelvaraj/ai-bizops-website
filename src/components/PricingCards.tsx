import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Switch,
  FormControlLabel,
  Chip,
  useTheme,
  alpha,
  Divider,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Link as RouterLink } from 'react-router-dom';

export interface Plan {
  name: string;
  monthlyPrice: number;
  description: string;
  highlight: boolean;
  badge?: string;
  features: string[];
  cta: string;
  color: string;
}

export const plans: Plan[] = [
  {
    name: 'Starter',
    monthlyPrice: 29,
    description: 'Perfect for solo operators and small teams just getting started.',
    highlight: false,
    color: '#0EA5E9',
    features: [
      'Up to 3 users',
      '500 CRM contacts',
      'Sales pipeline (Kanban)',
      'Basic invoicing',
      '5 workflow automations',
      'Email support',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Growth',
    monthlyPrice: 79,
    description: 'For growing teams that need AI-powered operations at scale.',
    highlight: true,
    badge: 'Most Popular',
    color: '#4F46E5',
    features: [
      'Up to 15 users',
      'Unlimited CRM contacts',
      'Advanced pipeline & analytics',
      'Smart invoicing + payment links',
      'Unlimited automations',
      'AI Copilot (OpenAI + Gemini)',
      'Priority support',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    monthlyPrice: 199,
    description: 'Custom everything for large organizations with complex needs.',
    highlight: false,
    color: '#8B5CF6',
    features: [
      'Unlimited users',
      'Custom AI model configuration',
      'SSO & advanced security',
      'Dedicated account manager',
      'Custom integrations & API',
      'SLA guarantee (99.9% uptime)',
      '24/7 phone & chat support',
    ],
    cta: 'Contact Sales',
  },
];

interface PricingCardsProps {
  showHeader?: boolean;
}

export const PricingCards: React.FC<PricingCardsProps> = ({ showHeader = true }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [annual, setAnnual] = useState(false);

  const getPrice = (monthly: number) =>
    annual ? Math.round(monthly * 0.8) : monthly;

  return (
    <Box
      component="section"
      id="pricing"
      aria-labelledby="pricing-heading"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        {showHeader && (
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
            <Typography
              variant="overline"
              sx={{ color: theme.palette.primary.main, fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.75rem', display: 'block', mb: 1.5 }}
            >
              Pricing
            </Typography>
            <Typography
              id="pricing-heading"
              component="h2"
              sx={{
                fontSize: { xs: '1.8rem', md: '2.4rem' },
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: theme.palette.text.primary,
                mb: 2,
              }}
            >
              Simple, Transparent Pricing
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.secondary, maxWidth: 480, mx: 'auto', lineHeight: 1.7 }}
            >
              Start free for 14 days. No credit card required. Upgrade when you're ready.
            </Typography>
          </Box>
        )}

        {/* Annual toggle */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="body2"
            sx={{ color: annual ? theme.palette.text.secondary : theme.palette.text.primary, fontWeight: 500 }}
          >
            Monthly
          </Typography>
          <Switch
            checked={annual}
            onChange={() => setAnnual((p) => !p)}
            color="primary"
            inputProps={{ 'aria-label': 'Toggle annual pricing' }}
          />
          <Typography
            variant="body2"
            sx={{ color: annual ? theme.palette.text.primary : theme.palette.text.secondary, fontWeight: 500 }}
          >
            Annual
          </Typography>
          <Chip
            label="Save 20%"
            size="small"
            sx={{
              backgroundColor: annual ? alpha('#10B981', 0.15) : theme.palette.action?.disabledBackground || alpha('#10B981', 0.06),
              color: annual ? '#10B981' : theme.palette.text.disabled,
              fontWeight: 700,
              fontSize: '0.72rem',
              transition: 'all 0.3s',
            }}
          />
        </Box>

        {/* Pricing cards */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            alignItems: { md: 'stretch' },
          }}
        >
          {plans.map((plan) => (
            <Box key={plan.name} sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Card
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  border: plan.highlight
                    ? `2px solid ${plan.color}`
                    : `1px solid ${theme.palette.divider}`,
                  boxShadow: plan.highlight
                    ? `0 0 0 4px ${alpha(plan.color, 0.1)}, 0 20px 40px -12px ${alpha(plan.color, 0.25)}`
                    : 'none',
                  transform: plan.highlight ? { md: 'scale(1.03)' } : 'none',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    boxShadow: plan.highlight
                      ? `0 0 0 4px ${alpha(plan.color, 0.15)}, 0 24px 48px -12px ${alpha(plan.color, 0.3)}`
                      : `0 8px 24px -8px ${alpha(plan.color, 0.2)}`,
                  },
                  overflow: 'visible',
                }}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -14,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 1,
                    }}
                  >
                    <Chip
                      label={plan.badge}
                      size="small"
                      sx={{
                        backgroundColor: plan.color,
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '0.72rem',
                        px: 0.5,
                        height: 26,
                        boxShadow: `0 4px 12px ${alpha(plan.color, 0.4)}`,
                      }}
                    />
                  </Box>
                )}

                <CardContent
                  sx={{
                    p: { xs: 2.5, sm: 3 },
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    pt: plan.badge ? 3.5 : 3,
                  }}
                >
                  {/* Plan name */}
                  <Typography
                    component="h3"
                    sx={{ fontWeight: 700, fontSize: '1.1rem', color: theme.palette.text.primary, mb: 0.75 }}
                  >
                    {plan.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.text.secondary, mb: 2.5, lineHeight: 1.6, minHeight: 40 }}
                  >
                    {plan.description}
                  </Typography>

                  {/* Price */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 0.5, mb: 0.5 }}>
                    <Typography
                      component="span"
                      sx={{ fontSize: '2.5rem', fontWeight: 800, color: theme.palette.text.primary, lineHeight: 1 }}
                    >
                      ${getPrice(plan.monthlyPrice)}
                    </Typography>
                    <Typography
                      component="span"
                      sx={{ color: theme.palette.text.secondary, fontSize: '0.9rem', mb: 0.4 }}
                    >
                      / mo
                    </Typography>
                  </Box>
                  {annual && (
                    <Typography variant="caption" sx={{ color: '#10B981', fontWeight: 600, display: 'block', mb: 2 }}>
                      Billed ${getPrice(plan.monthlyPrice) * 12}/yr — saves ${(plan.monthlyPrice - getPrice(plan.monthlyPrice)) * 12}/yr
                    </Typography>
                  )}

                  <Divider sx={{ my: 2.5 }} />

                  {/* Features */}
                  <Box
                    component="ul"
                    aria-label={`${plan.name} plan features`}
                    sx={{ listStyle: 'none', p: 0, m: 0, flex: 1, display: 'flex', flexDirection: 'column', gap: 1.25 }}
                  >
                    {plan.features.map((feat) => (
                      <Box component="li" key={feat} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                        <Box
                          sx={{
                            width: 18,
                            height: 18,
                            borderRadius: '50%',
                            backgroundColor: alpha(plan.color, isDark ? 0.2 : 0.12),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            mt: 0.1,
                          }}
                        >
                          <CheckIcon sx={{ fontSize: 11, color: plan.color }} />
                        </Box>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.5 }}>
                          {feat}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* CTA */}
                  <Button
                    variant={plan.highlight ? 'contained' : 'outlined'}
                    fullWidth
                    size="large"
                    component={RouterLink}
                    to="/register"
                    sx={{
                      mt: 3,
                      borderRadius: 2,
                      py: 1.25,
                      fontWeight: 700,
                      ...(plan.highlight
                        ? {
                            background: `linear-gradient(135deg, ${plan.color} 0%, #6366F1 100%)`,
                            boxShadow: `0 4px 14px ${alpha(plan.color, 0.4)}`,
                            '&:hover': { background: `linear-gradient(135deg, #4338CA 0%, ${plan.color} 100%)` },
                          }
                        : {
                            borderColor: alpha(plan.color, 0.5),
                            color: plan.color,
                            '&:hover': {
                              borderColor: plan.color,
                              backgroundColor: alpha(plan.color, 0.06),
                            },
                          }),
                    }}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
