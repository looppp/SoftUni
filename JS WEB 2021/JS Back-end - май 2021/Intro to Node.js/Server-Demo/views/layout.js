module.exports = (html, title = 'Welcome') => `
<html>
<head>
    <title>My page - ${title}</title>
</head>
    <body>
        ${html}
    </body>
</html>`;   