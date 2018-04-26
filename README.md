# NodeExpressPug #
An introduction to NodeJS, Express, Pug

## Installing Node ##

<a href="https://nodejs.org/en/download/" target="_blank">https://nodejs.org/en/download/</a>

* Prefer the *LTS* version e.g. stable release.
* Prefer 64 bits if possible
* Installing NodeJS will also install NPM


## Useful Strategies ## 

There are two different strategies depending on if you are doing a web site or a REST web service

### Generating a Web Site  ### 

This demo!

1. Install the Express Generator

<a href="https://expressjs.com/en/starter/generator.html" target="_blank">https://expressjs.com/en/starter/generator.html</a>

```bash
npm install express-generator -g
```

This generator will create a project structure and create a 'packages.json' with all of the basic stuff you need.


2. Generate your site

```bash
express -v pug -c less {website}
```

For example mine is: "nepweb" (Node-Express-Pug) so

```bash
express -v pug -c less nepweb
```

* The PUG rendering engine replaces JADE and is much better and has a large base of users and add-ins
* LESS is nice because all valid CSS is valid less (in the same way that all valid JavaScript is valid type script) but you can also use the LESS feature set like plug-ins, constants, etc.

3. Set it up

a. cd into your site folder
b. `npm i` to restore package dependancies
c. Run it to make sure it works: 
```bash
SET DEBUG={website}:* & npm start
```

For example mine is: "nepweb" (Node-Express-Pug) so

```bash
SET DEBUG=nepweb:* & npm start
```

d. stop the site

4. Add in other packages you think you will need

I recommend adding in `express-validator` (<a href="https://www.npmjs.com/package/express-validator " target="_blank">https://www.npmjs.com/package/express-validator </a>) to add form validation and sanitation! 

```bash
npm i express-validator --save
```

### Generating a Web Service  ### 

I strongly recommend contract 1st development, see my video:

<a href="https://youtu.be/w71TrUUWRDU" target="_blank">https://youtu.be/w71TrUUWRDU</a> 


## About me ##

**Stuart Williams**

* Cloud/DevOps Practice Lead + National Markets Consultant
* <a href="http://magenic.com" target="_blank">Magenic Technologies</a>
* <a href="mailto:stuartw@magenic.com" target="_blank">stuartw@magenic.com</a> (e-mail)
* Blog: <a href="http://blitzkriegsoftware.net/Blog" target="_blank">http://blitzkriegsoftware.net/Blog</a>
* LinkedIn: <a href="http://lnkd.in/P35kVT" target="_blank">http://lnkd.in/P35kVT</a>
* YouTube: <a href="https://www.youtube.com/channel/UCO88zFRJMTrAZZbYzhvAlMg" target="_blank">https://www.youtube.com/channel/UCO88zFRJMTrAZZbYzhvAlMg</a> 