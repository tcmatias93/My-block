import Link from "next/link";
import React from "react";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/Layout";

const firstPost = () => {
  return (
    <>
      <Head>
        <title> Primer posts</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js
                 "
        strategy="lazyOnload
                 "
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h2>
        <Link href="/">
          <a>Back Home </a>
        </Link>
      </h2>
      <Layout />
    </>
  );
};

export default firstPost;
