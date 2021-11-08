import { CanvasKitInit } from "canvaskit-wasm";
import { dirname } from "path";

async function main() {
  await CanvasKitInit({
    locateFile: (file: string) => {
      let moduleDir = dirname(require.resolve("canvaskit-wasm"));
      const rv = `${moduleDir}/${file}`;
      console.log(`locateFile: ${file} => ${rv}`);
      return rv;
    },
  });

  const CanvasKit = await import("canvaskit-wasm");
  CanvasKit.CanvasKitInit({
    locateFile: (file: string) => {
      let moduleDir = dirname(require.resolve("canvaskit-wasm"));
      const rv = `${moduleDir}/${file}`;
      console.log(`locateFile: ${file} => ${rv}`);
      return rv;
    },
  });
}

main();
