import { useState, useEffect } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useSwipeable } from 'react-swipeable';
import { useMediaQuery } from 'react-responsive';
import { Divider, Box } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material/';
import { Footer } from '@/components/common/Footer';
import { Navbar } from '@/components/navbar/Navbar';
import { MobileNavbar } from '@/components/navbar/MobileNavbar';
import { About } from '@/components/about/About';
import { Education } from '@/components/education/Education';
import { Experience } from '@/components/experience/Experience';
import { Skills } from '@/components/skills/Skills';
import { Info } from '@/components/info/Info';
import { PageSlider } from '@/components/common/PageSlider';

interface Page {
  i: number;
  opacity: number;
  isMobile: any;
}

const Page = ({ i, opacity, isMobile }: Page) => {
  const pages = [
    <About key={0} opacity={opacity} isMobile={isMobile} />,
    <Education key={1} opacity={opacity} isMobile={isMobile} />,
    <Experience key={2} opacity={opacity} isMobile={isMobile} />,
    <Skills key={3} opacity={opacity} isMobile={isMobile} />,
    <Info key={4} opacity={opacity} isMobile={isMobile} />,
  ];

  return pages[i];
};

const MobileArrows = () => (
  <Box
    sx={{
      display: 'flex',
      position: 'fixed',
      width: '100vw',
      bottom: '50vh',
      justifyContent: 'space-between',
    }}
  >
    <ChevronLeft fontSize="large" sx={{ color: 'rgba(0, 0, 0, 0.3)' }} />
    <ChevronRight fontSize="large" sx={{ color: 'rgba(0, 0, 0, 0.3)' }} />
  </Box>
);

export default function Index() {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const [page, setPage] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useHotkeys('left,right', (_, handler) => {
    handler.key === 'left'
      ? setPage((page) => (page === 0 ? page : page - 1))
      : setPage((page) => (page === 4 ? page : page + 1));
  });

  const swipeHandlers =
    isMobile &&
    useSwipeable({
      onSwipedRight: () => setPage((page) => (page === 0 ? page : page - 1)),
      onSwipedLeft: () => setPage((page) => (page === 4 ? page : page + 1)),
    });

  return (
    <div {...swipeHandlers}>
      {isMobile ? (
        <MobileNavbar currentPage={page} />
      ) : (
        <Navbar currentPage={page} setPage={setPage} />
      )}
      <Divider />
      <Page i={page} opacity={opacity} isMobile={isMobile} />
      {isMobile ? (
        <MobileArrows />
      ) : (
        <PageSlider
          currentPage={page}
          setPage={setPage}
          setOpacity={setOpacity}
        />
      )}
      <Footer isMobile={isMobile} />
    </div>
  );
}
