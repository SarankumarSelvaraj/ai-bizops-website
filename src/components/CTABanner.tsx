import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  alpha,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { Link as RouterLink } from 'react-router-dom';

export const CTABanner: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      aria-labelledby="cta-heading"
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(135deg, #3730A3 0%, #4F46E5 40%, #0EA5E9 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative overlays */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.06) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />
      {/* Grid dots pattern */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.06,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <Typography
          id="cta-heading"
          component="h2"
          sx={{
            fontSize: { xs: '1.9rem', sm: '2.4rem', md: '2.8rem' },
            fontWeight: 800,
            letterSpacing: '-0.025em',
            color: '#FFFFFF',
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          Ready to transform how your business operates?
        </Typography>
        <Typography
          sx={{
            color: 'rgba(255,255,255,0.75)',
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.7,
            mb: 4,
            maxWidth: 520,
            mx: 'auto',
          }}
        >
          Join 500+ businesses already running on autopilot. Set up in minutes, not months.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center',
            mb: 2.5,
          }}
        >
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/register"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: 2.5,
              py: 1.5,
              px: 4,
              fontSize: '1rem',
              fontWeight: 700,
              backgroundColor: '#FFFFFF',
              color: '#4F46E5',
              boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
              '&:hover': {
                backgroundColor: alpha('#FFFFFF', 0.92),
                boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                transform: 'translateY(-1px)',
              },
              transition: 'all 0.2s',
            }}
          >
            Start Free Trial
          </Button>
        </Box>

        <Box
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}
        >
          <LockOpenOutlinedIcon sx={{ fontSize: 15, color: 'rgba(255,255,255,0.6)' }} />
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem' }}>
            No credit card required · 14-day free trial · Cancel anytime
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
