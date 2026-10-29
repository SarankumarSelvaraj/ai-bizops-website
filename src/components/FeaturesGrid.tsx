import React, { useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  useTheme,
  alpha,
} from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BarChartIcon from '@mui/icons-material/BarChart';

const features = [
  {
    icon: <PsychologyIcon sx={{ fontSize: 28 }} />,
    title: 'AI Operations Copilot',
    description:
      'OpenAI & Gemini-powered assistant with tool calling. Create tasks, analyze revenue, find leads, draft invoices — all via natural language.',
    color: '#4F46E5',
    gradient: 'linear-gradient(135deg, rgba(79,70,229,0.12) 0%, rgba(99,102,241,0.06) 100%)',
  },
  {
    icon: <PeopleAltIcon sx={{ fontSize: 28 }} />,
    title: 'CRM & Customer Management',
    description:
      '360° customer profiles with full activity timeline, tags, notes, and communication history. Never lose context on a relationship.',
    color: '#0EA5E9',
    gradient: 'linear-gradient(135deg, rgba(14,165,233,0.12) 0%, rgba(56,189,248,0.06) 100%)',
  },
  {
    icon: <ViewKanbanIcon sx={{ fontSize: 28 }} />,
    title: 'Sales Pipeline (Kanban)',
    description:
      'Drag & drop leads across customizable stages. Track deal values, close dates, and pipeline velocity with real-time insights.',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(167,139,250,0.06) 100%)',
  },
  {
    icon: <ReceiptLongIcon sx={{ fontSize: 28 }} />,
    title: 'Smart Invoicing',
    description:
      'Auto-generate professional invoices from deals. Add payment links, send via email, export as PDF — all in a few clicks.',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(52,211,153,0.06) 100%)',
  },
  {
    icon: <AccountTreeIcon sx={{ fontSize: 28 }} />,
    title: 'Workflow Automations',
    description:
      'Build no-code trigger-action automations for repeatable processes. Assign tasks, send alerts, update records automatically.',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.12) 0%, rgba(251,191,36,0.06) 100%)',
  },
  {
    icon: <BarChartIcon sx={{ fontSize: 28 }} />,
    title: 'Analytics & Reporting',
    description:
      'Revenue trends, pipeline velocity, team performance, and customer health scores — all in beautiful, real-time dashboards.',
    color: '#EF4444',
    gradient: 'linear-gradient(135deg, rgba(239,68,68,0.12) 0%, rgba(248,113,113,0.06) 100%)',
  },
];

const FeatureCard: React.FC<(typeof features)[0] & { index: number }> = ({
  icon,
  title,
  description,
  color,
  gradient,
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Card
      sx={{
        height: '100%',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: isDark
            ? `0 12px 32px -8px rgba(0,0,0,0.6), 0 0 0 1px ${alpha(color, 0.3)}`
            : `0 12px 32px -8px ${alpha(color, 0.2)}, 0 0 0 1px ${alpha(color, 0.15)}`,
        },
      }}
    >
      <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
        {/* Icon */}
        <Box
          aria-hidden="true"
          sx={{
            width: 52,
            height: 52,
            borderRadius: '12px',
            background: gradient,
            border: `1px solid ${alpha(color, isDark ? 0.25 : 0.15)}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2.5,
            color: color,
          }}
        >
          {icon}
        </Box>

        <Typography
          component="h3"
          variant="h6"
          sx={{ fontWeight: 700, mb: 1, color: theme.palette.text.primary, fontSize: '1rem' }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export const FeaturesGrid: React.FC = () => {
  const theme = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      component="section"
      ref={sectionRef}
      id="features"
      aria-labelledby="features-heading"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        {/* Section header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
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
            id="features-heading"
            component="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.4rem' },
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: theme.palette.text.primary,
              mb: 2,
            }}
          >
            Everything Your Business Needs
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
            One platform to manage your customers, close deals, automate workflows, and grow
            revenue — with AI as your co-pilot.
          </Typography>
        </Box>

        {/* Cards grid */}
        <Grid container spacing={3}>
          {features.map((feature, i) => (
            <Grid item xs={12} sm={6} md={4} key={feature.title}>
              <FeatureCard {...feature} index={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
