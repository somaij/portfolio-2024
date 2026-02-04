import * as React from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import anime from "animejs";
import { useEffect } from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function TreeTrimming() {
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
                <title>Energizing Life Campaign Page - Hydro One | Jason Somai</title>
            </Head>
            <div id="work-header" className="full">
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
                            
                            <h1>Energizing Life Campaign Page</h1>
                            <p>Iterating a community grant application landing page over four years through data-driven design decisions.</p>
                            <p className="sub no-margin">Role</p>
                            <p>Product Designer & Developer (Primary)</p>
                            <p className="sub">Impact</p>
                            <div className="stat-boxes">
                                                                <div className="stat">
                                    <div className="num">6.4x</div>
                                    <div className="label">increase in applications</div>
                                </div>
                                <div className="stat">
                                    <div className="num">56%</div>
                                    <div className="label">engagement rate (final cycle)</div>
                                </div>
                                <div className="stat">
                                    <div className="num">44%</div>
                                    <div className="label">bounce rate (final cycle)</div>
                                </div>
                            </div>
                            <p className="sub">Timeline</p>
                            <p>2022-2025 (annual campaign cycles with continuous refinement)</p>
                            <p className="sub">Tools</p>
                            <p>Figma, HTML/CSS/JavaScript, Microsoft Clarity (behavioral analytics), Google Analytics</p>
                            
                            <Link
                                href="https://www.hydroone.com/about/energizing-life/"
                                className="btn solid white"
                                title="Visit webpage"
                            >
                                View live page
                            </Link>
                        </div>
                        <div className="thumbnail-gallery-caption two-col">
                            <Gallery options={galOptionsLarge}>

                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper tag tag-before">
                                        <Item
                                            original="/images/elcf-1.jpg"
                                            width="1605"
                                            height="4096"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/elcf-1.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        <strong>2022</strong> Initial redesign
                                    </span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper tag tag-after">
                                        <Item
                                            original="/images/elcf-4.jpg"
                                            width="1605"
                                            height="4637"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/elcf-4.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span><strong>2025</strong> Simplified version</span>
                                </div>
                            </Gallery>
                        </div>
                    </div>
                </div>
                <div className="background-image">
                    <Image
                        src="/images/the-tampa-bay-estuary-program-CxL29J-aM5E-unsplash.jpg"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
            <article id="work-body" className="no-margin-top">
                
                    <section className="blue-gradient-background problem-section">
                        <div className="container">
                        
                        <div className="two-col-image-text">
                            <div className="text">
                                <h2>The Challenge</h2>
                                <p>Hydro One ran an annual community investment fund opening applications for a 6-week window. The challenge: design a landing page that clearly explains the fund, eligibility criteria, and the application process to drive grant applications.</p>
                        
                                <div className="text-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M13 13L19 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <strong>Problem Statement</strong>
                                </div>
                                <p>When I took over this campaign page in 2022, I redesigned it to prioritize clarity and conversion. I shifted from narrative to a scannable card-based layout.</p>

                                <div className="text-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M16 16C16 16 14.5 14 12 14C9.5 14 8 16 8 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 9H9.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15 9H15.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <strong>User Pain Points</strong>
                                </div>
                                <ul>
                                    <li>Complex information hierarchy made it hard to scan</li>
                                    <li>Unclear path to the application</li>
                                    <li>Long-form narratives didn't support quick decision-making</li>
                                </ul>
                            </div>
                            <div className="thumbnail-gallery-caption one-col white-background">
                                <Gallery options={galOptions}>
                                    <div className="gallery-image-wrapper">
                                        <div className="image-wrapper tall object-top tag tag-before">
                                            <Item
                                                original="/images/elcf-0.jpg"
                                                 width="1605"
                                            height="4637"
                                            >
                                                {({ ref, open }) => (
                                                    <Image
                                                        fill
                                                        ref={ref}
                                                        onClick={open}
                                                        src="/images/elcf-0.jpg"
                                                    />
                                                )}
                                            </Item>
                                        </div>
                                        <span>
                                            The original 2021 page in it's "recepients" phase.
                                        </span>
                                    </div>
                                </Gallery>
                            </div>
                        </div>
                        
                    </div>
                    </section>
                <div className="container">
                    <section className="design-process-header">
                                        <div className="container">
                                            <div className="content">
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
                                                <h2>The Design Approach</h2>
                                            </div>
                                        </div>
                    </section>
                    <section>
                        <h3>2022: Complete Redesign</h3>
                        <p>When I took over the campaign page in 2022, I redesigned it with a focus on clarity and conversion:</p>
                                                <h4>User Flow</h4>
    <div className="flow-diagram">
    <div className="flow-step">
        <p>User sees animation highlighting funding</p>
    </div>
    <div className="flow-step">
        <p>User can see where in the timeline the current fund is at</p>
    </div>
    <div className="flow-step">
        <p>User reads eligibility criteria while application box scrolls with them</p>
    </div>
    <div className="flow-step">
        <p>User clicks apply now</p>
    </div>

                        </div>
                        <h4>2022 Design Elements</h4>
                        <div className="thumbnail-gallery-caption three-col white-background">
                                                    <Gallery options={galOptions}>
                                                        <div className="gallery-image-wrapper">
                                                            <div className="image-wrapper object-center">
                                                                <Item
                                                                    original="/images/elcf-1-1.jpg"
                                                                    width="1440"
                                                                    height="705"
                                                                    caption="test"
                                                                >
                                                                    {({ ref, open }) => (
                                                                        <Image
                                                                            fill
                                                                            ref={ref}
                                                                            onClick={open}
                                                                            src="/images/elcf-1-1.jpg"
                                                                        />
                                                                    )}
                                                                </Item>
                                                            </div>
                                                            <span>
                                                                A clear message about the fund's purpose was established at the top of the page.
                                                            </span>
                                                        </div>
                                                        <div className="gallery-image-wrapper">
                                                            <div className="image-wrapper object-left">
                                                                <Item
                                                                    original="/images/elcf-1-2.jpg"
                                                                    width="1020"
                                                                    height="916"
                                                                    caption="test"
                                                                >
                                                                    {({ ref, open }) => (
                                                                        <Image
                                                                            fill
                                                                            ref={ref}
                                                                            onClick={open}
                                                                            src="/images/elcf-1-2.jpg"
                                                                        />
                                                                    )}
                                                                </Item>
                                                            </div>
                                                            <span>
                                                                A clear 3 step timeline to indicated what phase the fund was in.
                                                            </span>
                                                        </div>
                                                        <div className="gallery-image-wrapper">
                                                            <div className="image-wrapper object-right">
                                                                <Item
                                                                    original="/images/elcf-1-3.jpg"
                                                                    width="1008"
                                                                    height="919"
                                                                    caption="test"
                                                                >
                                                                    {({ ref, open }) => (
                                                                        <Image
                                                                            fill
                                                                            ref={ref}
                                                                            onClick={open}
                                                                            src="/images/elcf-1-3.jpg"
                                                                        />
                                                                    )}
                                                                </Item>
                                                            </div>
                                                            <span>
                                                                The eligibility criteria was put next to a sticky application box to keep the CTA in view.
                                                            </span>
                                                        </div>
                                                    </Gallery>
                                                </div>

                        <br />
                        <div className="text-well">
                            <h3>2022 Results:</h3>
                            <p>The redesign established a strong baseline. <strong>Applications increased significantly by 4 fold</strong> compared to 2021. Traffic also increased proportionally, suggesting both improved design <em>and</em> stronger marketing that year contributed to results.</p>
                        </div>
                        <br />
                    </section>
                    </div>
                    <section class="black-background">
                    <div className="container">
                        <h2>2023 - 2025: Testing & Refinement</h2>
                        <p>Over the following years, I tested variations on the design. In 2023, I had successfully implemented Microsoft Clarity, which allowed me to experiment with component layout and adjusting visual details, all while maintaining the core information architecture.</p>
                    </div>
                    </section>
                    <div className="container">
                    <section className="text-well-lg">
                        <h3>2023: Minimal Marketing Year</h3>
                        <p>Due to other circumstances, marketing efforts were reduced that year. However, the design improvements and user experience enhancements continued to drive engagement and application submissions.</p>
                        <h4>Design changes</h4>
                                                <div className="thumbnail-gallery-caption two-col white-background">
                                                    <Gallery options={galOptions}>
                                                        <div className="gallery-image-wrapper">
                                                            <div className="image-wrapper object-right">
                                                                <Item
                                                                    original="/images/elcf-1-1.jpg"
                                                                    width="1440"
                                                                    height="705"
                                                                    caption="test"
                                                                >
                                                                    {({ ref, open }) => (
                                                                        <Image
                                                                            fill
                                                                            ref={ref}
                                                                            onClick={open}
                                                                            src="/images/elcf-2-1.jpg"
                                                                        />
                                                                    )}
                                                                </Item>
                                                            </div>
                                                            <span>
                                                                A video was added to better explain the fund's purpose, placed between the timeline and the application section.
                                                            </span>
                                                        </div>
                                                        <div className="gallery-image-wrapper">
                                                            <div className="image-wrapper object-left">
                                                                <Item
                                                                    original="/images/elcf-2-2.jpg"
                                                                    width="1020"
                                                                    height="916"
                                                                    caption="test"
                                                                >
                                                                    {({ ref, open }) => (
                                                                        <Image
                                                                            fill
                                                                            ref={ref}
                                                                            onClick={open}
                                                                            src="/images/elcf-2-2.jpg"
                                                                        />
                                                                    )}
                                                                </Item>
                                                            </div>
                                                            <span>
                                                                At the end of the page, blog posts about previous recipients were added to build trust and credibility.
                                                            </span>
                                                        </div>
                                                    </Gallery>
                                                </div>
                        <p>Applications dropped, but the page held up well with lower traffic. The design clearly communicated information to those who found it—proving the baseline design was solid.</p>
                        <p>Reviewing the user recordings showed that users were engaged with the content and found it easy to navigate.</p>
                        <ul>
                            <li>Lower application volume due to minimal promotion</li>
                            <li>~47% bounce rate</li>
                            <li>~30% repeat visitors</li>
                            <li><strong>Key learning:</strong> The design works independent of marketing spend</li>
                        </ul>

                    </section>
                    <section className="text-well-lg">
                        
                        <h3>2024: Full Marketing Campaign</h3>
                        <h4>Design Changes</h4>
                                                <div className="thumbnail-gallery-caption three-col white-background">
                                                    <Gallery options={galOptions}>
                                                        <div className="gallery-image-wrapper">
                                                            <div className="image-wrapper object-center">
                                                                <Item
                                                                    original="/images/elcf-3-1.jpg"
                                                                    width="1440"
                                                                    height="705"
                                                                    caption="test"
                                                                >
                                                                    {({ ref, open }) => (
                                                                        <Image
                                                                            fill
                                                                            ref={ref}
                                                                            onClick={open}
                                                                            src="/images/elcf-3-1.jpg"
                                                                        />
                                                                    )}
                                                                </Item>
                                                            </div>
                                                            <span>
                                                                The header was simplified - removing text elements to focus on the animation and application CTA.
                                                            </span>
                                                        </div>
                                                        <div className="gallery-image-wrapper">
                                                            <div className="image-wrapper object-left">
                                                                <Item
                                                                    original="/images/elcf-3-2.jpg"
                                                                    width="1020"
                                                                    height="916"
                                                                    caption="test"
                                                                >
                                                                    {({ ref, open }) => (
                                                                        <Image
                                                                            fill
                                                                            ref={ref}
                                                                            onClick={open}
                                                                            src="/images/elcf-3-2.jpg"
                                                                        />
                                                                    )}
                                                                </Item>
                                                            </div>
                                                            <span>
                                                                Using more brand colours to create visual interest and separate sections.
                                                            </span>
                                                        </div>
                                                        <div className="gallery-image-wrapper">
                                                            <div className="image-wrapper object-right">
                                                                <Item
                                                                    original="/images/elcf-3-3.jpg"
                                                                    width="1008"
                                                                    height="919"
                                                                    caption="test"
                                                                >
                                                                    {({ ref, open }) => (
                                                                        <Image
                                                                            fill
                                                                            ref={ref}
                                                                            onClick={open}
                                                                            src="/images/elcf-3-3.jpg"
                                                                        />
                                                                    )}
                                                                </Item>
                                                            </div>
                                                            <span>
                                                                The sticky application box was redesigned with more visual weight to draw attention.
                                                            </span>
                                                        </div>
                                                    </Gallery>
                                                </div>
                        <p>When advertising returned to normal, results improved significantly:</p>
                        <ul>
                            <li><strong>Substantial 60% increase</strong> in applications compared to 2022 baseline, and a <strong>6.4x increase</strong> compared to 2021 baseline.</li>
                            <li>Improved bounce rate (~12 points lower than 2023)</li>
                            <li>Strong repeat visitor rate (~50%)</li>
                            <li>Average session duration notably shorter than 2022</li>
                            <li><strong>Critical insight:</strong> Users were applying faster while applications increased. Shorter engagement time + higher conversions = clearer conversion path</li>
                        </ul>
                    </section>
                    <section className="text-well-lg">
                        <h3>2025: Final Simplification</h3>
                        <p>Based on learnings from previous cycles, I simplified the design further, removing experimental flourishes and doubling down on clarity. For this last round, there was no advertising. The fund in 2025 was only advertised through a direct mail campaign and boosted social media posts.</p>
                        <h4>Design Changes</h4>
                                                <div className="thumbnail-gallery-caption two-col white-background">
                                                    <Gallery options={galOptions}>
                                                        <div className="gallery-image-wrapper">
                                                            <div className="image-wrapper object-center">
                                                                <Item
                                                                    original="/images/elcf-4-1.jpg"
                                                                    width="1440"
                                                                    height="705"
                                                                    caption="test"
                                                                >
                                                                    {({ ref, open }) => (
                                                                        <Image
                                                                            fill
                                                                            ref={ref}
                                                                            onClick={open}
                                                                            src="/images/elcf-4-1.jpg"
                                                                        />
                                                                    )}
                                                                </Item>
                                                            </div>
                                                            <span>
                                                                The header was simplified further to remove the block element and integrating the animation with the background.
                                                            </span>
                                                        </div>
                                                        <div className="gallery-image-wrapper">
                                                            <div className="image-wrapper object-left">
                                                                <Item
                                                                    original="/images/elcf-4-2.jpg"
                                                                    width="1020"
                                                                    height="916"
                                                                    caption="test"
                                                                >
                                                                    {({ ref, open }) => (
                                                                        <Image
                                                                            fill
                                                                            ref={ref}
                                                                            onClick={open}
                                                                            src="/images/elcf-4-2.jpg"
                                                                        />
                                                                    )}
                                                                </Item>
                                                            </div>
                                                            <span>
                                                                In reviewing mobile user recordings, I found users were scrolling past the blog posts at the end. The titles were placed above imagery to improve engagement.
                                                            </span>
                                                        </div>
                                                    </Gallery>
                                                </div>
                        <h4>Design Changes:</h4>
                        <ul>
                            <li>Removed complex visual elements</li>
                            <li>Focused on card-based grid with consistent spacing</li>
                            <li>Streamlined copy and information hierarchy</li>
                            <li>Maintained accessibility (WCAG 2.1 AA)</li>
                        </ul>

                        <h4>2025 Results (No Paid Advertising):</h4>
                        <p><strong>This was the strongest validation of the design.</strong> With zero paid ads (just organic search, email, and social posts), the page generated meaningful applications with strong engagement metrics:</p>
                        <ul>
                            <li>Meaningful application volume despite zero paid promotion (<strong>still double the initial2021 amount</strong>)</li>
                            <li>~56% engagement rate (strong for owned-channel traffic)</li>
                            <li>~44% bounce rate (acceptable for organic audience)</li>
                            <li>~3m 13s average session duration (users reading and deciding)</li>
                            <li>~20% of traffic from organic search (SEO success)</li>
                            <li>~3,000 clicks to the application</li>
                        </ul>
                        <p><strong>Key insight:</strong> The design still converted users effectively through owned channels alone, without relying on paid promotion. This proves design quality matters independent of media spend.</p>
                    </section>

                    <section>
                        <h3>What This Taught Me</h3>
                        <div className="three-col-image-text">
                            <div className="text-well text">
                                <h4>Simplicity to Complexity</h4>
                                <p>The original page tried to tell a story. The redesigned page enables users to make decisions. That's more effective.</p>
                            </div>
                            <div className="text-well text">
                                <h4>Data Tells the Story</h4>
                                <p>The shift from "more time on page = success" to "less time but more conversions = success" showed I was solving the right problem—making application faster and easier.</p>
                            </div>
                            <div className="text-well text">
                                <h4>Iteration Over Redesign</h4>
                                <p>Rather than annual overhauls, small refinements based on user behavior proved more effective. Testing different layouts helped identify what actually worked.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3>Technical Execution</h3>
                        <p>Throughout all iterations:</p>
                        <ul>
                            <li><strong>Built in HTML/CSS/JavaScript</strong> (no CMS limitations)</li>
                            <li><strong>Responsive design</strong> across mobile and desktop</li>
                            <li><strong>Performance optimized</strong> (lazy loading, image compression)</li>
                            <li><strong>Accessible</strong> (WCAG 2.1 AA compliance, keyboard nav, screen reader support)</li>
                            <li><strong>Three page states:</strong> Open Registration → Closed → Winners Announced</li>
                        </ul>
                    </section>

                    <section id="impact">
                        <div className="content">
                            <h2>The Impact</h2>
                            <p>Over four campaign cycles (2022-2025), the page evolved from a narrative-focused experience to a conversion-focused tool. The final 2025 campaign (run with zero paid advertising) proved the design worked.</p>

                            <div className="stat-boxes">
                                <div className="stat">
                                    <div className="num">56%</div>
                                    <div className="label">engagement rate with owned channels only</div>
                                </div>
                                <div className="stat">
                                    <div className="num">~20%</div>
                                    <div className="label">organic traffic (SEO success)</div>
                                </div>
                                <div className="stat">
                                    <div className="num">6.4x</div>
                                    <div className="label">increase in applications in 2024</div>
                                </div>
                                <div className="stat">
                                    <div className="num">44%</div>
                                    <div className="label">bounce rate (appropriate for audience intent)</div>
                                </div>
                            </div>

                            <p><strong>User Outcome:</strong> Users spend less time <em>reading</em> and more time <em>applying</em>. Exactly what the page should do.</p>

                            <div className="btn-group">
                                <Link
                                    href="https://www.hydroone.com/about/energizing-life/"
                                    className="btn solid white"
                                    title="View live page"
                                >
                                    View the Live Page
                                </Link>
                            </div>
                        </div>
                    </section>

                </div>
            </article>
        </Layout>
    );
}
