import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  useTheme,
  alpha,
  Grid,
  Card,
  CardContent,
  MenuItem,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BusinessIcon from '@mui/icons-material/Business';
import { CTABanner } from '../components/CTABanner';

const inquiryTypes = [
  'Sales & Demo Request',
  'Technical Support',
  'Billing & Pricing',
  'Partnership Opportunities',
  'Press & Media',
  'General Inquiry',
];

const contactMethods = [
  {
    icon: <EmailIcon sx={{ fontSize: 28 }} />,
    title: 'Email Us',
    description: 'Send us an email anytime',
    value: 'hello@bizops.ai',
    color: '#4F46E5',
  },
  {
    icon: <ChatBubbleOutlineIcon sx={{ fontSize: 28 }} />,
    title: 'Live Chat',
    description: 'Available Mon-Fri, 9am-5pm EST',
    value: 'Chat with support',
    color: '#0EA5E9',
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 28 }} />,
    title: 'Call Us',
    description: 'Mon-Fri, 9am-6pm EST',
    value: '+1 (555) 123-4567',
    color: '#10B981',
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 28 }} />,
    title: 'Enterprise Sales',
    description: 'For organizations with 50+ users',
    value: 'enterprise@bizops.ai',
    color: '#8B5CF6',
  },
];

export const ContactPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    inquiryType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend API or email service
    console.log('Contact form submission:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        company: '',
        inquiryType: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          pt: { xs: 14, md: 18 },
          pb: { xs: 6, md: 8 },
          backgroundColor: theme.palette.background.default,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
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
            Contact Us
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '2rem', md: '2.8rem' },
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: theme.palette.text.primary,
              mb: 2,
            }}
          >
            We're Here to Help
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.7,
              fontSize: '1.05rem',
            }}
          >
            Have questions about BizOps AI? Our team is ready to assist you with demos, technical support, or any inquiries.
          </Typography>
        </Container>
      </Box>

      {/* Contact methods */}
      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {contactMethods.map((method) => (
              <Grid item xs={12} sm={6} md={3} key={method.title}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: isDark
                        ? '0 12px 32px -8px rgba(0,0,0,0.5)'
                        : `0 12px 32px -8px ${alpha(method.color, 0.2)}`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '12px',
                        background: `linear-gradient(135deg, ${alpha(method.color, isDark ? 0.15 : 0.1)} 0%, ${alpha(
                          method.color,
                          isDark ? 0.08 : 0.05
                        )} 100%)`,
                        border: `1px solid ${alpha(method.color, isDark ? 0.25 : 0.15)}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                        color: method.color,
                      }}
                    >
                      {method.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 0.75,
                        color: theme.palette.text.primary,
                        fontSize: '1rem',
                      }}
                    >
                      {method.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 1.5,
                        fontSize: '0.85rem',
                      }}
                    >
                      {method.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: method.color,
                        fontWeight: 600,
                        fontSize: '0.9rem',
                      }}
                    >
                      {method.value}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact form */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '1.6rem', md: '2rem' },
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: theme.palette.text.primary,
                mb: 1.5,
              }}
            >
              Send Us a Message
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.7,
              }}
            >
              Fill out the form below and we'll get back to you within 24 hours
            </Typography>
          </Box>

          <Card
            sx={{
              border: `1px solid ${theme.palette.divider}`,
              boxShadow: isDark
                ? '0 20px 40px -12px rgba(0,0,0,0.5)'
                : '0 20px 40px -12px rgba(79,70,229,0.12)',
            }}
          >
            <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
              {submitted ? (
                <Box sx={{ textAlign: 'center', py: 6 }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      backgroundColor: alpha('#10B981', 0.1),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                    }}
                  >
                    <Typography sx={{ fontSize: '2.5rem' }}>✓</Typography>
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.text.primary,
                      mb: 1,
                    }}
                  >
                    Message Sent!
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    Thank you for contacting us. We'll respond within 24 hours.
                  </Typography>
                </Box>
              ) : (
                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={2.5}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Work email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Company name"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        select
                        label="Inquiry type"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                      >
                        {inquiryTypes.map((type) => (
                          <MenuItem key={type} value={type}>
                            {type}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        multiline
                        rows={6}
                        required
                        placeholder="Tell us more about your needs or questions..."
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{
                          py: 1.5,
                          background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #4338CA 0%, #4F46E5 100%)',
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </CardContent>
          </Card>

          {/* Additional info */}
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 1 }}>
              Looking for technical documentation?
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
              Visit our{' '}
              <Box
                component="a"
                href="#"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                Help Center
              </Box>{' '}
              or{' '}
              <Box
                component="a"
                href="#"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                API Documentation
              </Box>
            </Typography>
          </Box>
        </Container>
      </Box>

      <CTABanner />
    </Box>
  );
};
