const path = require("path");
const projectDir = process.cwd();

module.exports = () => {
  const config = require(path.join(projectDir, "live-reload-config.js")) || {};
  return {
    cordovaPath: config.cordovaPath || projectDir,
    reactPath: config.reactPath || projectDir,
    templateFile: config.templateFile || "config.template.xml",
    templateData: config.templateData || {}
  };
};
