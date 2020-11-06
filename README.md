LeaseLabs Front-End Web Developer Test
=============================

## Michael's changes

This is a Yarn 2 repository that uses Webpack to build the website. This was made without the "zero-install" philosophy in mind.

Whether you choose to keep the Yarn 2 files, use this command to make the webpage with Yarn:

```bash
yarn install
yarn webpack serve
```

You may also instead build with npm:

```bash
npm install
npm run start
# OR
npx webpack serve
```

Either method should eventually open http://localhost:8080; the webpage will be there.

Other changes include:

- images moved to src/img
- app.js moved to src
- app.js exports images variable
- And a basic attempt at replicating the mockup using this system

## General info

**Please clone or fork the test from this repo**

Please markup the provided design using HTML, CSS and Javascript. A layered Photoshop file and jpg of the design has been provided. Please contact us if any instruction is unclear. Thank you!

**Rules and Requirements**
+ We are interested in simplicity and your command of the front-end development languages rather than libraries and frameworks. However, you may use any HTML/CSS/JS library or framework, except for dealing with the image object which is detailed below.
+ For the 3 column image section please reference the images object in app.js. Each of the images contain an image path, a heading, and description text. Use this object to build a 3-column image section at the bottom of the content area, showing images and their associated hover states.
+ Please use your judgement to make this page responsive. Simpler versions of elements on mobile is ok.
+ You may use a CSS framework if you like, but extra consideration will be given if you can showcase your command of simple media queries. Bonus points for exampling a "mobile first" approach.
+ Pixel perfection is not expected. We are more interested in conveying the feel of the design.


**What We're Interested In**
+ Command of Languages
+ Best Practices
+ Intentional and Strategic Organization of Code
+ Efficiency and Cleanliness in Code
+ Browser Compatibility
+ Attention to Detail
+ Usability

**Bonus Points**
+ The use of SASS compiled down to CSS
+ The use of a build tool to automate the compilation of SASS and / or minification of JS or CSS.

**Completion and Delivery**  
You can clone or fork this repo. When complete, email a link to submissions@leaselabs.com

**MIT License - Open Source**
We have created this test as a simple assessment for front-end developers. If anyone else finds this useful, it's available for you to use anyway you like.
