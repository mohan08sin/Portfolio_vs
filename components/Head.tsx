import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Mohan is full stack developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="mohan, mohan-singh, web developer portfolio, mohan web developer, mohan developer, full stack,mohan portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Mohan's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="#" />
      <meta property="og:url" content="#webslink" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Mohan',
};
