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
                    d: "M162.667 1378.84C162.667 1378.84 -202.833 969.344 162.667 532.343C528.166 95.3418 541.666 397.342 981.666 160.342C1421.67 -76.658 1389.67 -194.158 1620.67 -255.158C1851.67 -316.158 2018.67 -165.658 2207.67 -217.158C2396.67 -268.658 2147.67 1378.84 2147.67 1378.84L162.667 1378.84Z",
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
                        d: "M187.667 1698.15C187.667 1698.15 -280.833 1171.96 187.667 851.653C656.166 531.342 869.166 668.842 1054.67 404.342C1240.17 139.842 1460.17 270.342 1645.67 64.1518C1831.17 -142.038 2043.67 153.651 2232.67 102.151C2421.67 50.6516 2172.67 1698.15 2172.67 1698.15L187.667 1698.15Z",
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
                        d: "M141.667 1895.33C141.667 1895.33 -175.833 1530.32 141.667 1048.83C459.166 567.341 857.666 676.83 960.667 676.83C1063.67 676.83 1304.17 697.842 1599.67 261.33C1895.17 -175.181 2032.17 4.34218 2186.67 299.33C2341.17 594.318 2126.67 1895.33 2126.67 1895.33L141.667 1895.33Z",
                    },
                ],
            }),
            anime({
                targets: "#masthead h1",
                duration: 3000,
                translateY: 10,
                opacity: 1,
            }),
            anime({
                targets: "#masthead .masthead-header .sub",
                duration: 3000,
                translateY: -10,
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
                            viewBox="700 0 1 900"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M-5.3894 1389.89C-5.3894 1389.89 -373.534 982.764 -10.8724 543.405C351.789 104.045 324.002 214.227 762.458 -25.6177C1200.91 -265.463 1211.4 -191.029 1442 -253.524C1672.6 -316.019 1840.57 -166.604 2029.23 -219.327C2217.89 -272.05 1979.57 1377.03 1979.57 1377.03L-5.3894 1389.89Z"
                                fill="#000"
                                fillOpacity="0.1"
                            />
                        </svg>

                        <svg
                            className="mast-blob-svg blob-2"
                            viewBox="750 10 1 1100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M-3.32133 1651.19C-3.32133 1651.19 -475.219 1128.05 -8.8043 804.708C457.611 481.369 535.61 403.862 785.627 251.239C1035.64 98.6168 1219.81 47.2321 1444.06 7.77919C1668.31 -31.6737 1842.64 94.6989 2031.3 41.9759C2219.96 -10.747 1981.64 1638.33 1981.64 1638.33L-3.32133 1651.19Z"
                                fill="#000"
                                fillOpacity="0.1"
                            />
                        </svg>

                        <svg
                            className="mast-blob-svg blob-3"
                            viewBox="300 20 3 1300"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M-1.09868 1690.36C-1.09868 1690.36 -320.956 1327.42 -6.58165 843.879C307.792 360.343 542.38 450.326 771.32 285.839C1000.26 121.353 1339.04 85.6463 1446.29 46.9507C1553.54 8.25518 1886.43 -87.3795 2042.83 206.602C2199.24 500.583 1983.86 1677.5 1983.86 1677.5L-1.09868 1690.36Z"
                                fill="#000"
                                fillOpacity="0.1"
                            />
                        </svg>
                    </div>
                </div>
                <div className="container">
                    <div className="masthead-header">
                        <div className="sub">Design and Developer Leader</div>
                        <h1>Creating simplicity</h1>
                    </div>
                </div>
                <div className="container">
                    <div id="home-work">
                        <h2>Work</h2>
                        <div id="hydro-row">
                            <div className="row-title">
                                <h3>Hydro One</h3>
                                <div className="sub">
                                    UX/UI & Web Leadership
                                </div>
                            </div>

                            <div className="work-row">
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
                                        <div className="sub">
                                            Heatmaps & Design
                                        </div>
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
                                        <div className="sub">UX Research</div>
                                    </div>
                                    <span className="btn outline white">
                                        Learn More
                                    </span>
                                </Link>
                                <Link
                                    href="work/power-to-give"
                                    className="work-preview"
                                >
                                    <div className="image">
                                        <Image
                                            src="/images/pexels-julia-m-cameron-6994833.jpg"
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="text">
                                        <h3>Power to Give</h3>
                                        <div className="sub">
                                            UX/UI & Conversions
                                        </div>
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
                                    <Link href="work/tla-canadian-tire">
                                        SMG Construction
                                    </Link>
                                    <Link href="work/tla-canadian-tire">
                                        Workhaus
                                    </Link>
                                    <Link href="work/tla-canadian-tire">
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
                        {allPostsData.map(
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
                                        Hey there, I'm Jason. I'm currently
                                        Hydro One's website Digital Manager. I
                                        use my skills to empower my team to
                                        craft imaginative web pages that help
                                        Ontarians lower their electricity bill,
                                        enroll in grant programs and understand
                                        how Hydro One is making the energy
                                        transition.
                                    </p>
                                </div>
                            </div>
                            <div className="bottom-content">
                                <p>
                                    From 2018 to 2022 I was Ferraz
                                    Creative's Senior Developer, working for my
                                    design mentor, Andre, where we made the some
                                    of the most imaginative concepts come to
                                    life. My magnum opus was developing
                                    the Workhaus WordPress theme from scratch
                                    and using ACF for ease of editing.
                                </p>
                                <p>
                                    I also take on a variety of side projects to
                                    further enhance my design and development
                                    abilities, such as the site you find
                                    yourself on now or the website. In 2018 I
                                    took a Brainstation User Experience
                                    Design course that provided me with
                                    foundational UX knowledge that I continue to
                                    use every day.
                                </p>
                                <p>
                                    I'm a huge car nerd (current car: Cornflower
                                    Blue Golf GTI), a video gamer, play golf
                                    occasionally and find great pleasure in
                                    discovering the city of Toronto.
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
