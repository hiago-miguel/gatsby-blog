# Gatsby Blog Project

## Overview

This project uses the [gatsby-starter-blog](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog) as a base to create a blog site.

Although the starter is used, I've customized the CSS a bit to support forms and a few other styles.

I also added new pages, *about* and *contact*, and defined a *menu* reusing components to navigate across the blog.

The blog can be accessed using the URL https://hiago-journey.netlify.app/

## Stack

* Gatsby 5.14.0
* Node.js v20.18

### Gatsby Plugins

For a full overview, please check the `gatsby-config.js` file.
  * gatsby-plugin-feed
  * gatsby-plugin-image
  * gatsby-plugin-manifest
  * gatsby-plugin-sharp
  * gatsby-remark-images
  * gatsby-remark-prismjs
  * gatsby-remark-responsive-iframe
  * gatsby-source-filesystem
  * gatsby-transformer-remark
  * gatsby-transformer-sharp

## Local Environment

To run the project locally, please run the following commands:
```bash
nvm install v20.18.0 # if you don't have Node.js v20 installed (Be sure to have nvm installed as well)
npm install -g gatsby-cli
npm install
npm run develop
```

## Netlify Environment
The `main` branch of this repository is linked to Netlify.
This means that any new commit or merge done in the `main` branch results in a new automated deployment.

I'm also using Netlify Forms for my Contact page.
