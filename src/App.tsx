import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { createAppTheme } from './theme/theme';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { PricingPage } from './pages/PricingPage';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Smooth scroll to anchor
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      // Scroll to top on route change
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname, hash]);

  return null;
};

const AppContent: React.FC<{ mode: 'light' | 'dark'; onToggleTheme: () => void }> = ({
  mode,
  onToggleTheme,
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar onToggleTheme={onToggleTheme} mode={mode} />
      <Box component="main" sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          {/* Auth routes link to existing dashboard app */}
          <Route
            path="/login"
            element={
              <Box sx={{ pt: 20, pb: 10, textAlign: 'center' }}>
                <p>Login page — redirects to dashboard app at /login</p>
              </Box>
            }
          />
          <Route
            path="/register"
            element={
              <Box sx={{ pt: 20, pb: 10, textAlign: 'center' }}>
                <p>Register page — redirects to dashboard app at /register</p>
              </Box>
            }
          />
        </Routes>
      </Box>
      <Footer />
      <ScrollToTop />
    </Box>
  );
};

export const App: React.FC = () => {
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme-mode');
    return (saved as 'light' | 'dark') || 'light';
  });

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme-mode', next);
      return next;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppContent mode={mode} onToggleTheme={toggleTheme} />
      </BrowserRouter>
    </ThemeProvider>
  );
};
