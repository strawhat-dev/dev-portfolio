import { useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { Sphere } from '@/components/about/Sphere';
import { animate } from '@/util/animate';

export const About = ({ opacity }: { opacity: number }) => {
  useEffect(() => {
    animate();
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '95vh',
        marginTop: '-5vh',
        overflow: 'hidden',
        opacity: opacity,
      }}
    >
      <Box sx={{ width: '55%' }}>
        <Typography
          className="ani-letters"
          variant="h2"
          sx={{ fontWeight: 'bold' }}
        >
          About
        </Typography>
        <Typography className="ani-right" variant="body1">
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
      <Box className="ani" sx={{ width: '40%' }}>
        <Sphere />
      </Box>
    </Container>
  );
};
