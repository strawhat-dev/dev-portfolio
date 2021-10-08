import Image from 'next/image';
import anime from 'animejs';
import { Chip } from '@mui/material';

export const SkillItem = ({ label }: { label: string }) => {
  const className = label
    .replaceAll(' ', '')
    .replaceAll('.', '-')
    .replaceAll('+', 'p')
    .toLowerCase();

  const handleHover = (scale: 1 | 1.5) => {
    const card = document.querySelector(`.${className}`);
    anime({
      targets: card,
      scale: scale,
    });
  };

  return (
    <Chip
      className={className}
      label={label}
      variant="outlined"
      onMouseEnter={() => handleHover(1.5)}
      onMouseLeave={() => handleHover(1)}
      icon={
        <Image
          src={`/icons/${label}.webp`}
          alt={label}
          width="15rem"
          height="15rem"
        />
      }
      sx={{ display: 'flex', paddingLeft: '10px' }}
    />
  );
};

export const skills = {
  Languages: [
    'Python',
    'C++',
    'Java',
    'JavaScript',
    'TypeScript',
    'html',
    'css',
  ],
  Databases: ['PostgreSQL', 'Azure Cosmos DB'],
  Frameworks: [
    'Node.js',
    'React',
    'Next.js',
    'Material UI',
    'Bootstrap',
    'Spring Boot',
  ],
  Shells: ['bash', 'zsh'],
  'Operating Systems': ['Windows 11', 'macOS', 'Manjaro'],
  Tools: ['vscode', 'Git', 'Docker', 'WSL 2', 'Windows Terminal'],
};
