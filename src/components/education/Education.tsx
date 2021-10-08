import Image from 'next/image';
import anteater from '@/static/images/anteater.webp';
import { useEffect } from 'react';
import { Container, Box, Stack, Typography } from '@mui/material';
import { animate } from '@/util/animate';

const attributes = [
  'University of California, Irvine',
  '2019-2022',
  'B.S. Software Engineering',
  'GPA 3.5',
];

export const Education = ({ opacity }: { opacity: number }) => {
  useEffect(() => {
    animate();
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '95vh',
        marginTop: '-10vh',
        overflow: 'hidden',
        opacity: opacity,
      }}
    >
      <Box sx={{ width: '30%' }}>
        <Typography
          className="ani-letters"
          variant="h2"
          sx={{ fontWeight: 'bold' }}
          gutterBottom
        >
          Education
        </Typography>
        <Stack spacing={2}>
          {attributes.map((x, i) => (
            <Typography key={i} className="ani-letters" variant="body1">
              {x}
            </Typography>
          ))}
        </Stack>
      </Box>
      <Box className="ani-left" sx={{ width: '35%' }}>
        <Image src={anteater} alt="anteater" />
      </Box>
    </Container>
  );
};
