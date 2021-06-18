# resume-builder - Simple resume building solution

## Background

Updating one's resume is such a pain in the ass. Long ago, I figured
out it would be best to have a YAML file with the important bits with a
separate template. Separation of concerns and everything...

Anyhoozle... this mini-project is mainly a way to investigate better
ways to create PDFs from the command line. Every company out there
likes documents, and thus creating documents is frequent feature
request. If you're the type who's wondering why PDF instead of
some other evil format bequested from Satan himself (i.e. Microsoft Word),
here's some fun YouTube videos:

* [PDF, What is it FOR? - Computerphile](https://www.youtube.com/watch?v=48tFB_sjHgY)
* [PDF Workflow - Computerphile](https://www.youtube.com/watch?v=-cFOsAzigyQ)
* [Typesetters in the '80s - Computerphile](https://www.youtube.com/watch?v=XvwNKpDUkiE)

## Usage

Simply run `grunt` to build the latest resume PDF.

## Development

How I do it:

* Run `grunt` once to get everything primed
* `grunt watch` in one console
* `grunt server:debug` in anoher
* Chrome-based browser looking at http://localhost:8080 w/ dev tools open

## Helpful Resources

* [Generating PDF from HTML and Node.js and Puppeteer](https://blog.risingstack.com/pdf-from-html-node-js-puppeteer/)
