const fs = require('fs');

const http = require('http');

const url = `http://jsonplaceholder.typicode.com/posts`; 

fs.mkdir('./result', {recursive: true }, (err) => {
    if (err) {
        throw err;
    }
})

http.get(url, (res) => {
    let body = '';

    res.on('data', (chunk) => {
        body += chunk
    })

    res.on('end', () => {
        fs.writeFile('./result/posts.json', body, (err) => {
            if(err) {
                throw err;
            }
        })
    });
    console.log('file created');
});