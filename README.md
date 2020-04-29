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

Start up the server with `npm start` in one shell, and then
run `npm run-script generate` in another. Eventually I'd like to
auto-start the server in the generate command, but it's very low priority
for now.

## Helpful Resources

* [Generating PDF from HTML and Node.js and Puppeteer](https://blog.risingstack.com/pdf-from-html-node-js-puppeteer/)
