#!/usr/bin/env node
const path = require('path');
const inquirer = require('inquirer');

const basename = path.basename(process.cwd());

const questions = [
    {
        type: 'input',
        name: 'appName',
        message: 'App Name: ',
        default: basename,
    },
    {
        type: 'input',
        name: 'version',
        message: 'Version: ',
        default: '1.0.0',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description: '
    },
    {
        type: 'checkbox',
        name: 'loaders',
        message: 'Loaders: ',
        choices: ['sass', 'less'],
        default: ['sass']
    },
    {
        type: 'input',
        name: 'extractPath',
        message: 'ExtractTextPlugin path: '
    },
    {
        type: 'checkbox',
        name: 'options',
        message: 'Options: ',
        choices: [
            {name: 'Use rctui', value: 'rctui'},
            {name: 'Use css module', value: 'cssModule'},
            {name: 'Use eslint', value: 'eslint'},
            {name: 'Use taobao registry', value: 'taobao'},
        ],
        default: ['eslint', 'taobao']
    }
];

inquirer.prompt(questions).then(async answers => {
    console.log('✨ Success.')
});