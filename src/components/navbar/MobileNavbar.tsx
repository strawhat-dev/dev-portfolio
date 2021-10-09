import Link from 'next/link';
import { Typography, Box, AppBar, Toolbar } from '@mui/material';
import { DarkmodeToggle } from '@/components/navbar/DarkmodeToggle';

const NavTitle = () => (
  <Link href="/" passHref>
    <Typography className="navtitle" lineHeight="1" sx={{ cursor: 'pointer' }}>
      dev
      <br />
      portfolio.
    </Typography>
  </Link>
);

const NAVITEMS = ['About', 'Education', 'Experience', 'Skills', 'Info'];

export const MobileNavbar = ({ currentPage }: { currentPage: number }) => {
  return (
    <Box sx={{ flex: 1 }}>
      <AppBar color="transparent" position="static" sx={{ boxShadow: 0 }}>
        <Toolbar
          sx={{
            display: 'flex',
            boxShadow: 0,
            justifyContent: 'space-between',
          }}
        >
          <NavTitle />
          <Typography className="ani" fontWeight="bolder" variant="h6">
            {NAVITEMS[currentPage]}
          </Typography>
          <DarkmodeToggle />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
