import { networkInterfaces, NetworkInterfaceInfo } from "os";

const getLocalAddress = () => {
  const interfaces = networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const netInterface of interfaces[name] as NetworkInterfaceInfo[]) {
      if (netInterface.family === "IPv4" && !netInterface.internal) {
        return netInterface.address;
      }
    }
  }

  throw new Error("Local IPv4 address not found");
};

export default getLocalAddress;
