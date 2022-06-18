export type Config = {
  /**
   * Path to your React project directory
   * @default Current directory
   * */
  reactPath?: string;

  /**
   * Path to your Cordova project directory
   * @default Current directory
   * */
  cordovaPath?: string;

  /**
   * Filename of cordova config template
   * @default live-reload-config.js
   * */
  templateFile?: string;

  /**
   * Various data for build and run commands
   * @example
   * CONTENT_SRC: {
   *   build: "index.html",
   *   run: `http://${getLocalAddress()}:3000/`
   * }
   * */
  templateData?: {
    [key: string]: {
      build: string;
      run: string;
    };
  };
};
