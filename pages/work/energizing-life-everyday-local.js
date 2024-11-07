import * as React from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import anime from "animejs";
import { useEffect } from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function EnergizingLifeEverydayLocal() {
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
                <title>
                    Energizing Life Everyday Local Hydro One | Jason Somai
                </title>
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
                            <h1>Energizing Life Everyday Local</h1>
                            <h2>Problem</h2>
                            <p>
                                We wanted to educate Ontarians on the work that
                                takes place across the province to ensure energy
                                demands are met. There was an iteration of this
                                campaign that we had done six months prior.
                                However, with this new iteration, we wanted to
                                highlight major transmission projects relevant
                                to very specific target audiences. The original
                                page was designed somewhat recently, so we
                                racked our brains to see what we could improve.
                            </p>
                        </div>
                        <div className="thumbnail-gallery-caption two-col">
                            <Gallery options={galOptions}>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/ELEL-high-fi-2.jpg"
                                            width="1440"
                                            height="1440"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/ELEL-high-fi-2.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        Final version - after tweaking using
                                        data from heatmaps and user recordings.
                                    </span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/ELEL-high-fi-1.jpg"
                                            width="1024"
                                            height="768"
                                            caption="Region section & quotes"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/ELEL-high-fi-1.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>Initial launch version</span>
                                </div>
                            </Gallery>
                        </div>
                    </div>
                </div>
                <div className="background-image">
                    <Image
                        src="/images/pexels-uvarova-323133.jpg"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
            <article id="work-body">
                <div className="container">
                    <section>
                        <h3>Initial Redesign Actions</h3>
                        <p>
                            We had a number of ideas to improve on the existing
                            design. Something we noticed while watching some
                            user recordings of the previous design was that
                            users stopped scroll within the first 50% of the
                            page, and bounced. We made a concerted effort to
                            reduce the variety of content and refocus on the
                            main message of the landing page.
                        </p>
                        <div className="thumbnail-gallery-caption two-col white-background">
                            <Gallery options={galOptions}>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/elel-sticky-nav.jpg"
                                            width="1024"
                                            height="768"
                                            caption="test"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/elel-sticky-nav.jpg"
                                                    style={{
                                                        objectPosition:
                                                            "bottom",
                                                    }}
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        Added a sticky navigation that would let
                                        users jump to their relevant area. This
                                        nav was below the introduction section.
                                    </span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/ELEL-section-spotlight.jpg"
                                            width="1024"
                                            height="768"
                                            caption="test"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/ELEL-section-spotlight.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        Whenever the target demographic changed,
                                        the page was changed to highlight that
                                        section first. Content cards were
                                        created to fit many types of content
                                        into the same section the page.
                                    </span>
                                </div>
                            </Gallery>
                        </div>
                    </section>
                    <section>
                        <h3>Iterative Design</h3>
                        <p>
                            While the page was performing well on desktop,
                            mobile users would bounce very quickly. After
                            extensive analysis in Google Analytics and Microsoft
                            Clarity, we discovered that users were distracted by
                            the cookie banner because it was so large, that it
                            was blocking 70% of the view.
                        </p>
                        <h4>Cookie Banner</h4>
                        <p>
                            As we rely on a website vendor for hosting and
                            website-wide CSS changes, we wrote inline CSS to
                            test the changes before requesting vendor
                            implementation. The cookie banner changes were:
                        </p>
                        <ul>
                            <li>Reducing the font size</li>
                            <li>Enlarging the accept button</li>
                            <li>
                                Adding transparency effects reveal content
                                underneath 
                            </li>
                        </ul>
                        <p>
                            These changes seemed to work, as cookie banner close
                            actions went up by 4%. We sent the changes to our
                            website vendor who implemented our CSS edits on all
                            pages.
                        </p>
                        <h4>Page Design</h4>
                        <p>
                            Observing users after the banner change uncovered
                            the following:
                        </p>
                        <ul>
                            <li>
                                There were dead clicks on the campaign logo,
                                mistaking it for a button
                            </li>
                            <li>
                                They were bouncing quickly because the content
                                didn’t align with the ad that brought them to
                                the page
                            </li>
                            <li>
                                They weren’t able to glean anything useful from
                                the information in view on mobile.
                            </li>
                        </ul>
                        <div className="two-col-image-text">
                            <div className="text">
                                <p>
                                    To address these, we made the following
                                    design changes, during the final flight of
                                    the campaign:
                                </p>
                                <ul>
                                    <li>
                                        Removed the logo (with a lot of
                                        convincing)
                                    </li>
                                    <li>
                                        Changed the background image to a more
                                        dynamic outdoor theme
                                    </li>
                                    <li>
                                        Brought a short description into view on
                                        the masthead
                                    </li>
                                    <li>
                                        Added 3 jump links to the header, one
                                        anchoring to our featured video
                                    </li>
                                    <li>
                                        Before, content cards had tags that
                                        would describe the type of content that
                                        the user was clicking on. The tags were
                                        changed to what the users should take
                                        away from the content.
                                    </li>
                                    <li>
                                        Moved the navigation below the masthead
                                        instead pf after the first section
                                    </li>
                                </ul>
                            </div>
                            <div className="thumbnail-gallery-caption one-col white-background">
                                <Gallery options={galOptions}>
                                    <div className="gallery-image-wrapper">
                                        <div className="image-wrapper">
                                            <Item
                                                original="/images/ELEL-new-header.jpg"
                                                width="1024"
                                                height="768"
                                                caption="test"
                                            >
                                                {({ ref, open }) => (
                                                    <Image
                                                        fill
                                                        ref={ref}
                                                        onClick={open}
                                                        src="/images/ELEL-new-header.jpg"
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
                    <section id="results">
                        <h2>Results</h2>
                        <p>
                            After all of these changes during the campaign, we
                            improved the <strong>bounce rate by 2%</strong> and
                            average session duration{" "}
                            <strong>went up by 5%</strong>. Overall engagement
                            <strong> went up 10%</strong>.
                        </p>
                        <Link
                            href="https://www.hydroone.com/energizing-life-everyday"
                            className="arrow-btn"
                            title="All Work"
                        >
                            View Page
                        </Link>
                    </section>
                </div>
            </article>
        </Layout>
    );
}
