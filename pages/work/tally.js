import * as React from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import anime from "animejs";
import { useEffect } from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function Tally() {
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
            targets: ".blob-svg path",
            duration: 20000,
            easing: "easeInOutSine(0.25, 1)",
            loop: true,
            direction: "alternate",
            keyframes: [
                { d: "M426.5,293.5Q401,337,381,389Q361,441,305.5,461Q250,481,197,457Q144,433,119.5,386Q95,339,65,294.5Q35,250,78,212.5Q121,175,157,163.5Q193,152,221.5,102.5Q250,53,293.5,76Q337,99,339.5,148Q342,197,397,223.5Q452,250,426.5,293.5Z" },
                { d: "M421.5,290.5Q390,331,345.5,335Q301,339,275.5,385Q250,431,215.5,400Q181,369,168,337Q155,305,146,277.5Q137,250,133,215Q129,180,129,110.5Q129,41,189.5,86Q250,131,291,119.5Q332,108,346.5,147Q361,186,407,218Q453,250,421.5,290.5Z" },
                { d: "M399.5,287Q378,324,349.5,349Q321,374,285.5,381Q250,388,205,397.5Q160,407,103.5,387Q47,367,75.5,308.5Q104,250,113,213Q122,176,159.5,167.5Q197,159,223.5,97Q250,35,294.5,66Q339,97,378.5,125Q418,153,419.5,201.5Q421,250,399.5,287Z" },
            ],
        });
        anime({
            targets: "#blob-svg path",
            duration: 20000,
            easing: "easeInOutSine(0.25, 1)",
            loop: true,
            direction: "alternate",
            keyframes: [
                { d: "M426.5,293.5Q401,337,381,389Q361,441,305.5,461Q250,481,197,457Q144,433,119.5,386Q95,339,65,294.5Q35,250,78,212.5Q121,175,157,163.5Q193,152,221.5,102.5Q250,53,293.5,76Q337,99,339.5,148Q342,197,397,223.5Q452,250,426.5,293.5Z" },
                { d: "M421.5,290.5Q390,331,345.5,335Q301,339,275.5,385Q250,431,215.5,400Q181,369,168,337Q155,305,146,277.5Q137,250,133,215Q129,180,129,110.5Q129,41,189.5,86Q250,131,291,119.5Q332,108,346.5,147Q361,186,407,218Q453,250,421.5,290.5Z" },
                { d: "M399.5,287Q378,324,349.5,349Q321,374,285.5,381Q250,388,205,397.5Q160,407,103.5,387Q47,367,75.5,308.5Q104,250,113,213Q122,176,159.5,167.5Q197,159,223.5,97Q250,35,294.5,66Q339,97,378.5,125Q418,153,419.5,201.5Q421,250,399.5,287Z" },
            ],
        });
    }, []);

    return (
        <Layout>
            <Head>
                <title>Tally &mdash; Golf Scoring App | Jason Somai</title>
            </Head>
            <div id="work-header">
                <div className="blob">
                    <svg
                        id="blob-svg"
                        className="blob-svg"
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
                                href="/work"
                                className="arrow-btn white reverse"
                                title="All Work"
                            >
                                All Work
                            </Link>
                            <h1>Tally</h1>
                            <p>Golf scoring for the golfer who just wants to play.</p>
                            <p className="sub no-margin">Role</p>
                            <p>Product Designer &amp; Developer (Solo)</p>
                            <p className="sub no-margin">Platform</p>
                            <p>Android + Wear OS</p>
                            <p className="sub no-margin">Status</p>
                            <p>Pre-beta &mdash; entering internal testing</p>
                            <p className="sub">Tools</p>
                            <p>Figma, Claude Code, Android Studio, Gemini</p>
                        </div>
                        <div className="thumbnail-gallery-caption two-col tall-images">
                            <Gallery options={galOptionsLarge}>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper object-top">
                                        <Item
                                            original="/images/Tally-1.jpg"
                                            width="824"
                                            height="1464"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/Tally-1.jpg"
                                                    alt="Home screen showing recent rounds list"
                                                    sizes="(max-width: 991px) 100vw, 25vw"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>Home screen: recent rounds list with score vs par at a glance.</span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper object-top">
                                        <Item
                                            original="/images/Tally-2.jpg"
                                            width="824"
                                            height="1464"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/Tally-2.jpg"
                                                    alt="Home screen with active round card pinned at bottom"
                                                    sizes="(max-width: 991px) 100vw, 25vw"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>Active round card pins to the bottom when a round is in progress: one tap to resume.</span>
                                </div>
                            </Gallery>
                        </div>
                    </div>
                </div>
                <div className="background-image">
                    <Image
                        src="/images/tally-bg.jpg"
                        fill
                        alt=""
                        priority
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>

            <article id="work-body" className="no-margin-top">

                <section className="blue-gradient-background problem-section">
                    <div className="container">
                        <div className="two-col-image-text">
                            <div className="text">
                                <h2>The Problem</h2>
                                <p>Golf scoring apps are built for serious golfers.</p>
                                <p>Hole19, TheGrint, and their competitors assume you know your handicap, expect you to navigate course databases and GPS maps, and want you to pay a subscription. Heavy onboarding. Cluttered interfaces. Subscription before you've played a hole.</p>

                                <div className="text-icon">
                                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M16 16C16 16 14.5 14 12 14C9.5 14 8 16 8 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 9H9.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15 9H15.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <strong>The Gap</strong>
                                </div>
                                <p>These apps aren&apos;t built for casual golfers. If you play a few times a year, still use a paper scorecard, and have no interest in tracking your handicap, they&apos;re the wrong tool. Not too simple. Too much.</p>

                                <div className="text-icon">
                                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M13 13L19 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <strong>The Response</strong>
                                </div>
                                <p>I&apos;m that golfer. I couldn&apos;t find the app I wanted, so I built it.</p>
                            </div>
                            <div className="thumbnail-gallery-caption one-col white-background tight">
                                <Gallery options={galOptions}>
                                    <div className="gallery-image-wrapper">
                                        <div className="image-wrapper phone-aspect">
                                            <Item
                                                original="/images/Tally-7.jpg"
                                                width="824"
                                                height="1464"
                                                fill
                                            >
                                                {({ ref, open }) => (
                                                    <Image
                                                        fill
                                                        ref={ref}
                                                        onClick={open}
                                                        src="/images/Tally-7.jpg"
                                                        alt="Active scoring screen — 1 stroke in, last shot distance recorded"
                                                        sizes="(max-width: 991px) 100vw, 15vw"
                                                    />
                                                )}
                                            </Item>
                                        </div>
                                        <span>Active scoring: 1 stroke in, last shot distance recorded. Hit again or finish the hole.</span>
                                    </div>
                                </Gallery>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="design-process-header">
                    <div className="container">
                        <div className="content">
                            <svg
                                aria-hidden="true"
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
                            <h2>The Design Process</h2>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <section>
                        <h3>Research</h3>
                        <p>I didn&apos;t have user interviews. I worked with what I did have.</p>

                        <div className="four-col-text">
                            <div className="text-well text">
                                <p><strong>Competitive audit:</strong> I mapped Hole19, TheGrint, and TallyHo across onboarding complexity, feature depth, and Wear OS support, to see where casual golfers were being ignored and where the apps were actually breaking down.</p>
                            </div>
                            <div className="text-well text">
                                <p><strong>Play Store review mining:</strong> The most useful signal came from competitor reviews. Wear OS sync failures appeared consistently: lost data, broken connections, abandoned features. This wasn&apos;t anecdotal; it was a pattern across real reviews.</p>
                            </div>
                            <div className="text-well text">
                                <p><strong>Proxy user testing:</strong> Without access to a golf course during early ideation, I used golf video games to simulate round flow, working through hole transitions, score entry timing, and mid-round interruptions. Not perfect, but enough to work through the core interactions before writing any code.</p>
                            </div>
                            <div className="text-well text">
                                <p><strong>What I didn&apos;t do:</strong> formal user interviews. I built on competitive evidence, real review data, and my own experience as exactly the person I was designing for. It&apos;s a real gap. I&apos;m planning to close it in beta.</p>
                            </div>
                        </div>
                    </section>

                    <section className="text-well-lg">
                        <h3>The Insight</h3>
                        <p>Casual golfers don&apos;t need a better version of Hole19. They need a different product.</p>
                        <p>Wear OS was the opening. Every serious app has a watch companion, but real Play Store reviews confirm the execution is consistently broken. Sync failures, abandoned features, unreliable connections. For a casual golfer who wants to tap their wrist to add a stroke without pulling out their phone, no app is actually delivering this reliably.</p>
                        <strong>That was the bet: something clean and simple that actually works on your wrist.</strong>
                    </section>
                </div>

                <section className="black-background">
                    <div className="container">
                        <h3>Design Decisions: What&apos;s In, What&apos;s Cut</h3>
                        <p>The V1 filter was simple: <strong>would a first-time golfer understand this immediately? If not, V2.</strong></p>
                        <div className="two-col-image-text">
                            <div className="text">
                                <div className="text-icon">
                                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="#00B72E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <strong>In for V1</strong>
                                </div>
                                <ul>
                                    <li>Stroke counting</li>
                                    <li>Score vs par</li>
                                    <li>Hole-by-hole summary</li>
                                    <li>Round history</li>
                                    <li>Watch companion (Wear OS)</li>
                                </ul>
                            </div>
                            <div className="text">
                                <div className="text-icon">
                                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18" stroke="#FF5959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M6 6L18 18" stroke="#FF5959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <strong>Cut for V1</strong>
                                </div>
                                <ul>
                                    <li>Handicap tracking</li>
                                    <li>Course database and GPS maps</li>
                                    <li>Tee box selection</li>
                                    <li>Club tracking and swing analysis</li>
                                    <li>Multiplayer</li>
                                </ul>
                            </div>
                        </div>
                        <p>Every cut was to protect simplicity. Handicap tracking matters to a fraction of golfers. Course databases add onboarding friction for someone who just wants to start a round. V1 has to be simpler than a paper scorecard. That&apos;s the bar.</p>
                    </div>
                </section>

                <div className="container">
                    <section className="text-well-lg">
                        <h3>The Platform Decision</h3>
                        <p>Tally is Android-native, and that&apos;s because of Wear OS.</p>
                        <p>Cross-platform frameworks like Expo don&apos;t support Wear OS. Going native was the only way to build what I actually wanted: a phone app and a watch app that work together. Both are built and working.</p>
                        <p>The phone app is currently in testing. The watch app is on hold while I wait for replacement hardware. The platform decision was right. The timing just got complicated.</p>
                    </section>

                    <section className="text-well-lg">
                        <h3>Designing with AI: The Tastemaker Lesson</h3>
                        <p>I used Gemini in Android Studio as a build tool, not a design tool.</p>
                        <p>Early on, before the Figma designs were done, I let Gemini generate the phone UI. The screens ran. But the UX was weak: generic patterns, default choices, no real design intent behind any of the decisions.</p>
                        <strong>AI accelerates execution, but makes design decisions by default when there&apos;s no direction. Without a designer setting the standards, you get the average of what&apos;s been built before.
                        </strong>
                        <p>I stepped back. Designed the full phone UI in Figma first. Then used Gemini to implement against those designs. The result was better, and the gap between &ldquo;AI-led&rdquo; and &ldquo;design-led, AI-implemented&rdquo; was obvious when you held them side by side.</p>
                        <p>AI is fast at building. But it doesn&apos;t have taste. Someone still has to decide what good looks like. That job matters more now, not less.</p>
                    </section>

                    <section>
                        <h3>The Work</h3>
                        <div className="thumbnail-gallery-caption three-col white-background">
                            <Gallery options={galOptions}>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper object-top">
                                        <Item original="/images/Tally-1.jpg" width="824" height="1464">
                                            {({ ref, open }) => (
                                                <Image fill ref={ref} onClick={open} src="/images/Tally-1.jpg" alt="Home screen — recent rounds list" sizes="(max-width: 767px) 100vw, 33vw" />
                                            )}
                                        </Item>
                                    </div>
                                    <span>Home: recent rounds list with date, holes, and score vs par. History without clutter.</span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper object-top">
                                        <Item original="/images/Tally-2.jpg" width="824" height="1464">
                                            {({ ref, open }) => (
                                                <Image fill ref={ref} onClick={open} src="/images/Tally-2.jpg" alt="Active round card pinned to bottom" sizes="(max-width: 767px) 100vw, 33vw" />
                                            )}
                                        </Item>
                                    </div>
                                    <span>Active round card pins to the bottom when a round is in progress: one tap to jump back in.</span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper object-top">
                                        <Item original="/images/Tally-3.jpg" width="824" height="1464">
                                            {({ ref, open }) => (
                                                <Image fill ref={ref} onClick={open} src="/images/Tally-3.jpg" alt="New round setup screen" sizes="(max-width: 767px) 100vw, 33vw" />
                                            )}
                                        </Item>
                                    </div>
                                    <span>New round setup: pick 9 or 18 holes, name your course and round. No GPS, no database to search.</span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper object-top">
                                        <Item original="/images/Tally-4.jpg" width="824" height="1464">
                                            {({ ref, open }) => (
                                                <Image fill ref={ref} onClick={open} src="/images/Tally-4.jpg" alt="Hole setup with circular par selector" sizes="(max-width: 767px) 100vw, 33vw" />
                                            )}
                                        </Item>
                                    </div>
                                    <span>Hole setup with a circular par selector: par choices are few and predictable. The dial makes it fast.</span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper object-top">
                                        <Item original="/images/Tally-5.jpg" width="824" height="1464">
                                            {({ ref, open }) => (
                                                <Image fill ref={ref} onClick={open} src="/images/Tally-5.jpg" alt="Scoring screen at start of hole" sizes="(max-width: 767px) 100vw, 33vw" />
                                            )}
                                        </Item>
                                    </div>
                                    <span>Scoring screen at the start of a hole: two choices: hit your shot or finish. Nothing else in the way.</span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper object-top">
                                        <Item original="/images/Tally-6.jpg" width="824" height="1464">
                                            {({ ref, open }) => (
                                                <Image fill ref={ref} onClick={open} src="/images/Tally-6.jpg" alt="Between shots — distance tracking" sizes="(max-width: 767px) 100vw, 33vw" />
                                            )}
                                        </Item>
                                    </div>
                                    <span>Between shots: the app tracks your walk and measures distance to your ball automatically.</span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper object-top">
                                        <Item original="/images/Tally-7.jpg" width="824" height="1464">
                                            {({ ref, open }) => (
                                                <Image fill ref={ref} onClick={open} src="/images/Tally-7.jpg" alt="After shot — stroke count and last shot distance" sizes="(max-width: 767px) 100vw, 33vw" />
                                            )}
                                        </Item>
                                    </div>
                                    <span>After the shot: stroke count updates, last shot distance logged. Keep going or finish the hole.</span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper object-top">
                                        <Item original="/images/Tally-8.jpg" width="824" height="1464">
                                            {({ ref, open }) => (
                                                <Image fill ref={ref} onClick={open} src="/images/Tally-8.jpg" alt="Hole summary with stroke-by-stroke yardage" sizes="(max-width: 767px) 100vw, 33vw" />
                                            )}
                                        </Item>
                                    </div>
                                    <span>Hole summary: result hero (&ldquo;Par / Even, great work!&rdquo;) with a stroke-by-stroke yardage breakdown.</span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper object-top">
                                        <Item original="/images/Tally-9.jpg" width="824" height="1464">
                                            {({ ref, open }) => (
                                                <Image fill ref={ref} onClick={open} src="/images/Tally-9.jpg" alt="Round summary — total score and hole breakdown" sizes="(max-width: 767px) 100vw, 33vw" />
                                            )}
                                        </Item>
                                    </div>
                                    <span>Round summary: total score, overall vs par, and a collapsible hole-by-hole breakdown.</span>
                                </div>
                            </Gallery>
                        </div>
                    </section>

                    <section id="impact" className="text-well-lg">
                        <h2>Status</h2>
                        <p>The phone app is largely complete and matching Figma designs. The watch app is paused pending replacement hardware.</p>
                        <p>Tally is in internal testing. Not yet public, but getting there.</p>
                        <Link href="/work" className="arrow-btn white reverse" title="All Work">All Work</Link>
                    </section>
                </div>
            </article>
        </Layout>
    );
}
