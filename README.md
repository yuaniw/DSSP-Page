# DSSP Project Page

Project page for **DSSP: Diffusion State Space Policy with Full-History Encoding**.

- arXiv: https://arxiv.org/abs/2605.14598
- Code: https://github.com/yuaniw/DSSP/
- Run locally: execute the following command from the repository root, then visit http://127.0.0.1:8000.

    python3 -m http.server 8000 --bind 127.0.0.1

## Editing

- Content, authors, result tables and BibTeX: index.html
- Responsive page styling: static/css/index.css
- Result tabs, copy citation and scroll control: static/js/index.js
- Served images, manuscript and browser-compatible video: static/images/, static/pdfs/dssp.pdf and static/videos/dssp-demo.mp4
- Original, unmodified research assets: figures/ and paper/

## Content and media notes

- Title, author order, abstract and arXiv citation metadata were verified against arXiv:2605.14598. Affiliations and experimental numbers follow the provided local manuscript.
- The publication venue is NeurIPS 2026, as confirmed by the user. The header, academic citation metadata, structured data and BibTeX identify the conference. The arXiv links remain available; no unprovided proceedings volume, page range or proceedings DOI is invented.
- The official implementation at https://github.com/yuaniw/DSSP/ is featured in the hero, navigation and an open-source section with installation and training/evaluation documentation links. Verified GitHub Pages homepages are linked for Jianshu Hu, Yunpeng Jiang and Xiao Li; Yutong Ban links to the user-supplied SIRIUS Lab profile; see AUTHOR_LINKS.md for sources and the remaining authors.
- The original teaser's DP bar reports 34.5, while manuscript Table 1 reports DP 28.04 and RDT 34.50. The served teaser is cropped to the qualitative comparison; numerical results are separately transcribed from the manuscript. The original PDF is preserved.
- The method figure's transparent background is composited onto white for reliable rendering.
- The 81.66-second original HEVC demo in figures/demo.mp4 is preserved. The served H.264/AAC version removes the first 3.5 seconds and runs for 78.16 seconds, with fast-start metadata (14,294,380 bytes). Video is loaded only when requested.
- All figures link to larger versions. Result tables scroll horizontally on small screens; tab controls support arrow keys, Home and End.
- Confirm the final deployment URL before adding canonical and absolute social-preview metadata. Do not assume that a GitHub remote is the published site URL.
- This update does not publish, push commits, or change GitHub Pages settings.

The template credit and CC BY-SA 4.0 website-template attribution remain in the footer. The paper's license is separate.

---

# Academic Project Page Template

> **Update (September 2025)**: This template has been modernized with better design, SEO, and mobile support. For the original version, see the [original-version branch](https://github.com/eliahuhorwitz/Academic-project-page-template/tree/original-version).

A clean, responsive template for academic project pages.


Example project pages built using this template are:
- https://horwitz.ai/probex
- https://vision.huji.ac.il/probegen
- https://horwitz.ai/mother
- https://horwitz.ai/spectral_detuning
- https://vision.huji.ac.il/ladeda
- https://vision.huji.ac.il/dsire
- https://horwitz.ai/podd
- https://dreamix-video-editing.github.io
- https://horwitz.ai/conffusion
- https://horwitz.ai/3d_ads/
- https://vision.huji.ac.il/ssrl_ad
- https://vision.huji.ac.il/deepsim



## Start using the template
To start using the template click on `Use this Template`.

The template uses html for controlling the content and css for controlling the style. 
To edit the websites contents edit the `index.html` file. It contains different HTML "building blocks", use whichever ones you need and comment out the rest.  

**IMPORTANT!** Make sure to replace the `favicon.ico` under `static/images/` with one of your own, otherwise your favicon is going to be a dreambooth image of me.

## What's New

- Modern, clean design with better mobile support
- Improved SEO with proper meta tags and structured data
- Performance improvements (lazy loading, optimized assets)
- More Works dropdown
- Copy button for BibTeX citations
- Better accessibility

## Components

- Teaser video
- Image carousel
- YouTube video embedding
- Video carousel
- PDF poster viewer
- BibTeX citation

## Customization

The HTML file has TODO comments showing what to replace:

- Paper title, authors, institution, conference
- Links (arXiv, GitHub, etc.)
- Abstract and descriptions  
- Videos, images, and PDFs
- Related works in the dropdown
- Meta tags for SEO and social sharing

### Meta Tags
The template includes meta tags for better search engine visibility and social media sharing. These appear in the `<head>` section and help with:
- Google Scholar indexing
- Social media previews (Twitter, Facebook, LinkedIn)
- Search engine optimization

Create a 1200x630px social preview image at `static/images/social_preview.png`.

## Tips

- Compress images with [TinyPNG](https://tinypng.com)
- Use YouTube for large videos (>10MB)  
- Replace the favicon in `static/images/`
- Works with GitHub Pages

## Acknowledgments
Parts of this project page were adopted from the [Nerfies](https://nerfies.github.io/) page.

## Website License
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
