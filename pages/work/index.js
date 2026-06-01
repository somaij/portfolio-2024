import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import anime from "animejs";
import { useEffect } from "react";

const projects = [
    {
        href: "work/tree-trimming",
        image: "/images/pexels-karola-g-4206118.jpg",
        title: "Tree Trimming Eligibility Tool",
        description: "Reducing User Frustration by 40%. Redesigned a confusing eligibility form into an interactive, self-service tool.",
        tag: "Hydro One",
    },
    {
        href: "work/el-fund",
        image: "/images/the-tampa-bay-estuary-program-CxL29J-aM5E-unsplash.jpg",
        title: "Energizing Life Community Fund",
        description: "56% engagement rate, 44% bounce rate. Consistent high performance over 4 years. 6.4x increase in applications.",
        tag: "Hydro One",
    },
    {
        href: "work/energizing-life-everyday-local",
        image: "/images/pexels-uvarova-323133.jpg",
        title: "Energizing Life Everyday",
        description: "Marketing campaign landing page. Increased page engagement by 10% and ASD by 5%.",
        tag: "Hydro One",
    },
    {
        href: "work/sustainability-2022",
        image: "/images/pexels-hyukman-kwon-2542429-9765771.jpg",
        title: "Sustainability",
        description: "Report download page. Pages per session up 44% and downloads increased by 34%.",
        tag: "Hydro One",
    },
    {
        href: "work/power-to-give",
        image: "/images/ptg-2022-masthead.jpg",
        title: "Power to Give",
        description: "Employee fundraising program transformed from PDF updates into a fully branded, dynamic web experience.",
        tag: "Hydro One",
    },
    {
        href: "work/tla-canadian-tire",
        image: "/images/tla-2.jpg",
        title: "TLA - Canadian Tire",
        description: "UX design and development for Canadian Tire's quarterly content offerings.",
        tag: "Canadian Tire",
    },
    {
        href: "work/guideo",
        image: "/images/toronto-streetcar-downtown.jpg",
        title: "Guideo",
        description: "Brainstation UX project. A transit app designed using human-centered design methods, user interviews, and wireframe testing.",
        tag: "Brainstation",
    },
];

export default function WorkIndex() {
    useEffect(() => {
        anime({
            targets: ".work-index-blob.blob-1 path",
            duration: 8000,
            easing: "easeInOutSine(0.25, 1)",
            loop: true,
            direction: "alternate",
            keyframes: [
                { d: "M1356.5 -43.9999C1356.5 -43.9999 1910 412.5 1407.5 618C905 823.5 1191 130.5 784 286C377 441.5 346 475.5 234.5 791.5C123 1107.5 81.0445 869.267 -74.4266 1053.83C-229.898 1238.4 -31.9287 -44 -31.9287 -44L1356.5 -43.9999Z" },
            ],
        });
        anime({
            targets: ".work-index-blob.blob-2 path",
            duration: 8000,
            easing: "easeInOutSine(0.25, 1)",
            delay: 300,
            loop: true,
            direction: "alternate",
            keyframes: [
                { d: "M1546.66 -43.9998C1546.66 -43.9998 1932.84 424.867 1562.5 749C1192.16 1073.13 1128 851.5 928.5 890C729 928.5 672.652 455.051 439.5 821.5C206.348 1187.95 118.402 1496.14 -3.4999 1248.5C-125.402 1000.86 -19.5165 -44 -19.5165 -44L1546.66 -43.9998Z" },
            ],
        });
        anime({
            targets: ".work-index-blob.blob-3 path",
            duration: 8000,
            easing: "easeInOutSine(0.25, 1)",
            delay: 400,
            loop: true,
            direction: "alternate",
            keyframes: [
                { d: "M1618.7 -44C1618.7 -44 1834.5 -55.5 1834.5 759C1834.5 1573.5 1166 807.5 905.418 1305.12C644.836 1802.73 702.11 1228.5 549.5 1443.5C396.89 1658.5 202 1887 65 1641C-71.9999 1395 -14.3571 -44.0002 -14.3571 -44.0002L1618.7 -44Z" },
            ],
        });
    }, []);

    return (
        <Layout>
            <Head>
                <title>Work | Jason Somai</title>
            </Head>
            <div id="work-index-page">
                <div id="work-index-header">
                    <div className="background-wrapper">
                        <div id="header-background">
                            <svg className="mast-blob-svg work-index-blob blob-1" viewBox="0 0 1790 1737" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1374.04 -43.9998C1374.04 -43.9998 1776.7 453.453 1374.04 538.277C971.371 623.1 1078.68 752.076 793.943 794.163C509.209 836.249 567.643 615.916 336.385 926.015C105.126 1236.11 81.0445 869.267 -74.4266 1053.83C-229.898 1238.4 -31.9287 -44 -31.9287 -44L1374.04 -43.9998Z" fill="#000" fillOpacity="0.15" />
                            </svg>
                            <svg className="mast-blob-svg work-index-blob blob-2" viewBox="0 0 1790 1737" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1546.66 -43.9999C1546.66 -43.9999 1797.17 262.424 1546.66 666.632C1296.15 1070.84 981.733 978.926 900.466 978.926C819.198 978.926 629.442 961.287 396.29 1327.74C163.139 1694.19 55.0446 1543.48 -66.8572 1295.84C-188.759 1048.19 -19.5165 -44.0001 -19.5165 -44.0001L1546.66 -43.9999Z" fill="#000" fillOpacity="0.15" />
                            </svg>
                            <svg className="mast-blob-svg work-index-blob blob-3" viewBox="0 0 1790 1737" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1618.7 -43.9999C1618.7 -43.9999 2004.13 504.681 1618.7 838.684C1233.26 1172.69 1058.03 1029.31 905.418 1305.12C752.808 1580.92 571.815 1444.84 419.204 1659.85C266.594 1874.85 91.7704 1566.52 -63.7192 1620.22C-219.209 1673.93 -14.3571 -44.0001 -14.3571 -44.0001L1618.7 -43.9999Z" fill="#000" fillOpacity="0.15" />
                            </svg>
                        </div>
                    </div>
                    <div className="container">
                        <div className="sub">Portfolio</div>
                        <h1>Work</h1>
                        <p>Design and development projects — from interaction to implementation.</p>
                    </div>
                </div>
                <div id="work-index-body">
                    <div className="container">
                        <div id="work-index-grid">
                            {projects.map((project) => (
                                <Link key={project.href} href={project.href} className="work-index-card">
                                    <div className="work-index-card-image">
                                        <Image src={project.image} fill style={{ objectFit: "cover" }} alt={project.title} />
                                    </div>
                                    <div className="work-index-card-body">
                                        <div className="tag">{project.tag}</div>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <span className="btn outline">View Case Study</span>
                                    </div>
                                </Link>
                            ))}
                            <div className="work-index-card work-index-text-card">
                                <div className="work-index-card-body">
                                    <div className="tag">Ferraz Creative</div>
                                    <h3>Web Development</h3>
                                    <p>Websites built as Senior Developer at Ferraz Creative, working with WordPress and custom development.</p>
                                    <div className="ferraz-links">
                                        <Link href="https://workhaus.ca/" target="_blank">Workhaus</Link>
                                        <Link href="https://smgconstruction.com/" target="_blank">SMG Construction</Link>
                                        <Link href="https://dkcbahamas.com/" target="_blank">DKC Bahamas</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
