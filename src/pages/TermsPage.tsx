import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  Divider,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const TermsPage: React.FC = () => {
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
            Terms of Service
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

      {/* Content */}
      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 10 },
          backgroundColor: theme.palette.background.paper,
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
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the BizOps AI
              platform (the "Service") operated by BizOps AI, Inc. ("us", "we", or "our").
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Section title="1. Acceptance of Terms">
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of
            the terms, then you may not access the Service. These Terms apply to all visitors, users, and others who
            access or use the Service.
          </Section>

          <Section title="2. Description of Service">
            BizOps AI provides a cloud-based business operations platform that includes CRM, sales pipeline management,
            invoicing, task management, workflow automation, and AI-powered features. The Service is accessible via web
            browser and API.
          </Section>

          <Section title="3. User Accounts">
            <strong>Account Creation:</strong> When you create an account with us, you must provide accurate, complete,
            and current information. Failure to do so constitutes a breach of the Terms.
            <br />
            <br />
            <strong>Account Security:</strong> You are responsible for safeguarding the password and for all activities
            that occur under your account. You must notify us immediately upon becoming aware of any breach of security
            or unauthorized use of your account.
            <br />
            <br />
            <strong>Account Termination:</strong> We reserve the right to suspend or terminate your account and refuse
            any current or future use of the Service for any reason at any time, including for violation of these
            Terms.
          </Section>

          <Section title="4. Subscription and Billing">
            <strong>Free Trial:</strong> We offer a 14-day free trial for new users. No credit card is required to start
            the trial. At the end of the trial period, your account will be downgraded to a free plan unless you
            subscribe to a paid plan.
            <br />
            <br />
            <strong>Paid Subscriptions:</strong> Some parts of the Service are billed on a subscription basis. You will
            be billed in advance on a recurring and periodic basis (monthly or annually). Billing cycles are set at the
            beginning of your subscription.
            <br />
            <br />
            <strong>Automatic Renewal:</strong> Your subscription will automatically renew at the end of each billing
            period unless you cancel it or we terminate it. You authorize us to charge your payment method for the
            renewal subscription fee.
            <br />
            <br />
            <strong>Cancellation:</strong> You may cancel your subscription at any time through your account settings.
            Your cancellation will take effect at the end of the current billing period. You will not receive a refund
            for any unused portion of your subscription.
            <br />
            <br />
            <strong>Refunds:</strong> We offer a 30-day money-back guarantee for annual plans. Monthly plans are
            non-refundable.
          </Section>

          <Section title="5. Use of Service">
            <strong>Acceptable Use:</strong> You agree not to use the Service to:
            <br />• Violate any applicable laws or regulations
            <br />• Infringe on intellectual property rights
            <br />• Transmit malware, viruses, or harmful code
            <br />• Spam, phish, or engage in fraudulent activities
            <br />• Harass, abuse, or harm others
            <br />• Attempt to gain unauthorized access to the Service
            <br />• Use the Service for illegal or unauthorized purposes
            <br />
            <br />
            <strong>Content Responsibility:</strong> You are responsible for all content you upload, post, or transmit
            through the Service. You retain ownership of your content, but you grant us a license to use, store, and
            display your content as necessary to provide the Service.
          </Section>

          <Section title="6. AI Features and Limitations">
            Our Service includes AI-powered features using OpenAI GPT-4 and Google Gemini. These features are provided
            "as is" and may not always produce accurate or appropriate results. You acknowledge that:
            <br />• AI-generated content may contain errors or biases
            <br />• You should review AI outputs before using them
            <br />• We are not liable for decisions made based on AI recommendations
            <br />• AI features may be subject to usage limits
          </Section>

          <Section title="7. Data and Privacy">
            Your use of the Service is also governed by our Privacy Policy, available at{' '}
            <Box
              component={RouterLink}
              to="/privacy"
              sx={{ color: theme.palette.primary.main, textDecoration: 'none', fontWeight: 600 }}
            >
              /privacy
            </Box>
            . We collect, use, and protect your data as described in the Privacy Policy.
          </Section>

          <Section title="8. Intellectual Property">
            <strong>Our Rights:</strong> The Service and its original content, features, and functionality are and will
            remain the exclusive property of BizOps AI, Inc. The Service is protected by copyright, trademark, and other
            laws.
            <br />
            <br />
            <strong>Your Rights:</strong> You retain all rights to the data and content you create using the Service. We
            do not claim ownership of your business data.
            <br />
            <br />
            <strong>Trademarks:</strong> "BizOps AI" and our logo are trademarks of BizOps AI, Inc. You may not use
            these marks without our prior written permission.
          </Section>

          <Section title="9. Third-Party Services">
            The Service may integrate with third-party services (e.g., payment processors, email services, calendar
            apps). Your use of these services is subject to their respective terms and conditions. We are not
            responsible for third-party services or their availability.
          </Section>

          <Section title="10. Limitation of Liability">
            To the maximum extent permitted by applicable law, in no event shall BizOps AI, Inc., its directors,
            employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special,
            consequential, or punitive damages, including loss of profits, data, use, or other intangible losses,
            resulting from:
            <br />• Your access to or use of (or inability to access or use) the Service
            <br />• Any conduct or content of any third party on the Service
            <br />• Unauthorized access to or alteration of your transmissions or content
          </Section>

          <Section title="11. Disclaimer of Warranties">
            The Service is provided "as is" and "as available" without warranties of any kind, whether express or
            implied, including but not limited to implied warranties of merchantability, fitness for a particular
            purpose, or non-infringement.
          </Section>

          <Section title="12. Indemnification">
            You agree to indemnify, defend, and hold harmless BizOps AI, Inc. and its licensors, employees, agents, and
            affiliates from any claims, liabilities, damages, losses, and expenses arising from your violation of these
            Terms or your use of the Service.
          </Section>

          <Section title="13. Modifications to Service and Terms">
            We reserve the right to modify or discontinue the Service at any time, with or without notice. We may also
            revise these Terms at any time. Continued use of the Service after changes constitutes acceptance of the new
            Terms.
          </Section>

          <Section title="14. Governing Law">
            These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United
            States, without regard to its conflict of law provisions.
          </Section>

          <Section title="15. Dispute Resolution">
            Any disputes arising from these Terms or your use of the Service shall be resolved through binding
            arbitration in accordance with the rules of the American Arbitration Association, except where prohibited by
            law.
          </Section>

          <Section title="16. Severability">
            If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain
            in full force and effect.
          </Section>

          <Section title="17. Contact Us">
            If you have any questions about these Terms, please contact us:
            <br />
            <br />
            <strong>BizOps AI, Inc.</strong>
            <br />
            Email: legal@bizops.ai
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
              By using BizOps AI, you acknowledge that you have read, understood, and agree to be bound by these Terms
              of Service.
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
