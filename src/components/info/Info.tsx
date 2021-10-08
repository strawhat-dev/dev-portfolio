import { useEffect } from 'react';
import { Container } from '@mui/material';
import { InfoAccordion } from '@/components/info/InfoAccordion';
import { animate } from '@/util/animate';

export const Info = ({ opacity }: { opacity: number }) => {
  useEffect(() => {
    animate();
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minHeight: '95vh',
        paddingTop: '7vh',
        overflow: 'hidden',
        opacity: opacity,
      }}
    >
      <InfoAccordion />
    </Container>
  );
};
