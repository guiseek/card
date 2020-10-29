#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const boxen = require('boxen');
const chalk = require('chalk');

// Because we like console, and captains.log sounds cool
const captains = console;

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'single',
};

// Text + chalk definitions
const data = {
  name: chalk.white('  Gui Seek:'),
  handle: chalk.cyan(' Degustador da boa tecnologia'),
  work: chalk.white('Engenheiro front-end'),
  twitter: chalk.cyan('https://twitter.com/guiseek'),
  github: chalk.cyan('https://github.com/guiseek'),
  youtube: chalk.cyan('https://youtube.com/c/Guiseek'),
  web: chalk.cyan('https://guiseek.web.app'),
  npx: chalk.white('npx @guiseek/card'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelYoutube: chalk.white.bold('   Youtube:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work} \n`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const youtubeing = `${data.labelYoutube}  ${data.youtube}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output = heading
  + newline
  + newline
  + working
  + newline
  + twittering
  + newline
  + githubing
  + newline
  + youtubeing
  + newline
  + webing
  + newline
  + newline
  + carding;

const cardMessage = chalk.green(boxen(output, options));
captains.log(cardMessage);
