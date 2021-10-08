import Link from 'next/link';
import { useState } from 'react';
import { Typography, Box, AppBar, Toolbar, Stack } from '@mui/material';
import { NavLink } from '@/components/navbar/NavLink';
import { DarkmodeToggle } from '@/components/navbar/DarkmodeToggle';

interface Navbar {
  currentPage: number;
  setPage: Function;
}

const NavTitle = () => {
  const [face, setFace] = useState('(づ ◕‿◕ )づ');

  return (
    <Link href="/" passHref>
      <Typography
        className="navtitle"
        variant="h6"
        onMouseDown={() => setFace('(づ ಠ_ಠ )づ')}
        onMouseUp={() => setFace('(づ ◕‿◕ )づ')}
        sx={{ cursor: 'pointer' }}
      >
        {face} dev portfolio.
      </Typography>
    </Link>
  );
};

export const Navbar = ({ currentPage, setPage }: Navbar) => {
  return (
    <Box sx={{ flex: 1 }}>
      <AppBar
        color="transparent"
        position="static"
        sx={{
          overflow: 'auto',
          boxShadow: 0,
        }}
      >
        <Toolbar>
          <NavTitle />
          <Box sx={{ marginLeft: '10px', marginRight: '10px' }} />
          <Stack direction="row" spacing={2}>
            {['About', 'Education', 'Experience', 'Skills', 'Info'].map(
              (x, i) => (
                <NavLink
                  key={i}
                  text={x}
                  fontWeight={currentPage === i ? 'bolder' : 'lighter'}
                  onClick={() => setPage(i)}
                />
              )
            )}
          </Stack>
          <Box sx={{ flex: 1 }} />
          <DarkmodeToggle />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
