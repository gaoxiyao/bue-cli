#! /usr/bin/env node

const program = require('commander');
program
.command("create <name>")
.description("创建vue项目")
.action((name)=>{
    console.log(name)
})

program.parse(process.argv)