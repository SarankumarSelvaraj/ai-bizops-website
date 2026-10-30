import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  alpha,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  uptime: string;
  responseTime?: string;
}

const services: ServiceStatus[] = [
  { name: 'API', status: 'operational', uptime: '99.99%', responseTime: '120ms' },
  { name: 'Web Application', status: 'operational', uptime: '99.98%', responseTime: '85ms' },
  { name: 'AI Copilot (OpenAI)', status: 'operational', uptime: '99.95%', responseTime: '450ms' },
  { name: 'AI Copilot (Gemini)', status: 'operational', uptime: '99.93%', responseTime: '380ms' },
  { name: 'Database', status: 'operational', uptime: '99.99%' },
  { name: 'Email Delivery', status: 'operational', uptime: '99.97%' },
  { name: 'File Storage', status: 'operational', uptime: '99.98%' },
  { name: 'Payment Processing', status: 'operational', uptime: '99.96%' },
];

const incidents = [
  {
    date: 'Jan 15, 2025',
    title: 'Scheduled Maintenance - Database Upgrade',
    description:
      'We performed scheduled maintenance to upgrade our database infrastructure. The platform was unavailable for 15 minutes from 2:00 AM - 2:15 AM EST.',
    status: 'resolved' as const,
    duration: '15 minutes',
  },
  {
    date: 'Jan 8, 2025',
    title: 'Intermittent API Slowness',
    description:
      'Some users experienced slower API response times due to increased traffic. We scaled our infrastructure and resolved the issue within 30 minutes.',
    status: 'resolved' as const,
    duration: '30 minutes',
  },
  {
    date: 'Dec 20, 2024',
    title: 'OpenAI API Rate Limit',
    description:
      'AI Copilot responses were delayed for approximately 45 minutes due to rate limiting from OpenAI. We increased our quota and implemented better caching.',
    status: 'resolved' as const,
    duration: '45 minutes',
  },
];

const getStatusColor = (status: ServiceStatus['status']) => {
  switch (status) {
    case 'operational':
      return '#10B981';
    case 'degraded':
      return '#F59E0B';
    case 'outage':
      return '#EF4444';
  }
};

const getStatusIcon = (status: ServiceStatus['status']) => {
  switch (status) {
    case 'operational':
      return <CheckCircleIcon sx={{ fontSize: 18 }} />;
    case 'degraded':
      return <WarningIcon sx={{ fontSize: 18 }} />;
    case 'outage':
      return <ErrorIcon sx={{ fontSize: 18 }} />;
  }
};

const getStatusLabel = (status: ServiceStatus['status']) => {
  switch (status) {
    case 'operational':
      return 'Operational';
    case 'degraded':
      return 'Degraded Performance';
    case 'outage':
      return 'Service Outage';
  }
};

export const StatusPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const allOperational = services.every((s) => s.status === 'operational');

  return (
    <Box>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          pt: { xs: 14, md: 18 },
          pb: { xs: 6, md: 8 },
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
            System Status
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
            BizOps AI Status
          </Typography>

          {/* Overall status indicator */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.5,
              px: 3,
              py: 1.5,
              borderRadius: 3,
              backgroundColor: alpha(allOperational ? '#10B981' : '#F59E0B', 0.1),
              border: `1px solid ${alpha(allOperational ? '#10B981' : '#F59E0B', 0.3)}`,
            }}
          >
            {allOperational ? (
              <CheckCircleIcon sx={{ fontSize: 24, color: '#10B981' }} />
            ) : (
              <WarningIcon sx={{ fontSize: 24, color: '#F59E0B' }} />
            )}
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '1rem',
                color: allOperational ? '#10B981' : '#F59E0B',
              }}
            >
              {allOperational ? 'All Systems Operational' : 'Some Systems Experiencing Issues'}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Services Status */}
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
            Service Status
          </Typography>

          <Card>
            <CardContent sx={{ p: 0 }}>
              {services.map((service, index) => (
                <Box
                  key={service.name}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: { xs: 2.5, sm: 3 },
                    borderBottom:
                      index < services.length - 1 ? `1px solid ${theme.palette.divider}` : 'none',
                    flexWrap: 'wrap',
                    gap: 2,
                  }}
                >
                  <Box sx={{ flex: '1 1 auto', minWidth: 200 }}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        fontSize: '1rem',
                        mb: 0.5,
                      }}
                    >
                      {service.name}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary, fontSize: '0.85rem' }}
                      >
                        Uptime: {service.uptime}
                      </Typography>
                      {service.responseTime && (
                        <Typography
                          variant="body2"
                          sx={{ color: theme.palette.text.secondary, fontSize: '0.85rem' }}
                        >
                          Response: {service.responseTime}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                  <Chip
                    icon={getStatusIcon(service.status)}
                    label={getStatusLabel(service.status)}
                    sx={{
                      backgroundColor: alpha(getStatusColor(service.status), 0.1),
                      color: getStatusColor(service.status),
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      '& .MuiChip-icon': {
                        color: getStatusColor(service.status),
                      },
                    }}
                  />
                </Box>
              ))}
            </CardContent>
          </Card>

          {/* Uptime stats */}
          <Box
            sx={{
              mt: 4,
              p: 3,
              borderRadius: 2,
              backgroundColor: alpha('#10B981', 0.08),
              border: `1px solid ${alpha('#10B981', 0.2)}`,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <TrendingUpIcon sx={{ fontSize: 32, color: '#10B981' }} />
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  fontSize: '1rem',
                  mb: 0.5,
                }}
              >
                99.97% Uptime (Last 90 Days)
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                We're committed to keeping BizOps AI available and performant 24/7.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Incident History */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: theme.palette.background.default,
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
            Recent Incidents
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {incidents.map((incident, index) => (
              <Card key={index}>
                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: 2,
                      mb: 1.5,
                      flexWrap: 'wrap',
                    }}
                  >
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: theme.palette.text.secondary,
                          display: 'block',
                          mb: 0.5,
                          fontSize: '0.75rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {incident.date}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                          fontSize: '1.05rem',
                        }}
                      >
                        {incident.title}
                      </Typography>
                    </Box>
                    <Chip
                      label="Resolved"
                      size="small"
                      sx={{
                        backgroundColor: alpha('#10B981', 0.1),
                        color: '#10B981',
                        fontWeight: 600,
                        fontSize: '0.7rem',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.7,
                      mb: 1,
                    }}
                  >
                    {incident.description}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.text.disabled,
                      fontSize: '0.75rem',
                    }}
                  >
                    Duration: {incident.duration}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Subscribe to updates */}
          <Box
            sx={{
              mt: 6,
              p: 4,
              borderRadius: 3,
              border: `1px solid ${theme.palette.divider}`,
              backgroundColor: alpha(theme.palette.primary.main, 0.04),
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: theme.palette.text.primary,
                mb: 1,
              }}
            >
              Get Status Updates
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                mb: 2.5,
                maxWidth: 480,
                mx: 'auto',
              }}
            >
              Subscribe to get email notifications about system incidents, maintenance windows, and
              status changes.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
              }}
            >
              Coming soon: Status notifications via email and Slack
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
