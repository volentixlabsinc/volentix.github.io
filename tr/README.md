# Volentix Website

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![Semver](http://img.shields.io/SemVer/2.0.0.png)](http://semver.org/spec/v2.0.0.html)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![License](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![GitHub version](https://badge.fury.io/gh/boennemann%2Fbadges.svg)](http://badge.fury.io/gh/boennemann%2Fbadges)


  * [Welcome](#welcome)
  * [Overview](#overview)
  * [Usage](#usage)
  * [Maintainers](#maintainers)
  * [Rules To Live By](#rules-to-live-by)
  * [License](#license)

## Welcome

> Website for Volentix.

This repository will house the artifacts for our public website. 

## Overview

This project houses the html, css, and javascript files for the website.

This project uses:

  * the static website generator [Jekyll](https://jekyllrb.com/).
  * [Bootstrap](https://getbootstrap.com/) for the llok and feel.
  * For i18n we are using [Jekyll Polyglot](https://github.com/untra/polyglot)

## Usage

```
Note that the master branch is used to house the generated artifacts. Although Github does support Jekyll, it does not support jekyll-polyglot at this time. As a result, the jekyll project will be housed in the development branch.
```

In order to develop this project locally, you will need to make sure you have the following:
  * ruby version 2.1 or greater
  * gem 2.0 or greater

Once ruby and gem have been installed and configured, you will need to install Jekyll:

Switch to the develop branch:

```
git checkout development
```

Install Bundler and Jekyll.

```
gem install jekyll bundler
```

Run (one time):
```
bundle install
```

To build:
```
jekyll build
```

To serve:
```
jekyll serve
```

Open a web browser to: http://localhost:4000

```
Additionally, you will need to, when changing the i18n artifacts, to stop Jekyll, build, and serve again to see your changes.
```

Happy coding!

## Maintainers

[@realrhys](https://github.com/realrhys)

## Rules To Live By

See [the code of conduct file](code-of-conduct.md)!

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2018 VolentixLabs
