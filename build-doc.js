const fs = require('fs');
const marked = require('marked');

const md = fs.readFileSync('dist/doc.md', 'utf8');

const html = marked(md);

fs.writeFileSync('dist/documentation/index.html',
  `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ALL:DOM documentation</title>
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="../prism.css">
    <link rel="stylesheet" href="https://rsms.me/inter/inter-ui.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata">
  </head>
  <body>
    <div id="doc">
      ${html.split('\n<').join('\n      <')}
    </div>
    <script src="main.js"></script>
    <script src="../prism.js"></script>
  </body>
</html>
`);

console.log('Built documentation');
