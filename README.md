# TypeScript webpack demo

## The goal of this repository is to outline the most basic starting boilerplate one might need to begin writing web applications utilizing TypeScript and Webpack together

The web app is built as follows:

input:

- The TypeScript files in ts/
- ALl JavaScript code that is installed via npm and imported by the TypeScript files
- The HTML files in html/

output:  **directory build/ with the complete web app:** 

- The TypeScript files are compiled to JavaScript code, combined with npm-installed JavaScript and written to the script file build/main-bundle.js.  This process is called **bundling** and `main-bundle.js` is a bundle file

- Each HTML file is copied to build/

---

Both output tasks are handled by Webpack:

- Copying the files in html/toBuild is done via the webpack *plugin* copy-webpack-plugin 

- We will explore two different workflows for bundling:

1. Either Webpack directly compiles TypeScript files into the bundle, with the help of a *loader* ts-loader
2. Or we will compile the TypeScript files ourselves, to JavaScript files in the directory `dist/`.  Then webpack doesn't need a loader and only bundles JavaScript files


