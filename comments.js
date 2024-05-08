//create web server
const http = require('http');
const fs = require('fs');
const comments = require('./comments');
const port = 3000;
const hostname = 'localhost';

//create server
http.createServer((req, res) => {
    //set headers
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    //read html file
    fs.readFile('index.html', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        //write html file
        res.write(data);

        //read comments
        comments.getComments((err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            //write comments
            res.write('<h1>Comments</h1>');
            data.forEach((comment) => {
                res.write(`<p>${comment}</p>`);
            });

            //write form
            res.write('<form action="comment" method="post"><input type="text" name="comment" placeholder="Enter comment"><input type="submit" value="Submit"></form>');

            //end response
            res.end();
        });
    });
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// Path: comments.js
//create web server
const http = require('http');
const fs = require('fs');
const comments = require('./comments');
const port = 3000;
const hostname = 'localhost';

//create server
http.createServer((req, res) => {
    //set headers
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    //read html file
    fs.readFile('index.html', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        //write html file
        res.write(data);

        //read comments
        comments.getComments((err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            //write comments
            res.write('<h1>Comments</h1>');
            data.forEach((comment) => {
                res.write(`<p>${comment}</p>`);
            });

            //write form
            res.write('<form action="comment" method="post"><input type="text" name="comment" placeholder="Enter comment"><input type
