import Head from "next/head";
import Image from "next/image";
// import styles from './layout.module.css';
// import utilStyles from '../styles/utils.module.css';
import Link from "next/link";
import { GoogleTagManager } from "@next/third-parties/google";

export const siteTitle =
    "Jason Somai's Portfolio | Design and Development hand-in-hand";

export default function Layout({ children, home }) {
    return (
        <main>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <meta
                    name="description"
                    content="Jason's portfolio. A collection of his past design and development work, and the blogs that he writes."
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header>
                {
                    <nav>
                        <div className="logo">
                            <Link href="/">Jason Somai</Link>
                        </div>
                        <div className="menu">
                            <Link href="/#home-blog">Blog</Link>
                            <Link href="/#home-work">Work</Link>
                        </div>
                    </nav>
                }
            </header>
            {/* GTM */}
            <GoogleTagManager gtmId="GTM-MNDVSC5P" />
            <main>{children}</main>
            <footer>Made with Next.js by Jason Somai</footer>
        </main>
    );
}
