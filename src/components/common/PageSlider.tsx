import { useState, useEffect } from 'react';
import { Box, Stack, Slider, IconButton } from '@mui/material/';
import { ChevronLeft, ChevronRight } from '@mui/icons-material/';

const adjustedSliderValue = [0, 30, 50, 70, 100];

const adjustedOpacity = (x: number, currentPage: any) => {
  let factor = adjustedSliderValue[currentPage];
  if (factor === 0) factor = 10;
  if (factor === 100) factor = 90;
  const n = -Math.abs(x - factor) + 10;
  return n / 10;
};

interface PageSlider {
  currentPage: number;
  setPage: Function;
  setOpacity: Function;
}

export const PageSlider = ({
  currentPage,
  setPage,
  setOpacity,
}: PageSlider) => {
  const [sliderValue, setSliderValue] = useState(
    adjustedSliderValue[currentPage]
  );

  useEffect(() => {
    setSliderValue(adjustedSliderValue[currentPage]);
  }, [currentPage]);

  const handleSliderChange = (x: any) => {
    if (0 <= x && x < 20) setPage(0);
    else if (20 <= x && x < 40) setPage(1);
    else if (40 <= x && x < 60) setPage(2);
    else if (60 <= x && x < 80) setPage(3);
    else if (80 <= x && x <= 100) setPage(4);
    setOpacity(adjustedOpacity(x, currentPage));
    setSliderValue(x);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'absolute',
        bottom: '14vh',
        width: '100vw',
        height: '5vh',
        justifyContent: 'center',
      }}
    >
      <Stack spacing={2} direction="row" alignItems="center">
        <IconButton
          aria-label="nav-left"
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          <ChevronLeft />
        </IconButton>
        <Slider
          aria-label="page-slider"
          size="small"
          value={sliderValue}
          onChange={(_, x) => handleSliderChange(x)}
          onChangeCommitted={() => setOpacity(1)}
          onKeyDown={(e) => {
            e.preventDefault();
            e.key === 'ArrowLeft'
              ? setPage(currentPage === 0 ? currentPage : currentPage - 1)
              : setPage(currentPage === 4 ? currentPage : currentPage + 1);
          }}
          sx={{ width: '40vw' }}
        />
        <IconButton
          aria-label="nav-right"
          onClick={() => setPage(currentPage + 1)}
          disabled={currentPage === 4}
        >
          <ChevronRight />
        </IconButton>
      </Stack>
    </Box>
  );
};
