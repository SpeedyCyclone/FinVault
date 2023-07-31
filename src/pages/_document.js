import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Outfit&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/bogart" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
