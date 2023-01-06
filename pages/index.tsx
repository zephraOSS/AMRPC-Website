import { Footer } from "../components/footer";

import Image from "next/image";
import Script from "next/script";
import React from "react";

import type { NextPage } from "next";

import styles from "../styles/Home.module.css";
import stylesHeader from "../styles/Header.module.css";

const Home: NextPage = () => {
    const releaseDate = "2022-12-01T10:00:00Z",
        [isBefore, setIsBefore] = React.useState(
            new Date().getTime() < new Date(releaseDate).getTime()
        ),
        [countdown, setCountdown] = React.useState({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        });

    React.useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime(),
                distance = new Date(releaseDate).getTime() - now,
                days = Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ),
                minutes = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                ),
                seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setCountdown({ days, hours, minutes, seconds });
        }, 1000);

        setIsBefore(new Date().getTime() < new Date(releaseDate).getTime());

        return () => clearInterval(interval);
    }, [releaseDate]);

    return (
        <>
            <Script
                type="module"
                src="https://get.microsoft.com/badge/ms-store-badge.bundled.js"
            ></Script>

            <div className={stylesHeader.header}>
                <div className={stylesHeader.headerNavigation}>
                    <a href="#download">Download</a>
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
                        {isBefore && (
                            <div className={styles.msStoreCountdown}>
                                <span className={styles.msStoreCountdownTitle}>
                                    Time until Microsft Store release
                                </span>
                                <br />
                                <div className={styles.msStoreCountdownLogo}>
                                    <div>
                                        <span>{countdown.days}</span>
                                    </div>
                                    <div>
                                        <span>{countdown.hours}</span>
                                    </div>
                                    <div>
                                        <span>{countdown.minutes}</span>
                                    </div>
                                    <div>
                                        <span>{countdown.seconds}</span>
                                    </div>
                                </div>
                            </div>
                        )}
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
                        <a className={isBefore ? styles.disabledLink : ""}>
                            {/* @ts-ignore */}
                            <ms-store-badge
                                productid="9MTCXMKHMFG6"
                                window-mode="full"
                                /* @ts-ignore */
                            ></ms-store-badge>
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Home;
