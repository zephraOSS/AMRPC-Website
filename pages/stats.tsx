import { Footer } from "../components/footer";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "../styles/Stats.module.css";
import stylesHeader from "../styles/Header.module.css";

export default function Stats() {
    const [stats, setStats]: [
            stats: Array<Object>,
            setStats: React.Dispatch<any>
        ] = React.useState([]),
        [totalDownloads, setTotalDownloads]: [
            totalDownloads: number,
            setTotalDownloads: React.Dispatch<any>
        ] = React.useState(0),
        [status, setStatus]: [status: string, setStatus: React.Dispatch<any>] =
            React.useState("Loading...");

    // as of 5/28/2023
    const msStoreAcquisitions = 2100;

    React.useEffect(() => {
        setTotalDownloads(0);
        setStats([]);
        setStatus("Loading...");

        fetch("https://api.github.com/repos/zephraOSS/Apple-Music-RPC/releases")
            .then((res) => {
                setStatus("Building...");

                res.json().then((json) => {
                    const tempStats: Array<Object> = [];

                    for (let i = 0; i <= 10; i++) {
                        const data = json[i],
                            obj = {
                                version: data.tag_name,
                                downloads: 0
                            };

                        data.assets.forEach((asset: any) => {
                            obj.downloads += asset.download_count;
                        });

                        tempStats.push(obj);

                        if (i === 10) {
                            setStats(tempStats);
                        }
                    }

                    json.forEach((release: any) => {
                        release.assets.forEach((asset: any) => {
                            setTotalDownloads(
                                (prev: number) => prev + asset.download_count
                            );
                        });
                    });

                    setStatus("LIVE");
                });
            })
            .catch((err) => {
                setStatus("Failed");
                console.error(err);
            });
    }, []);

    return (
        <>
            <div className={stylesHeader.header}>
                <div className={stylesHeader.headerNavigation}>
                    <Link href={"/"}>Home</Link>
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
                <div className={styles.stats}>
                    <h1>Microsoft Store</h1>

                    <div className={styles.stat}>
                        <h1 className={styles.statTitle}>
                            Total Acquisitions
                            <span
                                style={{
                                    display: "block",
                                    fontWeight: "normal",
                                    fontSize: "0.9rem",
                                    marginTop: "0.25rem",
                                    opacity: "0.8"
                                }}
                            >
                                As of 5/28/2023
                            </span>
                        </h1>

                        <div className={styles.statProgress}>
                            <div
                                className={styles.statProgressFill}
                                style={{
                                    width: `${
                                        (msStoreAcquisitions / 5000) * 100 > 100
                                            ? 100
                                            : (msStoreAcquisitions / 5000) * 100
                                    }%`
                                }}
                            ></div>
                            <div className={styles.statProgressText}>
                                {msStoreAcquisitions.toLocaleString()}{" "}
                                Acquisitions
                            </div>
                            <div className={styles.statProgressTextTotal}>
                                5.000
                            </div>
                        </div>
                    </div>

                    <h1 style={{ position: "relative" }}>
                        GitHub
                        <span className={styles.liveBadge}>{status}</span>
                    </h1>

                    <div className={styles.stat}>
                        <h1 className={styles.statTitle}>All Versions</h1>

                        <div className={styles.statProgress}>
                            <div
                                className={styles.statProgressFill}
                                style={{
                                    width: `${
                                        (totalDownloads / 5000) * 100 > 100
                                            ? 100
                                            : (totalDownloads / 5000) * 100
                                    }%`
                                }}
                            ></div>
                            <div className={styles.statProgressText}>
                                {totalDownloads.toLocaleString()} Downloads
                            </div>
                            <div className={styles.statProgressTextTotal}>
                                5.000
                            </div>
                        </div>
                    </div>

                    {stats.map((stat: any) => {
                        return (
                            <div className={styles.stat} key={stat.version}>
                                <h1 className={styles.statTitle}>
                                    {stat.version}
                                </h1>

                                <div className={styles.statProgress}>
                                    <div
                                        className={styles.statProgressFill}
                                        style={{
                                            width: `${
                                                (stat.downloads / 5000) * 100 >
                                                100
                                                    ? 100
                                                    : (stat.downloads / 5000) *
                                                      100
                                            }%`
                                        }}
                                    ></div>
                                    <div className={styles.statProgressText}>
                                        {stat.downloads.toLocaleString()}{" "}
                                        Downloads
                                    </div>
                                    <div
                                        className={styles.statProgressTextTotal}
                                    >
                                        5.000
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Footer />
        </>
    );
}
