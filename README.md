# Demonstration of skia typescript issue

## Build

    $ npm install
    $ npm run build

## Run

    $ node index.js

## Error output

```
/Users/achou/Code/skia-typescript-example/index.js:65
                case 0: return [4 /*yield*/, (0, canvaskit_wasm_1.CanvasKitInit)({
                                                                                ^

TypeError: (0 , canvaskit_wasm_1.CanvasKitInit) is not a function
    at /Users/achou/Code/skia-typescript-example/index.js:65:81
    at step (/Users/achou/Code/skia-typescript-example/index.js:52:23)
    at Object.next (/Users/achou/Code/skia-typescript-example/index.js:33:53)
    at /Users/achou/Code/skia-typescript-example/index.js:27:71
    at new Promise (<anonymous>)
    at __awaiter (/Users/achou/Code/skia-typescript-example/index.js:23:12)
    at main (/Users/achou/Code/skia-typescript-example/index.js:61:12)
    at Object.<anonymous> (/Users/achou/Code/skia-typescript-example/index.js:91:1)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
```

## Comments

Note that index.ts tries to load CanvasKit in two ways; first statically and
then using a dynamic import. They both fail, but by default after the first
failure the test throws a `TypeError`. Comment out the first attempt to call
`CanvasKitInit` and rebuild to try the dynamic import, which fails in a similar
way.
