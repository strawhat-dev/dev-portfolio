import { Typography } from '@mui/material';

{
  /* <Typography fontFamily="Zilla" variant="body1" margin="4% 10%"> */
}
{
  /* <Typography fontFamily="Bogle" variant="body1" margin="4% 10%"> */
}

type Infos = {
  [key: string]: any[];
};

const infos: Infos = {
  uci: [
    'Zilla',
    <ul key={0}>
      <li>
        Tutor UCI students on general good practices and C++ language concepts
        such as memory allocation, pointers, references, classes, linked lists,
        and the standard library.
      </li>
      <li>Collaborate with professors on effective tutoring strategies.</li>
      <li>
        Develop strong communication skills and the ability to work well with
        other people, while building a strong foundation in C++.
      </li>
    </ul>,
  ],
  walmart: [
    'Bogle',
    <ul key={1}>
      <li>
        Development and deployment of complete web application from scratch, as
        part of Walmart’s transportation execution and visibility rewrite effort
        to Spring Boot.
      </li>
      <li>
        Application to play a critical role in the identification of EDI data
        errors from transportation carriers, a vital part of Walmart’s
        operations, and will be utilized by developers to quickly identify and
        process these errors.
      </li>
      <li>
        Implementation of backend using Spring Boot with connectivity to
        Microsoft’s Azure Cosmos DB, to create REST API services designed to
        reprocess data, with custom search functionality included.
      </li>
      <li>
        Implementation of frontend using NodeJS, React, Next.js and Bootstrap to
        provide a UI interface that will help present load transit status data
        in a more human readable form and allow users and developers to search
        by different fields.
      </li>
    </ul>,
  ],
};

export const ExpInfo = ({
  location,
  isMobile,
}: {
  location: string;
  isMobile: any;
}) => {
  const fontFamily = infos[location][0];
  const content = infos[location][1];

  return (
    <Typography
      fontFamily={fontFamily}
      variant="body1"
      margin={isMobile ? '0% 4%' : '4% 10%'}
      marginLeft={isMobile ? '-4%' : 'inherit'}
      fontSize={isMobile ? '0.9em' : 'inherit'}
    >
      {content}
    </Typography>
  );
};
