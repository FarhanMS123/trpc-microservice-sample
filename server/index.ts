import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { publicProcedure, router } from './trpc';
import { z } from 'zod';

type User = {
  id: string,
  name: string,
  phone: string,
};
const users: User[] = [];

const appRouter = router({
  userList: publicProcedure
    .query(async () => {

      return users;

    }),
  userById: publicProcedure
    .input(z.string())
    .query(async (opts) => {
      const { input } = opts;

      // Retrieve the user with the given ID
      const user = users.find((user) => user.id == input);

      return user;
    }),
  userCreate: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;

      // Create a new user in the database
      const user: User = {};
      users.push(user);

      return user;
    }),
});

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;