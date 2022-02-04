import { Sphere } from '@/components/about/Sphere';
import { animate } from '@/util/animate';
import { ArrowRightAlt } from '@mui/icons-material/';
import { Box, Container, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';

const SwipeHeader = () => (
  <Box
    sx={{
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
    }}
  >
    <Stack
      direction="row"
      spacing={3}
      sx={{ marginTop: '4%', marginBottom: '4%', alignItems: 'center' }}
    >
      <ArrowRightAlt fontSize="large" sx={{ transform: 'scaleX(-1)' }} />
      <Typography variant="h6">Swipe</Typography>
      <ArrowRightAlt fontSize="large" />
    </Stack>
  </Box>
);

export const About = ({
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
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '95vh',
        marginTop: isMobile ? '10px' : '-5vh',
        overflow: isMobile ? 'auto' : 'hidden',
        opacity: opacity,
      }}
    >
      <Box sx={{ width: isMobile ? '100%' : '55%' }}>
        {isMobile ? (
          <SwipeHeader />
        ) : (
          <Typography
            className="ani-letters"
            variant="h2"
            sx={{ fontWeight: 'bold' }}
          >
            About
          </Typography>
        )}
        <Typography className="ani-right" variant="body1" marginBottom="4%">
          Did you ever hear the tragedy of Darth Plagueis The Wise? I thought
          not. It's not a story the Jedi would tell you. It's a Sith legend.
          Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he
          could use the Force to influence the midichlorians to create life… He
          had such a knowledge of the dark side that he could even keep the ones
          he cared about from dying. The dark side of the Force is a pathway to
          many abilities some consider to be unnatural. He became so powerful
          the only thing he was afraid of was losing his power, which
          eventually, of course, he did. Unfortunately, he taught his apprentice
          everything he knew, then his apprentice killed him in his sleep.
          Ironic. He could save others from death, but not himself.
        </Typography>
      </Box>
      <Box className="ani" sx={{ width: isMobile ? '100%' : '40%' }}>
        <Sphere />
      </Box>
    </Container>
  );
};
