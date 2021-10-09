import { Stack, Typography } from '@mui/material';

interface CardHeader {
  title: string;
  location: string;
  years: string;
  fontFamily: string;
  color: string;
  isMobile: any;
}

export const CardHeader = ({
  title,
  location,
  years,
  fontFamily,
  color,
  isMobile,
}: CardHeader) => {
  return (
    <Stack sx={{ marginTop: '5%' }}>
      <Typography
        variant="h2"
        fontFamily={fontFamily}
        color={color}
        fontSize={isMobile ? '1em' : 'inherit'}
        textAlign="center"
      >
        {title}
      </Typography>
      <Typography
        variant="h4"
        fontFamily={fontFamily}
        color={color}
        fontSize={isMobile ? '1em' : 'inherit'}
        textAlign="center"
      >
        {location}
      </Typography>
      <Typography
        variant="h6"
        fontFamily={fontFamily}
        fontWeight="lighter"
        fontStyle="italic"
        textAlign="center"
        color="gray"
      >
        {years}
      </Typography>
    </Stack>
  );
};
