import React from 'react';
import { Box, Container, Typography, useTheme, alpha } from '@mui/material';

const companies = [
  { name: 'Luminary Tech', abbr: 'LT' },
  { name: 'NexaScale', abbr: 'NS' },
  { name: 'Riviera Growth', abbr: 'RG' },
  { name: 'CloudBase', abbr: 'CB' },
  { name: 'DataSync', abbr: 'DS' },
];

export const SocialProofBar: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        py: { xs: 4, md: 5 },
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: isDark
          ? alpha('#FFFFFF', 0.02)
          : alpha('#F8FAFC', 0.8),
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: theme.palette.text.secondary,
            fontWeight: 500,
            mb: 3,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            fontSize: '0.72rem',
          }}
        >
          Trusted by 500+ growing businesses
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 3, md: 6 },
          }}
        >
          {companies.map((co) => (
            <Box
              key={co.name}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                opacity: 0.55,
                transition: 'opacity 0.2s',
                '&:hover': { opacity: 0.9 },
              }}
            >
              {/* Logo placeholder — styled text */}
              <Box
                aria-hidden="true"
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: '7px',
                  backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ fontSize: '0.65rem', fontWeight: 800, color: theme.palette.text.secondary }}>
                  {co.abbr}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: theme.palette.text.secondary,
                  letterSpacing: '-0.01em',
                }}
              >
                {co.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
