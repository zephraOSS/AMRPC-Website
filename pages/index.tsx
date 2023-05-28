import { Footer } from "../components/footer";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";

import styles from "../styles/Home.module.css";
import stylesHeader from "../styles/Header.module.css";

export default function Home() {
    return (
        <>
            <Script
                type="module"
                src="https://get.microsoft.com/badge/ms-store-badge.bundled.js"
            ></Script>

            <div className={stylesHeader.header}>
                <div className={stylesHeader.headerNavigation}>
                    <Link href={"/#download"}>Download</Link>
                    <Link href={"/stats"}>Stats</Link>
                </div>
                <div className={stylesHeader.headerLogo}>
                    <Image
                        src="/applemusic.png"
                        width={1260}
                        height={1260}
                        alt="AMRPC Logo"
                        priority
                    />
                </div>
                <div className={stylesHeader.headerTitle}>
                    <h1 className={stylesHeader.titleTitle}>AMRPC</h1>
                    <h2 className={stylesHeader.titleDescription}>
                        An Open-Source Discord RPC App for Apple Music and
                        iTunes
                    </h2>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.appExample}>
                    <Image
                        src="/App.png"
                        width={1920}
                        height={1400}
                        alt="Screenshot of the app"
                        priority
                    />
                </div>

                <div className={styles.section}>
                    <h1 className={styles.sectionTitle}>Features</h1>

                    <div className={styles.featuresList}>
                        <div className={styles.featuresFeature}>
                            <div className={styles.featuresFeatureItem}>
                                <div className={styles.featureIcon}>
                                    <i
                                        className={[
                                            "fa-duotone fa-album-collection-circle-user",
                                            styles.featureIconBrush
                                        ].join(" ")}
                                    ></i>
                                </div>
                                <div className={styles.featureDescription}>
                                    <p>
                                        The album artwork is displayed in the
                                        Discord RPC!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.featuresFeature}>
                            <div className={styles.featuresFeatureItem}>
                                <div className={styles.featureIcon}>
                                    <i
                                        className={[
                                            "fa-duotone fa-rocket-launch",
                                            styles.featureIconRocket
                                        ].join(" ")}
                                    ></i>
                                </div>
                                <div className={styles.featureDescription}>
                                    <p>
                                        AMRPC is powered by our fast and
                                        self-made Apple-Bridge!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.featuresFeature}>
                            <div className={styles.featuresFeatureItem}>
                                <div className={styles.featureIcon}>
                                    <i
                                        className={[
                                            "fa-duotone fa-meteor",
                                            styles.featureIconMeteor
                                        ].join(" ")}
                                    ></i>
                                </div>
                                <div className={styles.featureDescription}>
                                    <p>
                                        AMRPC is available for Apple Music and
                                        iTunes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.featuresFeature}>
                            <div className={styles.featuresFeatureItem}>
                                <div className={styles.featureIcon}>
                                    <i
                                        className={[
                                            "fa-duotone fa-book-sparkles",
                                            styles.featureIconBook
                                        ].join(" ")}
                                    ></i>
                                </div>
                                <div className={styles.featureDescription}>
                                    <p>
                                        You can customize the Discord RPC to
                                        your liking!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.featuresFeature}>
                            <div className={styles.featuresFeatureItem}>
                                <div className={styles.featureIcon}>
                                    <i
                                        className={[
                                            "fa-brands fa-lastfm",
                                            styles.featureIconLastFM
                                        ].join(" ")}
                                    ></i>
                                </div>
                                <div className={styles.featureDescription}>
                                    <p>
                                        AMRPC supports{" "}
                                        <a
                                            href={"https://last.fm"}
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            Last.fm
                                        </a>{" "}
                                        scrobbling!
                                    </p>
                                    <span className={styles.featureNote}>
                                        Available for v4.1.0 or later
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.section} id="download">
                    <div>
                        <h1 className={styles.sectionTitle}>Download</h1>
                        <h2 className={styles.sectionDescription}>
                            Download AMRPC from GitHub or the Microsoft Store.
                        </h2>
                    </div>

                    <div className={styles.downloadLinks}>
                        <a href="https://github.com/ZephraCloud/Apple-Music-RPC/releases/latest">
                            <Image
                                src="/download_github.png"
                                width={761}
                                height={264}
                                alt="GitHub"
                            />
                        </a>
                        <span>
                            {/* @ts-ignore */}
                            <ms-store-badge
                                productid="9MTCXMKHMFG6"
                                window-mode="full"
                                /* @ts-ignore */
                            ></ms-store-badge>
                        </span>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
