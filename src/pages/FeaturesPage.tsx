import React from 'react';
import { Box, Container, Typography, useTheme, alpha, Card, CardContent } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FolderIcon from '@mui/icons-material/Folder';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupIcon from '@mui/icons-material/Group';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { CTABanner } from '../components/CTABanner';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string[];
  color: string;
}

const features: Feature[] = [
  {
    icon: <DashboardIcon sx={{ fontSize: 32 }} />,
    title: 'Dashboard',
    description:
      'Your command center for all business operations. Get real-time insights into revenue, pipeline health, customer activity, and team performance — all in one glance.',
    bullets: [
      'Customizable widgets and KPI cards',
      'Real-time revenue and deal tracking',
      'AI-generated insights and recommendations',
      'Quick actions to create tasks, invoices, and leads',
      'Activity feed showing team updates',
    ],
    color: '#4F46E5',
  },
  {
    icon: <PeopleAltIcon sx={{ fontSize: 32 }} />,
    title: 'Customers (CRM)',
    description:
      'Build deep, lasting relationships with 360° customer profiles. Track every interaction, note, tag, and communication in one unified timeline.',
    bullets: [
      'Unlimited contact records with custom fields',
      'Full activity timeline (calls, emails, meetings, notes)',
      'Custom tags and segmentation',
      'Attach documents, contracts, and files',
      'Link customers to deals, invoices, and tasks',
    ],
    color: '#0EA5E9',
  },
  {
    icon: <ViewKanbanIcon sx={{ fontSize: 32 }} />,
    title: 'Leads Pipeline (Kanban)',
    description:
      'Visual deal tracking with drag-and-drop simplicity. Move leads through custom stages, track deal values, and close faster with automated nudges.',
    bullets: [
      'Customizable pipeline stages (Lead, Qualified, Proposal, Negotiation, Closed)',
      'Deal cards with value, close date, and owner',
      'Drag & drop to update stage',
      'Weighted pipeline forecasting',
      'AI suggestions for stale deals',
    ],
    color: '#8B5CF6',
  },
  {
    icon: <CheckBoxIcon sx={{ fontSize: 32 }} />,
    title: 'Tasks',
    description:
      'Never miss a follow-up. Create, assign, and track tasks linked to customers, deals, or standalone. Get reminders and let AI suggest priorities.',
    bullets: [
      'Create tasks manually or via AI Copilot',
      'Assign to team members with due dates',
      'Link tasks to customers or deals for context',
      'Recurring task templates',
      'Task priorities and status tracking',
    ],
    color: '#10B981',
  },
  {
    icon: <CalendarMonthIcon sx={{ fontSize: 32 }} />,
    title: 'Calendar',
    description:
      'Sync your schedule with your operations. Book meetings, track deadlines, and see all tasks and events in a unified calendar view.',
    bullets: [
      'Integrated task and event calendar',
      'Sync with Google Calendar and Outlook (coming soon)',
      'Meeting reminders and prep notes',
      'Customer-linked events',
      'Team availability view',
    ],
    color: '#F59E0B',
  },
  {
    icon: <ReceiptLongIcon sx={{ fontSize: 32 }} />,
    title: 'Invoices',
    description:
      'Generate professional invoices in seconds. Link them to deals or customers, add payment links, send via email, and export as PDF.',
    bullets: [
      'Auto-generate invoices from deal values',
      'Customizable invoice templates',
      'Stripe/PayPal payment link integration',
      'PDF export and email delivery',
      'Payment status tracking (Paid, Pending, Overdue)',
    ],
    color: '#EF4444',
  },
  {
    icon: <FolderIcon sx={{ fontSize: 32 }} />,
    title: 'Documents',
    description:
      'Centralized file storage for contracts, proposals, and agreements. Attach documents to customers or deals for instant context.',
    bullets: [
      'Upload PDFs, Word docs, spreadsheets, and images',
      'Tag and organize by customer or deal',
      'Version control and audit trail',
      'Secure cloud storage with encryption',
      'Share links with expiration dates',
    ],
    color: '#06B6D4',
  },
  {
    icon: <AccountTreeIcon sx={{ fontSize: 32 }} />,
    title: 'Automations',
    description:
      'Build no-code workflows to automate repeatable processes. Set triggers and actions — let BizOps AI handle the busywork.',
    bullets: [
      'Trigger on events (deal stage change, task completion, invoice sent)',
      'Actions: send email, create task, update field, notify team',
      'Multi-step conditional logic',
      'Pre-built templates for common workflows',
      'Activity log for debugging automations',
    ],
    color: '#F59E0B',
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: 32 }} />,
    title: 'AI Assistant (Copilot)',
    description:
      'Your AI-powered operations co-pilot. Ask questions in plain English — it analyzes data, creates records, drafts content, and takes action instantly.',
    bullets: [
      'Powered by OpenAI GPT-4 and Google Gemini',
      'Tool calling: create tasks, find leads, analyze revenue',
      'Context-aware: understands your customers and pipeline',
      'Draft emails, invoices, and follow-ups',
      'Natural language queries (e.g., "Show top 10 deals closing this month")',
    ],
    color: '#4F46E5',
  },
  {
    icon: <BarChartIcon sx={{ fontSize: 32 }} />,
    title: 'Analytics & Reporting',
    description:
      'Beautiful, real-time dashboards that surface the metrics that matter. Track revenue trends, pipeline velocity, customer health, and team performance.',
    bullets: [
      'Pre-built reports: revenue, pipeline, customer activity, team performance',
      'Custom charts and graphs (line, bar, pie, area)',
      'Export reports as PDF or CSV',
      'Time-range filters (day, week, month, quarter, year)',
      'AI-generated insights and anomaly detection',
    ],
    color: '#EF4444',
  },
  {
    icon: <GroupIcon sx={{ fontSize: 32 }} />,
    title: 'Team Members',
    description:
      'Invite your team, assign roles, and collaborate seamlessly. Control permissions, track activity, and see who\'s working on what.',
    bullets: [
      'Role-based access control (Admin, Manager, Member)',
      'Invite unlimited users (plan-dependent)',
      'Activity log per user',
      'Assign tasks, deals, and customers to team members',
      'Real-time collaboration and notifications',
    ],
    color: '#8B5CF6',
  },
  {
    icon: <CreditCardIcon sx={{ fontSize: 32 }} />,
    title: 'Billing & Plan',
    description:
      'Transparent subscription management. Upgrade, downgrade, or cancel anytime. View invoices, update payment methods, and manage your plan.',
    bullets: [
      'Flexible plans: Starter, Growth, Enterprise',
      'Monthly or annual billing (save 20% annually)',
      'Secure payment via Stripe',
      'Download billing history and receipts',
      'Cancel anytime — no lock-in contracts',
    ],
    color: '#10B981',
  },
];

const FeatureSection: React.FC<{ feature: Feature; reverse: boolean }> = ({ feature, reverse }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: reverse ? 'row-reverse' : 'row' },
        alignItems: 'center',
        gap: { xs: 4, md: 8 },
        mb: { xs: 8, md: 12 },
      }}
    >
      {/* Icon card (placeholder for image) */}
      <Box sx={{ flex: '1 1 40%', width: '100%' }}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: { xs: 200, md: 280 },
            background: `linear-gradient(135deg, ${alpha(feature.color, isDark ? 0.15 : 0.08)} 0%, ${alpha(
              feature.color,
              isDark ? 0.08 : 0.04
            )} 100%)`,
            border: `1px solid ${alpha(feature.color, isDark ? 0.25 : 0.15)}`,
          }}
        >
          <Box sx={{ color: feature.color }}>{feature.icon}</Box>
        </Card>
      </Box>

      {/* Text content */}
      <Box sx={{ flex: '1 1 60%' }}>
        <Typography
          component="h3"
          sx={{
            fontSize: { xs: '1.5rem', md: '1.8rem' },
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: theme.palette.text.primary,
            mb: 1.5,
          }}
        >
          {feature.title}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.text.secondary,
            lineHeight: 1.7,
            mb: 3,
            fontSize: '1rem',
          }}
        >
          {feature.description}
        </Typography>
        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
          {feature.bullets.map((bullet) => (
            <Box component="li" key={bullet} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
              <CheckCircleIcon sx={{ fontSize: 18, color: feature.color, mt: 0.15, flexShrink: 0 }} />
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                {bullet}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export const FeaturesPage: React.FC = () => {
  const theme = useTheme();

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
            Features
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
            Every Tool Your Business Needs, All in One Place
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.7,
              fontSize: '1.05rem',
            }}
          >
            From CRM to invoicing to AI-powered automation, BizOps AI is the only platform you need to run your entire operation.
          </Typography>
        </Container>
      </Box>

      {/* Features list */}
      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Container maxWidth="lg">
          {features.map((feature, i) => (
            <FeatureSection key={feature.title} feature={feature} reverse={i % 2 === 1} />
          ))}
        </Container>
      </Box>

      <CTABanner />
    </Box>
  );
};
