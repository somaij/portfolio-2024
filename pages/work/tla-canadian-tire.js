import * as React from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import anime from "animejs";
import { useEffect } from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function TLA() {
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
        initialZoomLevel: 0.5,
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
                <title>TLA - Canadian Tire | Jason Somai</title>
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
                            <h1>TLA - Quarterly Offerings</h1>
                            <h2>Problem</h2>
                            <p>
                                The Triangle Learning Academy (TLA) was an
                                internal learning platform for employees at
                                Canadian Tire, Mark's, FGL (SportChek), Party
                                City, and PartSource. It provided free access to
                                various resources and materials, empowering
                                employees to develop personal and professional
                                skills. In 2020, TLA introduced quarterly themes
                                to organize content, such as Adaptability in Q1
                                and Diversity, Inclusion, and Belonging (DIB) in
                                Q4. To support these themes, we created
                                "Quarterly Offerings" pages that compiled all
                                recommended courses, resources, and workshops
                                related to each quarter's focus.
                            </p>
                        </div>
                        <div className="thumbnail-gallery-caption two-col">
                            <Gallery options={galOptionsLarge}>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/tla-offerings-page.jpg"
                                            width="1920"
                                            height="3464"
                                            caption="Masthead & navigation"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/tla-offerings-page.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        First quarterly offerings page. It's a
                                        page with many cards in 5 sections.
                                    </span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/tla-offerings-page-q4.jpg"
                                            width="1920"
                                            height="3223"
                                            caption="Region section & quotes"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/tla-offerings-page-q4.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        Final quarterly offerings page. Notice
                                        the toggable descriptions.
                                    </span>
                                </div>
                            </Gallery>
                        </div>
                    </div>
                </div>
                <div className="background-image">
                    <Image
                        src="/images/tla-2.jpg"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
            <article id="work-body">
                <div className="container">
                    <section>
                        <h3>Atomic Design</h3>
                        <p>
                            To serve that much content in a digestible way, I
                            first sketched out some possibilities and prototyped
                            them with the team. After several rounds of feedback
                            and refinement, while deepening my understanding of
                            the issue, I decided to use cards as the basis for
                            the page.
                        </p>
                        <div className="two-col-image-text">
                            <div className="thumbnail-gallery-caption one-col white-background">
                                <Gallery options={galOptions}>
                                    <div className="gallery-image-wrapper">
                                        <div className="image-wrapper">
                                            <Item
                                                original="/images/tla-cards.png"
                                                width="1350"
                                                height="1672"
                                                caption="test"
                                                fill
                                            >
                                                {({ ref, open }) => (
                                                    <Image
                                                        fill
                                                        ref={ref}
                                                        onClick={open}
                                                        src="/images/tla-cards.png"
                                                    />
                                                )}
                                            </Item>
                                        </div>
                                        <span>
                                            Added a sticky navigation that would
                                            let users jump to their relevant
                                            area. This nav was below the
                                            introduction section.
                                        </span>
                                    </div>
                                </Gallery>
                            </div>
                            <div className="text">
                                <p>
                                    {" "}
                                    Each card has certain characteristics that
                                    describe what the user is clicking on, in a
                                    short amount of space.
                                </p>
                                <ol>
                                    <li>
                                        <p>
                                            An <strong>icon</strong> to
                                            represent the type of modality the
                                            resource is in, followed by the text
                                            for that modality. The icons are
                                            from the{" "}
                                            <a href="https://iconscout.com/unicons">
                                                Unicons
                                            </a>{" "}
                                            set.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            The <strong>title</strong> of the
                                            resource.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            A short <strong>description</strong>{" "}
                                            of the resource. There was a bit of
                                            a UI challenge to fit enough space
                                            in for the description to be
                                            accurate.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            The <strong>action</strong> that the
                                            user will be doing to consume the
                                            resource.
                                        </p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <br />
                    <section>
                        <div className="two-col-image-text">
                            <div className="text">
                                <h3>Sections & Navigation</h3>
                                <p>
                                    A card would belong to a section of the
                                    page.
                                </p>
                                <p>
                                    Each section would have a title and
                                    background image. The text was removed later
                                    for the sake of simplicity. The cards that
                                    belong to the section overlap onto the
                                    background image to denote that this set of
                                    cards belongs to the section's header. The
                                    layout around the sections served to guide
                                    the user to content on the page.
                                </p>
                                <p>
                                    The sticky sidebar uses the{" "}
                                    <a href="https://css-tricks.com/sticky-table-of-contents-with-scrolling-active-states/">
                                        intersection observer
                                    </a>{" "}
                                    Javascript feature to highlight the section
                                    of the page that's currently in the
                                    viewport.
                                </p>
                            </div>
                            <div className="thumbnail-gallery-caption one-col white-background">
                                <Gallery options={galOptions}>
                                    <div className="gallery-image-wrapper">
                                        <div className="image-wrapper">
                                            <Item
                                                original="/images/tla-section-example.png"
                                                width="1920"
                                                height="1200"
                                                caption="test"
                                                fill
                                            >
                                                {({ ref, open }) => (
                                                    <Image
                                                        fill
                                                        ref={ref}
                                                        onClick={open}
                                                        src="/images/tla-section-example.png"
                                                    />
                                                )}
                                            </Item>
                                        </div>
                                        <span>
                                            Added a sticky navigation that would
                                            let users jump to their relevant
                                            area. This nav was below the
                                            introduction section.
                                        </span>
                                    </div>
                                </Gallery>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h3>Implementation</h3>
                        <p>
                            In the Q1 and Q2 version of these pages, the page
                            was created using WordPress and the Advanced Custom
                            Fields plugin. I would generate the HTML using this
                            setup and then manually paste it into our platform.
                        </p>
                        <p>
                            Managing all the information became a huge time
                            drain for the team, as we had to maintain a large
                            spreadsheet and track tasks in Trello. One of our
                            managers found a Trello plugin that enabled custom
                            fields, and we also discovered that the information
                            could be exported, which helped streamline the
                            process.
                        </p>
                        <p>
                            To save the team time and consolidate all of our
                            information in one place, I set out to find a way to
                            utilize the exports Trello provided. I learned about{" "}
                            <a href="https://handlebarsjs.com/">
                                handlebars.js
                            </a>{" "}
                            a templating engine that uses JSON. After a lot of
                            experimentation, I found that by exporting a Trello
                            board as a .csv and converting that file to JSON, I
                            could use the JSON data to populate the page.
                        </p>
                    </section>
                    <section id="results">
                        <h2>Results</h2>
                        <p>
                            After implementing all of these process
                            improvements, I saved several hours in Q3 and Q4 for
                            myself and others on the team. This page was a major
                            driver for content consumption within the
                            organization.
                        </p>
                    </section>
                </div>
            </article>
        </Layout>
    );
}
