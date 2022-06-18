#!/usr/bin/env node

import waitOn from "wait-on";
import init from "../commands/init";
import runDevServer from "../commands/runDevServer";
import runCordovaCommand from "../commands/runCordovaCommand";

const [,, command, platform, ...params] = process.argv;

const validatePlatform = () => {
  if (!["ios", "android"].some(available => available === platform)) {
    throw new Error(`Invalid platform: ${platform}`);
  }
};

switch (command) {
  case "init": {
    init();
    break;
  }
  case "run": {
    validatePlatform();
    runDevServer();
    waitOn({ resources: [`http://localhost:${process.env.PORT}`] }, err => {
      if (err) throw err;
      runCordovaCommand(command, platform, params);
    });
    break;
  }
  case "build": {
    validatePlatform();
    runCordovaCommand(command, platform, params);
    break;
  }
  default:
    throw new Error(`Invalid command: ${command}`);
}
