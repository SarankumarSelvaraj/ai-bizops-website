import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  alpha,
  Grid,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import PaymentIcon from '@mui/icons-material/Payment';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArticleIcon from '@mui/icons-material/Article';

const categories = [
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 28 }} />,
    title: 'Getting Started',
    description: 'Learn the basics and set up your account',
    color: '#4F46E5',
    articleCount: 12,
  },
  {
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 28 }} />,
    title: 'Integrations & API',
    description: 'Connect BizOps AI with your tools',
    color: '#0EA5E9',
    articleCount: 8,
  },
  {
    icon: <PaymentIcon sx={{ fontSize: 28 }} />,
    title: 'Billing & Plans',
    description: 'Manage subscriptions and payments',
    color: '#10B981',
    articleCount: 6,
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 28 }} />,
    title: 'Security & Privacy',
    description: 'Data protection and compliance',
    color: '#8B5CF6',
    articleCount: 5,
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 28 }} />,
    title: 'Account Management',
    description: 'Users, teams, and permissions',
    color: '#F59E0B',
    articleCount: 9,
  },
  {
    icon: <ArticleIcon sx={{ fontSize: 28 }} />,
    title: 'Features & Use Cases',
    description: 'Master CRM, pipeline, and AI features',
    color: '#EF4444',
    articleCount: 15,
  },
];

const faqs = [
  {
    question: 'How do I get started with BizOps AI?',
    answer:
      'Sign up for a free 14-day trial, no credit card required. Once you create your account, our onboarding wizard will guide you through setting up your workspace, importing contacts, and configuring your pipeline stages. You can also watch our Getting Started video series.',
  },
  {
    question: 'Can I import my existing CRM data?',
    answer:
      'Yes! BizOps AI supports importing from CSV files or directly from Salesforce, HubSpot, Pipedrive, and other major CRMs. Go to Settings → Import Data and follow the wizard. We map your fields automatically and preview the import before finalizing.',
  },
  {
    question: 'How does the AI Copilot work?',
    answer:
      'Our AI Copilot is powered by OpenAI GPT-4 and Google Gemini. It can answer questions about your data, create tasks and records, draft emails and invoices, analyze trends, and suggest next actions—all from natural language commands. Simply type what you need in the AI chat interface.',
  },
  {
    question: 'Is my data secure and private?',
    answer:
      'Absolutely. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We are SOC 2 Type II certified and GDPR compliant. We never train AI models on your private business data. Our AI providers process queries in real-time and do not store your data.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes, you can cancel your subscription at any time from the Billing page. Your account will remain active until the end of your current billing cycle, and you can export all your data before canceling. No questions asked, no cancellation fees.',
  },
  {
    question: 'Do you offer phone or chat support?',
    answer:
      'Yes! Growth and Enterprise plans include priority email support and live chat (Mon-Fri, 9am-5pm EST). Enterprise plans also include phone support and a dedicated account manager. Starter plan users get email support with 24-hour response time.',
  },
  {
    question: 'How do automations work?',
    answer:
      'Automations let you build no-code workflows with triggers and actions. For example: "When a deal moves to Closed-Won, create an invoice and send a thank-you email." You can set up multi-step workflows with conditional logic using our visual workflow builder.',
  },
  {
    question: 'Can I use BizOps AI on mobile?',
    answer:
      "Yes, BizOps AI is fully responsive and works great on mobile browsers (iOS Safari, Chrome Android). We are also building native iOS and Android apps, coming in Q2 2025. You'll get a notification when they're available.",
  },
  {
    question: 'What integrations are available?',
    answer:
      'We integrate with Stripe and PayPal for payments, Google Calendar and Outlook for scheduling, Gmail and Outlook for email sync, Slack for notifications, Zapier for connecting 5,000+ apps, and we offer a REST API for custom integrations.',
  },
  {
    question: 'How do I upgrade or downgrade my plan?',
    answer:
      "Go to Settings → Billing and click \"Change Plan.\" Select your new plan and confirm. Upgrades take effect immediately. Downgrades take effect at the end of your current billing cycle. We'll prorate any charges automatically.",
  },
];

export const HelpCenterPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | false>(false);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          pt: { xs: 14, md: 18 },
          pb: { xs: 8, md: 12 },
          background: isDark
            ? 'linear-gradient(135deg, #0B0F19 0%, #111827 50%, #0B0F19 100%)'
            : 'linear-gradient(135deg, #EEF2FF 0%, #F0F9FF 50%, #F8FAFC 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          aria-hidden="true"
          sx={{
            position: 'absolute',
            top: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60%',
            height: '70%',
            borderRadius: '50%',
            background: isDark
              ? 'radial-gradient(ellipse, rgba(79,70,229,0.15) 0%, transparent 70%)'
              : 'radial-gradient(ellipse, rgba(79,70,229,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
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
            Help Center
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
            How Can We Help You?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.7,
              fontSize: '1.05rem',
              mb: 4,
            }}
          >
            Search our knowledge base for guides, tutorials, and answers to common questions.
          </Typography>

          {/* Search bar */}
          <TextField
            fullWidth
            placeholder="Search for help articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              maxWidth: 560,
              mx: 'auto',
              '& .MuiOutlinedInput-root': {
                backgroundColor: theme.palette.background.paper,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Container>
      </Box>

      {/* Categories */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Container maxWidth="lg">
          <Typography
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
            Browse by Category
          </Typography>
          <Grid container spacing={3}>
            {categories.map((category) => (
              <Grid item xs={12} sm={6} md={4} key={category.title}>
                <Card
                  sx={{
                    height: '100%',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: isDark
                        ? '0 12px 32px -8px rgba(0,0,0,0.5)'
                        : `0 12px 32px -8px ${alpha(category.color, 0.2)}`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '12px',
                        background: `linear-gradient(135deg, ${alpha(category.color, isDark ? 0.15 : 0.1)} 0%, ${alpha(
                          category.color,
                          isDark ? 0.08 : 0.05
                        )} 100%)`,
                        border: `1px solid ${alpha(category.color, isDark ? 0.25 : 0.15)}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        color: category.color,
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 0.75,
                        color: theme.palette.text.primary,
                        fontSize: '1rem',
                      }}
                    >
                      {category.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.7,
                        mb: 1.5,
                      }}
                    >
                      {category.description}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: category.color,
                        fontWeight: 600,
                      }}
                    >
                      {category.articleCount} articles
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQs */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="md">
          <Typography
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

          {filteredFaqs.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 6 }}>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                No results found for "{searchQuery}". Try a different search term.
              </Typography>
            </Box>
          ) : (
            filteredFaqs.map((faq, i) => (
              <Accordion
                key={i}
                expanded={expandedFaq === i}
                onChange={() => setExpandedFaq(expandedFaq === i ? false : i)}
                sx={{ mb: 1 }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))
          )}
        </Container>
      </Box>

      {/* Still need help */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: theme.palette.text.primary,
                mb: 2,
              }}
            >
              Still Need Help?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                mb: 3,
                lineHeight: 1.7,
              }}
            >
              Can't find what you're looking for? Our support team is here to help you get the most
              out of BizOps AI.
            </Typography>
            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to="/contact"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2.5,
                background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #4338CA 0%, #4F46E5 100%)',
                },
              }}
            >
              Contact Support
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
