import Head from 'next/head';

export const Header = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>dev portfolio.</title>
      <meta name="author" content="strawhat-dev" />
      <meta name="description" content="responsive developer portfolio" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
