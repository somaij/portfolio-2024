import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Custom404() {
    return (
        <Layout>
            <div className="page-404">
                <div className="container">
                    <h1>404</h1>
                    <p>
                        Well...that's embarassing. Sorry you couldn't find what
                        you were looking for.
                    </p>
                    <Link
                        href="/posts/responsive-on-scroll-animations"
                        className="arrow-btn white"
                    >
                        Back to homepage
                    </Link>
                    <h2>Maybe these blogs will pique your interest?</h2>
                    <ul>
                        <li>
                            <Link href="/posts/responsive-on-scroll-animations">
                                Responsive On-Scroll Animations
                            </Link>
                            : A tutorial on how to use the intersection observer
                            and some basic CSS to create on scroll animations.
                        </li>
                        <li>
                            <Link href="/posts/how-to-do-floating-labels-for-cf7">
                                Contact Form 7 Floating Labels
                            </Link>
                            : How to make floating labels in the Contact Form 7
                            plugin for Wordpress.
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
}
