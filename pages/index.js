import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import anime from "animejs";
import { useEffect } from "react";

const BLOB_BASE =
    "M448.5,301Q426,352,375,365.5Q324,379,287,419.5Q250,460,201.5,439Q153,418,119,381.5Q85,345,43,297.5Q1,250,20.5,189.5Q40,129,94.5,102.5Q149,76,199.5,99Q250,122,309,84Q368,46,392,100Q416,154,443.5,202Q471,250,448.5,301Z";

const BLOB_KEYFRAMES = [
    {
        d: "M421,292Q395,334,374,381.5Q353,429,301.5,454.5Q250,480,216,424Q182,368,123.5,362.5Q65,357,62.5,303.5Q60,250,60.5,195.5Q61,141,99,97.5Q137,54,193.5,76Q250,98,289,106.5Q328,115,396.5,120.5Q465,126,456,188Q447,250,421,292Z",
    },
    {
        d: "M394,296.5Q411,343,365,356Q319,369,284.5,416Q250,463,195,451.5Q140,440,120.5,388Q101,336,112.5,293Q124,250,84,190.5Q44,131,96.5,103Q149,75,199.5,38.5Q250,2,303.5,33.5Q357,65,382.5,112Q408,159,392.5,204.5Q377,250,394,296.5Z",
    },
    {
        d: "M426,306Q443,362,394.5,389.5Q346,417,298,447Q250,477,196,456.5Q142,436,101.5,397.5Q61,359,36.5,304.5Q12,250,65,212Q118,174,126.5,112.5Q135,51,192.5,77Q250,103,295,98.5Q340,94,395.5,114Q451,134,430,192Q409,250,426,306Z",
    },
];

export default function Home({ allPostsData }) {
    useEffect(() => {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const instances = [
            anime({
                targets: "#masthead .masthead-header .sub",
                duration: 3000,
                translateY: -8,
                opacity: 1,
            }),
            anime({
                targets: "#masthead .masthead-header h1",
                duration: 3000,
                translateY: 8,
                opacity: 1,
                delay: 500,
            }),
            anime({
                targets: "#masthead .masthead-header .award-pill",
                duration: 3000,
                translateY: -8,
                opacity: 1,
                delay: 1000,
            }),
        ];

        if (!reduceMotion) {
            [0, 300, 600].forEach((delay, i) => {
                instances.push(
                    anime({
                        targets: `.home-blob.blob-${i + 1} path`,
                        duration: 24000,
                        easing: "easeInOutSine",
                        delay,
                        loop: true,
                        direction: "alternate",
                        keyframes: BLOB_KEYFRAMES,
                    })
                );
            });
        }

        return () => instances.forEach((instance) => instance.pause());
    }, []);

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div id="home">
                <div className="home-blobs" aria-hidden="true">
                    <svg
                        className="home-blob blob-1"
                        viewBox="0 0 500 500"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d={BLOB_BASE} />
                    </svg>
                    <svg
                        className="home-blob blob-2"
                        viewBox="0 0 500 500"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d={BLOB_BASE} />
                    </svg>
                    <svg
                        className="home-blob blob-3"
                        viewBox="0 0 500 500"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d={BLOB_BASE} />
                    </svg>
                </div>

                <section id="masthead">
                    <div className="container">
                        <div className="masthead-header">
                            <div className="sub">
                                Toronto Based Product Designer
                            </div>
                            <h1>
                                I turn complex, high-stakes workflows into
                                things people can actually use.
                            </h1>
                            <Link
                                href="https://www.linkedin.com/posts/jason-somai_just-announced-the-top-performers-of-the-activity-7376330023965790208-v7d2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAsTYMoBpu_vWR2pGNMqEivbIipW7QTvOrs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="award-pill"
                            >
                                <span className="award-pill-tag">
                                    E-Source 2025 Benchmark
                                </span>
                                <span className="award-pill-text">
                                    Hydro One ranked <strong>#7 of 94</strong>{" "}
                                    North American utility websites, and #1 in
                                    Canada. Independently evaluated, biennially,
                                    since 2002.
                                </span>
                                <span className="award-pill-link">
                                    Learn More
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                <section id="home-work">
                    <div className="container">
                        <div className="section-head">
                            <h2>Selected work</h2>
                            <Link href="/work" className="arrow-btn white">
                                All Work
                            </Link>
                        </div>

                        <Link
                            href="/work/tree-trimming"
                            className="work-card work-card--featured"
                        >
                            <div className="work-card-image">
                                <Image
                                    src="/images/home-tree-trimming.jpg"
                                    fill
                                    sizes="(max-width: 991px) 100vw, 50vw"
                                    style={{ objectFit: "cover" }}
                                    alt="Hydro One tree trimming eligibility diagram with numbered power line zones"
                                />
                            </div>
                            <div className="work-card-body">
                                <div className="tags">
                                    <span className="tag">Hydro One</span>
                                    <span className="tag">
                                        Self-Service Tool
                                    </span>
                                </div>
                                <h3>Tree Trimming Eligibility Tool</h3>
                                <p>
                                    Testers were picking the answer that got
                                    them service, not the one that was true.
                                    Colour coding was the culprit. Removing it
                                    fixed the form.
                                </p>
                                <div className="stat-boxes stat-boxes--bare">
                                    <div className="stat">
                                        <div className="num">66%</div>
                                        <div className="label">
                                            fewer immediate exits
                                        </div>
                                    </div>
                                    <div className="stat">
                                        <div className="num">42%</div>
                                        <div className="label">
                                            fewer dead clicks
                                        </div>
                                    </div>
                                    <div className="stat">
                                        <div className="num">37%</div>
                                        <div className="label">
                                            faster completion
                                        </div>
                                    </div>
                                </div>
                                <span className="arrow-btn blue">
                                    Read Case Study
                                </span>
                            </div>
                        </Link>

                        <div className="work-card-grid">
                            <Link
                                href="/work/tally"
                                className="work-card"
                            >
                                <div className="work-card-image">
                                    <Image
                                        src="/images/home-tally.jpg"
                                        fill
                                        sizes="(max-width: 767px) 100vw, 50vw"
                                        style={{ objectFit: "cover" }}
                                        alt="Tally golf scoring app showing the Hit Shot control"
                                    />
                                </div>
                                <div className="work-card-body">
                                    <div className="tags">
                                        <span className="tag tag--accent">
                                            Personal
                                        </span>
                                        <span className="tag">
                                            Android + Wear OS
                                        </span>
                                        <span className="tag">0→1 Product</span>
                                    </div>
                                    <h3>Tally: Golf scoring, stripped back</h3>
                                    <p>
                                        Created this because I play golf very
                                        casually. Designed in Figma first, then
                                        built. What AI-led UI gets wrong, and
                                        why taste still has to lead the tooling.
                                    </p>
                                    <span className="arrow-btn blue">
                                        Read Case Study
                                    </span>
                                </div>
                            </Link>

                            <Link
                                href="/work/el-fund"
                                className="work-card"
                            >
                                <div className="work-card-image">
                                    <Image
                                        src="/images/elcf-1-1.jpg"
                                        fill
                                        sizes="(max-width: 767px) 100vw, 50vw"
                                        style={{ objectFit: "cover" }}
                                        alt="Energizing Life Community Fund campaign page"
                                    />
                                </div>
                                <div className="work-card-body">
                                    <div className="tags">
                                        <span className="tag">Hydro One</span>
                                        <span className="tag">Conversions</span>
                                    </div>
                                    <h3>Energizing Life Community Fund</h3>
                                    <p>
                                        56% engagement rate, 44% bounce rate.
                                        Consistent high performance over 4
                                        years. 6.4x increase in applications.
                                    </p>
                                    <span className="arrow-btn blue">
                                        Read Case Study
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                <section id="home-blog">
                    <div className="container">
                        <div className="section-head">
                            <h2>Blog</h2>
                            <Link href="/blog" className="arrow-btn white">
                                All Blogs
                            </Link>
                        </div>
                        <div className="cardWrapper">
                            {allPostsData
                                .slice(0, 3)
                                .map(({ id, title, description, image }) => (
                                    <Link
                                        href={`/posts/${id}`}
                                        className="post-preview"
                                        key={id}
                                    >
                                        <div className="image">
                                            <Image
                                                src={image}
                                                fill
                                                sizes="(max-width: 767px) 100vw, 33vw"
                                                alt={title}
                                            />
                                        </div>
                                        <div className="text">
                                            <h3>{title}</h3>
                                            <p>{description}</p>
                                            <span className="btn outline white">
                                                Read
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </section>

                <section id="contact">
                    <div className="container">
                        <div className="contact-card">
                            <div className="contact-about">
                                <div className="contact-identity">
                                    <div className="avatar">
                                        <Image
                                            src="/images/profile.jpg"
                                            width={96}
                                            height={96}
                                            alt="Jason Somai"
                                        />
                                    </div>
                                    <div>
                                        <h3>Jason Somai</h3>
                                        <div className="sub">
                                            Product Designer · Toronto
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    I'm a product designer with a developer's
                                    instinct — I prototype in the browser, write
                                    production HTML/CSS/JS, and care what
                                    happens after launch. My process runs the
                                    full arc: UX research, design,
                                    implementation, and behavioral analytics to
                                    measure what actually changed.
                                </p>
                                <p>
                                    At Hydro One I've spent four years leading
                                    design and development for Ontario's largest
                                    utility — building everything from a
                                    company-wide design system to self-service
                                    customer tools. Work my team shipped helped
                                    us rank #7 of 94 utility websites in North
                                    America, and #1 in Canada, in E-Source's
                                    2025 benchmark.
                                </p>
                                <p>
                                    I build things on my own time too. Right now
                                    that's Tally, a golf-scoring Android app,
                                    and a{" "}
                                    <Link
                                        href="/posts/kh-bbs-meld-simulator"
                                        target="_blank"
                                    >
                                        Kingdom Hearts fan tool
                                    </Link>{" "}
                                    I designed, shipped, and grew to 34k
                                    impressions through my own SEO. I like
                                    owning the whole arc.
                                </p>
                                <p>
                                    Off the screen: a Golf GTI, traveling to as
                                    many beaches as I can see, and good times
                                    with friends and family.
                                </p>
                                <div className="socials">
                                    <a
                                        href="https://www.linkedin.com/in/jason-somai-40a29252/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-name="Layer 1"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
                                        </svg>
                                        LinkedIn
                                    </a>
                                    <a
                                        href="https://github.com/somaij"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-name="Layer 1"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
                                        </svg>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                            <div className="form">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
