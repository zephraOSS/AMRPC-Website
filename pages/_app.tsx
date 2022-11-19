import type { AppProps } from "next/app";

import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="msapplication-TileColor" content="#fa586a" />
                <meta
                    name="msapplication-TileImage"
                    content="/favicon/ms-icon-144x144.png"
                />
                <meta name="theme-color" content="#fa586a" />
                <meta
                    name="keywords"
                    content="Apple Music RPC, iTunes RPC, Discord Apple Music RPC, Discord RPC open-source"
                />
                <meta
                    name="description"
                    content="AMRPC (Apple Music RPC) is a Discord Rich Presence for Apple Music and iTunes."
                />

                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/favicon/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/favicon/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/favicon/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/favicon/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/favicon/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/favicon/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/favicon/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/favicon/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/favicon/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/favicon/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="/favicon/favicon.ico"
                />
                <link
                    rel="icon"
                    type="image/x-icon"
                    href="/favicon/favicon.ico"
                />

                <link rel="manifest" href="/static/manifest.json" />
                <link
                    rel="stylesheet"
                    href="https://site-assets.fontawesome.com/releases/v6.1.1/css/all.css"
                />

                <script
                    type="module"
                    src="https://get.microsoft.com/badge/ms-store-badge.bundled.js"
                ></script>

                <title>AMRPC</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
