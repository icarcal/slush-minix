# Slush Minix

> Micro gulp tasks to enhance production
[![Build Status](https://secure.travis-ci.org/icarcal/slush-minix.png?branch=master)](https://travis-ci.org/icarcal/slush-minix) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-minix.png)](http://badges.enytc.com/for/npm/slush-minix)

## Getting Started

##How to install and use the generator?

Install the slush:

```bash
$ [sudo] npm install -g slush
```

Install `slush-minix` generator:

```bash
$ npm install -g slush-minix
```

### Usage

Create a new folder for your project:

```bash
$ mkdir my-slush-minix
```

Run the generator from within the new folder:

```bash
$ cd my-slush-minix && slush minix
```

##Plugin structure

Folders Structure:

```
.
├── gulp/
|   └── index.js
|   └── tasks
|       └── browserify.js
|       └── fonts.js
|       └── images.js
|       └── less.js
|       └── scripts.js
|       └── serve.js
|       └── styles.js
├── src/
|   └── app.js
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .gulpfile.js
├── index.html
├── package.json
└── README.md
```
