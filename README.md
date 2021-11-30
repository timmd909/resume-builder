# resume-builder - Simple resume building solution

## Background

Updating one's resume is such a pain in the ass. Long ago, I figured
out it would be best to have a YAML file with the important bits with a
separate template. Separation of concerns and everything...

Anyhoozle... this mini-project is mainly a way to investigate better
ways to create PDFs from the command line. Every company out there
likes documents, and thus creating documents is a frequent feature
request. If you're the type who's wondering why PDF instead of some
other evil format bequested from Satan himself (i.e. Microsoft Word),
here's some fun YouTube videos:

* [PDF, What is it FOR? - Computerphile](https://www.youtube.com/watch?v=48tFB_sjHgY)
* [PDF Workflow - Computerphile](https://www.youtube.com/watch?v=-cFOsAzigyQ)
* [Typesetters in the '80s - Computerphile](https://www.youtube.com/watch?v=XvwNKpDUkiE)

## Usage

Simply run `grunt` to build the latest resume PDF.

## Development

How I do it:

* `grunt watch`
* Load `build/resume.html` in your favorite browser
* Sort it out

## Helpful Resources

* [Paged.js](https://www.pagedjs.org/) - The newest way of rendering PDFs.
  I'm especially really happy with how they do
  [content in margin boxes](https://www.pagedjs.org/documentation/07-generated-content-in-margin-boxes/).
  No other HTML->PDF library that I've found has worked as well and been
  as flexible as Paged.js.
* [Generating PDF from HTML and Node.js and Puppeteer](https://blog.risingstack.com/pdf-from-html-node-js-puppeteer/) - How the resume used to be generated
