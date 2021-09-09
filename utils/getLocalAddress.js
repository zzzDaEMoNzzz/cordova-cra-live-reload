const { networkInterfaces } = require("os");

module.exports = () => {
  const interfaces = networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const netInterface of interfaces[name]) {
      if (netInterface.family === "IPv4" && netInterface.internal === false) {
        return netInterface.address;
      }
    }
  }

  throw new Error("Local IPv4 address not found");
};
