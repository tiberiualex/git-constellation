import type { NextPage } from "next";
import Head from "next/head";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`stars/${username}`);
  };

  return (
    <div>
      <Head>
        <title>Git Constellation</title>
        <meta name="description" content="Github stars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button type="submit">Search stars</button>
      </form>

      <footer></footer>
    </div>
  );
};

export default Home;
