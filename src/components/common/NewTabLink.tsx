import Link from 'next/link';

interface NewTabLink {
  href: string;
  content: any;
}

export const NewTabLink = ({ href, content }: NewTabLink) => {
  return (
    <Link href={href} passHref>
      <a
        title={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ maxWidth: 'fit-content' }}
      >
        {content}
      </a>
    </Link>
  );
};
