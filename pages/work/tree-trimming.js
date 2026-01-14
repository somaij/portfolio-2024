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
                <title>Tree Trimming Service Page - Hydro One | Jason Somai</title>
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
                            
                            <h1>Tree Trimming Eligibility Tool</h1>
                            <p>Redesigning a confusing Hydro One form that wasted resources and frustrated customers.</p>
                            <p className="sub no-margin">Role</p>
                            <p>Product Designer & Developer (Primary)</p>
                            <p className="sub">Impact</p>
                            <div className="stat-boxes">
                                <div className="stat">
                                    <div className="num">40%</div>
                                    <div className="label">reduction in rage clicks</div>
                                </div>
                                <div className="stat">
                                    <div className="num">66%</div>
                                    <div className="label">fewer immediate exits</div>
                                </div>
                                <div className="stat">
                                    <div className="num">42%</div>
                                    <div className="label">reduction in dead clicks</div>
                                </div>
                            </div>
                            <p className="sub">Timeline</p>
                            <p>3 months (design, development, testing, launch)</p>
                            <p className="sub">Tools</p>
                            <p>Figma, HTML/CSS/JavaScript, Microsoft Clarity (behavioral analytics), internal user testing</p>
                            
                            <Link
                                href="https://www.hydroone.com/request-a-service/tree-trimming"
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
                                            original="/images/tree-trimming-1.jpg"
                                            width="1605"
                                            height="4096"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/tree-trimming-1.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        <strong>Original</strong> Tree Trimming Service Page
                                    </span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper tag tag-after">
                                        <Item
                                            original="/images/tree-trimming-2.jpg"
                                            width="1605"
                                            height="4637"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/tree-trimming-2.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span><strong>New</strong> version of Tree Trimming Page</span>
                                </div>
                            </Gallery>
                        </div>
                    </div>
                </div>
                <div className="background-image">
                    <Image
                        src="/images/pexels-karola-g-4206118.jpg"
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
                                <h2>The Problem</h2>
                        <p>Hydro One's tree trimming request form was creating operational chaos. Users couldn't figure out if they qualified for service.</p>
                        
                                <div className="text-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                                    <strong>Business Impact</strong>
                                </div>
                                <ul>
                                    <li>High volume of ineligible requests wasting forestry resources</li>
                                    <li>Unnecessary site visits and administrative overhead</li>
                                    <li>Customer service team fielding clarification calls</li>
                                    </ul>

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
                                    <li>Confusing diagrams that didn't clearly explain responsibility</li>
                                    <li>Unclear language about eligibility criteria</li>
                                    <li>Process felt like a guessing game</li>
                                </ul>
                                <div className="text-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 13L19 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                                    <strong>The Challenge</strong></div>
                                <p>How might we help customers accurately self-assess eligibility before submitting requests, reducing false positives while maintaining accessibility for those who genuinely need service?</p>
                            </div>
                            <div className="thumbnail-gallery-caption one-col white-background">
                                <Gallery options={galOptions}>
                                    <div className="gallery-image-wrapper">
                                        <div className="image-wrapper tall object-top tag tag-before">
                                            <Item
                                                original="/images/tree-trimming-3.jpg"
                                                width="792"
                                                height="1250"
                                                caption="test"
                                                fill
                                            >
                                                {({ ref, open }) => (
                                                    <Image
                                                        fill
                                                        ref={ref}
                                                        onClick={open}
                                                        src="/images/tree-trimming-3.jpg"
                                                    />
                                                )}
                                            </Item>
                                        </div>
                                        <span>
                                            The original form: complex diagrams, confusing questions, high drop-off. There were two questions in the eligibility tool, each with multiple scenarios to choose from.
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
                                                <h2>The Design Process</h2>
                                            </div>
                                        </div>
                    </section>
                    <section>
                        <h3>Research & Competitive Analysis</h3>
<p>I analyzed how other utilities handled tree trimming eligibility, looking for patterns in how they helped users self-assess.</p>

<div className="two-col-image-text">
    <div className="text-well text">
        <p><strong>Key finding</strong>: <a href="https://www.duke-energy.com/community/vegetation-management/tree-pruning-requests">Duke Energy</a> used a numbered diagram with explanations below—the most intuitive approach we found. Users could match their situation to a specific numbered scenario.</p>
    </div>
    <div className="text-well text">
        <p><strong>Stakeholder presentation</strong>: Shared competitive analysis findings with the forestry department. They agreed this numbered diagram approach was clearest for customers.</p>
    </div>
</div>
                          </section>
                        <section className="text-well-lg">
  <h3>Iteration 1: Initial Redesign</h3>
<p><strong>Approach</strong>: Simplify to one core question, move the screening process higher on the page (was buried halfway down), and use numbered diagrams with color-coded eligibility indicators. Also add in a timeline to show what happens after submitting the request.</p>
 <h4>Iteration 1: Lo-fi Design</h4>
 <div className="thumbnail-gallery-caption two-col white-background">
                            <Gallery options={galOptions}>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/tree-trimming-7.jpg"
                                            width="1001"
                                            height="925"
                                            caption="test"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/tree-trimming-7.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        A two column layout was used to make emergency and non-emergency options very clear, before stepping into the eligibility tool by clicking "<strong>Check tree trimming eligibility</strong>".
                                    </span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/tree-trimming-8.jpg"
                                            width="1020"
                                            height="916"
                                            caption="test"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/tree-trimming-8.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        We added a timeline at the bottom to set expectations for what happens after submitting a request.
                                    </span>
                                </div>
                            </Gallery>
                        </div>
<h4>Iteration 1: Eligibility Form Flow</h4>
  <p>I simplified the form and added color-coded visual feedback to make eligibility clearer.</p>  
  <strong>Design changes made:</strong>
  <ul>
    <li>Simplified from multiple questions to one focused eligibility check</li>
    <li>Numbered power line zones on a diagram (inspired by Duke Energy)</li>
    <li>Green checkmarks for eligible scenarios, red X marks for ineligible</li>
    <li>Moved eligibility tool to top of page for better visibility</li>
  </ul>
  <p><strong>Hypothesis</strong>: Color coding would help users quickly identify their eligibility.</p>
<div className="thumbnail-gallery-caption three-col white-background">
                            <Gallery options={galOptions}>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/tree-trimming-4.jpg"
                                            width="1001"
                                            height="925"
                                            caption="test"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/tree-trimming-4.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        The initial redesign focused on simplifying the diagram and adding color-coded buttons to guide user decisions.
                                    </span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/tree-trimming-5.jpg"
                                            width="1020"
                                            height="916"
                                            caption="test"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/tree-trimming-5.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        When hovering over the diagram, a see explanation box would appear to give more context to each numbered scenario.
                                    </span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/tree-trimming-6.jpg"
                                            width="1008"
                                            height="919"
                                            caption="test"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/tree-trimming-6.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        When the diagram was clicked or tapped, the accordion below would expand to show detailed information about each scenario.
                                    </span>
                                </div>
                            </Gallery>
                        </div>
                        <h4 className="text-center">How It Works</h4><br />
                        <div className="flow-diagram">
    <div className="flow-step">
        <p>User sees diagram with red or green markers</p>
    </div>
    <div className="flow-step">
        <p>Opens accordion to learn about markers</p>
    </div>
    <div className="flow-step">
        <p>User reads details about their scenario</p>
    </div>
    <div className="flow-step">
        <p>User confirms "This is my situation"</p>
    </div>
    <div className="flow-step">
        <p>User clicks the green or red button based on eligibility</p>
    </div>

                        </div>
</section>
</div>
<section class="black-background">
    <div className="container">
  <h3>Testing Iteration 1 Revealed a Problem</h3>
  <p><strong>Method</strong>: Moderated usability testing with 5 Hydro One employees (not from forestry department) over two weeks—week 1 tested the initial design, week 2 focused on refinements.</p>
  <strong>Test Scenario Examples:</strong>
<ol>
    <li>“You notice a tree overgrown near a power line, but it’s not sparking or burning. Use this page to find out if Hydro One will handle this request.”</li>
    <li>“Look at the diagram and decide if Hydro One is responsible for trimming a tree near the line labeled #3.”</li>
    <li>“Assume the tree affects a primary power line (#1). Complete the steps to submit a trimming request.”</li>
</ol>
        <h4>What we discovered:</h4>
        <blockquote><em>"I don't want to click the red one—it looks like an error"</em>
<br /><strong>— User avoiding the correct answer because of color coding</strong></blockquote>
        <p>
        <div className="text-icon">
            <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="#FF5959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="#FF5959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
<span>
    
                <strong>The real problem</strong>: Color was creating bias. Users avoided "red" options even when those options matched their actual situation. They were trying to pick the answer that would get service, not the answer that was true.
</span>
        </div>
        </p>
        <p><strong>Additional issues:</strong></p>
        <p>
<div className="text-icon"><div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="#FF5959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="#FF5959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
</div>Users initially missed the answer buttons—they didn't look like standard buttons</div>

            <div className="text-icon"><div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="#FF5959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="#FF5959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>Users tried to click numbered circles on the diagram (they weren't interactive)</div>
            <div className="text-icon"><div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="#FF5959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="#FF5959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>Required expanding accordions to understand each scenario</div>
            <div className="text-icon"><div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="#FF5959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="#FF5959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>Decision-making was backwards: "Which one gets them to come?" instead of "Which one matches my situation?"</div>
            </p>
</div>
</section>
<div className="container">
                    <section className="text-well-lg">
                        
<h3>Iteration 2: Interactive, Neutral Design</h3>

<div className="two-col-image-text">
    <div className="text">
        <p><strong>1. Remove judgment, enable exploration</strong><br/>Instead of showing eligibility upfront with color, let users explore scenarios neutrally.</p>
    </div>
    <div className="text">
        <p><strong>2. Flip the interaction model</strong><br/>Instead of asking users to answer questions, let them explore scenarios neutrally to find theirs.</p>
    </div>
</div>

<div className="thumbnail-gallery-caption two-col white-background">
                            <Gallery options={galOptions}>
                                                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper tag tag-before">
                                        <Item
                                            original="/images/tree-trimming-4.jpg"
                                            width="1001"
                                            height="925"
                                            caption="test"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/tree-trimming-4.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        The initial redesign focused on simplifying the diagram and adding color-coded buttons to guide user decisions.
                                    </span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper tag tag-after">
                                        <Item
                                            original="/images/tree-trimming-9.jpg"
                                            width="1001"
                                            height="925"
                                            caption="test"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/tree-trimming-9.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        Instead of color coding eligibility, the diagram was neutral—users could explore scenarios without bias.
                                    </span>
                                </div>
                            </Gallery>
                        </div>
<br />
<div className="three-col-image-text">
    <div className="text">
        <h4>Key Design Changes:</h4>
        <ul>
            <li>
                <p>
                <strong>Made diagrams interactive</strong><br />
                Clickable zones reveal details on demand</p>
            </li>
            <li>
                <p>
                <strong>Removed color bias</strong><br />
                Neutral presentation until user commits to their scenario</p>
            </li>
            <li>
                <p>
                <strong>Honest self-assessment</strong><br />
                Users find their actual situation, not the "right answer"</p>
            </li>
        </ul>
    </div>
    <div className="thumbnail-gallery-caption two-col white-background">
                            <Gallery options={galOptions}>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/tree-trimming-10.jpg"
                                            width="1020"
                                            height="916"
                                            caption="test"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/tree-trimming-10.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        Clicking on a number opens a modal with clear explanations. No color coding to bias decisions until after users clicked.
                                    </span>
                                </div>
                                <div className="gallery-image-wrapper">
                                    <div className="image-wrapper">
                                        <Item
                                            original="/images/tree-trimming-11.jpg"
                                            width="1008"
                                            height="919"
                                            caption="test"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    fill
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/images/tree-trimming-11.jpg"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <span>
                                        An example of the end card for an ineligible scenario. Clear next steps are provided.
                                    </span>
                                </div>
                            </Gallery>
                        </div>
</div>
<br />
<h4 className="text-center">How It Works</h4><br />
                        <div className="flow-diagram">
    <div className="flow-step">
        <p>User sees neutral diagram with numbered zones</p>
    </div>
    <div className="flow-step">
        <p>Clicks zone that matches their situation</p>
    </div>
    <div className="flow-step">
        <p>Modal opens with clear explanation</p>
    </div>
    <div className="flow-step">
        <p>User confirms "This is my situation"</p>
    </div>
    <div className="flow-step">
        <p>Next steps provided based on outcomey</p>
    </div>

                        </div>
                        <h3>Iteration 2: User Testing</h3>
                        <p>Tested the interactive prototype with a second group of 3 participants.</p>
                        <p><strong>Results:</strong></p>
                                <p>
<div className="text-icon"><div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="#00B72E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
</div>100% task completion rate</div>
<div className="text-icon"><div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="#00B72E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
</div>Users successfully identified their scenario</div>
<div className="text-icon"><div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="#00B72E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
</div>No confusion about eligibility</div>
<div className="text-icon"><div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="#00B72E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
</div>Positive feedback: "Oh, I can click these! That's helpful."</div>
        
            </p>
                        <p><strong>Conclusion:</strong> Users explored scenarios honestly instead of trying to game the system.</p>


                    </section>
                    <section>

                        <h3>Design + Development</h3>
                        <p>We designed and built this solution end-to-end.</p>
                        <p>This allowed rapid iteration. I was able to test interactions in the browser same-day, make changes based on feedback immediately, and ensure implementation matched design intent.</p>
                        <p>Built with: JavaScript, HTML5, CSS3.</p>
                        <p>Accessibility: WCAG 2.1 AA (keyboard nav, ARIA labels, screen reader support)</p>
                    </section>
                    <section id="impact">
                        <div className="content">
                            <h2>The Impact</h2>
                            <p>Microsoft Clarity data comparing November (before) vs. December (after redesign):</p>
                                                        <div className="stat-boxes">
                                    <div className="stat">
                                        <div className="num">37%</div>
                                        <div className="label">faster completion. Average time on page: 3.0 min → 1.9 min</div>
                                    </div>
                                    <div className="stat">
                                        <div className="num">40%</div>
                                        <div className="label">reduction in rage clicks. Rage click rate: 0.65% → 0.39% of sessions</div>
                                    </div>
                                    <div className="stat">
                                        <div className="num">66%</div>
                                        <div className="label">fewer immediate exits. Quick back rate: 36% → 12% of sessions</div>
                                    </div>
                                    <div className="stat">
                                        <div className="num">42%</div>
                                        <div className="label">reduction in dead clicks. Dead click rate: 29% → 17% of sessions</div>
                                    </div>
                                </div>
                            <p>
                                Ongoing measurement:
                            Continuing to track long-term operational impact on invalid request volumes and resource efficiency.
                            </p>
                            <div className="btn-group">
                                <Link
                                    href="https://www.hydroone.com/request-a-service/tree-trimming"
                                    className="btn solid white"
                                    title="All Work"
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
