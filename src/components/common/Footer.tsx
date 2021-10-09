import Image from 'next/image';
import { NewTabLink } from '@/components/common/NewTabLink';

export const Footer = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <footer style={{ position: isMobile ? 'static' : 'absolute' }}>
      <NewTabLink
        href="https://vercel.com"
        content={
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        }
      />
    </footer>
  );
};
