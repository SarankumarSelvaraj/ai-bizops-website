import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  useTheme,
  alpha,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Head of Operations',
    company: 'Luminary Tech',
    initials: 'SC',
    avatarColor: '#4F46E5',
    rating: 5,
    quote:
      'BizOps AI completely transformed how we manage our pipeline. The AI copilot alone saves us 3+ hours every day — it surfaces the right deals at the right time and drafts follow-ups before I even think to ask.',
  },
  {
    name: 'Marcus Rivera',
    role: 'Founder & CEO',
    company: 'Riviera Growth Co.',
    initials: 'MR',
    avatarColor: '#0EA5E9',
    rating: 5,
    quote:
      'We replaced 4 different tools with BizOps AI. CRM, invoicing, automations, and reporting — all in one place. The onboarding took less than an hour and our team adopted it immediately.',
  },
  {
    name: 'Priya Anand',
    role: 'VP of Sales',
    company: 'NexaScale',
    initials: 'PA',
    avatarColor: '#10B981',
    rating: 5,
    quote:
      'The Kanban pipeline view is exactly what my sales team needed. Deal tracking, automated follow-ups, and AI-generated insights helped us close 40% more deals in Q3. This is the future of CRM.',
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <Box sx={{ display: 'flex', gap: 0.25 }}>
    {Array.from({ length: 5 }).map((_, i) => (
      <StarIcon
        key={i}
        sx={{
          fontSize: 16,
          color: i < rating ? '#F59E0B' : '#E2E8F0',
        }}
        aria-hidden="true"
      />
    ))}
    <Box component="span" sx={{ position: 'absolute', left: -9999, width: 1, overflow: 'hidden' }}>
      {rating} out of 5 stars
    </Box>
  </Box>
);

export const TestimonialsSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      component="section"
      aria-labelledby="testimonials-heading"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
          <Typography
            variant="overline"
            sx={{ color: theme.palette.primary.main, fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.75rem', display: 'block', mb: 1.5 }}
          >
            Testimonials
          </Typography>
          <Typography
            id="testimonials-heading"
            component="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.4rem' },
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: theme.palette.text.primary,
              mb: 2,
            }}
          >
            Loved by Operators Worldwide
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.secondary, maxWidth: 480, mx: 'auto', lineHeight: 1.7 }}
          >
            See how teams are using BizOps AI to streamline operations and accelerate growth.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {testimonials.map((t) => (
            <Grid item xs={12} md={4} key={t.name}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: isDark
                      ? `0 12px 32px -8px rgba(0,0,0,0.5)`
                      : `0 12px 32px -8px rgba(79,70,229,0.15)`,
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 2.5, sm: 3 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Stars */}
                  <Box sx={{ mb: 2 }}>
                    <StarRating rating={t.rating} />
                  </Box>

                  {/* Quote */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.primary,
                      lineHeight: 1.75,
                      fontStyle: 'italic',
                      flex: 1,
                      mb: 3,
                      fontSize: '0.92rem',
                      '&::before': { content: '"\\201C"', color: alpha(theme.palette.primary.main, 0.5), fontStyle: 'normal', fontSize: '1.5rem', lineHeight: 0, verticalAlign: '-0.4em', mr: 0.3 },
                      '&::after': { content: '"\\201D"', color: alpha(theme.palette.primary.main, 0.5), fontStyle: 'normal', fontSize: '1.5rem', lineHeight: 0, verticalAlign: '-0.4em', ml: 0.3 },
                    }}
                  >
                    {t.quote}
                  </Typography>

                  {/* Author */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      pt: 2,
                      borderTop: `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Avatar
                      aria-label={`${t.name}'s avatar`}
                      sx={{
                        width: 42,
                        height: 42,
                        backgroundColor: t.avatarColor,
                        fontSize: '0.85rem',
                        fontWeight: 700,
                      }}
                    >
                      {t.initials}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 700, color: theme.palette.text.primary, fontSize: '0.875rem' }}
                      >
                        {t.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: theme.palette.text.secondary }}
                      >
                        {t.role} · {t.company}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
