const execSync = require("child_process").execSync;
const fs = require('fs');
const YAML = require('yaml')

function resumeLoader(filename) {
  let fileContents = fs.readFileSync(filename, {encoding: 'utf8'});
  let context = YAML.parse(fileContents);

  // next, let's add the git revision, but I only care about the first
  // 12 characters. We'll trim that later
  context.head = execSync('git rev-parse HEAD', {'encoding': 'utf8'}).trim();

  // creation date also seems like a useful thing
  const now = new Date();
  context.created = now.toISOString().substr(0, 10);

  return context;
}

module.exports = resumeLoader;
