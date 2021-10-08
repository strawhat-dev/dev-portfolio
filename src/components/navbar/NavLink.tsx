import { Typography } from '@mui/material';

interface NavLink {
  text: any;
  fontWeight: string;
  onClick: any;
}

export const NavLink = ({ text, fontWeight, onClick }: NavLink) => {
  return (
    <Typography
      onClick={onClick}
      variant="body1"
      sx={{ cursor: 'pointer', fontWeight: fontWeight }}
    >
      {text}
    </Typography>
  );
};
