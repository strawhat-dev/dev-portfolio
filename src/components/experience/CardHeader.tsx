import { Stack, Typography } from '@mui/material';

interface CardHeader {
  title: string;
  location: string;
  years: string;
  fontFamily: string;
  color: string;
}

export const CardHeader = ({
  title,
  location,
  years,
  fontFamily,
  color,
}: CardHeader) => {
  return (
    <Stack>
      <Typography variant="h2" sx={{ fontFamily: fontFamily, color: color }}>
        {title}
      </Typography>
      <Typography
        variant="h4"
        sx={{ fontFamily: fontFamily, color: color, textAlign: 'center' }}
      >
        {location}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontFamily: fontFamily,
          fontWeight: 'lighter',
          fontStyle: 'italic',
          textAlign: 'center',
          color: 'gray',
        }}
      >
        {years}
      </Typography>
    </Stack>
  );
};
