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
        [releases, setReleases]: [
            releases: any[],
            setReleases: React.Dispatch<any>
        ] = React.useState([]),
        [status, setStatus]: [status: string, setStatus: React.Dispatch<any>] =
            React.useState("Loading..."),
        [selectedVer, setSelectedVer]: [
            selectedVer: string,
            setSelectedVer: React.Dispatch<any>
        ] = React.useState("Latest");

    // as of 10/13/2023
    const msStoreAcquisitions = 4700,
        maxCount = 3000;

    const ignoreFiles = ["latest.yml", "latest-mac.yml"];

    function updateStats(rel = releases, option = selectedVer) {
        if (rel.length === 0) return;

        const tempStats: Array<Object> = [];

        const curFilter = ["all", "latest", "curMajor", "allPre"][
                [
                    "All",
                    "Latest",
                    "Current Major",
                    "All including Pre-Releases"
                ].indexOf(option)
            ],
            curMajor = rel[0].tag_name.split(".")[0];

        const filtered = rel.filter((release: any) => {
            switch (curFilter) {
                case "all":
                    return !release.prerelease;
                case "latest":
                    return !release.prerelease;
                case "curMajor":
                    return release.tag_name.split(".")[0] === curMajor;
                case "allPre":
                    return true;
            }
        });

        filtered.forEach((release: any) => {
            if (release.assets.length === 0)
                filtered.splice(filtered.indexOf(release), 1);
        });

        for (
            let i = 0;
            i < (curFilter === "latest" ? 11 : filtered.length);
            i++
        ) {
            const data = filtered[i],
                obj = {
                    version: data.tag_name,
                    published_at: data.published_at,
                    downloads: 0
                };

            data.assets.forEach((asset: any) => {
                if (ignoreFiles.includes(asset.name)) return;

                obj.downloads += asset.download_count;
            });

            tempStats.push(obj);

            if (i === 10) {
                setStats(tempStats);
            }
        }

        setStatus("LIVE");
    }

    React.useEffect(() => {
        setTotalDownloads(0);
        setStats([]);
        setStatus("Loading...");

        console.info("Fetching releases...");

        fetch(
            "https://api.github.com/repos/zephraOSS/Apple-Music-RPC/releases?per_page=100"
        )
            .then((res) => {
                setStatus("Building...");

                res.json().then((data) => {
                    setReleases(data);
                    updateStats(data);

                    data.forEach((release: any) => {
                        release.assets.forEach((asset: any) => {
                            if (ignoreFiles.includes(asset.name)) return;

                            setTotalDownloads(
                                (prev: number) => prev + asset.download_count
                            );
                        });
                    });

                    if (data.willUpdate) {
                        setTimeout(() => {
                            setStatus("New data available");
                        }, 10000);
                    }
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
                                As of 10/13/2023
                            </span>
                        </h1>

                        <div className={styles.statProgress}>
                            <div
                                className={styles.statProgressFill}
                                style={{
                                    width: `${
                                        (msStoreAcquisitions / maxCount) * 100 >
                                        100
                                            ? 100
                                            : (msStoreAcquisitions / maxCount) *
                                              100
                                    }%`
                                }}
                            ></div>
                            <div className={styles.statProgressText}>
                                {msStoreAcquisitions.toLocaleString()}{" "}
                                Acquisitions
                            </div>
                            <div className={styles.statProgressTextTotal}>
                                {maxCount.toLocaleString()}
                            </div>
                        </div>
                    </div>

                    <h1 style={{ position: "relative" }}>
                        GitHub
                        <span className={styles.liveBadge}>{status}</span>
                    </h1>

                    <div className={styles.selectVersions}>
                        {[
                            "All",
                            "Latest",
                            "Current Major",
                            "All including Pre-Releases"
                        ].map((option) => {
                            return (
                                <div
                                    className={[
                                        styles.selectVersion,
                                        selectedVer === option
                                            ? styles.selected
                                            : ""
                                    ].join(" ")}
                                    onClick={() => {
                                        setSelectedVer(option);
                                        updateStats(undefined, option);
                                    }}
                                    key={option}
                                >
                                    <span>{option}</span>
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles.stat}>
                        <h1 className={styles.statTitle}>All Versions</h1>

                        <div className={styles.statProgress}>
                            <div
                                className={styles.statProgressFill}
                                style={{
                                    width: `${
                                        (totalDownloads / maxCount) * 100 > 100
                                            ? 100
                                            : (totalDownloads / maxCount) * 100
                                    }%`
                                }}
                            ></div>
                            <div className={styles.statProgressText}>
                                {totalDownloads.toLocaleString()} Downloads
                            </div>
                            <div className={styles.statProgressTextTotal}>
                                {maxCount.toLocaleString()}
                            </div>
                        </div>
                    </div>

                    {stats.map((stat: any) => {
                        return (
                            <div className={styles.stat} key={stat.version}>
                                <h1 className={styles.statTitle}>
                                    {stat.version}
                                    <span
                                        style={{
                                            display: "block",
                                            fontWeight: "normal",
                                            fontSize: "0.9rem",
                                            marginTop: "0.25rem",
                                            opacity: "0.8"
                                        }}
                                    >
                                        Released on{" "}
                                        {new Date(
                                            stat.published_at
                                        ).toLocaleDateString()}
                                    </span>
                                </h1>

                                <div className={styles.statProgress}>
                                    <div
                                        className={styles.statProgressFill}
                                        style={{
                                            width: `${
                                                (stat.downloads / maxCount) *
                                                    100 >
                                                100
                                                    ? 100
                                                    : (stat.downloads /
                                                          maxCount) *
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
                                        {maxCount.toLocaleString()}
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
