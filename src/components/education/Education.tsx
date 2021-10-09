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

export const Education = ({
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
        justifyContent: isMobile ? 'space-around' : 'center',
        minHeight: '95vh',
        marginTop: isMobile ? '10px' : '-10vh',
        overflow: 'hidden',
        opacity: opacity,
      }}
    >
      <Box sx={{ width: isMobile ? '90%' : '30%' }}>
        {!isMobile && (
          <Typography
            className="ani-letters"
            variant="h2"
            sx={{ fontWeight: 'bold' }}
            gutterBottom
          >
            Education
          </Typography>
        )}
        <Stack spacing={2}>
          {attributes.map((x, i) => (
            <Typography
              key={i}
              className="ani-letters"
              variant={isMobile ? 'h6' : 'body1'}
            >
              {x}
            </Typography>
          ))}
        </Stack>
      </Box>
      <Box className="ani-left" sx={{ width: isMobile ? '90%' : '35%' }}>
        <Image src={anteater} alt="anteater" />
      </Box>
    </Container>
  );
};
