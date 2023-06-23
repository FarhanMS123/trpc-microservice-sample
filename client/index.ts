import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server/.cache/index';
//     👆 **type-only** import

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});

(async function() {
  console.log(await trpc.userList.query());
  console.log(await trpc.userById.query("crlf777"));
  console.log(await trpc.userById.query("fifa23"));
  console.log(await trpc.userCreate.mutate({
    id: "json13",
    name: "Json Noceda",
  }));
  console.log(await trpc.userList.query());
  console.log(await trpc.userById.query("json13"));
})()