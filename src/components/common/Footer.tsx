import Image from 'next/image';

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
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        style={{ maxWidth: 'fit-content' }}
      >
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
};
