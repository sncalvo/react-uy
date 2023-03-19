import { createTRPCRouter } from '@/server/api/trpc';
import { communitiesRouter } from './routers/communities';
import { eventsRouter } from './routers/events';

export const appRouter = createTRPCRouter({
  communities: communitiesRouter,
  events: eventsRouter,
});

export type AppRouter = typeof appRouter;
