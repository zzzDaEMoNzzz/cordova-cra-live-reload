import { spawn } from "child_process";
import loadConfig from "./loadConfig";

const runCordovaCLI = (command: string, platform: string, params: string[] = []) => {
  const config = loadConfig();
  process.chdir(config.cordovaPath);
  spawn("cordova", [command, platform, ...params], { stdio: "inherit" });
};

export default runCordovaCLI;
