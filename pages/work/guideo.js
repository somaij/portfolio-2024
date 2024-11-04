import * as React from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import anime from "animejs";
import { useEffect } from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function Guideo() {
    const [open, setOpen] = React.useState(false);
    const galOptions = {
        zoom: true,
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
                <title>Guideo - Brainstation Project | Jason Somai</title>
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
                            <h1>Guideo</h1>
                            <h2>Problem</h2>
                            <p>
                                During my 5 weeks at{" "}
                                <a href="https://brainstation.io/course/toronto/user-experience-design">
                                    Brainstation
                                </a>
                                , our class was given the assignment to create a
                                transit app. It was left up to us to find a
                                transit problem, and solve it with the skills
                                and digital tools learned in class. For this
                                project we used the{" "}
                                <a href="https://en.wikipedia.org/wiki/Human-centered_design">
                                    human centered design
                                </a>{" "}
                                approach which included identifying problems in
                                current user experiences by user interviews and
                                testing our solutions by having users navigate
                                rough sketches (using the{" "}
                                <a href="https://marvelapp.com/">Marvel</a> app)
                                and low fidelity wireframes (using{" "}
                                <a href="https://moqups.com">Moqups</a>).
                            </p>
                        </div>
                        <div className="thumbnail-gallery-caption two-col">
                            <Gallery options={galOptions}>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/guideo-prototype-1.jpg"
                                            width="1200"
                                            height="1200"
                                            caption="Masthead & navigation"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/guideo-prototype-1.jpg"
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
                                            original="/images/guideo-prototype-4.jpg"
                                            width="1200"
                                            height="1200"
                                            caption="Region section & quotes"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/guideo-prototype-4.jpg"
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
                        src="/images/toronto-streetcar-downtown.jpg"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
            <article id="work-body">
                <div className="container">
                    <h3>Research</h3>
                    <p>
                        The first step in the process was identifying the
                        problem! I interviewed four people using the following
                        set of questions:
                    </p>

                    <ol>
                        <li>Describe the last time you walked somewhere.</li>
                        <li>What apps do you use to navigate?</li>
                        <li>
                            What makes you choose walking over public transit?
                        </li>
                        <li>
                            What would you like to change about the process of
                            navigating somewhere?
                        </li>
                        <li>
                            What information do you wish was readily available?
                        </li>
                    </ol>

                    <p>
                        After conducting the interviews, I identified some
                        common issues:
                    </p>

                    <ol>
                        <li>
                            Transfers were a hassle due to delays and
                            misinformation.
                        </li>
                        <li>
                            Navigation apps only provided fixed routes. Users
                            couldn’t customize routes, like walking partway
                            instead of using a streetcar.
                        </li>
                        <li>
                            Detailed information, such as "Presto only" routes
                            or pricing, wasn't easy to find.
                        </li>
                        <li>
                            Uber was expensive, and Uber Pool didn’t prioritize
                            timely arrivals.
                        </li>
                    </ol>

                    <p>
                        Interestingly, none of my interviewees minded walking 20
                        minutes if it meant avoiding another streetcar or bus.
                    </p>
                    <h3>Information Architecture & Personas</h3>
                    <br />
                    <div className="thumbnail-gallery-caption three-col white-background">
                        <Gallery options={galOptions}>
                            <div className="gallery-image-wrapper">
                                <div className="image-wrapper">
                                    <Item
                                        original="/images/ia.jpg"
                                        width="1024"
                                        height="768"
                                        caption="test"
                                    >
                                        {({ ref, open }) => (
                                            <Image
                                                fill
                                                ref={ref}
                                                onClick={open}
                                                src="/images/ia.jpg"
                                            />
                                        )}
                                    </Item>
                                </div>
                                <span>
                                    I designed an information architecture
                                    focused on making commute routes fully
                                    adaptable.
                                </span>
                            </div>
                            <div className="gallery-image-wrapper">
                                <div className="image-wrapper">
                                    <Item
                                        original="/images/sara-persona.jpg"
                                        width="1024"
                                        height="768"
                                        caption="test"
                                    >
                                        {({ ref, open }) => (
                                            <Image
                                                fill
                                                ref={ref}
                                                onClick={open}
                                                src="/images/sara-persona.jpg"
                                            />
                                        )}
                                    </Item>
                                </div>
                                <span>
                                    Persona #1 - based around a young
                                    professional commuting to Toronto from a
                                    suburban area.
                                </span>
                            </div>
                            <div className="gallery-image-wrapper">
                                <div className="image-wrapper">
                                    <Item
                                        original="/images/rupert-persona.jpg"
                                        width="1024"
                                        height="768"
                                        caption="test"
                                    >
                                        {({ ref, open }) => (
                                            <Image
                                                fill
                                                ref={ref}
                                                onClick={open}
                                                src="/images/rupert-persona.jpg"
                                            />
                                        )}
                                    </Item>
                                </div>
                                <span>
                                    Persona #2 - based on a middle aged person
                                    travelling within their own area.
                                </span>
                            </div>
                        </Gallery>
                    </div>

                    <h3>User Flows & Sketches</h3>
                    <p>
                        Waze and Google Maps were the main user interface
                        inspiration. All of the users I interviewed were very
                        familiar with them, and I wanted to use conventional,
                        industry standard guidelines. Every second counts when
                        trying to get somewhere, so recognition is key.
                    </p>
                    <div className="two-col-image-text">
                        <div className="thumbnail-gallery-caption one-col white-background">
                            <Gallery options={galOptions}>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/sketch1.jpg"
                                            width="1024"
                                            height="768"
                                            caption="test"
                                            fill
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/sketch1.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        Original sketch for user flow 1.
                                    </span>
                                </div>
                            </Gallery>
                        </div>
                        <div className="text">
                            <h3>
                                Original First User Flow & Sketch - Use bussing
                                to get to work
                            </h3>
                            <p>
                                During sketch mock-up testing, I discovered that
                                my initial hypothesis—that users would prefer
                                choosing <em>how</em> to travel over{" "}
                                <em>where</em> to go, was confusing. Test users
                                expected a map and destination selection, and
                                the approach lacked purpose, as people typically
                                decide how to travel only after knowing the
                                destination.
                            </p>
                        </div>
                    </div>
                    <br />
                    <p>
                        Some other interesting observations were that the "Go"
                        button was confused with the Go Transit and users
                        instinctively looked at the top of the screen to enter
                        information. I created two new user flows that reflected
                        map and location first user flows, and during testing
                        these seemed better received.
                    </p>
                    <div className="three-col-image-text">
                        <div className="text">
                            <h3>
                                Version 2 First User Flow Sketch - Walk due to
                                delays
                            </h3>
                            <p>
                                This new first flow is about a user is trying to
                                find their way to work, and a delay comes up.
                                They are be prompted to reroute and they follow
                                the route. The revamped sketch included a full
                                screen map, with a textbox at the top to type in
                                the location.
                            </p>
                        </div>
                        <div className="thumbnail-gallery-caption two-col white-background">
                            <Gallery options={galOptions}>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/sketch2.jpg"
                                            width="1440"
                                            height="1440"
                                            fill
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/sketch2.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        New sketch for user flow 1. The
                                        difference is the map focused UI on the
                                        first screen.
                                    </span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/uf1.jpg"
                                            width="1440"
                                            height="1440"
                                            fill
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/uf1.jpg"
                                                    style={{
                                                        objectPosition: "left",
                                                    }}
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        This first user flow is based around
                                        changing routes mid navigation.
                                    </span>
                                </div>
                            </Gallery>
                        </div>
                    </div>
                    <br />
                    <div className="three-col-image-text">
                        <div className="text">
                            <h3>Second User Flow - Navigate to David's Tea</h3>
                            <p>
                                The second one is a user who wants to walk
                                halfway instead of using public transit all the
                                way. It's a spiritual successor to the original
                                first sketch, in that it helps the user plan
                                their route better.
                            </p>
                        </div>
                        <div className="thumbnail-gallery-caption two-col white-background">
                            <Gallery options={galOptions}>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/sketch3.jpg"
                                            width="1440"
                                            height="1440"
                                            fill
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/sketch3.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        Sketch of user flow 2 - similar to the
                                        original first flow, however it's map
                                        based.
                                    </span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/uf2.jpg"
                                            width="1440"
                                            height="1440"
                                            fill
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/uf2.jpg"
                                                    style={{
                                                        objectPosition:
                                                            "25% 50%",
                                                    }}
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        User flow 2 - walking instead of a
                                        transfer.
                                    </span>
                                </div>
                            </Gallery>
                        </div>
                    </div>

                    <h3>Wireframe</h3>
                    <p>
                        The{" "}
                        <a href="https://app.moqups.com/JSomai/Aln757niFM/view/page/a10d02abc">
                            full wireframe
                        </a>{" "}
                        has 2 interactive user flows.
                    </p>
                    <div className="thumbnail-gallery-caption two-col white-background">
                        <Gallery options={galOptions}>
                            <div className="gallery-image-wrapper">
                                <div className="image-wrapper">
                                    <Item
                                        original="/images/wireframe-1.jpg"
                                        width="1024"
                                        height="1024"
                                        caption="test"
                                    >
                                        {({ ref, open }) => (
                                            <Image
                                                fill
                                                ref={ref}
                                                onClick={open}
                                                src="/images/wireframe-1.jpg"
                                                style={{
                                                    objectPosition: "0% 0%",
                                                }}
                                            />
                                        )}
                                    </Item>
                                </div>
                                <span>
                                    <strong>
                                        First User Flow - Walk due to delays
                                    </strong>
                                    <br />
                                    <br />
                                    If you click on the{" "}
                                    <strong>Work button</strong>, you will
                                    follow the{" "}
                                    <strong>User Navigates to Work flow</strong>
                                    . This one demos how the app handles delays
                                    and re-routes.
                                </span>
                            </div>
                            <div className="gallery-image-wrapper">
                                <div className="image-wrapper">
                                    <Item
                                        original="/images/wireframe-2.jpg"
                                        width="1024"
                                        height="1024"
                                        caption="test"
                                    >
                                        {({ ref, open }) => (
                                            <Image
                                                fill
                                                ref={ref}
                                                onClick={open}
                                                src="/images/wireframe-2.jpg"
                                                style={{
                                                    objectPosition: "0% 0%",
                                                }}
                                            />
                                        )}
                                    </Item>
                                </div>
                                <span>
                                    <strong>
                                        Second User Flow - Navigate to David's
                                        Tea
                                    </strong>{" "}
                                    <br />
                                    <br />
                                    The{" "}
                                    <strong>
                                        User Navigates to David's Tea task flow
                                    </strong>{" "}
                                    can be started by clicking in the{" "}
                                    <strong>second textbox at the top</strong>,
                                    next to the location marker. This flow
                                    showcases how to modify routes.
                                </span>
                            </div>
                        </Gallery>
                    </div>
                    <h3>Presentation</h3>
                    <br />
                    <iframe
                        src="https://docs.google.com/presentation/d/e/2PACX-1vTvCa5MSh0fyD1tQCqV3YM9CzS3OdqIe2KsXeEfSmFtWMNt9OOAx4u-JJH7P-4TWyqlvBOnMfd0ArB-/embed?start=false&amp;loop=false&amp;delayms=3000"
                        frameborder="0"
                        width="960"
                        height="569"
                        allowfullscreen=""
                        mozallowfullscreen="true"
                        webkitallowfullscreen="true"
                        id="slides"
                    ></iframe>
                    <h3>Project Deliverables</h3>
                    <p>
                        All of the following deliverables can be found in the
                        presentation above.
                    </p>
                    <ul>
                        <li>4 User Interviews</li>
                        <li>Information Architecture</li>
                        <li>2 Personas</li>
                        <li>2 User Flows &amp; Sets of Sketches</li>
                        <li>Wireframe</li>
                    </ul>
                    <p>
                        The differentiating factors of Guideo were three things:
                    </p>
                    <ol>
                        <li>
                            A faster way to identify alternative routes, and
                            modify specific parts of a route with walking.
                        </li>
                        <li>
                            Pricing information is readily available, and it
                            notifies if a route is presto only.
                        </li>
                        <li>
                            It will notify and provide alternative{" "}
                            <strong>walking</strong> routes when there is a
                            delay.
                        </li>
                    </ol>
                    <p>
                        I came away from the course with a greater understand of
                        how to produce a better user experience. I learned how
                        to throw away my ego when being critiqued. How to stay
                        silent and provide not provide answers during user
                        testing. When and how to prod for knowledge the
                        interviewee thought was common sense.
                    </p>
                    <p>
                        Industry professionals{" "}
                        <a href="https://www.linkedin.com/in/gerarddolan/">
                            Gerard Dolan
                        </a>{" "}
                        and{" "}
                        <a href="https://www.linkedin.com/in/david-aboutboul/">
                            David Aboutboul
                        </a>{" "}
                        taught our class invaluable life and career lessons. I
                        hope to carry a design thinking approach to everything
                        that I do henceforth.
                    </p>
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
