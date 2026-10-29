import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  useTheme,
  Divider,
  Tooltip,
  alpha,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onToggleTheme: () => void;
  mode: 'light' | 'dark';
}

const navLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Docs', href: '#' },
  { label: 'Blog', href: '#' },
];

export const Navbar: React.FC<NavbarProps> = ({ onToggleTheme, mode }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 60,
  });

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled
            ? alpha(theme.palette.background.paper, 0.92)
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled
            ? `1px solid ${theme.palette.divider}`
            : '1px solid transparent',
          transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
          color: theme.palette.text.primary,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ height: 68 }}>
            {/* Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                textDecoration: 'none',
                color: 'inherit',
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: 34,
                  height: 34,
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #4F46E5 0%, #0EA5E9 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AutoAwesomeIcon sx={{ color: '#fff', fontSize: 18 }} />
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  fontFamily: theme.typography.fontFamily,
                  color: theme.palette.text.primary,
                  letterSpacing: '-0.02em',
                }}
              >
                BizOps AI
              </Box>
            </Box>

            {/* Center nav links — desktop only */}
            <Box
              component="nav"
              aria-label="Main navigation"
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 0.5,
                mx: 'auto',
              }}
            >
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  component={RouterLink}
                  to={link.href}
                  sx={{
                    color: theme.palette.text.secondary,
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    px: 1.5,
                    '&:hover': {
                      color: theme.palette.text.primary,
                      backgroundColor: alpha(theme.palette.primary.main, 0.06),
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>

            {/* Right actions — desktop */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
                <IconButton
                  onClick={onToggleTheme}
                  size="small"
                  aria-label="Toggle dark mode"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  {mode === 'light' ? <DarkModeOutlinedIcon fontSize="small" /> : <LightModeOutlinedIcon fontSize="small" />}
                </IconButton>
              </Tooltip>
              <Button
                component={RouterLink}
                to="/login"
                sx={{
                  color: theme.palette.text.secondary,
                  fontWeight: 500,
                  '&:hover': { color: theme.palette.text.primary },
                }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/register"
                sx={{ borderRadius: 2 }}
              >
                Start Free Trial
              </Button>
            </Box>

            {/* Mobile: theme toggle + hamburger */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto', alignItems: 'center', gap: 0.5 }}>
              <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
                <IconButton
                  onClick={onToggleTheme}
                  size="small"
                  aria-label="Toggle dark mode"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  {mode === 'light' ? <DarkModeOutlinedIcon fontSize="small" /> : <LightModeOutlinedIcon fontSize="small" />}
                </IconButton>
              </Tooltip>
              <IconButton
                onClick={toggleDrawer}
                aria-label="Open navigation menu"
                sx={{ color: theme.palette.text.primary }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: theme.palette.background.paper,
            borderLeft: `1px solid ${theme.palette.divider}`,
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 30,
                height: 30,
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #4F46E5 0%, #0EA5E9 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AutoAwesomeIcon sx={{ color: '#fff', fontSize: 16 }} />
            </Box>
            <Box component="span" sx={{ fontWeight: 700, fontSize: '1rem', color: theme.palette.text.primary }}>
              BizOps AI
            </Box>
          </Box>
          <IconButton onClick={toggleDrawer} aria-label="Close navigation menu" size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        <List sx={{ pt: 1 }}>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={link.href}
                onClick={toggleDrawer}
                sx={{ borderRadius: 2, mx: 1, mb: 0.5 }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{ fontWeight: 500, color: theme.palette.text.primary }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ mx: 2 }} />

        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1.5, mt: 1 }}>
          <Button
            variant="outlined"
            fullWidth
            component={RouterLink}
            to="/login"
            onClick={toggleDrawer}
            sx={{ borderRadius: 2 }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            component={RouterLink}
            to="/register"
            onClick={toggleDrawer}
            sx={{ borderRadius: 2 }}
          >
            Start Free Trial
          </Button>
        </Box>
      </Drawer>
    </>
  );
};
