const prepareCordovaConfig = require("../utils/prepareCordovaConfig");
const runCordovaCLI = require("../utils/runCordovaCLI");

module.exports = (command, platform, params) => {
  prepareCordovaConfig(command);
  runCordovaCLI(command, platform, params);
};
