import anime from 'animejs';
import { useState } from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { SkillItem } from '@/components/skills/SkillItems';
import { NewTabLink } from '@/components/common/NewTabLink';

export const AboutDetails = ({ isMobile }: { isMobile: any }) => (
  <Typography>
    <Box>
      <strong>Page may be navigated through any of the following means:</strong>
      <ol>
        {[
          'top menu bar',
          'slider',
          'arrow buttons adjacent to slider',
          'left + right arrow keys',
          '... or swiping if on mobile',
        ].map((x, i) => (
          <em key={i}>
            <li>{x}</li>
          </em>
        ))}
      </ol>
    </Box>
    <Divider />
    <Box sx={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
      <strong>Built with:</strong>
      <Box
        sx={{
          display: 'grid',
          grid: isMobile
            ? 'repeat(3, auto) / repeat(2, auto)'
            : 'repeat(2, auto) / repeat(3, auto)',
          gap: '1rem 2rem',
          justifyContent: 'center',
          marginTop: '5%',
        }}
      >
        {[
          'TypeScript',
          'Node.js',
          'React',
          'Next.js',
          'Material UI',
          'anime.js',
        ].map((x, i) => (
          <SkillItem key={i} label={x} />
        ))}
      </Box>
    </Box>
    <Divider />
    <Box
      sx={{
        paddingTop: '1rem',
        paddingBottom: '1rem',
        lineHeight: '2rem',
      }}
    >
      <strong>Credits:</strong>
      <br />
      Sphere and stagger animations adapted from{' '}
      <NewTabLink
        href="https://github.com/juliangarnier/anime/#demos-and-examples"
        content={<strong>Juilan Garnier</strong>}
      />
      <br />
      Moving letters animations adapted from{' '}
      <NewTabLink
        href="https://tobiasahlin.com/moving-letters/"
        content={<strong>Tobia Sahlin</strong>}
      />
    </Box>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '2rem',
        paddingBottom: '1rem',
      }}
    >
      <NewTabLink
        href="https://github.com/strawhat-dev/dev-portfolio"
        content={
          <Button variant="outlined" color="inherit" endIcon={<GitHub />}>
            View Source
          </Button>
        }
      />
    </Box>
  </Typography>
);

export const ContactDetails = ({ isMobile }: { isMobile: any }) => {
  const [disabled, setDisabled] = useState(false);

  const emailVariant = isMobile ? 'h5' : 'h3';

  const handleClick = () => {
    setDisabled(true);
    const textWrapper = document.querySelector('.ml11 .letters')!;
    anime.remove(textWrapper);
    textWrapper.innerHTML = textWrapper.textContent!.replace(
      /([^\x00-\x80]|\w)/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: false })
      .add({ targets: '.ml11', opacity: 1 })
      .add({
        targets: '.ml11 .line',
        scaleY: [0, 2],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1500,
      })
      .add({
        targets: '.ml11 .line',
        translateX: [
          0,
          document.querySelector('.ml11 .letters')!.getBoundingClientRect()
            .width + 15,
        ],
        easing: 'easeOutExpo',
        duration: 700,
        delay: 100,
      })
      .add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 600,
        offset: '-=775',
        delay: (_, i) => 34 * (i + 1),
      })
      .add({
        targets: '.ml11 .line',
        scaleY: [2, 0],
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: 700,
      })
      .add({
        targets: '.ml11 .line',
        translateX: [
          document.querySelector('.ml11 .letters')!.getBoundingClientRect()
            .width + 15,
          0,
        ],
        complete: () => setDisabled(false),
      });
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          paddingTop: '2rem',
        }}
      >
        <Button
          variant="contained"
          size="large"
          color="inherit"
          endIcon={<Email />}
          onClick={() => handleClick()}
          disabled={disabled}
          sx={{ width: '10rem' }}
        >
          Email
        </Button>
        <NewTabLink
          href="https://www.linkedin.com/in/kevin-tran-189aa91a7/"
          content={
            <Button
              variant="contained"
              size="large"
              color="primary"
              endIcon={<LinkedIn />}
              sx={{ width: '10rem' }}
            >
              LinkedIn
            </Button>
          }
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '20rem',
        }}
      >
        <Box className="ml11" sx={{ opacity: 0 }}>
          <Box className="text-wrapper">
            <Typography
              className="line line1"
              variant={emailVariant}
              sx={{ fontFamily: 'Meslo' }}
            >
              |
            </Typography>
            <Typography
              className="letters"
              variant={emailVariant}
              sx={{ fontFamily: 'Meslo' }}
            >
              trankn4@uci.edu
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
