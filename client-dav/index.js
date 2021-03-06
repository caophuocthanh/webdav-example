const { createClient } = require("webdav");

const fs = require('fs');

const client = createClient(
    "http://localhost:1900"
);

// Get directory contents

// client.getQuota().then( data => {
//     console.log("getQuota:", data);
// }).catch( error => {
//     console.log(error);
// })

// client.createDirectory("/AAA").then( data => {
//     console.log("createDirectory:", data);
// }).catch( error => {
//     console.log(error);
// })

// client.getDirectoryContents("/").then( data => {
//     console.log("getDirectoryContents:", data);
// }).catch( error => {
//     console.log(error);
// })

//client.deleteFile("/local/file.jpg")

console.log("readFile");

fs.readFile('index.js', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log("put file", data.length);

    client.putFileContents("/local/1index.js", data, { onUploadProgress: progress => {
        console.log(`Uploaded ${progress.loaded} bytes of ${progress.total}`);
    } }).then ( success => {
        console.log("success",success)
    }).catch (err => {
        console.log("err",err)
    });

  });



