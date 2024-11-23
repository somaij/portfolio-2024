import * as React from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import anime from "animejs";
import { useEffect } from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function Sustainability() {
    const [open, setOpen] = React.useState(false);
    const galOptionsLarge = {
        zoom: true,
        initialZoomLevel: "fit",
        secondaryZoomLevel: "fill",
        maxZoomLevel: 10,
        counter: false,
        showHideAnimationType: "fade",
        bgOpacity: 0.9,
        padding: { top: 20, bottom: 40, left: 100, right: 100 },
    };
    const galOptions = {
        zoom: true,
        initialZoomLevel: 0.55,
        secondaryZoomLevel: "fill",
        maxZoomLevel: 10,
        counter: false,
        showHideAnimationType: "fade",
        bgOpacity: 0.9,
        padding: { top: 20, bottom: 40, left: 100, right: 100 },
    };
    useEffect(() => {
        anime({
            targets: "#blob-svg path",
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
        });
    }, []);
    return (
        <Layout>
            <Head>
                <title>Sustainability - Hydro One | Jason Somai</title>
            </Head>
            <div id="work-header">
                <div className="blob">
                    <svg
                        id="blob-svg"
                        viewBox="0 0 450 450"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M393.5,295.5Q408,341,389.5,400Q371,459,310.5,432Q250,405,208.5,399.5Q167,394,117.5,374.5Q68,355,53,302.5Q38,250,55,198.5Q72,147,130.5,145.5Q189,144,219.5,98.5Q250,53,297.5,69Q345,85,388.5,115Q432,145,405.5,197.5Q379,250,393.5,295.5Z" />
                    </svg>
                </div>
                <div className="container">
                    <div className="content">
                        <div className="text">
                            <Link
                                href="/#home-work"
                                className="arrow-btn white reverse"
                                title="All Work"
                            >
                                All Work
                            </Link>
                            <h1>Sustainability</h1>
                            <h2>Problem</h2>
                            <p>
                                When I started at Hydro One as a designer and
                                developer, I was beholden to the pre-determined
                                architecture. When I became the digital manager
                                I made it my duty to simplify but enhance the
                                impact of the page. I gave myself and my team
                                the task of competitor analysis to prove that we
                                could successfully boil down 4 pages into 1, and
                                improve sustainability report downloads.
                            </p>
                        </div>
                        <div className="thumbnail-gallery-caption two-col">
                            <Gallery options={galOptionsLarge}>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/sustainability-2021-homepage.jpg"
                                            width="1440"
                                            height="4207"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/sustainability-2021-homepage.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        2021 version - links out to 3 seperate
                                        pages
                                    </span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/sustainability-2022-final-version.jpg"
                                            width="1440"
                                            height="12106"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/sustainability-2022-final-version.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>2022 version - all on one page</span>
                                </div>
                            </Gallery>
                        </div>
                    </div>
                </div>
                <div className="background-image">
                    <Image
                        src="/images/pexels-hyukman-kwon-2542429-9765771.jpg"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
            <article id="work-body">
                <div className="container">
                    <section>
                        <div className="three-col-image-text">
                            <div className="text">
                                <h3>Lo-fi & concepts</h3>
                                <p>
                                    My team and I found that there were many
                                    types of sustainability pages on the web,
                                    but most of them were one pagers. We then
                                    put our heads together to think through what
                                    a version of this would look like for our
                                    website.
                                </p>
                            </div>
                            <div className="thumbnail-gallery-caption two-col white-background">
                                <Gallery options={galOptionsLarge}>
                                    <div className="gallery-image-wrapper">
                                        <div className="image-wrapper">
                                            <Item
                                                original="/images/sustainability-low-fi-mockup.png"
                                                width="1440"
                                                height="4222"
                                                fill
                                            >
                                                {({ ref, open }) => (
                                                    <Image
                                                        fill
                                                        ref={ref}
                                                        onClick={open}
                                                        src="/images/sustainability-low-fi-mockup.png"
                                                    />
                                                )}
                                            </Item>
                                        </div>
                                        <span>
                                            We first took a look at the flow and
                                            how we wanted information to be
                                            conveyed. This concept is super
                                            condensed compared to what we ended
                                            up with.
                                        </span>
                                    </div>
                                    <div className="gallery-image-wrapper">
                                        <div className="image-wrapper">
                                            <Item
                                                original="/images/sustainability-Ideation-concept-1.jpg"
                                                width="1440"
                                                height="12743"
                                                fill
                                            >
                                                {({ ref, open }) => (
                                                    <Image
                                                        fill
                                                        ref={ref}
                                                        onClick={open}
                                                        src="/images/sustainability-Ideation-concept-1.jpg"
                                                    />
                                                )}
                                            </Item>
                                        </div>
                                        <span>
                                            This concept follows the lo-fi a bit
                                            closer then what the final design
                                            ended up being. You can see that the
                                            sections became more refined as we
                                            iterated.
                                        </span>
                                    </div>
                                </Gallery>
                            </div>
                        </div>
                    </section>
                    <br />
                    <section>
                        <h3>UI Design</h3>
                        <p>
                            My UX designer and I collaborated on this design,
                            trading off ideas that we've seen in all of our
                            research. We really wanted to showcase our
                            creativity, our brands multiple colours and big
                            beautiful pictures. All while having some cool
                            background effects and animations.
                        </p>
                        <p>Hats off to you, Jacob Di Domenico!</p>
                        <div className="thumbnail-gallery-caption three-col white-background">
                            <Gallery options={galOptions}>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/sustainability-header.jpg"
                                            width="1440"
                                            height="698"
                                            caption="test"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/sustainability-header.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        Large header area displaying the cover
                                        image of the report and the year, in
                                        giant font.
                                    </span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/sustainability-3-ctas.jpg"
                                            width="1440"
                                            height="1288"
                                            caption="test"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/sustainability-3-ctas.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        A preamble section with jump links down
                                        towards each section
                                    </span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/sustainability-planet-section.jpg"
                                            width="1440"
                                            height="1066"
                                            caption="test"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/sustainability-planet-section.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        Coloured sections with jump links into a
                                        specific page on the sustainabilty
                                        report PDF.
                                    </span>
                                </div>
                            </Gallery>
                        </div>
                        <p>
                            We also implemented the on-scroll animation
                            technique I had blogged about before to add some
                            simple transitions to each section. In addition to
                            that, we have a cubic-bezier scaling animation on
                            our background dot effects. Simple animations go a
                            far way, and are performant!
                        </p>
                    </section>
                    <section id="results">
                        <h2>Results</h2>
                        <p>
                            Despite not driving advertising to the page, our
                            improvements shocked us. While we decreased our time
                            spent on page, due to consolidating information, the
                            downloads for the report{" "}
                            <strong>increased 34%</strong> and our pages per
                            session went <strong>up 44%</strong>. This had
                            proven that our strategy of combining multiple pages
                            into one cohesive page has paid off.
                        </p>
                        <p>
                            We ended up using this as the basis for the 2023
                            sustainablity page which is currently live.{" "}
                        </p>
                        <div className="btn-group">
                            <Link
                                href="https://www.hydroone.com/Sustainability"
                                className="btn solid"
                                title="All Work"
                            >
                                View 2023 Live Page
                            </Link>
                            <Link
                                href="/images/sustainability-2022-final-version.jpg"
                                className="arrow-btn"
                                title="All Work"
                            >
                                View 2022 Design
                            </Link>
                        </div>
                    </section>
                </div>
            </article>
        </Layout>
    );
}
