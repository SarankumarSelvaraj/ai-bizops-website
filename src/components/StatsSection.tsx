import React from 'react';
import { Box, Container, Typography, useTheme, Grid } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';

const stats = [
  {
    icon: <BusinessIcon sx={{ fontSize: 32 }} />,
    value: '500+',
    label: 'Active Businesses',
    color: '#4F46E5',
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 32 }} />,
    value: '$50M+',
    label: 'Revenue Managed',
    color: '#10B981',
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 32 }} />,
    value: '98%',
    label: 'Customer Satisfaction',
    color: '#0EA5E9',
  },
  {
    icon: <PublicIcon sx={{ fontSize: 32 }} />,
    value: '15+',
    label: 'Countries Worldwide',
    color: '#8B5CF6',
  },
];

export const StatsSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.4rem' },
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: theme.palette.text.primary,
              mb: 2,
            }}
          >
            Trusted by Businesses Worldwide
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 560,
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            Join hundreds of companies using BizOps AI to streamline operations and accelerate growth
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {stats.map((stat) => (
            <Grid item xs={6} md={3} key={stat.label}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: isDark
                    ? 'rgba(255,255,255,0.02)'
                    : 'rgba(0,0,0,0.01)',
                  border: `1px solid ${theme.palette.divider}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: isDark
                      ? '0 12px 32px -8px rgba(0,0,0,0.4)'
                      : '0 12px 32px -8px rgba(0,0,0,0.08)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    backgroundColor: `${stat.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    color: stat.color,
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    fontWeight: 800,
                    color: theme.palette.text.primary,
                    lineHeight: 1,
                    mb: 1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
