import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Link,
  Divider,
  useTheme,
  alpha,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  FormHelperText,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const passwordRequirements = [
  { label: 'At least 8 characters', regex: /.{8,}/ },
  { label: 'One uppercase letter', regex: /[A-Z]/ },
  { label: 'One lowercase letter', regex: /[a-z]/ },
  { label: 'One number', regex: /[0-9]/ },
];

export const RegisterPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    password: '',
    agreeToTerms: false,
  });
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would call your authentication API
    console.log('Registration attempt:', formData);
    // Redirect to dashboard or email verification
    alert('Registration functionality will connect to your backend API');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const getPasswordStrength = () => {
    const metRequirements = passwordRequirements.filter((req) =>
      req.regex.test(formData.password)
    ).length;
    return metRequirements;
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
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
          top: '-10%',
          right: '-5%',
          width: '40%',
          height: '60%',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(ellipse, rgba(79,70,229,0.15) 0%, transparent 70%)'
            : 'radial-gradient(ellipse, rgba(79,70,229,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '35%',
          height: '50%',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(ellipse, rgba(14,165,233,0.12) 0%, transparent 70%)'
            : 'radial-gradient(ellipse, rgba(14,165,233,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            backgroundColor: theme.palette.background.paper,
            borderRadius: 3,
            border: `1px solid ${theme.palette.divider}`,
            p: { xs: 3, sm: 5 },
            boxShadow: isDark
              ? '0 20px 40px -12px rgba(0,0,0,0.5)'
              : '0 20px 40px -12px rgba(79,70,229,0.15)',
          }}
        >
          {/* Logo & Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                textDecoration: 'none',
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #4F46E5 0%, #0EA5E9 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AutoAwesomeIcon sx={{ color: '#fff', fontSize: 20 }} />
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '1.3rem',
                  color: theme.palette.text.primary,
                  letterSpacing: '-0.02em',
                }}
              >
                BizOps AI
              </Typography>
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: theme.palette.text.primary,
                mb: 1,
                fontSize: { xs: '1.6rem', sm: '2rem' },
              }}
            >
              Start your free trial
            </Typography>
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
              No credit card required • 14 days free • Cancel anytime
            </Typography>
          </Box>

          {/* Social signup */}
          <Button
            variant="outlined"
            fullWidth
            size="large"
            startIcon={<GoogleIcon />}
            sx={{
              mb: 3,
              borderColor: theme.palette.divider,
              color: theme.palette.text.primary,
              py: 1.25,
              '&:hover': {
                borderColor: theme.palette.primary.main,
                backgroundColor: alpha(theme.palette.primary.main, 0.04),
              },
            }}
          >
            Continue with Google
          </Button>

          <Divider sx={{ mb: 3 }}>
            <Typography variant="caption" sx={{ color: theme.palette.text.secondary, px: 2 }}>
              or sign up with email
            </Typography>
          </Divider>

          {/* Registration form */}
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              fullWidth
              label="Full name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              autoComplete="name"
              required
              sx={{ mb: 2.5 }}
            />

            <TextField
              fullWidth
              label="Work email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
              sx={{ mb: 2.5 }}
            />

            <TextField
              fullWidth
              label="Company name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              autoComplete="organization"
              required
              sx={{ mb: 2.5 }}
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              autoComplete="new-password"
              required
              sx={{ mb: 1 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Password requirements */}
            {(passwordFocused || formData.password) && (
              <Box sx={{ mb: 2.5, mt: 1.5 }}>
                {passwordRequirements.map((req) => {
                  const met = req.regex.test(formData.password);
                  return (
                    <Box
                      key={req.label}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 0.75,
                      }}
                    >
                      <CheckCircleIcon
                        sx={{
                          fontSize: 16,
                          color: met ? '#10B981' : theme.palette.text.disabled,
                          transition: 'color 0.2s',
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          color: met ? theme.palette.text.primary : theme.palette.text.secondary,
                          transition: 'color 0.2s',
                        }}
                      >
                        {req.label}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            )}

            <FormControlLabel
              control={
                <Checkbox
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  size="small"
                  required
                />
              }
              label={
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  I agree to the{' '}
                  <Link
                    component={RouterLink}
                    to="/terms"
                    sx={{ color: theme.palette.primary.main, fontWeight: 500 }}
                  >
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link
                    component={RouterLink}
                    to="/privacy"
                    sx={{ color: theme.palette.primary.main, fontWeight: 500 }}
                  >
                    Privacy Policy
                  </Link>
                </Typography>
              }
              sx={{ mb: 3, alignItems: 'flex-start' }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              disabled={!formData.agreeToTerms || getPasswordStrength() < 4}
              sx={{
                py: 1.5,
                mb: 2,
                background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #4338CA 0%, #4F46E5 100%)',
                },
                '&:disabled': {
                  background: theme.palette.action.disabledBackground,
                  color: theme.palette.action.disabled,
                },
              }}
            >
              Create account
            </Button>

            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                Already have an account?{' '}
                <Link
                  component={RouterLink}
                  to="/login"
                  underline="none"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  Sign in
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Trust signals */}
        <Box sx={{ textAlign: 'center', mt: 4, display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <CheckCircleIcon sx={{ fontSize: 16, color: '#10B981' }} />
            <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
              14-day free trial
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <CheckCircleIcon sx={{ fontSize: 16, color: '#10B981' }} />
            <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
              No credit card required
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <CheckCircleIcon sx={{ fontSize: 16, color: '#10B981' }} />
            <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
              Cancel anytime
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
