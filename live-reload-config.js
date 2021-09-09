process.env.REACT_APP_MOBILE = "true";
process.env.BROWSER = "false";

const path = require("path");
const { getLocalAddress } = require("./index");

module.exports = {
  reactPath: path.join(__dirname, "../frontend"),
  cordovaPath: path.join(__dirname, "../mobile"),
  templateFile: "config.template.xml",
  templateData: {
    CONTENT_SRC: {
      build: "index.html",
      run: `http://${getLocalAddress()}:3000/`
    }
  }
};
