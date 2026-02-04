import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import anime from "animejs";
import { useEffect } from "react";

const random = (min, max) => {
    return Math.random() * (max - min) + min;
};

export default function Home({ allPostsData }) {
    useEffect(() => {
        anime({
            targets: ".mast-blob-svg.blob-1 path",
            duration: 8000,
            easing: "easeInOutSine(0.25, 1)",
            loop: true,

            direction: "alternate",
            keyframes: [
                {
                    d: "M1356.5 -43.9999C1356.5 -43.9999 1910 412.5 1407.5 618C905 823.5 1191 130.5 784 286C377 441.5 346 475.5 234.5 791.5C123 1107.5 81.0445 869.267 -74.4266 1053.83C-229.898 1238.4 -31.9287 -44 -31.9287 -44L1356.5 -43.9999Z",
                },
            ],
        }),
            anime({
                targets: ".mast-blob-svg.blob-2 path",
                duration: 8000,
                easing: "easeInOutSine(0.25, 1)",
                delay: 300,
                loop: true,

                direction: "alternate",
                keyframes: [
                    {
                        d: "M1546.66 -43.9998C1546.66 -43.9998 1932.84 424.867 1562.5 749C1192.16 1073.13 1128 851.5 928.5 890C729 928.5 672.652 455.051 439.5 821.5C206.348 1187.95 118.402 1496.14 -3.4999 1248.5C-125.402 1000.86 -19.5165 -44 -19.5165 -44L1546.66 -43.9998Z",
                    },
                ],
            }),
            anime({
                targets: ".mast-blob-svg.blob-3 path",
                duration: 8000,
                easing: "easeInOutSine(0.25, 1)",
                delay: 400,
                loop: true,

                direction: "alternate",
                keyframes: [
                    {
                        d: "M1618.7 -44C1618.7 -44 1834.5 -55.5 1834.5 759C1834.5 1573.5 1166 807.5 905.418 1305.12C644.836 1802.73 702.11 1228.5 549.5 1443.5C396.89 1658.5 202 1887 65 1641C-71.9999 1395 -14.3571 -44.0002 -14.3571 -44.0002L1618.7 -44Z",
                    },
                ],
            }),
            anime({
                targets: "#masthead .masthead-header h1",
                duration: 3000,
                translateY: 8,
                opacity: 1,
                delay: 500,
            }),
            anime({
                targets: "#masthead .masthead-header p",
                duration: 3000,
                translateY: -8,
                opacity: 1,
                delay: 1000,
            }),
            anime({
                targets: "#masthead .masthead-header .sub",
                duration: 3000,
                translateY: -8,
                opacity: 1,
            });
        anime({
            targets: ".blog-svg.blob-1 path",
            duration: 12000,
            easing: "easeInOutSine(0.25, 1)",
            loop: true,

            direction: "alternate",
            keyframes: [
                {
                    d: "M421,292Q395,334,374,381.5Q353,429,301.5,454.5Q250,480,216,424Q182,368,123.5,362.5Q65,357,62.5,303.5Q60,250,60.5,195.5Q61,141,99,97.5Q137,54,193.5,76Q250,98,289,106.5Q328,115,396.5,120.5Q465,126,456,188Q447,250,421,292Z",
                },
                {
                    d: "M394,296.5Q411,343,365,356Q319,369,284.5,416Q250,463,195,451.5Q140,440,120.5,388Q101,336,112.5,293Q124,250,84,190.5Q44,131,96.5,103Q149,75,199.5,38.5Q250,2,303.5,33.5Q357,65,382.5,112Q408,159,392.5,204.5Q377,250,394,296.5Z",
                },
                {
                    d: "M426,306Q443,362,394.5,389.5Q346,417,298,447Q250,477,196,456.5Q142,436,101.5,397.5Q61,359,36.5,304.5Q12,250,65,212Q118,174,126.5,112.5Q135,51,192.5,77Q250,103,295,98.5Q340,94,395.5,114Q451,134,430,192Q409,250,426,306Z",
                },
            ],
        }),
            anime({
                targets: ".blog-svg.blob-2 path",
                duration: 12000,
                easing: "easeInOutSine(0.25, 1)",
                loop: true,

                direction: "alternate",
                keyframes: [
                    {
                        d: "M421,292Q395,334,374,381.5Q353,429,301.5,454.5Q250,480,216,424Q182,368,123.5,362.5Q65,357,62.5,303.5Q60,250,60.5,195.5Q61,141,99,97.5Q137,54,193.5,76Q250,98,289,106.5Q328,115,396.5,120.5Q465,126,456,188Q447,250,421,292Z",
                    },
                    {
                        d: "M394,296.5Q411,343,365,356Q319,369,284.5,416Q250,463,195,451.5Q140,440,120.5,388Q101,336,112.5,293Q124,250,84,190.5Q44,131,96.5,103Q149,75,199.5,38.5Q250,2,303.5,33.5Q357,65,382.5,112Q408,159,392.5,204.5Q377,250,394,296.5Z",
                    },
                    {
                        d: "M426,306Q443,362,394.5,389.5Q346,417,298,447Q250,477,196,456.5Q142,436,101.5,397.5Q61,359,36.5,304.5Q12,250,65,212Q118,174,126.5,112.5Q135,51,192.5,77Q250,103,295,98.5Q340,94,395.5,114Q451,134,430,192Q409,250,426,306Z",
                    },
                ],
            }),
            anime({
                targets: ".blog-svg.blob-3 path",
                duration: 12000,
                easing: "easeInOutSine(0.25, 1)",
                loop: true,

                direction: "alternate",
                keyframes: [
                    {
                        d: "M421,292Q395,334,374,381.5Q353,429,301.5,454.5Q250,480,216,424Q182,368,123.5,362.5Q65,357,62.5,303.5Q60,250,60.5,195.5Q61,141,99,97.5Q137,54,193.5,76Q250,98,289,106.5Q328,115,396.5,120.5Q465,126,456,188Q447,250,421,292Z",
                    },
                    {
                        d: "M394,296.5Q411,343,365,356Q319,369,284.5,416Q250,463,195,451.5Q140,440,120.5,388Q101,336,112.5,293Q124,250,84,190.5Q44,131,96.5,103Q149,75,199.5,38.5Q250,2,303.5,33.5Q357,65,382.5,112Q408,159,392.5,204.5Q377,250,394,296.5Z",
                    },
                    {
                        d: "M426,306Q443,362,394.5,389.5Q346,417,298,447Q250,477,196,456.5Q142,436,101.5,397.5Q61,359,36.5,304.5Q12,250,65,212Q118,174,126.5,112.5Q135,51,192.5,77Q250,103,295,98.5Q340,94,395.5,114Q451,134,430,192Q409,250,426,306Z",
                    },
                ],
            });
    }, []);
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section id="masthead">
                <div className="background-wrapper">
                    <div id="header-background">
                        <svg
                            className="mast-blob-svg blob-1"
                            viewBox="0 0 1790 1737"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1374.04 -43.9998C1374.04 -43.9998 1776.7 453.453 1374.04 538.277C971.371 623.1 1078.68 752.076 793.943 794.163C509.209 836.249 567.643 615.916 336.385 926.015C105.126 1236.11 81.0445 869.267 -74.4266 1053.83C-229.898 1238.4 -31.9287 -44 -31.9287 -44L1374.04 -43.9998Z"
                                fill="#000"
                                fillOpacity="0.1"
                            />
                        </svg>

                        <svg
                            className="mast-blob-svg blob-2"
                            viewBox="0 0 1790 1737"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1546.66 -43.9999C1546.66 -43.9999 1797.17 262.424 1546.66 666.632C1296.15 1070.84 981.733 978.926 900.466 978.926C819.198 978.926 629.442 961.287 396.29 1327.74C163.139 1694.19 55.0446 1543.48 -66.8572 1295.84C-188.759 1048.19 -19.5165 -44.0001 -19.5165 -44.0001L1546.66 -43.9999Z"
                                fill="#000"
                                fillOpacity="0.1"
                            />
                        </svg>

                        <svg
                            className="mast-blob-svg blob-3"
                            viewBox="0 0 1790 1737"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1618.7 -43.9999C1618.7 -43.9999 2004.13 504.681 1618.7 838.684C1233.26 1172.69 1058.03 1029.31 905.418 1305.12C752.808 1580.92 571.815 1444.84 419.204 1659.85C266.594 1874.85 91.7704 1566.52 -63.7192 1620.22C-219.209 1673.93 -14.3571 -44.0001 -14.3571 -44.0001L1618.7 -43.9999Z"
                                fill="#000"
                                fillOpacity="0.1"
                            />
                        </svg>
                    </div>
                </div>
                <div className="container">
                    <div className="masthead-header">
                        <div className="sub">Jason Somai is a</div>
                        <h1>Product Designer & Developer</h1>
                        <p>Building accessible, data-driven experiences at scale. Based in Toronto.</p>
                    </div>
                </div>
                <div className="container">
                    <div id="home-work">
                        <h2>Work</h2>
                        <div id="hydro-row">
                            <div className="row-title">
                                <h3>Hydro One</h3>
                                <div className="sub-row">
                                    <div className="sub">
                                        UX/UI & Web Leadership
                                    </div>
                                    <div>
                                        <h6>🏆 Ranked #7 best Utility Website in E-Source's 2025 Benchmark</h6>
                                        <p>Our work at Hydro One earned recognition in E-Source’s annual review of 100 utility websites, placing our public-facing site as #7 for design quality and user experience. <a href="https://www.linkedin.com/posts/jason-somai_just-announced-the-top-performers-of-the-activity-7376330023965790208-v7d2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAsTYMoBpu_vWR2pGNMqEivbIipW7QTvOrs" target="_blank">View details</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="work-row">
                                <Link
                                    href="work/tree-trimming"
                                    className="work-preview"
                                >
                                    <div className="image">
                                        <Image
                                            src="/images/pexels-karola-g-4206118.jpg"
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="text">
                                        <h3>Tree Trimming Eligibility Tool</h3>
                                        <p className="no-margin">Reducing User Frustration by 40%. Redesigned a confusing eligibility form into an interactive, self-service tool.</p>
                                    </div>
                                    <span className="btn outline white">
                                        Learn More
                                    </span>
                                </Link>
                                <Link
                                    href="work/el-fund"
                                    className="work-preview"
                                >
                                    <div className="image">
                                        <Image
                                            src="/images/the-tampa-bay-estuary-program-CxL29J-aM5E-unsplash.jpg"
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="text">
                                        <h3>Energizing Life Community Fund</h3>
                                        <p className="no-margin">56% engagement rate, 44% bounce rate. Consistent high performance over 4 years. 6.4x increase in applications.</p>
                                    </div>
                                    <span className="btn outline white">
                                        Learn More
                                    </span>
                                </Link>
                                <Link
                                    href="work/energizing-life-everyday-local"
                                    className="work-preview"
                                >
                                    <div className="image">
                                        <Image
                                            src="/images/pexels-uvarova-323133.jpg"
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="text">
                                        <h3>Energizing Life Everyday</h3>
                                        <p className="no-margin">
                                            Marketing campaign landing page. Increased page engagement <strong>by 10%</strong> and ASD <strong>by 5%</strong>.
                                        </p>
                                    </div>
                                    <span className="btn outline white">
                                        Learn More
                                    </span>
                                </Link>
                                <Link
                                    href="work/sustainability-2022"
                                    className="work-preview"
                                >
                                    <div className="image">
                                        <Image
                                            src="/images/pexels-hyukman-kwon-2542429-9765771.jpg"
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="text">
                                        <h3>Sustainability</h3>
                                        <p className="no-margin">Report download page. Pages per session up 44% and downloads increased by 34%.</p>
                                    </div>
                                    <span className="btn outline white">
                                        Learn More
                                    </span>
                                </Link>

                            </div>
                        </div>
                        <div className="second-row">
                            <Link
                                href="work/tla-canadian-tire"
                                className="work-preview"
                            >
                                <div className="image">
                                    <Image
                                        src="/images/tla-2.jpg"
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className="text">
                                    <h3>TLA - Canadian Tire</h3>
                                    <div className="sub">
                                        UX Design and Development
                                    </div>
                                </div>
                                <span className="btn outline white">
                                    Learn More
                                </span>
                            </Link>
                            <Link href="work/guideo" className="work-preview">
                                <div className="image">
                                    <Image
                                        src="/images/toronto-streetcar-downtown.jpg"
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className="text">
                                    <h3>Guideo</h3>
                                    <div className="sub">
                                        Brainstation UX Project
                                    </div>
                                </div>
                                <span className="btn outline white">
                                    Learn More
                                </span>
                            </Link>
                            <div className="text-card">
                                <h3>Ferraz Creative</h3>
                                <p>
                                    Here’s a couple of websites I’ve developed
                                    for Ferraz Creative:
                                </p>
                                <div className="text-links">
                                    <Link
                                        href="https://workhaus.ca/"
                                        target="_blank"
                                    >
                                        Workhaus
                                    </Link>
                                    <Link
                                        href="https://smgconstruction.com/"
                                        target="_blank"
                                    >
                                        SMG Construction
                                    </Link>
                                    <Link
                                        href="https://dkcbahamas.com/"
                                        target="_blank"
                                    >
                                        DKC Bahamas
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="home-blog">
                <div className="blog-blob">
                    <svg
                        className="blog-svg blob-1"
                        viewBox="0 0 500 500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M448.5,301Q426,352,375,365.5Q324,379,287,419.5Q250,460,201.5,439Q153,418,119,381.5Q85,345,43,297.5Q1,250,20.5,189.5Q40,129,94.5,102.5Q149,76,199.5,99Q250,122,309,84Q368,46,392,100Q416,154,443.5,202Q471,250,448.5,301Z"
                            stroke="#5E7CE2"
                            fill-opacity="1"
                        />
                    </svg>
                    <svg
                        className="blog-svg blob-2"
                        viewBox="0 0 750 750"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M448.5,301Q426,352,375,365.5Q324,379,287,419.5Q250,460,201.5,439Q153,418,119,381.5Q85,345,43,297.5Q1,250,20.5,189.5Q40,129,94.5,102.5Q149,76,199.5,99Q250,122,309,84Q368,46,392,100Q416,154,443.5,202Q471,250,448.5,301Z"
                            stroke="#533EF1"
                            fill-opacity="1"
                        />
                    </svg>
                    <svg
                        className="blog-svg blob-3"
                        viewBox="0 0 1000 1000"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M448.5,301Q426,352,375,365.5Q324,379,287,419.5Q250,460,201.5,439Q153,418,119,381.5Q85,345,43,297.5Q1,250,20.5,189.5Q40,129,94.5,102.5Q149,76,199.5,99Q250,122,309,84Q368,46,392,100Q416,154,443.5,202Q471,250,448.5,301Z"
                            stroke="#4800ff"
                            fill-opacity="1"
                        />
                    </svg>
                </div>
                <div className="container">
                    <h2>Blog</h2>
                    <div className="cardWrapper">
                        {allPostsData.slice(0, 3).map(
                            ({ id, date, title, description, image }) => (
                                <Link
                                    href={`/posts/${id}`}
                                    className="post-preview"
                                >
                                    <div className="image">
                                        <Image src={image} fill />
                                    </div>
                                    <div className="text">
                                        <h3>{title}</h3>
                                        <p>{description}</p>
                                        <span className="btn outline white">
                                            Read
                                        </span>
                                    </div>
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </section>
            <div id="contact">
                <div className="container">
                    <h2>Connect</h2>
                    <div className="row">
                        <div id="about">
                            <div className="top-row">
                                <div className="image">
                                    <Image
                                        src="/images/profile.jpg"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="text">
                                    <div className="about-text-header">
                                        <h4>About Me</h4>
                                        <div className="socials">
                                            <a
                                                href="https://www.linkedin.com/in/jason-somai-40a29252/"
                                                target="_blank"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    data-name="Layer 1"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
                                                </svg>
                                            </a>
                                            <a
                                                href="https://github.com/somaij"
                                                target="_blank"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    data-name="Layer 1"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <p>
                                        Hi, I’m Jason, Digital Manager for Hydro
                                        One’s website, where I get to lead a
                                        talented team in creating web
                                        experiences that make a real
                                        difference. I help Ontarians save on
                                        energy, access grants, perform the <Link
                                        href="/work/tree-trimming"
                                        target="_blank"
                                    >services they need to do</Link> and stay informed
                                        on our role in the energy transition.
                                    </p>
                                </div>
                            </div>
                            <div className="bottom-content">
                                <p>
                                    From 2018 to 2022 I was 
                                    <Link
                                        href="https://www.ferrazcreative.com/"
                                        target="_blank"
                                    >
                                        Ferraz Creative's
                                    </Link>
                                     Senior Developer, I brought imaginative
                                    concepts to life with my mentor, Andre,
                                    including building the{" "}
                                    <Link
                                        href="https://workhaus.ca/"
                                        target="_blank"
                                    >
                                        Workhaus WordPress website
                                    </Link>{" "}
                                    from scratch and implementing ACF for easy
                                    content management.
                                </p>
                                <p>
                                    I’m constantly exploring new ways to grow my
                                    skills, whether through side projects, like
                                    this <Link
                                        href="/posts/kh-bbs-meld-simulator"
                                        target="_blank"
                                    >Kingdom Hearts fan site</Link> I built, or the Brainstation UX course I
                                    took in 2018, which continues to shape how I
                                    approach design and usability.
                                </p>
                                <p>
                                    Outside of the craft I’m a car enthusiast with a GTI. I also love to travel (<em>real original</em>, but I just learnt that Europe is awesome so cut me some slack!) and I explore Toronto’s eclectic
                                    architecture to fuel fresh creative ideas.
                                </p>
                            </div>
                        </div>
                        <div className="form">
                            <ContactForm />
                        </div>
                    </div>
                </div>
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
