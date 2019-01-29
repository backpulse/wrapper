[![npm version](	https://img.shields.io/npm/v/backpulse-wrapper.svg)](https://www.npmjs.com/package/backpulse-wrapper)

# Backpulse API Wrapper  

A JavaScript wrapper for the Backpulse API.

## Features
* Access every Backpulse API endpoint
* Asynchronous requests
* Simple to use

## Usage
### Node
```bash
yarn add backpulse-wrapper
```  

```javascript
const Backpulse = require('backpulse-wrapper');
const client = new Backpulse('yoursitename');
```

### Browser
Backpulse API Wrapper is usable with module bundlers such as Browserify.  

```bash
yarn add backpulse-wrapper
```  

```javascript
import Backpulse from 'backpulse-wrapper';

const client = new Backpulse('yoursitename');
```

### Example

```javascript

// Fetch about content
client.fetchAbout((about, err) => {
    console.log(about);

    if(err) throw err;
});

// Fetch a specific gallery
client.fetchGallery("1a2b3c", (gallery, err) => {
    console.log(gallery);

    if(err) throw err;
});
```

## Methods
* `fetchSiteInformations`
Site informations
* `fetchAbout` 
About content
* `fetchContact`
Contact content
* `fetchGalleries`
Array of gallery
* `fetchGallery(id)`
Specific gallery
* `fetchDefaultGallery`
Default gallery
* `fetchProjects`
Array of project
* `fetchProject(id)`
Specific project














