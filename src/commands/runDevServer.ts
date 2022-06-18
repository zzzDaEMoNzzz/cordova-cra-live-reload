process.env.NODE_ENV = process.env.NODE_ENV || "development";
process.env.PORT = process.env.PORT || "3000";
if (!process.env.OPEN_BROWSER) {
  process.env.BROWSER = "none";
}

import path from "path";
import loadConfig from "../utils/loadConfig";

const runDevServer = () => {
  const config = loadConfig();
  const cordovaScriptsPath = path.join(config.cordovaPath, "platforms/android/platform_www");

  process.chdir(config.reactPath);

  const devServerConfigPath = path.join(config.reactPath, "node_modules/react-scripts/config/webpackDevServer.config.js");
  const devServerConfig = require(devServerConfigPath)();

  devServerConfig.contentBase = [
    devServerConfig.contentBase,
    cordovaScriptsPath
  ];

  const devConfig = require.cache[require.resolve(devServerConfigPath)];
  if (!devConfig) throw new Error('Failed to load CRA config');
  devConfig.exports = () => devServerConfig;

  require(path.join(config.reactPath, "node_modules/react-scripts/scripts/start"));
};

export default runDevServer;
