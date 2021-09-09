const waitOn = require("wait-on");
const runDevServer = require("../scripts/runDevServer");
const runCordovaCommand = require("../scripts/runCordovaCommand");

const [,, command, platform, ...params] = process.argv;

if (!["ios", "android"].some(available => available === platform)) {
  throw new Error(`Invalid platform: ${platform}`);
}

if (!["run", "build"].some(available => available === command)) {
  throw new Error(`Invalid command: ${command}`);
}

if (command === "run") {
  runDevServer();
  waitOn({ resources: [`http://localhost:${process.env.PORT}`] }, err => {
    if (err) throw err;
    runCordovaCommand(command, platform, params);
  });
}

if (command === "build") {
  runCordovaCommand(command, platform, params);
}
