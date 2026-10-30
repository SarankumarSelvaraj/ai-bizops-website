import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
  useTheme,
  alpha,
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link as RouterLink } from 'react-router-dom';

const productLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
  { label: 'Sign Up', href: '/register' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
];

const supportLinks = [
  { label: 'Help Center', href: '/help' },
  { label: 'Contact Support', href: '/contact' },
  { label: 'System Status', href: '/status' },
];

const socialLinks = [
  { label: 'Twitter / X', icon: <TwitterIcon fontSize="small" />, href: 'https://twitter.com' },
  { label: 'LinkedIn', icon: <LinkedInIcon fontSize="small" />, href: 'https://linkedin.com' },
  { label: 'GitHub', icon: <GitHubIcon fontSize="small" />, href: 'https://github.com' },
];

const LinkColumn: React.FC<{ title: string; links: { label: string; href: string }[] }> = ({
  title,
  links,
}) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="body2"
        sx={{ fontWeight: 700, color: theme.palette.text.primary, mb: 2, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.72rem' }}
      >
        {title}
      </Typography>
      <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
        {links.map((link) => (
          <li key={link.label}>
            <Link
              component={RouterLink}
              to={link.href}
              underline="none"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: '0.875rem',
                fontWeight: 400,
                transition: 'color 0.2s',
                '&:hover': { color: theme.palette.primary.main },
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </Box>
    </Box>
  );
};

export const Footer: React.FC = () => {
  const theme = useTheme();
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 5 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand column */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box
                sx={{
                  width: 34,
                  height: 34,
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #4F46E5 0%, #0EA5E9 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <AutoAwesomeIcon sx={{ color: '#fff', fontSize: 18 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: theme.palette.text.primary, letterSpacing: '-0.02em' }}
              >
                BizOps AI
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.secondary, maxWidth: 280, lineHeight: 1.7 }}
            >
              The all-in-one AI-powered platform that automates your business operations — from CRM to invoicing to workflow automation.
            </Typography>

            {/* Social icons */}
            <Box sx={{ display: 'flex', gap: 1, mt: 3 }}>
              {socialLinks.map((s) => (
                <IconButton
                  key={s.label}
                  component="a"
                  href={s.href}
                  aria-label={s.label}
                  size="small"
                  sx={{
                    color: theme.palette.text.secondary,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: '8px',
                    width: 36,
                    height: 36,
                    '&:hover': {
                      color: theme.palette.primary.main,
                      borderColor: alpha(theme.palette.primary.main, 0.4),
                      backgroundColor: alpha(theme.palette.primary.main, 0.06),
                    },
                    transition: 'all 0.2s',
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Link columns */}
          <Grid item xs={6} sm={4} md={2.5}>
            <LinkColumn title="Product" links={productLinks} />
          </Grid>
          <Grid item xs={6} sm={4} md={2.5}>
            <LinkColumn title="Company" links={companyLinks} />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <LinkColumn title="Support" links={supportLinks} />
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 4, md: 5 } }} />

        {/* Bottom bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: 1.5,
          }}
        >
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            © {year} BizOps AI, Inc. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              component={RouterLink}
              to="/contact"
              underline="none"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: '0.875rem',
                '&:hover': { color: theme.palette.primary.main },
                transition: 'color 0.2s',
              }}
            >
              Privacy Policy
            </Link>
            <Link
              component={RouterLink}
              to="/contact"
              underline="none"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: '0.875rem',
                '&:hover': { color: theme.palette.primary.main },
                transition: 'color 0.2s',
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
