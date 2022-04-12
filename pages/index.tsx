import React from "react";
import Head from "next/head";
import { styled } from "linaria/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bulo4ki</title>
        <meta name="description" content="Tasty breathtaking rolls" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <h1>Bulo4ki</h1>
      </Header>
      <main></main>
    </div>
  );
}

const Header = styled.header`
  font-size: 40px;
  color: red;
`;
