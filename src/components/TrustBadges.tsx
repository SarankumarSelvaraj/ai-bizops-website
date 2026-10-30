import React from 'react';
import { Box, Container, useTheme, alpha } from '@mui/material';

export const TrustBadges: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 3,
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 2, md: 4 },
            flexWrap: 'wrap',
          }}
        >
          <Box
            component="img"
            src="/badge-secure.svg"
            alt="SOC 2 Certified"
            sx={{ height: 40, opacity: 0.9, transition: 'opacity 0.2s', '&:hover': { opacity: 1 } }}
          />
          <Box
            component="img"
            src="/badge-gdpr.svg"
            alt="GDPR Compliant"
            sx={{ height: 40, opacity: 0.9, transition: 'opacity 0.2s', '&:hover': { opacity: 1 } }}
          />
          <Box
            component="img"
            src="/badge-uptime.svg"
            alt="99.9% Uptime"
            sx={{ height: 40, opacity: 0.9, transition: 'opacity 0.2s', '&:hover': { opacity: 1 } }}
          />
        </Box>
      </Container>
    </Box>
  );
};
