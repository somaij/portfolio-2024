import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";
import anime from "animejs";
import { useEffect } from "react";

const random = (min, max) => {
    return Math.random() * (max - min) + min;
};

export default function Post({ postData }) {
    useEffect(() => {
        anime({
            targets: ".blob-svg path",
            duration: 20000,
            easing: "easeInOutSine(0.25, 1)",
            loop: true,

            direction: "alternate",
            keyframes: [
                {
                    d: "M426.5,293.5Q401,337,381,389Q361,441,305.5,461Q250,481,197,457Q144,433,119.5,386Q95,339,65,294.5Q35,250,78,212.5Q121,175,157,163.5Q193,152,221.5,102.5Q250,53,293.5,76Q337,99,339.5,148Q342,197,397,223.5Q452,250,426.5,293.5Z",
                },
                {
                    d: "M421.5,290.5Q390,331,345.5,335Q301,339,275.5,385Q250,431,215.5,400Q181,369,168,337Q155,305,146,277.5Q137,250,133,215Q129,180,129,110.5Q129,41,189.5,86Q250,131,291,119.5Q332,108,346.5,147Q361,186,407,218Q453,250,421.5,290.5Z",
                },
                {
                    d: "M399.5,287Q378,324,349.5,349Q321,374,285.5,381Q250,388,205,397.5Q160,407,103.5,387Q47,367,75.5,308.5Q104,250,113,213Q122,176,159.5,167.5Q197,159,223.5,97Q250,35,294.5,66Q339,97,378.5,125Q418,153,419.5,201.5Q421,250,399.5,287Z",
                },
            ],
        }),
            anime({
                targets: ".blob-cta-svg path",
                duration: 20000,
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
        <Layout>
            <Head>
                <title>{postData.seo.seoTitle}</title>
                <meta
                    name="description"
                    content={postData.seo.seoDescription}
                />
                <meta name="og:image" content={postData.image} />
            </Head>
            <div id="post-header">
                <div className="background">
                    <Image src={postData.image} fill />
                </div>
                <div className="container">
                    <div className="content">
                        <svg
                            className="blob-svg"
                            viewBox="300 120 150 150"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M448.5,301Q426,352,375,365.5Q324,379,287,419.5Q250,460,201.5,439Q153,418,119,381.5Q85,345,43,297.5Q1,250,20.5,189.5Q40,129,94.5,102.5Q149,76,199.5,99Q250,122,309,84Q368,46,392,100Q416,154,443.5,202Q471,250,448.5,301Z"
                                fill="#4800ff"
                                fillOpacity="0.25"
                            />
                        </svg>
                        <svg
                            className="blob-svg"
                            viewBox="300 120 225 175"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M448.5,301Q426,352,375,365.5Q324,379,287,419.5Q250,460,201.5,439Q153,418,119,381.5Q85,345,43,297.5Q1,250,20.5,189.5Q40,129,94.5,102.5Q149,76,199.5,99Q250,122,309,84Q368,46,392,100Q416,154,443.5,202Q471,250,448.5,301Z"
                                fill="#533EF1"
                                fillOpacity="0.5"
                            />
                        </svg>
                        <svg
                            className="blob-svg"
                            viewBox="300 120 300 200"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M448.5,301Q426,352,375,365.5Q324,379,287,419.5Q250,460,201.5,439Q153,418,119,381.5Q85,345,43,297.5Q1,250,20.5,189.5Q40,129,94.5,102.5Q149,76,199.5,99Q250,122,309,84Q368,46,392,100Q416,154,443.5,202Q471,250,448.5,301Z"
                                fill="#5E7CE2"
                                fillOpacity="0.75"
                            />
                        </svg>
                        <h1>{postData.title}</h1>
                        <div className="sub">
                            <Date dateString={postData.date} />
                        </div>
                    </div>
                </div>
            </div>

            <article className="blog-content">
                <div className="container regular-text">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: postData.contentHtml,
                        }}
                        escapeHtml={false}
                    />
                </div>
            </article>
            <div id="blog-post-cta" className="end-cta">
                <div className="blob">
                    <svg
                        className="blob-cta-svg"
                        viewBox="0 0 500 500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M448.5,301Q426,352,375,365.5Q324,379,287,419.5Q250,460,201.5,439Q153,418,119,381.5Q85,345,43,297.5Q1,250,20.5,189.5Q40,129,94.5,102.5Q149,76,199.5,99Q250,122,309,84Q368,46,392,100Q416,154,443.5,202Q471,250,448.5,301Z"
                            fill="#4800ff"
                            fill-opacity="0.6"
                        />
                    </svg>
                </div>
                <div className="container">
                    <div>
                        <h2>{postData.cta.ctaTitle}</h2>
                        <p>{postData.cta.ctaText}</p>
                    </div>
                    <Link href="/#contact" className="btn solid white">
                        {postData.cta.ctaBtn}
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}
