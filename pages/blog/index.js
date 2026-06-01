import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getSortedPostsData } from "../../lib/posts";
import anime from "animejs";
import { useEffect } from "react";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function BlogIndex({ allPostsData }) {
    useEffect(() => {
        anime({
            targets: ".blog-index-svg.blob-1 path",
            duration: 12000,
            easing: "easeInOutSine(0.25, 1)",
            loop: true,
            direction: "alternate",
            keyframes: [
                { d: "M421,292Q395,334,374,381.5Q353,429,301.5,454.5Q250,480,216,424Q182,368,123.5,362.5Q65,357,62.5,303.5Q60,250,60.5,195.5Q61,141,99,97.5Q137,54,193.5,76Q250,98,289,106.5Q328,115,396.5,120.5Q465,126,456,188Q447,250,421,292Z" },
                { d: "M394,296.5Q411,343,365,356Q319,369,284.5,416Q250,463,195,451.5Q140,440,120.5,388Q101,336,112.5,293Q124,250,84,190.5Q44,131,96.5,103Q149,75,199.5,38.5Q250,2,303.5,33.5Q357,65,382.5,112Q408,159,392.5,204.5Q377,250,394,296.5Z" },
                { d: "M426,306Q443,362,394.5,389.5Q346,417,298,447Q250,477,196,456.5Q142,436,101.5,397.5Q61,359,36.5,304.5Q12,250,65,212Q118,174,126.5,112.5Q135,51,192.5,77Q250,103,295,98.5Q340,94,395.5,114Q451,134,430,192Q409,250,426,306Z" },
            ],
        });
        anime({
            targets: ".blog-index-svg.blob-2 path",
            duration: 12000,
            easing: "easeInOutSine(0.25, 1)",
            delay: 300,
            loop: true,
            direction: "alternate",
            keyframes: [
                { d: "M421,292Q395,334,374,381.5Q353,429,301.5,454.5Q250,480,216,424Q182,368,123.5,362.5Q65,357,62.5,303.5Q60,250,60.5,195.5Q61,141,99,97.5Q137,54,193.5,76Q250,98,289,106.5Q328,115,396.5,120.5Q465,126,456,188Q447,250,421,292Z" },
                { d: "M394,296.5Q411,343,365,356Q319,369,284.5,416Q250,463,195,451.5Q140,440,120.5,388Q101,336,112.5,293Q124,250,84,190.5Q44,131,96.5,103Q149,75,199.5,38.5Q250,2,303.5,33.5Q357,65,382.5,112Q408,159,392.5,204.5Q377,250,394,296.5Z" },
                { d: "M426,306Q443,362,394.5,389.5Q346,417,298,447Q250,477,196,456.5Q142,436,101.5,397.5Q61,359,36.5,304.5Q12,250,65,212Q118,174,126.5,112.5Q135,51,192.5,77Q250,103,295,98.5Q340,94,395.5,114Q451,134,430,192Q409,250,426,306Z" },
            ],
        });
        anime({
            targets: ".blog-index-svg.blob-3 path",
            duration: 12000,
            easing: "easeInOutSine(0.25, 1)",
            delay: 600,
            loop: true,
            direction: "alternate",
            keyframes: [
                { d: "M421,292Q395,334,374,381.5Q353,429,301.5,454.5Q250,480,216,424Q182,368,123.5,362.5Q65,357,62.5,303.5Q60,250,60.5,195.5Q61,141,99,97.5Q137,54,193.5,76Q250,98,289,106.5Q328,115,396.5,120.5Q465,126,456,188Q447,250,421,292Z" },
                { d: "M394,296.5Q411,343,365,356Q319,369,284.5,416Q250,463,195,451.5Q140,440,120.5,388Q101,336,112.5,293Q124,250,84,190.5Q44,131,96.5,103Q149,75,199.5,38.5Q250,2,303.5,33.5Q357,65,382.5,112Q408,159,392.5,204.5Q377,250,394,296.5Z" },
                { d: "M426,306Q443,362,394.5,389.5Q346,417,298,447Q250,477,196,456.5Q142,436,101.5,397.5Q61,359,36.5,304.5Q12,250,65,212Q118,174,126.5,112.5Q135,51,192.5,77Q250,103,295,98.5Q340,94,395.5,114Q451,134,430,192Q409,250,426,306Z" },
            ],
        });
    }, []);

    return (
        <Layout>
            <Head>
                <title>Blog | Jason Somai</title>
            </Head>
            <div id="blog-index-page">
                <div id="blog-index-header">
                    <div className="blog-blob">
                        <svg className="blog-index-svg blob-1" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M448.5,301Q426,352,375,365.5Q324,379,287,419.5Q250,460,201.5,439Q153,418,119,381.5Q85,345,43,297.5Q1,250,20.5,189.5Q40,129,94.5,102.5Q149,76,199.5,99Q250,122,309,84Q368,46,392,100Q416,154,443.5,202Q471,250,448.5,301Z" stroke="#5E7CE2" />
                        </svg>
                        <svg className="blog-index-svg blob-2" viewBox="0 0 750 750" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M448.5,301Q426,352,375,365.5Q324,379,287,419.5Q250,460,201.5,439Q153,418,119,381.5Q85,345,43,297.5Q1,250,20.5,189.5Q40,129,94.5,102.5Q149,76,199.5,99Q250,122,309,84Q368,46,392,100Q416,154,443.5,202Q471,250,448.5,301Z" stroke="#533EF1" />
                        </svg>
                        <svg className="blog-index-svg blob-3" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M448.5,301Q426,352,375,365.5Q324,379,287,419.5Q250,460,201.5,439Q153,418,119,381.5Q85,345,43,297.5Q1,250,20.5,189.5Q40,129,94.5,102.5Q149,76,199.5,99Q250,122,309,84Q368,46,392,100Q416,154,443.5,202Q471,250,448.5,301Z" stroke="#4800ff" />
                        </svg>
                    </div>
                    <div className="container">
                        <div className="sub">Writing</div>
                        <h1>Blog</h1>
                        <p>Thoughts on design, development, and building digital products.</p>
                    </div>
                </div>
                <div id="blog-index-body">
                    <div className="container">
                        <div className="cardWrapper cardWrapper--two-col">
                            {allPostsData.map(({ id, date, title, description, image }) => (
                                <Link href={`/posts/${id}`} className="post-preview" key={id}>
                                    <div className="image">
                                        <Image src={image} fill alt={title} />
                                    </div>
                                    <div className="text">
                                        <h3>{title}</h3>
                                        <p>{description}</p>
                                        <span className="btn outline white">Read</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
