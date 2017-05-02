const {mkdir, find, cp} = require("shelljs");
const path = require("path");
const {existsSync} = require("fs");

find("-Rf", "./src/**/*.scss*").forEach(file => {
    const destFile = path.resolve(__dirname, file.replace("src", "../"));
    const styleFolder = destFile.replace(/[\/\\]([a-z-_]+).scss/, "");
    if (!existsSync(styleFolder)) {
        mkdir(styleFolder);
    }   
    cp(file, destFile);
});