import path from "path";

const projectDir = process.cwd();

const loadConfig = () => {
  const config = require(path.join(projectDir, "live-reload-config.js")) || {};
  return {
    cordovaPath: config.cordovaPath || projectDir,
    reactPath: config.reactPath || projectDir,
    templateFile: config.templateFile || "config.template.xml",
    templateData: config.templateData || {},
  };
};

export default loadConfig;
