import fs from "fs";
import path from "path";

const projectDir = process.cwd();
const templateFile = path.join(projectDir, "/node_modules/cordova-cra-live-reload/template/live-reload-config.js");
const destFile = path.join(projectDir, "live-reload-config.js");
const pkgFile = path.join(projectDir, "package.json");

const init = () => {
  if (fs.existsSync(destFile)) {
    throw new Error("Config file already exists");
  } else {
    fs.copyFileSync(templateFile, destFile);
  }

  if (fs.existsSync(pkgFile)) {
    const pkg = JSON.parse(fs.readFileSync(pkgFile, "utf-8"));
    if (!pkg.scripts) pkg.scripts = {};
    if (pkg.scripts.dev || pkg.scripts.build) {
      throw new Error("Scripts already exists");
    }
    pkg.scripts.dev = "cordova-cra-live-reload run";
    pkg.scripts.build = "cordova-cra-live-reload build";
    fs.writeFileSync(pkgFile, JSON.stringify(pkg, null, 2));
  } else {
    throw new Error("package.json not found");
  }
};

export default init;
