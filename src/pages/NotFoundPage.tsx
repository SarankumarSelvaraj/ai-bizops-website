import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  alpha,
  Stack,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';

const popularLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Sign Up', href: '/register' },
];

export const NotFoundPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 8, md: 10 },
        background: isDark
          ? 'linear-gradient(135deg, #0B0F19 0%, #111827 50%, #0B0F19 100%)'
          : 'linear-gradient(135deg, #EEF2FF 0%, #F0F9FF 50%, #F8FAFC 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: '60%',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(ellipse, rgba(79,70,229,0.12) 0%, transparent 70%)'
            : 'radial-gradient(ellipse, rgba(79,70,229,0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          animation: 'pulse 6s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
            '50%': { opacity: 0.7, transform: 'translate(-50%, -50%) scale(1.1)' },
          },
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* 404 Number */}
        <Box sx={{ mb: 3 }}>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '6rem', sm: '8rem', md: '10rem' },
              fontWeight: 900,
              lineHeight: 1,
              background: isDark
                ? 'linear-gradient(135deg, #4F46E5 0%, #0EA5E9 100%)'
                : 'linear-gradient(135deg, #4F46E5 0%, #0EA5E9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.05em',
              mb: 2,
            }}
          >
            404
          </Typography>
        </Box>

        {/* Icon */}
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${alpha('#4F46E5', isDark ? 0.15 : 0.1)} 0%, ${alpha(
              '#0EA5E9',
              isDark ? 0.1 : 0.05
            )} 100%)`,
            border: `1px solid ${alpha('#4F46E5', isDark ? 0.25 : 0.15)}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 3,
          }}
        >
          <SearchIcon sx={{ fontSize: 36, color: '#4F46E5' }} />
        </Box>

        {/* Message */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 800,
            color: theme.palette.text.primary,
            mb: 2,
            fontSize: { xs: '1.5rem', sm: '2rem' },
          }}
        >
          Page Not Found
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            mb: 5,
            fontSize: '1.05rem',
            lineHeight: 1.7,
            maxWidth: 480,
            mx: 'auto',
          }}
        >
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or the URL might be incorrect.
        </Typography>

        {/* Action buttons */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          sx={{ mb: 6 }}
        >
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/"
            startIcon={<HomeIcon />}
            sx={{
              borderRadius: 2.5,
              py: 1.5,
              px: 3.5,
              background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
              boxShadow: '0 4px 14px rgba(79,70,229,0.4)',
              '&:hover': {
                background: 'linear-gradient(135deg, #4338CA 0%, #4F46E5 100%)',
                boxShadow: '0 6px 20px rgba(79,70,229,0.5)',
              },
            }}
          >
            Go Home
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => window.history.back()}
            startIcon={<ArrowBackIcon />}
            sx={{
              borderRadius: 2.5,
              py: 1.5,
              px: 3.5,
              borderColor: theme.palette.divider,
              color: theme.palette.text.primary,
              '&:hover': {
                borderColor: theme.palette.primary.main,
                backgroundColor: alpha(theme.palette.primary.main, 0.06),
              },
            }}
          >
            Go Back
          </Button>
        </Stack>

        {/* Popular links */}
        <Box>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              mb: 2,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontSize: '0.75rem',
              fontWeight: 600,
            }}
          >
            Popular Pages
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1.5,
              justifyContent: 'center',
            }}
          >
            {popularLinks.map((link) => (
              <Button
                key={link.label}
                component={RouterLink}
                to={link.href}
                variant="text"
                size="small"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  px: 2,
                  py: 0.75,
                  borderRadius: 2,
                  backgroundColor: isDark
                    ? alpha('#FFFFFF', 0.04)
                    : alpha('#000000', 0.02),
                  '&:hover': {
                    color: theme.palette.primary.main,
                    backgroundColor: alpha(theme.palette.primary.main, 0.08),
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Help text */}
        <Box sx={{ mt: 6, pt: 4, borderTop: `1px solid ${theme.palette.divider}` }}>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            Need help? Contact us at{' '}
            <Box
              component={RouterLink}
              to="/contact"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              support@bizops.ai
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
