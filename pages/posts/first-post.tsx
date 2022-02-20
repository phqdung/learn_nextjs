import Head from "next/head";
import Script from "next/script";
import React from "react";

const FirstPost: React.FC = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />

        <meta property="og:title" content="My page title 1" key="title" />
        <meta property="og:title" content="My page title 2" key="title" />
      </Head>
      <div>
        <h1 id="head-title">Hello First Post</h1>
      </div>
      <Script
        id="evalidation"
        src="https://www.hadmedical.vn/fileserver/theme/default/js/evalidation.min.js?v=1.0"
        strategy="afterInteractive"
      />
      <Script
        id="jquery"
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          $("#head-title").html("test");
        }}
      />
      <Script id="inline-jquery" strategy="lazyOnload">
        {`console.log($('#head-title').html());`}
      </Script>
    </>
  );
};

export default FirstPost;
