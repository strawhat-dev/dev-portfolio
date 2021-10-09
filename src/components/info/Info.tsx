import { useEffect } from 'react';
import { Container } from '@mui/material';
import { InfoAccordion } from '@/components/info/InfoAccordion';
import { animate } from '@/util/animate';

export const Info = ({
  opacity,
  isMobile,
}: {
  opacity: number;
  isMobile: boolean;
}) => {
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
        paddingTop: isMobile ? '7%' : '7vh',
        overflow: 'hidden',
        opacity: opacity,
      }}
    >
      <InfoAccordion isMobile={isMobile} />
    </Container>
  );
};
