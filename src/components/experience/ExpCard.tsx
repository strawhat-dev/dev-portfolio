import Image from 'next/image';
import anime from 'animejs';
import { ReactElement, useState } from 'react';
import { Paper } from '@mui/material';

interface ExpCard {
  cardHeader: ReactElement;
  cardInfo: ReactElement;
  logo: StaticImageData;
  sliding: boolean;
}

export const ExpCard = ({ cardHeader, cardInfo, logo, sliding }: ExpCard) => {
  const [flipping, setFlipping] = useState(false);

  const handleClick = () => {
    if (!flipping && !sliding) {
      setFlipping(true);
      const card = document.querySelector('.card');
      anime.remove(card);
      anime({
        targets: card,
        scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
        rotateY: { value: '+=180', delay: 200 },
        easing: 'easeInOutSine',
        duration: 400,
        complete: () => setFlipping(false),
      });
    }
  };

  const handleHover = (scale: 1 | 1.1) => {
    if (!flipping && !sliding) {
      const card = document.querySelector('.card');
      anime.remove(card);
      anime({
        targets: card,
        scale: scale,
      });
    }
  };

  return (
    <Paper
      className="card"
      onClick={() => handleClick()}
      onMouseEnter={() => handleHover(1.1)}
      onMouseLeave={() => handleHover(1)}
      sx={{ width: '40vw', height: '50vh', minWidth: '50rem', zIndex: 999 }}
    >
      <Paper className="card-front" elevation={24}>
        <Image src={logo} alt="exp-logo" width="200rem" height="200rem" />
      </Paper>
      <Paper className="card-back" elevation={24}>
        {cardHeader}
        {cardInfo}
      </Paper>
    </Paper>
  );
};
