import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PricingCards, plans } from '../components/PricingCards';
import { CTABanner } from '../components/CTABanner';

interface ComparisonRow {
  category?: string;
  feature: string;
  starter: boolean | string;
  growth: boolean | string;
  enterprise: boolean | string;
}

const comparisonData: ComparisonRow[] = [
  { category: 'Users & Contacts', feature: 'Team users', starter: '3', growth: '15', enterprise: 'Unlimited' },
  { feature: 'CRM contacts', starter: '500', growth: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Guest access', starter: false, growth: true, enterprise: true },
  { category: 'Core Features', feature: 'Sales pipeline (Kanban)', starter: true, growth: true, enterprise: true },
  { feature: 'Tasks & calendar', starter: true, growth: true, enterprise: true },
  { feature: 'Invoicing', starter: true, growth: true, enterprise: true },
  { feature: 'Document storage', starter: '1 GB', growth: '50 GB', enterprise: 'Unlimited' },
  { feature: 'Custom fields', starter: '10', growth: 'Unlimited', enterprise: 'Unlimited' },
  { category: 'AI & Automations', feature: 'Workflow automations', starter: '5', growth: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'AI Copilot (OpenAI + Gemini)', starter: false, growth: true, enterprise: true },
  { feature: 'AI custom model configuration', starter: false, growth: false, enterprise: true },
  { category: 'Analytics & Reporting', feature: 'Pre-built dashboards', starter: true, growth: true, enterprise: true },
  { feature: 'Custom reports & charts', starter: false, growth: true, enterprise: true },
  { feature: 'Report exports (PDF/CSV)', starter: false, growth: true, enterprise: true },
  { feature: 'Advanced forecasting', starter: false, growth: false, enterprise: true },
  { category: 'Security & Integrations', feature: 'Two-factor authentication', starter: true, growth: true, enterprise: true },
  { feature: 'SSO (SAML)', starter: false, growth: false, enterprise: true },
  { feature: 'API access', starter: false, growth: true, enterprise: true },
  { feature: 'Custom integrations', starter: false, growth: false, enterprise: true },
  { feature: 'SLA (99.9% uptime)', starter: false, growth: false, enterprise: true },
  { category: 'Support', feature: 'Email support', starter: true, growth: true, enterprise: true },
  { feature: 'Priority support', starter: false, growth: true, enterprise: true },
  { feature: 'Dedicated account manager', starter: false, growth: false, enterprise: true },
  { feature: '24/7 phone & chat support', starter: false, growth: false, enterprise: true },
];

const faqs = [
  {
    question: 'Do you offer a free trial?',
    answer:
      'Yes! We offer a 14-day free trial on all plans. No credit card required. You can explore the full platform and decide which plan works best for your team.',
  },
  {
    question: 'Can I switch plans later?',
    answer:
      'Absolutely. You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately, and we\'ll prorate your billing.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, MasterCard, Amex, Discover) via Stripe. Annual plans can also be paid via ACH or wire transfer for Enterprise customers.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We\'re SOC 2 Type II compliant and follow industry best practices for data security and privacy.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes, you can cancel your subscription at any time. Your account will remain active until the end of your billing cycle. No cancellation fees or long-term contracts.',
  },
  {
    question: 'Do you offer discounts for nonprofits or startups?',
    answer:
      'Yes! We offer a 30% discount for registered nonprofits and qualified early-stage startups (pre-seed or seed stage with <$1M raised). Contact our sales team for details.',
  },
];

const CellValue: React.FC<{ value: boolean | string }> = ({ value }) => {
  const theme = useTheme();

  if (typeof value === 'boolean') {
    return value ? (
      <CheckIcon sx={{ fontSize: 18, color: '#10B981' }} />
    ) : (
      <RemoveIcon sx={{ fontSize: 18, color: theme.palette.text.disabled }} />
    );
  }
  return (
    <Typography variant="body2" sx={{ fontWeight: 500, color: theme.palette.text.primary }}>
      {value}
    </Typography>
  );
};

export const PricingPage: React.FC = () => {
  const theme = useTheme();
  const [expandedFaq, setExpandedFaq] = useState<number | false>(false);

  return (
    <Box>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          pt: { xs: 14, md: 18 },
          pb: { xs: 6, md: 8 },
          backgroundColor: theme.palette.background.default,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 700,
              letterSpacing: '0.12em',
              fontSize: '0.75rem',
              display: 'block',
              mb: 1.5,
            }}
          >
            Pricing
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '2rem', md: '2.8rem' },
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: theme.palette.text.primary,
              mb: 2,
            }}
          >
            Plans That Scale With Your Business
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 560,
              mx: 'auto',
              lineHeight: 1.7,
              fontSize: '1.05rem',
            }}
          >
            Transparent pricing with no hidden fees. Start free for 14 days, upgrade when you're ready, and cancel anytime.
          </Typography>
        </Container>
      </Box>

      {/* Pricing cards */}
      <PricingCards showHeader={false} />

      {/* Comparison table */}
      <Box
        component="section"
        aria-labelledby="comparison-heading"
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            id="comparison-heading"
            component="h2"
            sx={{
              fontSize: { xs: '1.6rem', md: '2rem' },
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: theme.palette.text.primary,
              mb: 5,
              textAlign: 'center',
            }}
          >
            Compare Plans in Detail
          </Typography>

          <TableContainer component={Paper} elevation={0} sx={{ border: `1px solid ${theme.palette.divider}` }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, color: theme.palette.text.primary }}>Feature</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    Starter
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    Growth
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    Enterprise
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {comparisonData.map((row, i) => {
                  if (row.category) {
                    return (
                      <TableRow key={i} sx={{ backgroundColor: theme.palette.action?.hover }}>
                        <TableCell colSpan={4} sx={{ fontWeight: 700, color: theme.palette.text.primary, fontSize: '0.82rem', py: 1.5 }}>
                          {row.category}
                        </TableCell>
                      </TableRow>
                    );
                  }
                  return (
                    <TableRow key={i}>
                      <TableCell sx={{ color: theme.palette.text.secondary }}>{row.feature}</TableCell>
                      <TableCell align="center">
                        <CellValue value={row.starter} />
                      </TableCell>
                      <TableCell align="center">
                        <CellValue value={row.growth} />
                      </TableCell>
                      <TableCell align="center">
                        <CellValue value={row.enterprise} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* FAQ */}
      <Box
        component="section"
        aria-labelledby="faq-heading"
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Container maxWidth="md">
          <Typography
            id="faq-heading"
            component="h2"
            sx={{
              fontSize: { xs: '1.6rem', md: '2rem' },
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: theme.palette.text.primary,
              mb: 5,
              textAlign: 'center',
            }}
          >
            Frequently Asked Questions
          </Typography>

          {faqs.map((faq, i) => (
            <Accordion
              key={i}
              expanded={expandedFaq === i}
              onChange={() => setExpandedFaq(expandedFaq === i ? false : i)}
              sx={{ mb: 1 }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`faq-${i}-content`} id={`faq-${i}-header`}>
                <Typography sx={{ fontWeight: 600, color: theme.palette.text.primary }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      <CTABanner />
    </Box>
  );
};
