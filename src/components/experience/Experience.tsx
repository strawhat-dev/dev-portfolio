import anime from 'animejs';
import uci from '@/static/images/uci.svg';
import walmart from '@/static/images/walmart.svg';
import { useState, useEffect } from 'react';
import { Container, Typography, IconButton } from '@mui/material';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material/';
import { ExpCard } from '@/components/experience/ExpCard';
import { CardHeader } from '@/components/experience/CardHeader';
import { ExpInfo } from '@/components/experience/ExpInfo';
import { animate } from '@/util/animate';

const Card = ({
  i,
  sliding,
  isMobile,
}: {
  i: number;
  sliding: boolean;
  isMobile: any;
}) => {
  const cards = [
    <ExpCard
      key={0}
      cardHeader={
        <CardHeader
          title="ICS 45C Lab Tutor"
          location="University of California, Irvine"
          years="2020"
          fontFamily="Zilla"
          color="#0064A4"
          isMobile={isMobile}
        />
      }
      cardInfo={<ExpInfo location="uci" isMobile={isMobile} />}
      logo={uci}
      sliding={sliding}
      isMobile={isMobile}
    />,
    <ExpCard
      key={1}
      cardHeader={
        <CardHeader
          title="Software Engineer Intern"
          location="Walmart Global Tech"
          years="2021"
          fontFamily="Bogle"
          color="#0071CE"
          isMobile={isMobile}
        />
      }
      cardInfo={<ExpInfo location="walmart" isMobile={isMobile} />}
      logo={walmart}
      sliding={sliding}
      isMobile={isMobile}
    />,
  ];

  return cards[i];
};

export const Experience = ({
  opacity,
  isMobile,
}: {
  opacity: number;
  isMobile: any;
}) => {
  const [cardIndex, setCardIndex] = useState(0);
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    animate();
  }, []);

  const handleClick = (di: -1 | 1) => {
    setSliding(true);
    const card = document.querySelector('.card');
    anime.remove(card);
    anime({
      targets: card,
      translateY: [0, di * 1000],
      opacity: [1, 0],
      duration: 1000,
      easing: 'linear',
      complete: () => {
        setCardIndex(cardIndex + di);
        setSliding(false);
      },
    });
  };

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
      {!isMobile && (
        <Typography
          className="ani-letters"
          variant="h2"
          sx={{ marginTop: '5vh', marginBottom: '2vh', fontWeight: 'bold' }}
        >
          Experience
        </Typography>
      )}
      <IconButton
        aria-label="card-up"
        size="large"
        onClick={() => handleClick(-1)}
        disabled={cardIndex === 0}
      >
        <ArrowDropUp fontSize="large" />
      </IconButton>
      <Card i={cardIndex} sliding={sliding} isMobile={isMobile} />
      <IconButton
        aria-label="card-down"
        size="large"
        onClick={() => handleClick(1)}
        disabled={cardIndex === 1}
      >
        <ArrowDropDown fontSize="large" />
      </IconButton>
    </Container>
  );
};
