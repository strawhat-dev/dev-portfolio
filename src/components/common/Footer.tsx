import Image from 'next/image';
import { NewTabLink } from '@/components/common/NewTabLink';

export const Footer = () => {
  return (
    <footer
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100vw',
        height: '64px',
      }}
    >
      <NewTabLink
        href="https://vercel.com"
        content={
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        }
      />
    </footer>
  );
};
