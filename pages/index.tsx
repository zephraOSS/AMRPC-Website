import type { NextPage } from "next";

import Image from "next/image";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.headerNavigation}>
                    <a href="#download">Download</a>
                </div>
                <div className={styles.headerLogo}>
                    <Image
                        src="/applemusic.png"
                        width={1260}
                        height={1260}
                        alt="AMRPC Logo"
                    />
                </div>
                <div className={styles.headerTitle}>
                    <h1 className={styles.titleTitle}>AMRPC</h1>
                    <h2 className={styles.titleDescription}>
                        An Open-Source Discord RPC App for Apple Music and
                        iTunes
                    </h2>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.appExample}>
                    <Image
                        src="/App.png"
                        width={797}
                        height={598}
                        alt="Screenshot of the app"
                    />
                </div>

                <div className={styles.section}>
                    <h1 className={styles.sectionTitle}>Features</h1>

                    <div className={styles.featuresList}>
                        <div className={styles.featuresFeature}>
                            <div className={styles.featureIcon}>
                                <i className="fa-solid fa-brush"></i>
                            </div>
                            <div className={styles.featureDescription}>
                                <p>
                                    The album artwork is displayed in the
                                    Discord RPC!
                                </p>
                            </div>
                        </div>

                        <div className={styles.featuresFeature}>
                            <div className={styles.featureIcon}>
                                <i className="fa-solid fa-users"></i>
                            </div>
                            <div className={styles.featureDescription}>
                                <div className={styles.comingSoonContainer}>
                                    <a href="https://docs.amrpc.zephra.cloud/articles/listen-together">
                                        <span className={styles.comingSoon}>
                                            Canceled{" "}
                                            <i
                                                className={
                                                    "fa-solid fa-circle-info"
                                                }
                                            ></i>
                                        </span>
                                    </a>
                                </div>
                                <p>
                                    You can listen together to Apple Music with
                                    your friends, even if you&apos;re not in the
                                    same place!
                                </p>
                            </div>
                        </div>

                        <div className={styles.featuresFeature}>
                            <div className={styles.featureIcon}>
                                <i className="fa-solid fa-meteor"></i>
                            </div>
                            <div className={styles.featureDescription}>
                                <p>
                                    AMRPC is available for Apple Music, iTunes
                                    and Apple Music Electron on macOS and
                                    Windows.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.section} id="download">
                    <div>
                        <h1 className={styles.sectionTitle}>Download</h1>
                        <h2 className={styles.sectionDescription}>
                            AMRPC is currently only available on GitHub.
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
                    </div>
                </div>
            </div>

            <footer className={styles.footer}>
                <div className={styles.footerNote}>
                    <span>
                        Made with 💖 by{" "}
                        <a href="https://www.zephra.cloud">zephra</a>.
                    </span>
                </div>
                <div className={styles.footerNote} style={{ display: "none" }}>
                    <span>
                        AMRPC is not affiliated with Apple or the Apple Music
                        service.
                    </span>
                </div>
                <div className={styles.footerLinks}>
                    <a href="https://www.zephra.cloud/legal/imprint">Imprint</a>
                    <a href="https://github.com/ZephraCloud/Apple-Music-RPC">
                        GitHub
                    </a>
                    <a href="https://twitter.com/zephraCloud">Twitter</a>
                </div>
            </footer>
        </>
    );
};

export default Home;
