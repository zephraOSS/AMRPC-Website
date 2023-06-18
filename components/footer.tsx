import React from "react";

import styles from "../styles/Footer.module.css";
import Link from "next/link";

export function Footer() {
    return (
        <>
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
                    <a href="https://github.com/zephraOSS/Apple-Music-RPC">
                        GitHub
                    </a>
                    <a href="https://twitter.com/zephraCloud">Twitter</a>
                    <a href="https://www.zephra.cloud/legal/notice">
                        Legal Notice
                    </a>
                    <Link href={"/privacy"}>Privacy Policy</Link>
                </div>
            </footer>
        </>
    );
}
