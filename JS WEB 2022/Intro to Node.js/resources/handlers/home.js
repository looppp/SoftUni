const url = require('url');
const fs = require('fs');
const path = require('path');
const cats = require('../data/cats.json');



module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname === '/' && req.method === 'GET') {
        let filePath = path.normalize(
            path.join(__filename, '../../views/home/index.html')
        );

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(err, {
                    'Content-Type': 'text/plain'
                });
                res.writeHead('404 file not found');
                res.end();
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html' ? 'text/html' : 'image/ico'
            });

       

            res.write(data);
            res.end();
        });
    } else {
        return true;
    }

}