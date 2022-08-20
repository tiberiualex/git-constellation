import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Git Constellation</title>
        <meta name="description" content="Github stars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Git Constellation</h1>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
