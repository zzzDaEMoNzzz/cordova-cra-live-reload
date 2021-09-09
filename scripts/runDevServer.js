process.env.NODE_ENV = process.env.NODE_ENV || "development";
process.env.PORT = process.env.PORT || "3000";

const path = require("path");
const loadConfig = require("../utils/loadConfig");

module.exports = () => {
  const config = loadConfig();
  const cordovaScriptsPath = path.join(config.cordovaPath, "platforms/android/platform_www");

  // change current working directory for correct paths in config
  process.chdir(config.reactPath);

  // load devServer config
  const devServerConfigPath = path.join(config.reactPath, "node_modules/react-scripts/config/webpackDevServer.config.js");
  const devServerConfig = require(devServerConfigPath)();

  // add to config cordova.js and plugins scripts
  devServerConfig.contentBase = [
    devServerConfig.contentBase,
    cordovaScriptsPath
  ];

  // add modified config to cache
  require.cache[require.resolve(devServerConfigPath)].exports = () => devServerConfig;

  // run devServer
  require(path.join(config.reactPath, "node_modules/react-scripts/scripts/start"));
};
