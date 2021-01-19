const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: { main: './ts/src/main.ts' },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]-bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    // this specifies all files with a '.ts' or '.tsx' extension will be handled by the ts-loader
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
  plugins: [new CopyWebpackPlugin([{ from: `./html` }])],
};

/* 
explanation of webpack properties

entry: the entry point is the file where webpack starts collecting the data for an output bundle.
First, it adds the entry point file to a bundle, then the imports of the entry point, then the
imports of the entry point file, then the imports of the imports, etc.. The value of property
entry is an object whose property keys specify names of the entry points and whose 
property values specify paths of entry points.

output: specifies the path of the output bundle. [name] is mainly useful where there are multiple
entry points (and therefore multiple output bundles).  It is replaced with the name of the entry point when 
assembling the path

resolve: configures how webpack coverts specifiers (IDs) of modules to locations of files

module: configures loaders (plugins that process files) and more.

plugins: configures plugins which can change and augment webpack's behavior in a variety of ways.

*/
