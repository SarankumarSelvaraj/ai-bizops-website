import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  alpha,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';

interface Message {
  role: 'user' | 'ai';
  text: string;
  delay: number;
}

const conversation: Message[] = [
  { role: 'user', text: 'Show me our top 5 leads by deal value', delay: 0 },
  {
    role: 'ai',
    text: "Here are your top 5 leads:\n1. Acme Corp — $45,000\n2. TechFlow Inc — $38,500\n3. Nova Systems — $32,000\n4. DataSync Ltd — $28,750\n5. CloudBase Co — $24,200\n\nShall I create follow-up tasks for any of these?",
    delay: 800,
  },
  { role: 'user', text: 'Yes, create follow-up tasks for the top 3', delay: 1600 },
  {
    role: 'ai',
    text: '✓ Created 3 follow-up tasks:\n• "Follow up with Acme Corp" — due tomorrow\n• "Follow up with TechFlow Inc" — due in 2 days\n• "Follow up with Nova Systems" — due in 3 days\n\nAll assigned to you. Anything else?',
    delay: 2400,
  },
];

const aiCapabilities = [
  'Create and assign tasks from natural language',
  'Analyze revenue trends and pipeline health',
  'Find and surface high-value leads automatically',
  'Draft professional invoices in seconds',
  'Summarize customer history before calls',
  'Generate weekly performance reports',
  'Suggest next best actions across your pipeline',
];

const ChatBubble: React.FC<{ msg: Message; visible: boolean }> = ({ msg, visible }) => {
  const isUser = msg.role === 'user';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        mb: 1.5,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}
    >
      {!isUser && (
        <Box
          aria-hidden="true"
          sx={{
            width: 28,
            height: 28,
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #4F46E5, #0EA5E9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            mr: 1,
            mt: 0.3,
          }}
        >
          <Typography sx={{ fontSize: '0.75rem', color: '#fff' }}>✦</Typography>
        </Box>
      )}
      <Box
        sx={{
          maxWidth: '78%',
          px: 2,
          py: 1.25,
          borderRadius: isUser ? '16px 16px 4px 16px' : '4px 16px 16px 16px',
          backgroundColor: isUser
            ? 'rgba(79,70,229,0.9)'
            : 'rgba(255,255,255,0.08)',
          backdropFilter: isUser ? 'none' : 'blur(8px)',
          border: isUser ? 'none' : '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Typography
          sx={{
            fontSize: '0.82rem',
            color: isUser ? '#fff' : 'rgba(255,255,255,0.9)',
            lineHeight: 1.6,
            whiteSpace: 'pre-line',
          }}
        >
          {msg.text}
        </Typography>
      </Box>
    </Box>
  );
};

export const AIShowcaseSection: React.FC = () => {
  const theme = useTheme();
  const [visibleMessages, setVisibleMessages] = useState<boolean[]>(
    new Array(conversation.length).fill(false)
  );

  useEffect(() => {
    const timers = conversation.map((msg, i) =>
      setTimeout(() => {
        setVisibleMessages((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, msg.delay + 600)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <Box
      component="section"
      aria-labelledby="ai-showcase-heading"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #1E1B4B 0%, #0F172A 50%, #0C1221 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '50%',
          height: '60%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(79,70,229,0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '40%',
          height: '50%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(14,165,233,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { md: 'center' },
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* Left: Mock chat */}
          <Box sx={{ flex: '1 1 50%' }}>
            {/* Chat window header */}
            <Box
              sx={{
                borderRadius: '16px 16px 0 0',
                px: 2.5,
                py: 1.5,
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #4F46E5, #0EA5E9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ fontSize: '0.85rem', color: '#fff' }}>✦</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'rgba(255,255,255,0.95)' }}>
                  BizOps Copilot
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10B981' }} />
                  <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>Online</Typography>
                </Box>
              </Box>
            </Box>

            {/* Chat body */}
            <Box
              sx={{
                borderRadius: '0 0 16px 16px',
                border: '1px solid rgba(255,255,255,0.08)',
                borderTop: 'none',
                p: 2.5,
                minHeight: 320,
                backgroundColor: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {conversation.map((msg, i) => (
                <ChatBubble key={i} msg={msg} visible={visibleMessages[i]} />
              ))}
            </Box>

            {/* Input mock */}
            <Box
              sx={{
                mt: 2,
                px: 2,
                py: 1.25,
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                backgroundColor: 'rgba(255,255,255,0.04)',
              }}
            >
              <Typography sx={{ flex: 1, fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)', fontStyle: 'italic' }}>
                Ask BizOps AI anything...
              </Typography>
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #4F46E5, #0EA5E9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ArrowForwardIcon sx={{ fontSize: 14, color: '#fff' }} />
              </Box>
            </Box>
          </Box>

          {/* Right: Feature list */}
          <Box sx={{ flex: '1 1 50%' }}>
            <Typography
              variant="overline"
              sx={{ color: alpha('#A5B4FC', 0.9), fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.75rem', display: 'block', mb: 1.5 }}
            >
              AI Copilot
            </Typography>
            <Typography
              id="ai-showcase-heading"
              component="h2"
              sx={{
                fontSize: { xs: '1.8rem', md: '2.2rem' },
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#F9FAFB',
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Your AI that actually does the work
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.7,
                mb: 4,
                fontSize: '1rem',
              }}
            >
              Stop switching between tools. Ask BizOps AI in plain English — it understands your
              business context and takes action instantly.
            </Typography>

            <Box
              component="ul"
              aria-label="AI capabilities"
              sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 1.5 }}
            >
              {aiCapabilities.map((cap) => (
                <Box component="li" key={cap} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                  <CheckCircleIcon sx={{ fontSize: 18, color: '#10B981', mt: 0.15, flexShrink: 0 }} />
                  <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    {cap}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Button
              variant="contained"
              color="primary"
              size="large"
              component={RouterLink}
              to="/register"
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: 4,
                borderRadius: 2.5,
                py: 1.5,
                px: 3.5,
                background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
                boxShadow: '0 4px 14px rgba(79,70,229,0.4)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #4338CA 0%, #4F46E5 100%)',
                  boxShadow: '0 6px 20px rgba(79,70,229,0.5)',
                },
              }}
            >
              Try BizOps AI Copilot
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
