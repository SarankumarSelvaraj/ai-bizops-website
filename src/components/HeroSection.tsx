import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
  alpha,
  Chip,
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link as RouterLink } from 'react-router-dom';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 42000 },
  { month: 'Feb', revenue: 48000 },
  { month: 'Mar', revenue: 51000 },
  { month: 'Apr', revenue: 58000 },
  { month: 'May', revenue: 62000 },
  { month: 'Jun', revenue: 71000 },
  { month: 'Jul', revenue: 78000 },
  { month: 'Aug', revenue: 85000 },
];

const DashboardMockup: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        borderRadius: '16px',
        border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : '#E2E8F0'}`,
        backgroundColor: theme.palette.background.paper,
        boxShadow: isDark
          ? '0 25px 50px -12px rgba(0,0,0,0.8)'
          : '0 25px 50px -12px rgba(79,70,229,0.18)',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Window chrome */}
      <Box
        sx={{
          px: 2,
          py: 1.25,
          backgroundColor: isDark ? '#1F2937' : '#F1F5F9',
          borderBottom: `1px solid ${theme.palette.divider}`,
          display: 'flex',
          alignItems: 'center',
          gap: 0.75,
        }}
      >
        {['#EF4444', '#F59E0B', '#10B981'].map((c) => (
          <Box key={c} sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: c }} />
        ))}
        <Box
          sx={{
            flex: 1,
            mx: 2,
            height: 22,
            borderRadius: '6px',
            backgroundColor: isDark ? '#374151' : '#E2E8F0',
            display: 'flex',
            alignItems: 'center',
            px: 1.5,
          }}
        >
          <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontSize: '0.68rem' }}>
            app.bizops.ai/dashboard
          </Typography>
        </Box>
      </Box>

      {/* Dashboard body */}
      <Box sx={{ p: { xs: 2, sm: 2.5 } }}>
        {/* Stats row */}
        <Box sx={{ display: 'flex', gap: 1.5, mb: 2, flexWrap: 'wrap' }}>
          {[
            { label: 'Revenue', value: '$85,240', change: '+12.5%', color: '#10B981' },
            { label: 'Active Deals', value: '147', change: '+8.2%', color: '#4F46E5' },
            { label: 'Customers', value: '1,284', change: '+4.1%', color: '#0EA5E9' },
          ].map((stat) => (
            <Box
              key={stat.label}
              sx={{
                flex: '1 1 calc(33% - 8px)',
                minWidth: 90,
                p: { xs: 1.25, sm: 1.5 },
                borderRadius: '10px',
                backgroundColor: isDark ? alpha('#FFFFFF', 0.04) : '#F8FAFC',
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mb: 0.5, fontSize: '0.68rem' }}>
                {stat.label}
              </Typography>
              <Typography sx={{ fontWeight: 700, fontSize: { xs: '0.85rem', sm: '1rem' }, color: theme.palette.text.primary, lineHeight: 1.2 }}>
                {stat.value}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3, mt: 0.25 }}>
                <TrendingUpIcon sx={{ fontSize: 11, color: stat.color }} />
                <Typography sx={{ fontSize: '0.68rem', color: stat.color, fontWeight: 600 }}>{stat.change}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Chart */}
        <Box
          sx={{
            borderRadius: '10px',
            border: `1px solid ${theme.palette.divider}`,
            p: { xs: 1.5, sm: 2 },
            backgroundColor: isDark ? alpha('#FFFFFF', 0.02) : '#FAFBFF',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '0.8rem', color: theme.palette.text.primary }}>
              Revenue Trend
            </Typography>
            <Chip label="↑ 28% YTD" size="small" sx={{ height: 20, fontSize: '0.65rem', backgroundColor: alpha('#10B981', 0.12), color: '#10B981', fontWeight: 700, '& .MuiChip-label': { px: 1 } }} />
          </Box>
          <ResponsiveContainer width="100%" height={120}>
            <AreaChart data={revenueData} margin={{ top: 2, right: 4, left: -30, bottom: 0 }}>
              <defs>
                <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? 'rgba(255,255,255,0.05)' : '#F1F5F9'} />
              <XAxis dataKey="month" tick={{ fontSize: 9, fill: isDark ? '#6B7280' : '#94A3B8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 9, fill: isDark ? '#6B7280' : '#94A3B8' }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 8,
                  fontSize: 11,
                }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#4F46E5" strokeWidth={2} fill="url(#heroGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </Box>

        {/* AI suggestion pill */}
        <Box
          sx={{
            mt: 2,
            p: 1.25,
            borderRadius: '10px',
            background: `linear-gradient(135deg, ${alpha('#4F46E5', 0.1)} 0%, ${alpha('#0EA5E9', 0.1)} 100%)`,
            border: `1px solid ${alpha('#4F46E5', 0.2)}`,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 1,
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 24,
              borderRadius: '6px',
              background: 'linear-gradient(135deg, #4F46E5, #0EA5E9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              mt: 0.1,
            }}
          >
            <Typography sx={{ fontSize: '0.7rem', color: '#fff' }}>✦</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: '0.72rem', fontWeight: 600, color: theme.palette.text.primary, mb: 0.25 }}>
              AI Insight
            </Typography>
            <Typography sx={{ fontSize: '0.68rem', color: theme.palette.text.secondary, lineHeight: 1.4 }}>
              3 leads in "Proposal" stage haven't been updated in 7 days. Send a follow-up?
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      component="section"
      aria-label="Hero"
      sx={{
        position: 'relative',
        pt: { xs: 14, md: 18 },
        pb: { xs: 8, md: 12 },
        overflow: 'hidden',
        background: isDark
          ? 'linear-gradient(135deg, #0B0F19 0%, #111827 50%, #0B0F19 100%)'
          : 'linear-gradient(135deg, #EEF2FF 0%, #F0F9FF 50%, #F8FAFC 100%)',
      }}
    >
      {/* Animated gradient blobs */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: { xs: '120%', md: '80%' },
          height: '70%',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(ellipse at center, rgba(79,70,229,0.18) 0%, transparent 70%)'
            : 'radial-gradient(ellipse at center, rgba(79,70,229,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          animation: 'pulse 6s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { opacity: 1, transform: 'translateX(-50%) scale(1)' },
            '50%': { opacity: 0.7, transform: 'translateX(-50%) scale(1.05)' },
          },
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '40%',
          height: '50%',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(ellipse, rgba(14,165,233,0.14) 0%, transparent 70%)'
            : 'radial-gradient(ellipse, rgba(14,165,233,0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* Left: Text content */}
          <Box sx={{ flex: '1 1 50%', maxWidth: { md: '52%' } }}>
            {/* Badge */}
            <Box sx={{ mb: 3 }}>
              <Chip
                label="✦ Powered by OpenAI & Google Gemini"
                size="small"
                sx={{
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(79,70,229,0.25), rgba(14,165,233,0.2))'
                    : 'linear-gradient(135deg, rgba(79,70,229,0.1), rgba(14,165,233,0.08))',
                  border: `1px solid ${isDark ? 'rgba(79,70,229,0.4)' : 'rgba(79,70,229,0.25)'}`,
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  fontSize: '0.78rem',
                  height: 30,
                  borderRadius: '20px',
                }}
              />
            </Box>

            {/* Headline */}
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.2rem', lg: '3.6rem' },
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                mb: 2.5,
                background: isDark
                  ? 'linear-gradient(135deg, #F9FAFB 0%, #A5B4FC 100%)'
                  : 'linear-gradient(135deg, #0F172A 0%, #4F46E5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Run Your Business on Autopilot with AI
            </Typography>

            {/* Sub-headline */}
            <Typography
              variant="h6"
              component="p"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 400,
                lineHeight: 1.7,
                fontSize: { xs: '1rem', md: '1.1rem' },
                mb: 4,
                maxWidth: 520,
              }}
            >
              BizOps AI is the all-in-one SaaS platform that automates CRM, sales pipeline,
              invoicing, tasks, and operations — powered by OpenAI and Google Gemini.
            </Typography>

            {/* CTAs */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 5 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={RouterLink}
                to="/register"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  borderRadius: 2.5,
                  py: 1.5,
                  px: 3.5,
                  fontSize: '1rem',
                  background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
                  boxShadow: '0 4px 14px rgba(79,70,229,0.4)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #4338CA 0%, #4F46E5 100%)',
                    boxShadow: '0 6px 20px rgba(79,70,229,0.5)',
                  },
                }}
              >
                Start Free Trial
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayCircleOutlineIcon />}
                sx={{
                  borderRadius: 2.5,
                  py: 1.5,
                  px: 3,
                  fontSize: '1rem',
                  borderColor: theme.palette.divider,
                  color: theme.palette.text.primary,
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    backgroundColor: alpha(theme.palette.primary.main, 0.06),
                  },
                }}
              >
                Watch Demo
              </Button>
            </Stack>

            {/* Trust signals */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
              {[
                'No credit card required',
                '14-day free trial',
                'Cancel anytime',
              ].map((text) => (
                <Box key={text} sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                  <CheckCircleIcon sx={{ fontSize: 15, color: '#10B981' }} />
                  <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontWeight: 500, fontSize: '0.8rem' }}>
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right: Dashboard mockup */}
          <Box
            sx={{
              flex: '1 1 50%',
              width: '100%',
              maxWidth: { xs: 480, md: '100%' },
              mx: 'auto',
            }}
          >
            <DashboardMockup />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
