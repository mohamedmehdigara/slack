// index.js

import React from 'react';
import Head from 'next/head';
import SlackContact from '../../Components/SlackContact/SlackContact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tateronaut | Home</title>
      </Head>

      <main>
        <SlackContact />
      </main>
    </>
  )
}