# A Gatsby Website using Storyblok

# A Gatsby Website using Storyblok

This is the demo project for the [step by step guide for Gatsby and Storyblok](**https://www.storyblok.com/tp/gatsby-multilanguage-website-tutorial**). 

<img src="https://img.storyblok.com/ZvYBhnjPopyB4ExBdo94o-UxnXc=/840x0/f/88751/2880x2048/47fb3aa687/gatsbyjs_demo.jpg" width="400px" />


## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:8000
$ npm run develop # or yarn dev
```

## Setup

1. [Register](https://app.storyblok.com/#!/signup) at Storyblok for free.
2. Create a new Space and exchange the preview token with your own.
3. Follow our [Gatsby Storyblok Guide](**https://www.storyblok.com/tp/gatsby-multilanguage-website-tutorial**)

For detailed explanation on how things work, checkout the [Gatsby docs](https://www.gatsbyjs.com/) and for the whole Setup you can have a look at [our step by step guide for Gatsby and Storyblok](**https://www.storyblok.com/tp/gatsby-multilanguage-website-tutorial**)

## Import necessary components

You can import the example components through the file `seed.components.json` with the [Storyblok CLI](https://github.com/storyblok/storyblok#push-components). For this you will need your space ID, which you can find in your space **settings**.

First you need to install the Storyblok CLI

```bash
# Install Storyblok CLI if you have not already
npm install -g storyblok
```

Then you can push the exisiting `seed.components.json` structure to Storyblok.

```bash
# how to use
storyblok push-components <SOURCE> --space <SPACE_ID>

# example
storyblok push-components ./seed.components.json --space 12345
```

After the import you will have all the components under `Components` in your left sidebar.

## Add Content

The following content structure is needed for this boilerplate.

**Content**

* Home (page)
* en (folder)
  * settings (settings)
  * blog (folder)
    * first post (blogpost)
* de (folder)
  * home (page)
  * settings (settings)
  * blog (folder)
    * erster eintrag (blogpost)
* authors (folder)
  * jane doe (author)
