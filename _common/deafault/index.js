import Head from "next/head";
import React, { Fragment } from "react";
import Footer from "./footer";
import Header from "./header";

export default function LayoutDeafault({ children }) {
  return (
    <Fragment>
      <Head>
        <title>Unisearch Analytics</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Fragment>
        <Header />
        <manin>{children}</manin>
        <Footer />
      </Fragment>
    </Fragment>
  );
}
