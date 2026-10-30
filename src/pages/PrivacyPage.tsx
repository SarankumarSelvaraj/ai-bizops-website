import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  Divider,
  Card,
  CardContent,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SecurityIcon from '@mui/icons-material/Security';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export const PrivacyPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: theme.palette.text.primary,
          mb: 2,
          fontSize: '1.4rem',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: theme.palette.text.secondary,
          lineHeight: 1.8,
          fontSize: '1rem',
        }}
      >
        {children}
      </Typography>
    </Box>
  );

  const securityFeatures = [
    {
      icon: <SecurityIcon sx={{ fontSize: 32 }} />,
      title: 'Enterprise-Grade Security',
      description: 'SOC 2 Type II certified with regular security audits',
      color: '#10B981',
    },
    {
      icon: <LockIcon sx={{ fontSize: 32 }} />,
      title: 'Data Encryption',
      description: 'TLS 1.3 in transit, AES-256 at rest',
      color: '#4F46E5',
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 32 }} />,
      title: 'Compliance',
      description: 'GDPR, CCPA, and HIPAA compliant',
      color: '#0EA5E9',
    },
  ];

  return (
    <Box>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          pt: { xs: 14, md: 18 },
          pb: { xs: 6, md: 8 },
          background: isDark
            ? 'linear-gradient(135deg, #0B0F19 0%, #111827 50%, #0B0F19 100%)'
            : 'linear-gradient(135deg, #EEF2FF 0%, #F0F9FF 50%, #F8FAFC 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
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
            Privacy Policy
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              lineHeight: 1.7,
              fontSize: '1.05rem',
            }}
          >
            Last updated: January 15, 2025
          </Typography>
        </Container>
      </Box>

      {/* Security Features */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: theme.palette.background.paper,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
            {securityFeatures.map((feature) => (
              <Card key={feature.title} sx={{ flex: '1 1 280px', maxWidth: 320 }}>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      backgroundColor: `${feature.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      color: feature.color,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: '1rem' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Content */}
      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 10 },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.8,
                fontSize: '1rem',
              }}
            >
              At BizOps AI, Inc. ("we," "us," or "our"), we are committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Section title="1. Information We Collect">
            <strong>Information You Provide:</strong>
            <br />• Account information (name, email, company name)
            <br />• Profile data (job title, phone number)
            <br />• Business data you enter into the platform (contacts, deals, tasks, invoices)
            <br />• Payment information (processed securely by Stripe)
            <br />• Communications with our support team
            <br />
            <br />
            <strong>Information Collected Automatically:</strong>
            <br />• Device information (IP address, browser type, operating system)
            <br />• Usage data (pages visited, features used, time spent)
            <br />• Cookies and similar tracking technologies
            <br />• Log data (access times, error logs)
          </Section>

          <Section title="2. How We Use Your Information">
            We use the information we collect to:
            <br />• Provide, maintain, and improve the Service
            <br />• Process transactions and send transaction notifications
            <br />• Respond to your requests and provide customer support
            <br />• Send administrative information (updates, security alerts)
            <br />• Monitor and analyze usage trends and preferences
            <br />• Detect, prevent, and address fraud and security issues
            <br />• Comply with legal obligations
            <br />• Send marketing communications (with your consent)
          </Section>

          <Section title="3. AI Data Processing">
            <strong>OpenAI and Google Gemini:</strong> When you use our AI features, your queries are sent to OpenAI
            and Google Gemini for processing. We have data processing agreements with these providers to ensure your
            data is handled securely.
            <br />
            <br />
            <strong>No Training on Your Data:</strong> We do not use your business data to train AI models. OpenAI and
            Google process your queries in real-time and do not retain or use your data for model training.
            <br />
            <br />
            <strong>Data Minimization:</strong> We only send the minimum necessary context to AI providers to generate
            responses.
          </Section>

          <Section title="4. How We Share Your Information">
            We do not sell your personal information. We may share your information with:
            <br />
            <br />
            <strong>Service Providers:</strong> Third parties that perform services on our behalf (hosting, payment
            processing, email delivery, analytics)
            <br />
            <br />
            <strong>AI Providers:</strong> OpenAI and Google Gemini for AI feature processing
            <br />
            <br />
            <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
            <br />
            <br />
            <strong>Legal Requirements:</strong> When required by law or to protect our rights
            <br />
            <br />
            <strong>With Your Consent:</strong> When you explicitly authorize us to share your data
          </Section>

          <Section title="5. Data Security">
            We implement industry-standard security measures to protect your data:
            <br />• <strong>Encryption:</strong> TLS 1.3 for data in transit, AES-256 for data at rest
            <br />• <strong>Access Controls:</strong> Role-based permissions and two-factor authentication
            <br />• <strong>Infrastructure:</strong> Hosted on secure AWS servers with DDoS protection
            <br />• <strong>Monitoring:</strong> 24/7 security monitoring and incident response
            <br />• <strong>Audits:</strong> Regular security audits and penetration testing
            <br />• <strong>Compliance:</strong> SOC 2 Type II certified
          </Section>

          <Section title="6. Data Retention">
            We retain your information for as long as your account is active or as needed to provide the Service. If you
            close your account, we will delete or anonymize your data within 90 days, except where we are required to
            retain it for legal or compliance purposes.
          </Section>

          <Section title="7. Your Privacy Rights">
            Depending on your location, you may have the following rights:
            <br />
            <br />
            <strong>Access:</strong> Request access to your personal information
            <br />
            <strong>Correction:</strong> Request correction of inaccurate data
            <br />
            <strong>Deletion:</strong> Request deletion of your data
            <br />
            <strong>Portability:</strong> Request a copy of your data in a portable format
            <br />
            <strong>Restriction:</strong> Request restriction of processing
            <br />
            <strong>Objection:</strong> Object to processing of your data
            <br />
            <strong>Withdraw Consent:</strong> Withdraw consent for marketing communications
            <br />
            <br />
            To exercise these rights, contact us at privacy@bizops.ai
          </Section>

          <Section title="8. GDPR Compliance (EU Users)">
            If you are in the European Economic Area (EEA), we process your data based on:
            <br />• Contract performance (to provide the Service)
            <br />• Consent (for marketing communications)
            <br />• Legitimate interests (to improve the Service)
            <br />• Legal obligations (compliance with laws)
            <br />
            <br />
            You have additional rights under GDPR, including the right to lodge a complaint with a supervisory
            authority.
          </Section>

          <Section title="9. CCPA Compliance (California Users)">
            California residents have the right to:
            <br />• Know what personal information is collected
            <br />• Know whether personal information is sold or disclosed
            <br />• Opt-out of the sale of personal information
            <br />• Request deletion of personal information
            <br />• Non-discrimination for exercising privacy rights
            <br />
            <br />
            We do not sell personal information.
          </Section>

          <Section title="10. Cookies and Tracking">
            We use cookies and similar technologies to:
            <br />• Keep you signed in
            <br />• Remember your preferences
            <br />• Analyze usage patterns
            <br />• Deliver targeted advertising
            <br />
            <br />
            You can control cookies through your browser settings. Note that disabling cookies may affect functionality.
          </Section>

          <Section title="11. Third-Party Links">
            The Service may contain links to third-party websites. We are not responsible for the privacy practices of
            these websites. We encourage you to read their privacy policies.
          </Section>

          <Section title="12. Children's Privacy">
            The Service is not intended for children under 16. We do not knowingly collect information from children. If
            we learn we have collected information from a child, we will delete it immediately.
          </Section>

          <Section title="13. International Data Transfers">
            Your information may be transferred to and processed in countries other than your country of residence. We
            ensure appropriate safeguards are in place, such as Standard Contractual Clauses.
          </Section>

          <Section title="14. Changes to This Policy">
            We may update this Privacy Policy from time to time. We will notify you of material changes by email or
            through the Service. Continued use after changes constitutes acceptance.
          </Section>

          <Section title="15. Contact Us">
            If you have questions about this Privacy Policy or our data practices, contact us:
            <br />
            <br />
            <strong>BizOps AI, Inc.</strong>
            <br />
            Email: privacy@bizops.ai
            <br />
            Data Protection Officer: dpo@bizops.ai
            <br />
            Address: 123 Market Street, San Francisco, CA 94103
            <br />
            Website:{' '}
            <Box
              component={RouterLink}
              to="/contact"
              sx={{ color: theme.palette.primary.main, textDecoration: 'none', fontWeight: 600 }}
            >
              Contact Support
            </Box>
          </Section>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
              Your privacy is important to us. We are committed to protecting your data and being transparent about our
              practices.
            </Typography>
            <Typography variant="caption" sx={{ color: theme.palette.text.disabled }}>
              Last updated: January 15, 2025 | Version 1.0
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
