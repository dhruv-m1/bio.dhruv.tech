# Personal Website

Working repository of the latest version (3.x.x) of my Personal Website.

🌐 Currently live at: [dhruv.tech](https://dhruv.tech/).

📝 Report issues [here](https://github.com/dhruv-tech/dhruv.tech/issues).

⌚ Older versions: [v2.x.x](https://github.com/dhruv-tech/dhruv.tech_v2), [v1.x.x](https://github.com/dhruv-tech/dhruv.tech_v1)

<img alt="screenshot of the website" src="https://github.com/dhruv-tech/dhruv.tech/assets/26849655/526a34d5-1013-47ba-bb6d-51e3ba617753" width="750">

---

## Tech Stack

The website currently uses the following technologies:

* Astro (frontend framework)
* Tailwind (for styling)
* Lottie (for animations)
* Partytown (for reducing load on the main thread)
* Svelte (currently for lazy loading of animations through dynamic islands; to be used to interactive features in the future)

Future iterations are likely to also use:

* Cloudflare Workers/Wrangler (for backend functions)
* Cloudflare KV (for storing structured data)

## Benchmarking

The project's primary audience are (likely) users of desktop browsers, thus it designed as desktop-first and optimised for desktop browsers.

It is benchmarked to score 90+ for Desktop performance, Accessibility, Best practices, & SEO on [Google Core Vitals (Lighthouse)](https://pagespeed.web.dev/analysis/https-dhruv-tech/3zufd6w0kg?form_factor=desktop).

While not optimised for mobile, the website is made to be responsive and functional on mobile devices (>= iPhone SE 2nd Gen, minimum screen width of 375px).

## Compatibility

The website is compatible the latest versions of:

* Chromium-based browsers Desktop/Mobile (ver. 114+) (Tested on Microsoft Edge & Google Chrome)
* Mozilla Firefox Desktop/Mobile (ver. 115+)

