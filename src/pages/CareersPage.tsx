import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  alpha,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlightIcon from '@mui/icons-material/Flight';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SchoolIcon from '@mui/icons-material/School';
import { CTABanner } from '../components/CTABanner';

const benefits = [
  {
    icon: <AttachMoneyIcon sx={{ fontSize: 28 }} />,
    title: 'Competitive Salary',
    description: 'Industry-leading compensation with equity options for all team members.',
    color: '#10B981',
  },
  {
    icon: <HealthAndSafetyIcon sx={{ fontSize: 28 }} />,
    title: 'Health & Wellness',
    description: 'Premium health, dental, and vision insurance for you and your family.',
    color: '#4F46E5',
  },
  {
    icon: <FlightIcon sx={{ fontSize: 28 }} />,
    title: 'Unlimited PTO',
    description: 'Take the time you need to recharge. We trust our team to manage their time.',
    color: '#0EA5E9',
  },
  {
    icon: <WorkOutlineIcon sx={{ fontSize: 28 }} />,
    title: 'Remote Flexible',
    description: 'Work from anywhere. Office in SF for those who prefer in-person.',
    color: '#8B5CF6',
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 28 }} />,
    title: 'Learning Budget',
    description: '$2,000/year for courses, conferences, and professional development.',
    color: '#F59E0B',
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 28 }} />,
    title: 'Work-Life Balance',
    description: 'No crunch culture. We believe in sustainable, long-term productivity.',
    color: '#EF4444',
  },
];

const openings = [
  {
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    location: 'Remote (US)',
    type: 'Full-time',
    salary: '$140k - $180k',
    description:
      'Build scalable features for our AI-powered operations platform using React, Node.js, and PostgreSQL.',
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote (US/EU)',
    type: 'Full-time',
    salary: '$120k - $150k',
    description:
      'Design beautiful, intuitive interfaces that help users run their businesses more effectively.',
  },
  {
    title: 'AI/ML Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$160k - $200k',
    description:
      'Build and optimize AI features using OpenAI, Gemini, and custom ML models for business automation.',
  },
  {
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Remote (US)',
    type: 'Full-time',
    salary: '$80k - $100k',
    description:
      'Help our customers succeed by onboarding, training, and ensuring they get maximum value from BizOps AI.',
  },
  {
    title: 'Technical Writer',
    department: 'Marketing',
    location: 'Remote',
    type: 'Contract',
    salary: '$60k - $80k',
    description:
      'Create clear, helpful documentation, guides, and blog posts for developers and business users.',
  },
];

export const CareersPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

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
        {/* Decorative blob */}
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
            Careers
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
            Join Us in Building the Future
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
            We're a small, fast-growing team building AI-powered tools that help businesses operate
            smarter. If you're passionate about product, design, and AI—we'd love to meet you.
          </Typography>
        </Container>
      </Box>

      {/* Benefits */}
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
            Why Work at BizOps AI?
          </Typography>
          <Grid container spacing={3}>
            {benefits.map((benefit) => (
              <Grid item xs={12} sm={6} md={4} key={benefit.title}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '12px',
                        background: `linear-gradient(135deg, ${alpha(benefit.color, isDark ? 0.15 : 0.1)} 0%, ${alpha(
                          benefit.color,
                          isDark ? 0.08 : 0.05
                        )} 100%)`,
                        border: `1px solid ${alpha(benefit.color, isDark ? 0.25 : 0.15)}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        color: benefit.color,
                      }}
                    >
                      {benefit.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: theme.palette.text.primary,
                        fontSize: '1rem',
                      }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}
                    >
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Open Positions */}
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
              mb: 1.5,
              textAlign: 'center',
            }}
          >
            Open Positions
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              textAlign: 'center',
              mb: 5,
              maxWidth: 560,
              mx: 'auto',
            }}
          >
            We're hiring across engineering, design, product, and customer success. Don't see a fit?
            Send us your resume anyway—we're always looking for talented people.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {openings.map((job) => (
              <Card key={job.title}>
                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      alignItems: { md: 'center' },
                      justifyContent: 'space-between',
                      gap: 2,
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            fontSize: '1.1rem',
                          }}
                        >
                          {job.title}
                        </Typography>
                        <Chip
                          label={job.type}
                          size="small"
                          sx={{
                            backgroundColor: alpha('#10B981', 0.1),
                            color: '#10B981',
                            fontWeight: 600,
                            fontSize: '0.7rem',
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 2,
                          mb: 1.5,
                          color: theme.palette.text.secondary,
                          fontSize: '0.875rem',
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <WorkOutlineIcon sx={{ fontSize: 16 }} />
                          <Typography variant="body2">{job.department}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <LocationOnIcon sx={{ fontSize: 16 }} />
                          <Typography variant="body2">{job.location}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <AttachMoneyIcon sx={{ fontSize: 16 }} />
                          <Typography variant="body2">{job.salary}</Typography>
                        </Box>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}
                      >
                        {job.description}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      component={RouterLink}
                      to="/contact"
                      sx={{
                        flexShrink: 0,
                        px: 3,
                        py: 1.25,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #4338CA 0%, #4F46E5 100%)',
                        },
                      }}
                    >
                      Apply Now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Don't see a fit */}
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
              Don't see the right role?
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
              We're always looking for talented people. Send us your resume and tell us what you'd
              love to work on.
            </Typography>
            <Button
              variant="outlined"
              component={RouterLink}
              to="/contact"
              sx={{
                borderRadius: 2,
                px: 3,
                py: 1.25,
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </Container>
      </Box>

      <CTABanner />
    </Box>
  );
};
