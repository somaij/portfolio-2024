import * as React from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import anime from "animejs";
import { useEffect } from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function PowerToGive() {
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
        initialZoomLevel: 0.75,
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
                <title>Power to Give - Hydro One | Jason Somai</title>
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
                            <h1>Power to Give</h1>
                            <h2>Problem</h2>
                            <p>
                                Power to Give is Hydro One's fundraising and
                                charity employee program. The program revolves
                                around a specific month that encouraged more
                                particpation called 'Power to Give Month'. At
                                the time of joining Hydro One, this was done via
                                bi-weekly PDF updates. For the next year, I
                                proposed turning this into a webpage.
                            </p>
                        </div>
                        <div className="thumbnail-gallery-caption two-col">
                            <Gallery options={galOptionsLarge}>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/PTG-2022.jpg"
                                            width="1240"
                                            height="8202"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/PTG-2022.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        2022 page design - first version of the
                                        page revolving around a competitive
                                        scoreboard.
                                    </span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/PTG-2023.jpg"
                                            width="930"
                                            height="6673"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/PTG-2023.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        2023 - encourages more participation
                                        with events and options for donations.
                                    </span>
                                </div>
                            </Gallery>
                        </div>
                    </div>
                </div>
                <div className="background-image">
                    <Image
                        src="/images/pexels-julia-m-cameron-6994833.jpg"
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
                                <h3>2022 page design</h3>
                                <p>
                                    For 2022, I created a webpage for Power to
                                    Give that relieved the graphic design team's
                                    workload of manually drawing charts, while
                                    making updates to the webpage quick. I did
                                    this by relying on{" "}
                                    <a href="https://developers.google.com/chart">
                                        Google Charts
                                    </a>
                                    , to let us update the chart using JSON
                                    data. Due to timelines, the UX of the first
                                    version of the page was focused on
                                    optimizing the comparision experience.
                                </p>
                            </div>
                            <div className="thumbnail-gallery-caption two-col white-background">
                                <Gallery options={galOptions}>
                                    <div className="gallery-image-wrapper">
                                        <div className="image-wrapper">
                                            <Item
                                                original="/images/ptg-graph-2022.jpg"
                                                width="863"
                                                height="608"
                                                fill
                                            >
                                                {({ ref, open }) => (
                                                    <Image
                                                        fill
                                                        ref={ref}
                                                        onClick={open}
                                                        src="/images/ptg-graph-2022.jpg"
                                                    />
                                                )}
                                            </Item>
                                        </div>
                                        <span>
                                            I used the bar chart from Google
                                            Graphs to illustrate the differences
                                            between how different lines of
                                            businesses were donating.
                                        </span>
                                    </div>
                                    <div className="gallery-image-wrapper">
                                        <div className="image-wrapper">
                                            <Item
                                                original="/images/ptg-2022-masthead.jpg"
                                                width="855"
                                                height="876"
                                                fill
                                            >
                                                {({ ref, open }) => (
                                                    <Image
                                                        fill
                                                        ref={ref}
                                                        onClick={open}
                                                        src="/images/ptg-2022-masthead.jpg"
                                                    />
                                                )}
                                            </Item>
                                        </div>
                                        <span>
                                            The masthead area is simple. The
                                            secondary call to action explains
                                            the employee match program, and the
                                            first is an anchor link down to the
                                            bar chart area.
                                        </span>
                                    </div>
                                </Gallery>
                            </div>
                        </div>
                    </section>
                    <br />
                    <section>
                        <h3>2023 redesign</h3>
                        <p>
                            For 2023, the Power to Give stakeholders wanted to
                            bring more attention to the donation and giving
                            aspects of the campaign. I redesigned the webpage to
                            place more emphasis on those various options and
                            events.
                        </p>
                        <div className="thumbnail-gallery-caption three-col white-background">
                            <Gallery options={galOptions}>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/ptg-2023-buttons.jpg"
                                            width="1040"
                                            height="850"
                                            caption="test"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/ptg-2023-buttons.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        Main call to actions highlighting the
                                        main ways to contribute during the
                                        month.
                                    </span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/PTG-2023-event-list.jpg"
                                            width="1040"
                                            height="680"
                                            caption="test"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/PTG-2023-event-list.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        This event list expands when you click
                                        "See all events". It features a
                                        scrolling list, allowing you to add
                                        events to your calendar.
                                    </span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/PTG-2023-graph.jpg"
                                            width="1240"
                                            height="777"
                                            caption="test"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/PTG-2023-graph.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        The 2023 bar chart area has been
                                        condensed to show more in less space.
                                    </span>
                                </div>
                            </Gallery>
                        </div>
                    </section>
                    <section id="results">
                        <h2>Results</h2>
                        <p>
                            Since the incorporation of a website, the program
                            has experienced significant year-over-year growth in
                            total funding. From 2022 to 2023, total funding
                            increased by approximately 14%.
                        </p>
                    </section>
                </div>
            </article>
        </Layout>
    );
}
