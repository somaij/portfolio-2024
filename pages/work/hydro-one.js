import * as React from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import headerImage from "/public/images/hone.jpg";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function HydroOne() {
    const [open, setOpen] = React.useState(false);
    return (
        <Layout>
            <Head>
                <title>Hydro One | Jason Somai</title>
            </Head>
            <div id="work-header">
                <div className="container">
                    <div className="text">
                        <div className="content">
                            <Link
                                href="/#home-work"
                                className="arrow-btn white reverse"
                                title="All Work"
                            >
                                All Work
                            </Link>
                            <h1>Hydro One</h1>
                            <p>
                                As Hydro One's Digital Manager, I craft web
                                pages that deliver exceptional experiences for
                                both employees and users.
                            </p>
                            <p>
                                By leveraging our skills and expertise, my team
                                and I meticulously design and develop pages for
                                our external website and intranet that not only
                                streamline processes for employees but also
                                empower users with intuitive navigation,
                                engaging content, and seamless interactions.
                            </p>
                            <p>
                                Through a user-centric approach, I continuously
                                strive to improve functionality, and aesthetics.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <Image src={headerImage} fill />
                </div>
            </div>

            <div id="projects">
                <div className="container">
                    <div className="project-card horizontal">
                        <div className="text">
                            <div className="tags">
                                <div className="tag">Heatmapping</div>
                                <div className="tag">UX Research</div>
                            </div>
                            <h3>Energizing Life Everyday</h3>
                            <p>
                                In the creation of the refresh of the Energizing
                                Life Everyday page, we began with lo-fi designs
                                for prototyping before transitioning to hi-fi
                                designs for implementation. By embracing
                                modularity, we ensured flexibility and
                                scalability, allowing seamless updates and
                                modifications as needed. This webpage serves as
                                a hub adeptly simplifying complex concepts
                                surrounding energy transmission into digestible
                                content.
                            </p>
                            <h5 className="sub">Action</h5>
                            <p>
                                By monitoring user behavior using Google
                                Analytics and Microsoft Clarity, my team and I
                                identified key insights that led to significant
                                optimizations of the landing page while the
                                campaign was still on-going.{" "}
                            </p>
                            <h5 className="sub">Result</h5>
                            <p>
                                We observed a high number of users clicking on a
                                logo that resembled a button, as well as
                                difficulties in closing the cookie banner. To
                                address these issues, we redesigned the masthead
                                during the final flight of the campaign for
                                improved conversion rates and submitted a change
                                request to reduce the size of the cookie banner
                                across the website. We managed to drop the
                                bounce rate from 62% to 50%.{" "}
                            </p>
                        </div>
                        <div className="images">
                            <Gallery>
                                <Item
                                    original="https://picsum.photos/1024/768?image=1"
                                    thumbnail="https://picsum.photos/80/60?image=1"
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img
                                            ref={ref}
                                            onClick={open}
                                            src="https://picsum.photos/80/60?image=1"
                                        />
                                    )}
                                </Item>
                                <Item
                                    original="https://picsum.photos/1024/768?image=2"
                                    thumbnail="https://picsum.photos/80/60?image=2"
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img
                                            ref={ref}
                                            onClick={open}
                                            src="https://picsum.photos/80/60?image=2"
                                        />
                                    )}
                                </Item>
                            </Gallery>
                        </div>
                    </div>
                    <div className="project-card vertical">
                        <div className="text">
                            <div className="tags">
                                <div className="tag">UX/UI</div>
                                <div className="tag">Web Development</div>
                                <div className="tag">Process Development</div>
                            </div>
                            <h3>Power to Give</h3>
                            <div className="box-container">
                                <div className="box">
                                    <h4>
                                        2022 - Spearheading the unification of
                                        Power to Give
                                    </h4>
                                    <h5 className="sub">Action</h5>
                                    <ul>
                                        <li>
                                            Consolidated resources and
                                            streamlined information into a
                                            cohesive page
                                        </li>
                                        <li>
                                            Created an intuitive platform to
                                            facilitate employee engagement and
                                            participation
                                        </li>
                                        <li>
                                            Promoted program objectives and
                                            celebrated its impact
                                        </li>
                                        <li>
                                            Over 6,000 employees actively
                                            involved
                                        </li>
                                    </ul>
                                    <h5 className="sub">Result</h5>
                                    <ul>
                                        <li>
                                            Raised an impressive $1.5 million in
                                            September 2022
                                        </li>
                                        <li>
                                            Demonstrated collective generosity
                                            and commitment to making a
                                            difference`
                                        </li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <h4>
                                        2022 - Spearheading the unification of
                                        Power to Give
                                    </h4>
                                    <h5 className="sub">Action</h5>
                                    <ul>
                                        <li>
                                            Consolidated resources and
                                            streamlined information into a
                                            cohesive page
                                        </li>
                                        <li>
                                            Created an intuitive platform to
                                            facilitate employee engagement and
                                            participation
                                        </li>
                                        <li>
                                            Promoted program objectives and
                                            celebrated its impact
                                        </li>
                                        <li>
                                            Over 6,000 employees actively
                                            involved
                                        </li>
                                    </ul>
                                    <h5 className="sub">Result</h5>
                                    <ul>
                                        <li>
                                            Raised an impressive $1.5 million in
                                            September 2022
                                        </li>
                                        <li>
                                            Demonstrated collective generosity
                                            and commitment to making a
                                            difference`
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="images">
                            <Image src={headerImage} fill />
                            <Image src={headerImage} fill />
                            <Image src={headerImage} fill />
                            <Image src={headerImage} fill />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
