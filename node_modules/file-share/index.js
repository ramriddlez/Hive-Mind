#! /usr/bin/env node

// Set default node environment to development
var express = require('express');
var directory = require('serve-index');
var fs = require('fs');
var userArgs = require('optimist').argv;

var app = express();
var userPort = userArgs.port;
var dirUrl = userArgs.path;

if(!userPort || userPort < 1024 || userPort > 49151){
    userPort = 9000;
    console.log("Invalid port entered, will use default port 9000.");
}

if(dirUrl){
    fs.stat(dirUrl,function(err,stat){
        if(err || !stat.isDirectory()){
            console.log("Invalid directory input, will serve current directory.");
            dirUrl = __dirname;
        }

        serveDirectory();
    });
}else{
    dirUrl = __dirname;
    serveDirectory();
}

function serveDirectory(){
    app.listen(userPort, function () {
        console.log('file-share module listening at port : '+ userPort);
        app.use(directory(dirUrl));
        app.use(express.static(dirUrl));
    });
}
