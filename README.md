## Initiation
### Server

```bash
pnpm init
pnpm add typescript @trpc/server zod @types/node
pnpm exec tsc --init
pnpm dlx tsx ./index.js
```

Resources: 
- https://www.npmjs.com/~types
- https://www.npmjs.com/package/tsx
- https://www.npmjs.com/package/ts-node
- https://github.com/privatenumber/ts-runtime-comparison
- https://learn.microsoft.com/en-us/visualstudio/javascript/compile-typescript-code-npm?view=vs-2022

### Client

```bash
pnpm init
pnpm add typescript @trpc/server @trpc/client @types/node
pnpm exec tsc --init
pnpm dlx tsx ./index.js
```

Resources: 
- https://www.npmjs.com/~types
- https://www.npmjs.com/package/tsx
- https://www.npmjs.com/package/ts-node
- https://github.com/privatenumber/ts-runtime-comparison
- https://learn.microsoft.com/en-us/visualstudio/javascript/compile-typescript-code-npm?view=vs-2022

## Demonstration

To use this app, you must build dts in server file, then continue developing in client.

1. try to change something in server
2. Do this to build only the dts

```bash
cd server
pnpm build:dts
pnpm serve
```

3. try to continue developing in client
4. do this to see if it is working

```bash
cd client
pnpm start
```