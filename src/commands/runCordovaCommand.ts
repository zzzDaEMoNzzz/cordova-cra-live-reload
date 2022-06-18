import prepareCordovaConfig from "../utils/prepareCordovaConfig";
import runCordovaCLI from "../utils/runCordovaCLI";

const runCordovaCommand = (command: string, platform: string, params: string[]) => {
  prepareCordovaConfig(command);
  runCordovaCLI(command, platform, params);
};

export default runCordovaCommand;
