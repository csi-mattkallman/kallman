#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
    title: pkgJSON.name, 
    tagLine: pkgJSON.description, 
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true
});

console.log(`Matt Kallman

Matt is a Software Business Professional based in Grand Rapids, Michigan, US.  
He is also a member of the local County elected board.  See accesskent.com.

`);
