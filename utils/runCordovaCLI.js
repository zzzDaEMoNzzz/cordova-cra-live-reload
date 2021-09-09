const { spawn } = require("child_process");
const loadConfig = require("./loadConfig");

module.exports = (command, platform, params = []) => {
  // change working directory to cordova
  const config = loadConfig();
  process.chdir(config.cordovaPath);

  // execute cordova cli command
  spawn("cordova", [command, platform, ...params], { stdio: "inherit" });
};
