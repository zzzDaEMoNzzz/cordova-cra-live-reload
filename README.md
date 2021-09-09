[![npm version](https://img.shields.io/npm/v/cordova-cra-live-reload.svg)](https://www.npmjs.com/package/cordova-cra-live-reload)

## How to install it

#### 1) Install package as dev dependency in your Cordova project

```bash
$ npm install cordova-cra-live-reload --save-dev
```

#### 2) Create `live-reload-config.js` file in the root directory of your Cordova project

```javascript
const path = require("path");
const { getLocalAddress } = require("cordova-cra-live-reload");

module.exports = {
  reactPath: path.join(__dirname, "../frontend"), // path to your React project directory
  templateData: {
    CONTENT_SRC: {
      build: "index.html",
      run: `http://${getLocalAddress()}:3000/`
    }
  }
};
```

#### 3) Rename `config.xml` file to `config.template.xml`

#### 4) Inside the `config.template.xml` file change `content` element

```xml
<content src="{{CONTENT_SRC}}" />
```

#### 5) In `package.json` add following `scripts`

```json
{
    "dev": "cordova-cra-live-reload run",
    "build": "cordova-cra-live-reload build"
}
```

## How to use it

#### Start react dev server and run cordova app

```bash
$ npm run dev android
```

#### Build cordova app

```bash
$ npm run build android
```

**Note:** Since the library uses Cordova CLI, `dev` and `build` commands takes same parameters as Cordova [run](https://cordova.apache.org/docs/en/10.x/reference/cordova-cli/index.html#cordova-run-command) and [build](https://cordova.apache.org/docs/en/10.x/reference/cordova-cli/index.html#cordova-build-command) commands
