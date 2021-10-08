import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { Divider } from '@mui/material';
import { Header } from '@/components/common/Header';
import { Navbar } from '@/components/navbar/Navbar';
import { PageSlider } from '@/components/common/PageSlider';
import { Footer } from '@/components/common/Footer';
import { About } from '@/components/about/About';
import { Education } from '@/components/education/Education';
import { Experience } from '@/components/experience/Experience';
import { Skills } from '@/components/skills/Skills';
import { Info } from '@/components/info/Info';

interface Page {
  i: number;
  opacity: number;
}

const Page = ({ i, opacity }: Page) => {
  const pages = [
    <About key={0} opacity={opacity} />,
    <Education key={1} opacity={opacity} />,
    <Experience key={2} opacity={opacity} />,
    <Skills key={3} opacity={opacity} />,
    <Info key={4} opacity={opacity} />,
  ];

  return pages[i];
};

export default function Index() {
  const [page, setPage] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useHotkeys('left,right', (_, handler) => {
    handler.key === 'left'
      ? setPage((page) => (page === 0 ? page : page - 1))
      : setPage((page) => (page === 4 ? page : page + 1));
  });

  return (
    <div>
      <Header />
      <Navbar currentPage={page} setPage={setPage} />
      <Divider />
      <Page i={page} opacity={opacity} />
      <PageSlider
        currentPage={page}
        setPage={setPage}
        setOpacity={setOpacity}
      />
      <Footer />
    </div>
  );
}
