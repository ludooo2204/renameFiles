const path = require("path");
const fs = require("fs");
const { deepStrictEqual } = require("assert");
//joining path of directory
const directoryPath = "D:\\";
console.log(directoryPath);
fs.readdir(directoryPath, (err, files) => {
    if (err) return console.log("Unable to scan directory: " + err);

    console.log(files.length);
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        if (file.includes('_256k')) {
            console.log("_____________________");
            console.log("ancien nom : " + file)
            const newFileName = file.replace("_256k", "")
            console.log("nouveau nom : " + newFileName);
            console.log(directoryPath + file)
            console.log(directoryPath + newFileName)
            fs.rename(directoryPath + file, directoryPath + newFileName, (e) => { console.log("c'est bon", e) })
        }

    });
})