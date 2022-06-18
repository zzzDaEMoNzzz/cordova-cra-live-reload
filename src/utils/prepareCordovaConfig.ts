import fs from "fs";
import path from "path";
import loadConfig from "../utils/loadConfig";

const prepareCordovaConfig = (command: string) => {
  const config = loadConfig();
  const template = fs.readFileSync(path.join(config.cordovaPath, config.templateFile), "utf-8");

  const result = template.replace(/{{(.*)}}/g, (_, key) => {
    const value = (config.templateData || {})[key][command];
    if (!value) console.warn(`Not found template data for '${key}'`);
    return value || key;
  });

  fs.writeFileSync(path.join(config.cordovaPath, "config.xml"), result);
};

export default prepareCordovaConfig;
