import { useState, useEffect } from 'react';
import { Container, Stack, Typography, Button } from '@mui/material';
import { SkillsTable } from '@/components/skills/SkillsTable';
import { animate } from '@/util/animate';
import { stagger } from '@/util/stagger';

const SkillsTitle = () => (
  <>
    <Typography className="ani-right" variant="h2" sx={{ fontWeight: 'bold' }}>
      Skills &
    </Typography>
    <Typography className="ani-left" variant="h2" sx={{ fontWeight: 'bold' }}>
      Tech Stack
    </Typography>
  </>
);

export const Skills = ({ opacity }: { opacity: number }) => {
  const [secret, setSecret] = useState(0);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    animate();
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '95vh',
        overflow: 'hidden',
        opacity: opacity,
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          height: '25vh',
          justifyContent: 'center',
        }}
      >
        <SkillsTitle />
      </Stack>
      <Button
        size="large"
        variant="text"
        color="inherit"
        onMouseEnter={() => setSecret(1)}
        onMouseLeave={() => setSecret(0)}
        onClick={() => stagger(setDisabled, setSecret)}
        sx={{ position: 'relative', top: '-5vh', opacity: secret }}
        disabled={disabled}
      >
        (┛ಠДಠ)┛彡┻━┻
      </Button>
      <SkillsTable />
    </Container>
  );
};
