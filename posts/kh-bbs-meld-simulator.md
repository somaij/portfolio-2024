---
date: "2025-03-20"
title: I used AI to build a fan project that I designed
description: From data design to coding, here's how AI helped, and where it failed.
image: "/images/PXL_20250320_012847338.NIGHT.jpg"
cta:
    ctaBtn: Send a message
    ctaTitle: Have thoughts? 
    ctaText: Let me know! I’d love to hear feedback and ideas for future updates.
seo:
    seoTitle: How I Used AI to Build a Kingdom Hearts Fusion Simulator | Jason Somai
    seoDescription: I built a Kingdom Hearts Birth by Sleep Fusion Simulator using ChatGPT. From data architecture to coding, here's how AI helped, and where it failed.
---



(I promise, this one is straight from my mind. No AI-generated content!)

Using ChatGPT and Claude, I created a tool that simplifies a mechanic for a game called Kingdom Hearts: Birth by Sleep. I’ve wanted to streamline sites like the following for a long while: [finalfantasykingdom.net/bbsmelding](https://www.finalfantasykingdom.net/bbsmelding.php) (no shade, such a great resource). 

In Kingdom Hearts: Birth by Sleep, you can meld (combine) two commands with a crystal item to create a stronger command with an attached passive ability. In the game, there are strong passive abilities that players would want to get right away, such as EXP Walker (which lets you get 1 XP every step) and Second Chance (you’ll survive a combo with 1 HP). 

The website is simple, and it has two modes:

1. **Fusion simulator** - pick two commands and add a crystal. You’ll be able to see the result before trying it in the game.

2. **Find recipes** - Choose from a list of all fusion combinations to see how to meld it.

I didn’t come up with the Find Recipes mode until partway through the project, but it’s a great way to avoid trial and error.

<a href="https://khbbsmelding.com/" class="btn outline" target="_blank">See the end result</a>

## Design

I had a burst of inspiration one day and decided to design it in Figma. I really pushed myself by keeping it as close as possible to the game’s UI. There are details I never appreciated, like the harsh drop shadows on the headings, or the subtle use of inset shadows. Game UX is a whole other beast and it was great to see how different it is from web and app UX.

<figure>
    <img src="/images/kh-bbs-design.png"
         alt="Image of original Figma design">
    <figcaption>The original figma design. <br/><a href="https://www.figma.com/proto/pyXgvvSPQOq9GfIPoQbsyf/BBS-Melding-Guide?page-id=0%3A1&node-id=1-2&viewport=95%2C240%2C0.49&t=wQcJ9fMJ6mt6sm9R-1&scaling=scale-down-width&content-scaling=fixed" class="arrow-btn" target="_blank">View the prototype</a></figcaption>
</figure>


## Prompt Engineering

At first, I wasn’t planning to use it to write code, just for advice, with this prompt:

**“How can I create a website for making it easy to test out command combinations for the game kingdom hearts birth by sleep?”**

<figure>
    <img src="/images/kh-bbs-blog-1.png"
         alt="Image of ChatGPT conversation: first prompt">
    <figcaption>A very friendly and encouraging response.</figcaption>
</figure>



It gave me an overview of what I needed to think about, data structure-wise, But then it ended with this:


<figure>
    <img src="/images/kh-bbs-blog-2.png"
         alt="Image of ChatGPT conversation: initial prototype">
    <figcaption>“Would you like help setting up a basic prototype?”</figcaption>
</figure>



How could I refuse? It would be great to see some code to give me ideas.

One thing led to another… and suddenly I was prompt engineering the entire thing. The stack didn’t need to be crazy for such a basic tool. All I needed was HTML, CSS, and JavaScript. 

<figure>
    <img src="/images/kh-bbs-blog-3.png"
         alt="Image of ChatGPT conversation: Simplifying the architecture">
    <figcaption>Simplifying the architecture</figcaption>
</figure>

<figure>
    <img src="/images/kh-bbs-blog-4.png"
         alt="Image of ChatGPT conversation: error handling">
    <figcaption>Error handling</figcaption>
</figure>


Of course, I had to point out mistakes and errors. Sometimes Chat GPT would declare it found the issue when it did not, which meant I had to debug it. This project taught me the pitfalls of AI code generation and reassured me that AI needs _some_ guidance.

## Data

I went as far as I could with test data. I needed to try it out for real. However, I couldn’t trust it with the data transformation, as AI (as of 2025) hallucinates information. What I had to do was turn data into a JS array. 

I created a spreadsheet from pre-existing websites, such as the aforementioned [finalfantasykingdom.net/bbsmelding](https://www.finalfantasykingdom.net/bbsmelding.php) and [KHWiki](https://www.khwiki.com/) for the base data set. The header data was structured like this:


<table>
        <tr class="mobile">
            <td>1st Ingredient</td>
            <td>2nd Ingredient</td>
            <td>Attack Command</td>
            <td>Who</td>
            <td>Type</td>
            <td>Odds</td>
        </tr>
</table>

I then had to add on extra columns for each possible passive ability depending on what item was attached to the fusion.

<table>
<tr class="mobile">
    <td>Shimmering</td>
    <td>Fleeting</td>
    <td>Pulsing</td>
    <td>Wellspring</td>
    <td>Soothing</td>
    <td>Hungry</td>
    <td>Abounding</td>
</tr>
</table>

Usually, most websites have this data separately. I needed this to all be in one row for it to work. 

Luckily, I found this old repository that had done just that: [jachinn/bbs-commands](https://github.com/jachinn/bbs-commands). Thank you!

I then converted this to JSON, where the item results were turned into a 2D array.

```
// An example of a command in the final format.
{
    Character: ["Terra", "Ventus", "Aqua"],
    Commands: "Blitz",
    Type: "O",
    Ingredient1: "Quick Blitz",
    Ingredient2: "Slot Edge",
    Odds: "90",
    abilities: {
        shimmering: "Dark Screen",
        fleeting: "Attack Haste",
        pulsing: "Finish Boost",
        wellspring: "Air Combo Plus",
        soothing: "Item Boost",
        hungry: "Treasure Magnet",
        abounding: "Lucky Strike",
    },
}
```

To ensure that I could use accurate icons for each command, at Chat GPT's suggestion I created a separate spreadsheet/JS array and manually labelled each command with a type. This ensured I didn't have to edit the existing data.

Here's an example:
<table>
    <thead>
        <tr>
            <th>Command</th>
            <th>Type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Aerial Slam</td>
            <td>Physical</td>
        </tr>
        <tr>
            <td>Aero</td>
            <td>Magic</td>
        </tr>
        <tr>
            <td>Air Slide</td>
            <td>Movement</td>
        </tr>
    </tbody>
</table>

```
"Aerial Slam": "Physical",
"Aero": "Magic",
"Air Slide": "Movement",
```

After all of this, the page was fully functional!

## Styling

<figure>
    <video width="100%" autoplay muted loop>
  <source src="/images/kh-bbs.webm" type="video/webm">
Your browser does not support the video tag.
</video>
    <figcaption>The page in action - take a close look at the animations.</figcaption>
</figure>


I wrote all of the CSS myself. I extensively used the clip-path property to recreate the unique shapes of the game’s interface. The background elements match the game 1:1, and I had the game and the website side by side to nail the animations. 

```
/* The most complex background line keyframe animation - it loops back after a bit and fades out. */
@keyframes sq3 {
    0% { opacity: 0; left: 0; }
    25% { opacity: 1; left: 90%; }
    50% { opacity: 0; left: 50%; }
    100% { opacity: 0; left: 0; }
}
```

The active state hover light bubble uses a motion path.
```
motion-path: path('M 5 5 m -4, 0 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0');
offset-path: path('M 5 5 m -4, 0 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0');
animation: selected-circle 3000ms infinite alternate ease-in-out;
```


The icons and fonts come from this beautiful resource package in the community called [Kingdom Hearts Re:Collection](https://televo.github.io/kingdom-hearts-recollection/). 



## So, can AI do it all?

This was my first try at using AI as a coding partner. An agent to take my instructions and try my crazy ideas. But I would find it needed to be managed and reigned in. 

I found myself frustrated a bit and gave Claude a shot. Claude did help a bit with the dropdown functionality, but it lacked the memory to know what I was trying to do, so I swapped it back to GPT. 

If I didn’t have dev experience, I’m sure there would have been some roadblocks that wouldn’t have been overcome. 

<figure>
    <img src="/images/kh-bbs-blog-6.png"
         alt="An example of me bugfixing (arguing) with ChatGPT">
    <figcaption>An example of me bugfixing (arguing) with ChatGPT</figcaption>
</figure>


There were issues with the mode switcher that I had to fix myself, and it would always generate code that was incompatible with my data structure for some reason. Occasionally it would use the wrong selector.



As I also mentioned, AI struggles with structured data. It will hallucinate rows and data and will be confidently correct. 

However, it can do about **70 to 80%** of the heavy lifting (again, if you’re not using complex architecture), I managed to get this project done within **3 weeks**. It would have taken me much longer before generative artificial intelligence.

If you’re a Kingdom Hearts fan, [check it out](https://khbbsmelding.com/).

<a href="https://khbbsmelding.com/" class="arrow-btn" target="_blank">View the website</a>
