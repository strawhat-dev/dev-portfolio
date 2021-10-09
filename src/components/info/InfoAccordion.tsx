import { useState } from 'react';
import { AboutDetails, ContactDetails } from '@/components/info/InfoDetails';
import { Stack, Typography } from '@mui/material';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@/components/styled-material/StyledMaterial';

export const InfoAccordion = ({ isMobile }: { isMobile: any }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => {
    setExpanded(expanded === panel ? false : panel);
  };

  const headerVariant = isMobile ? 'h6' : 'h5';

  return (
    <Stack sx={{ width: isMobile ? '90%' : '40rem' }}>
      <Accordion
        className="ani-right"
        expanded={expanded === 'about'}
        onChange={() => handleChange('about')}
      >
        <AccordionSummary aria-controls="about-content" id="about-header">
          <Typography variant={headerVariant}>about dev portfolio.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AboutDetails isMobile={isMobile} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="ani-left"
        expanded={expanded === 'contact'}
        onChange={() => handleChange('contact')}
      >
        <AccordionSummary aria-controls="contact-content" id="contact-header">
          <Typography variant={headerVariant}>contact.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ContactDetails isMobile={isMobile} />
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};
