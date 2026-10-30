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
  Avatar,
} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CTABanner } from '../components/CTABanner';

const values = [
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 32 }} />,
    title: 'Innovation First',
    description: 'We push boundaries with AI technology to create tools that truly transform how businesses operate.',
    color: '#4F46E5',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 32 }} />,
    title: 'Customer Obsessed',
    description: 'Your success is our success. We listen, iterate, and build features that solve real business problems.',
    color: '#0EA5E9',
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 32 }} />,
    title: 'Growth Mindset',
    description: 'We believe in continuous improvement—for our product, our team, and our customers.',
    color: '#10B981',
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 32 }} />,
    title: 'Built with Care',
    description: 'Every feature is thoughtfully designed with attention to detail and user experience.',
    color: '#EF4444',
  },
];

const team = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO & Co-Founder',
    initials: 'SM',
    color: '#4F46E5',
    bio: '15 years building SaaS products. Previously led product at Salesforce.',
  },
  {
    name: 'Alex Chen',
    role: 'CTO & Co-Founder',
    initials: 'AC',
    color: '#0EA5E9',
    bio: 'Former AI engineer at Google. Stanford CS, MIT AI Lab.',
  },
  {
    name: 'Jordan Rivera',
    role: 'Head of Product',
    initials: 'JR',
    color: '#10B981',
    bio: 'Product leader with 10+ years at HubSpot and Notion.',
  },
  {
    name: 'Maya Patel',
    role: 'Head of Engineering',
    initials: 'MP',
    color: '#8B5CF6',
    bio: 'Full-stack expert. Previously built systems at Stripe.',
  },
];

const stats = [
  { label: 'Active Customers', value: '500+' },
  { label: 'Team Members', value: '25+' },
  { label: 'Countries', value: '15+' },
  { label: 'Year Founded', value: '2023' },
];

export const AboutPage: React.FC = () => {
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
            About Us
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
            Building the Future of Business Operations
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
            BizOps AI was founded in 2023 with a mission to help businesses run smarter, faster, and
            more efficiently with the power of artificial intelligence.
          </Typography>
        </Container>
      </Box>

      {/* Stats */}
      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: theme.palette.background.paper,
          borderTop: `1px solid ${theme.palette.divider}`,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    sx={{
                      fontSize: { xs: '2rem', md: '2.8rem' },
                      fontWeight: 800,
                      color: theme.palette.primary.main,
                      mb: 0.5,
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontSize: '0.75rem',
                      fontWeight: 600,
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

      {/* Story */}
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
              mb: 3,
              textAlign: 'center',
            }}
          >
            Our Story
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              lineHeight: 1.8,
              mb: 2.5,
              fontSize: '1rem',
            }}
          >
            We started BizOps AI after experiencing firsthand the pain of juggling multiple tools to
            run a business. CRM here, invoicing there, task management somewhere else—it was chaos.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              lineHeight: 1.8,
              mb: 2.5,
              fontSize: '1rem',
            }}
          >
            We knew there had to be a better way. With the rise of AI technologies like OpenAI's GPT
            and Google's Gemini, we saw an opportunity to build an all-in-one platform that not only
            centralizes your operations but also automates and intelligently assists you every step
            of the way.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              lineHeight: 1.8,
              fontSize: '1rem',
            }}
          >
            Today, BizOps AI helps over 500 businesses across 15 countries streamline their
            operations, close more deals, and focus on what really matters—growing their business.
          </Typography>
        </Container>
      </Box>

      {/* Values */}
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
            Our Values
          </Typography>
          <Grid container spacing={3}>
            {values.map((value) => (
              <Grid item xs={12} sm={6} md={3} key={value.title}>
                <Card sx={{ height: '100%', textAlign: 'center' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '16px',
                        background: `linear-gradient(135deg, ${alpha(value.color, isDark ? 0.15 : 0.1)} 0%, ${alpha(
                          value.color,
                          isDark ? 0.08 : 0.05
                        )} 100%)`,
                        border: `1px solid ${alpha(value.color, isDark ? 0.25 : 0.15)}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2.5,
                        color: value.color,
                      }}
                    >
                      {value.icon}
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
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team */}
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
            Meet Our Team
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
            A diverse group of builders, operators, and AI enthusiasts committed to transforming
            business operations.
          </Typography>
          <Grid container spacing={3}>
            {team.map((member) => (
              <Grid item xs={12} sm={6} md={3} key={member.name}>
                <Card sx={{ height: '100%', textAlign: 'center' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        mx: 'auto',
                        mb: 2,
                        backgroundColor: member.color,
                        fontSize: '1.5rem',
                        fontWeight: 700,
                      }}
                    >
                      {member.initials}
                    </Avatar>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                        fontSize: '1rem',
                        mb: 0.5,
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: member.color,
                        fontWeight: 600,
                        mb: 1.5,
                        fontSize: '0.85rem',
                      }}
                    >
                      {member.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        fontSize: '0.875rem',
                      }}
                    >
                      {member.bio}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <CTABanner />
    </Box>
  );
};
