# School Projects
A playground for testing out all new tech for school, such as homework & school assignments.
The goal of this project is to learn and understand CSS Grid, React Backend & Frontend fully so that I can implement it in coming school and work related projects.

## Table of contents

- [Quick start](#quick-start)
- [Status](#status)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Contributing](#contributing)
- [Community](#community)
- [Versioning](#versioning)
- [Creator](#creator)
- [Copyright and license](#copyright-and-license)


## Quick start

### Download
Navigate the a directory on your computer were you are working on sites and run this command:
```shell
git clone https://github.com/bromso/school-projects.git
```

### Install packages
Navigate the site’s directory and run this command.
```shell
npm i
```

### Start developing
Navigate the site’s directory and start it up. Will be located on url: http://localhost:8000
```shell
gatsby develop
```

### Develop & Test on Smartphone
Navigate the site’s directory and start it up. Wait until Gatsby has fully started and you will find the IP to put in your browser on your smartphone.
```shell
gatsby develop -H 0.0.0.0
```

### Start Storybook
Navigate the site’s directory and start it up. Will be located on url: http://localhost:6006
```shell
npm run storybook
```

### Local --> Stage --> Production

| Name                	| Local                            | Stage		                  										 | Production                  										 |
|-----------------------|----------------------------------|-------------------------------------------------|-------------------------------------------------|
| GatsbyJS App     				 | http://localhost:8000         |       																					 | https://bromso-schoolprojects.netlify.app/			 |
| Storybook: UI Components | http://localhost:6006     		 |       																					 | 			 																					 |

## Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/4ea7c66d-38f1-4c3d-a48b-7ad02a33c71d/deploy-status)](https://app.netlify.com/sites/bromso-schoolprojects/deploys)
[![David DM Status](https://david-dm.org/bromso/school-projects.svg)](https://david-dm.org/)

## What's included
### Dependencies
I recommended to have these CLI's and dependencies in order to download and install everything without a clitch.

| Logo                                                    | Name                                                                        | Comments																																		|
|---------------------------------------------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| ![Homebrew Logo](docs/img/homebrew.png)                 | [Homebrew](https://brew.sh/)                                                |	Package manager (for Mac)																										|
| ![NVM Logo](docs/img/nvm.png)                           | [NVM](https://github.com/nvm-sh/nvm)                                        |	Node & NPM Version Manager																									|
| ![NodeJS Logo](docs/img/nodejs.png)                     | [NodeJS](https://nodejs.org/)                                               |	JavaScript Runtime Engine																										|
| ![NPMJS Logo](docs/img/npmjs.png)                       | [NPMJS](https://www.npmjs.com/)                                             |	Node Page Manager																														|
| ![GatsbyJS Logo](docs/img/gatsbyjs.png)			            | [GatsbyJS](https://www.gatsbyjs.com/)                                       |	Site Generator																															|
| ![Storybook Logo](docs/img/storybookjs.png)								| [Storbyook](https://storybook.js.org/)   																		|	UI Component Explorer 																											|

### Tech Stack
The application uses these technologies.

| Logo                                                    	| Name                                                                        | Comments																																		|
|-----------------------------------------------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| ![HTML5 Logo](docs/img/html5.png)                       	| [HTML5](https://html.spec.whatwg.org/)																	    |	Markup language																															|
| ![CSS3 Logo](docs/img/css3.png)                         	| [CSS3](https://www.w3.org/TR/CSS/)				                                  |	Styling language																														|
| ![Husky Logo](docs/img/husky.png)                       	| [Husky](https://typicode.github.io/husky/)                                  |	Git message validator 																											|
| ![Commitlint Logo](docs/img/commitlint.png)             	| [Commitlint](https://commitlint.js.org/)                                    |	Git linter																																	|
| ![Editorconfig Logo](docs/img/editorconfig.png)         	| [Editorconfig](https://editorconfig.org/)                                   |	IDE coding styles																														|
| ![Semantic Release Logo](docs/img/semanticrelease.png)  	| [Semantic Release](https://semantic-release.gitbook.io/semantic-release/)   |	Versioning tool																															|
| ![Prettier Logo](docs/img/prettier.png)                 	| [Prettier](https://prettier.io/)							                              |	Code formatter  																														|
| ![GatsbyJS Logo](docs/img/gatsbyjs.png)             			| [GatsbyJS](https://www.gatsbyjs.com/)                                    		|	Site generator																															|
| ![ReactJS Logo](docs/img/reactjs.png)  										| [ReactJS](https://reactjs.org/)   																					|	JavaScript library																													|
| ![Styled Components Logo](docs/img/styled-components.png) | [Styled-Components](https://styled-components.com/)   											|	ES6 & CSS to style components																								|
| ![StorybookJS Logo](docs/img/storybookjs.png)							| [Storbyook](https://storybook.js.org/)   																		|	UI Component Explorer 																											|

### Hosting
The application uses these hosting vendors.

| Logo                                                     | Name                                                                        |Comments																																		 |
|----------------------------------------------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| ![Github Logo](docs/img/github.png)                      | [Github](https://github.com/)                                               | Code repository  																													 |
| ![Nelify Logo](docs/img/netlify.png)                     | [Netlify](https://www.netlify.com/)                                         | Webpage hosting  																													 |

## Contributing
No contributions are necessary because the project is just for showing teacher at school.

## Bugs and feature requests
No bug and feature request are necessary because the project is just for showing teacher at school.

## Versioning
For transparency into my release cycle and in striving to maintain backward compatibility, school-projects is maintained under the [Semantic Versioning guidelines](https://semver.org). Sometimes I screw up, but I adhere to those rules whenever possible.

Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should look like this:

```sh
$ git commit -m "A brief summary of the commit
>
> A paragraph describing what changed and its impact."
```

| Type            | Explanation                                                    | Semver (eg. 1.0.0) | Git Message Example                              |
|-----------------|----------------------------------------------------------------|--------------------|--------------------------------------------------|
| fix             | A bug fix                                                      | x.x.1              | fix: update package.json                         |
| feat            | A new feature                                                  | x.1.x              | feat: add new eslint to package.json             |
| BREAKING CHANGE | A major change                                                 | 1.x.x              | BREAKING CHANGE: upgrade to strapi 3 & gatsby 3  |
| docs            | Documentation improvements                                     |                    | docs: update README.md                           |
| style           | Changes made white-space, formatting, missing semi-colons, etc |                    | style: add styles in breadcrumb component        |
| refactor        | A code change that neither fixes a bug nor adds a feature      |                    | refactor: fixed better intendation in index.html |
| perf            | Performance improvements                                       |                    | perf: add tree-shaking to webpack                |
| test            | Add missing tests                                              |                    | test: add test to .travis.yml                    |
| chore           | Changes the build process                                      |                    | chore: update .travis.yml & netlify.toml         |


See the Releases section of our GitHub project for [CHANGELOG](https://github.com/bromso/school-projects/blob/main/CHANGELOG.md) for each release version of MaterialUI projects.

## Creator
| Avatar                                                   | Name         | Email								   | Website																	|
|----------------------------------------------------------|--------------|------------------------|------------------------------------------|
| ![Jonas Bröms Avatar](docs/img/jonasbroms.png)           | Jonas Bröms  | jonasbroms@icloud.com	 | [jonasbroms.com](https://jonasbroms.com)	|

## Coding conventions

- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

## Copyright and license

This project is licensed under the terms of the MIT license.
For more information, [click here](https://github.com/bromso/school-projects/blob/master/LICENSE).
