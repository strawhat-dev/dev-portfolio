import { useEffect } from 'react';
import { Container, Box, Typography, Stack } from '@mui/material';
import { ArrowRightAlt } from '@mui/icons-material/';
import { Sphere } from '@/components/about/Sphere';
import { animate } from '@/util/animate';

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
  isMobile: any;
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Curabitur
          vitae nunc sed velit dignissim sodales ut. Pulvinar mattis nunc sed
          blandit libero volutpat. Consectetur libero id faucibus nisl tincidunt
          eget nullam non nisi. Magna sit amet purus gravida quis blandit turpis
          cursus in. Bibendum neque egestas congue quisque egestas. Adipiscing
          elit pellentesque habitant morbi tristique senectus. Eget velit
          aliquet sagittis id consectetur. Nec tincidunt praesent semper feugiat
          nibh. Cras semper auctor neque vitae tempus quam. Dignissim enim sit
          amet venenatis urna cursus eget nunc scelerisque.
        </Typography>
      </Box>
      <Box className="ani" sx={{ width: isMobile ? '100%' : '40%' }}>
        <Sphere />
      </Box>
    </Container>
  );
};
