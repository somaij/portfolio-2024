---
date: "2024-12-16"
title: Redefining My Website’s UX with Next.js
description: I moved to Next.js and made my portfolio more straightforward.
image: "/images/blog-about-blog.jpg"
cta:
    ctaBtn: Send a message
    ctaTitle: What Do You Think?
    ctaText: Let me know what you think of the redesign!
seo:
    seoTitle: Redefining My Website’s User Experience with Next.js | Jason Somai
    seoDescription: Discover how I redesigned my portfolio using Next.js and Vercel to enhance user experience, simplify workflows, and showcase projects more effectively. Explore the process and key UX improvements!
---

## Why I Made the Change

My previous site, built with [Gatsby](https://www.gatsbyjs.com/), was becoming increasingly difficult to maintain due to aging packages and a broken build process. Updating was cumbersome, and using Netlify CMS felt unnecessary since I’m the sole editor of the site. I needed more flexibility to iterate quickly and decided to prioritize simplicity over rigid structure.

### Why Next.js & Vercel?

I went with [Next.js](https://nextjs.org/) because of the ease of maintenance over Gatsby. One major issue I couldn’t get around was the SASS compiler package I was using for my previous site - it was deprecated, and I couldn’t find an easy alternative. I really like that Next.js comes with SASS built in.

I had also built my site around GraphQL before, and it wasn’t enhancing my editing experience; in fact, it was hindering it. I wasn’t able to easily change layouts or add items the way I wanted to.

Hosting with [Vercel](https://vercel.com/) sealed the deal. The simplicity and seamless deployment process made managing the site a breeze.

## User Experience Improvements

I kept my blob-based design aesthetic but refreshed it by creating new background blobs in Figma. To swap between blob shapes, I used [Anime.js](https://animejs.com/) for it's dead simple SVG morphing feature.

<figure>
    <img src="/images/blobs.png"
         alt="Photo of blobs">
    <figcaption>Photo of blobs drawn in Figma. These were each copied as SVGs and put into the <a href="/" target="_blank">homepage</a>.</figcaption>
</figure>

Rather than doing a full UI redesign, I iterated on how the information I was providing was being interpreted.

One key realization came after asking for feedback from friends. They struggled to understand my grouped project pages, which was a hit to my ego, but it was a good reminder to never assume what users will do. Instead of cramming multiple projects into one page, I now focus each portfolio page on a single project, allowing me to dive deeper into the nuances and storytelling.

<figure>
    <img src="/images/elel-old-preview.jpg"
         alt="Old style of doing projects">
    <figcaption>I was originally going to a number of preview tile sections collected on one page.</figcaption>
</figure>

<figure>
    <img src="/images/elel-new-preview.jpg"
         alt="New project pages">
    <figcaption>This is what I ended up going with - a dedicated page for each project that clearly states the issue at hand.<br><a href="/work/energizing-life-everyday-local" class="arrow-btn" target="_blank">View the final page</a></figcaption>
</figure>

I also focused on providing context for the imagery I was having users look at, rather than hoping they could associate the text around the image with it. This iterative approach made my portfolio more user-friendly and helped me better showcase my [**work**](/#home-work).

### Fun Fact

The most popular page on my old website was the [Contact Form 7 blog](/posts/how-to-do-floating-labels-for-cf7). It consistently got visits across the globe, which is chalked up to WordPress and Contact Form 7's popularity.

I plan to write more and hopefully beat that page’s performance. It’s a low bar, but a bar nonetheless.
