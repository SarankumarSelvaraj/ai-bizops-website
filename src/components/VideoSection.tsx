import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  alpha,
  IconButton,
} from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export const VideoSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
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
            See It In Action
          </Typography>
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
            Watch How BizOps AI Works
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
            See how easy it is to manage your entire business in one powerful platform
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: isDark
              ? '0 25px 50px -12px rgba(0,0,0,0.8)'
              : '0 25px 50px -12px rgba(79,70,229,0.25)',
            maxWidth: 900,
            mx: 'auto',
            aspectRatio: '16/9',
            backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          {/* Video Thumbnail/Placeholder */}
          {!isPlaying ? (
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `linear-gradient(135deg, ${alpha('#4F46E5', 0.9)} 0%, ${alpha('#0EA5E9', 0.8)} 100%)`,
                cursor: 'pointer',
              }}
              onClick={() => setIsPlaying(true)}
            >
              <Box
                component="img"
                src="/mockup-placeholder.svg"
                alt="BizOps AI Demo"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.3,
                }}
              />
              <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <IconButton
                  sx={{
                    width: 80,
                    height: 80,
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,1)',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.3s ease',
                    mb: 2,
                  }}
                >
                  <PlayCircleIcon sx={{ fontSize: 48, color: '#4F46E5' }} />
                </IconButton>
                <Typography
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  }}
                >
                  Watch 2-Minute Demo
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#000',
              }}
            >
              {/* Placeholder for actual video */}
              <Typography sx={{ color: 'white' }}>
                Video player would be embedded here (YouTube/Vimeo)
              </Typography>
            </Box>
          )}
        </Box>

        {/* Video features */}
        <Box
          sx={{
            mt: 6,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          {[
            '2-minute overview',
            'Real customer workflows',
            'AI features in action',
            'No signup required',
          ].map((feature) => (
            <Box
              key={feature}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: theme.palette.primary.main,
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}
              >
                {feature}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
