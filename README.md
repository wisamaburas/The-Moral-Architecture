# The Moral Architecture
 
Static front end for a personal blog on AI ethics and governance. Public version of a larger private project.
 
## Structure
 
* `index.html` - landing page
* `archive.html` - post archive with filter for opinion/research
* `about.html`, `privacy.html` - static pages
* `posts/` - individual post pages
* `posts.js` - post metadata and rendering
* `styles.css` - stylesheet
## Adding a post
 
Duplicate a file in `posts/`, edit it, then add an entry to the top of the `POSTS` array in `posts.js`.
 
## How to run
 
```
python3 -m http.server 8000
```
 
Then open `http://localhost:8000`.
 
## Language
 
HTML, CSS, JavaScript.