import { useState } from 'react';
import { AboutDetails, ContactDetails } from '@/components/info/InfoDetails';
import { Stack, Typography } from '@mui/material';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@/components/styled-material/StyledMaterial';

export const InfoAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => {
    setExpanded(expanded === panel ? false : panel);
  };

  return (
    <Stack sx={{ width: '40rem' }}>
      <Accordion
        className="ani-right"
        expanded={expanded === 'about'}
        onChange={() => handleChange('about')}
      >
        <AccordionSummary aria-controls="about-content" id="about-header">
          <Typography variant="h4">about dev portfolio.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AboutDetails />
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="ani-left"
        expanded={expanded === 'contact'}
        onChange={() => handleChange('contact')}
      >
        <AccordionSummary aria-controls="contact-content" id="contact-header">
          <Typography variant="h4">contact.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ContactDetails />
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};
