import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { publicProcedure, router } from './trpc';
import { z } from 'zod';

const User = z.object({
  id: z.string(),
  name: z.string(),
});
type User = z.infer<typeof User>;

const users: User[] = [];

// https://trpc.io/docs/quickstart#defining-a-backend-router
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
    .input(User)
    .mutation(async (opts) => {
      const { input } = opts;

      // Create a new user in the database
      const user: User = {
        id: input.id,
        name: input.name
      };
      users.push(user);

      return user;
    }),
});

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);
server.server.on("listening", function(){
  console.log("I'm all ears.");
})

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;