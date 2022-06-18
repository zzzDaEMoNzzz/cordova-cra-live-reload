const path = require("path");
const { getLocalAddress } = require("cordova-cra-live-reload");

/** @type {import('cordova-cra-live-reload').Config} */
module.exports = {
  reactPath: path.join(__dirname, "../react"),
  templateData: {
    CONTENT_SRC: {
      build: "index.html",
      run: `http://${getLocalAddress()}:3000/`
    }
  }
};
