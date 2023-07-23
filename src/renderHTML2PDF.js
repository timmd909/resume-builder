const path = require('path');
const fs = require('fs')
const execSync = require("child_process").execSync;

function renderHTML2PDF(html) {
  const HTML_FILENAME = path.join(process.cwd(), 'build', 'resume.html');
  const PDF_FILENAME = path.join(process.cwd(), 'build', 'resume.pdf');

  fs.writeFileSync(HTML_FILENAME, html);
  const renderPDFcommand = `npx pagedjs-cli "${HTML_FILENAME}" -o "${PDF_FILENAME}"`;
  console.log(`Executing: ${renderPDFcommand}`);
  execSync(renderPDFcommand);
}

module.exports = renderHTML2PDF;
