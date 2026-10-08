# [Her Name]'s garden site

A plain HTML/CSS/JS site. No build step, no dependencies, nothing to install.

## Pages

| File | What it is |
| --- | --- |
| `index.html` | Home: garden, us, Tahiti, about |
| `garden.html` | Garden photos with a season filter |
| `collages.html` | Collage wall |
| `us.html` | Family stories and home |
| `tahiti.html` | Stories from Tahiti and "Words from home" |
| `post.html` | Template for a single blog post |
| `404.html` | Page not found |
| `style.css` | All styling. Colors are at the top. |
| `site.js` | Language toggle and season filter |

## Making it hers

1. **Her name.** Search all files for `[Her Name]` and replace it. Also replace `you@example.com` in `index.html`.
2. **Photos.** Drop images into the `images/` folder using the file names listed in `images/README.md`. Each photo slot shows a colored placeholder until its file exists, so you can add photos one at a time. Use JPG or WebP, about 1600 px on the long edge.
3. **Writing.** Anything in `[square brackets]` is a placeholder. Replace it with her words.
4. **New post.** Duplicate `post.html` (for example `spring-tomatoes.html`), edit the text, then link to it from the story lists on `index.html`, `garden.html`, `us.html` or `tahiti.html`.
5. **Accent color.** Change `--accent` at the top of `style.css`.
6. **Tahitian words.** The menu labels in the language toggle (`data-tah="..."` in `index.html`) should be confirmed by someone who speaks Tahitian before launch.

## Preview on your computer

Open `index.html` in a browser. Or, from this folder: `python3 -m http.server 8000` and visit http://localhost:8000.

## Deploy on Netlify

**Drag and drop:** go to https://app.netlify.com/drop and drop this whole folder.

**From Git:** push this folder to a GitHub repo, choose "Add new site → Import an existing project", leave the build command empty and set the publish directory to `.` (already set in `netlify.toml`).

## Deploy on Vercel

**From Git:** push to GitHub, choose "Add New → Project", import the repo. Framework preset: **Other**. Leave build command and output directory empty.

**From the command line:** `npm i -g vercel`, then run `vercel` in this folder (and `vercel --prod` to publish).

`vercel.json` turns on clean URLs, so `/garden.html` also works as `/garden`.

## Custom domain

Both services let you add a domain in the project settings and give you the DNS records to set at the registrar.
