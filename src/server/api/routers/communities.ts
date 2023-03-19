import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';

export const communitiesRouter = createTRPCRouter({
  get: publicProcedure.input(z.string()).query(async ({ input, ctx }) => {
    return await ctx.prisma.community.findUnique({
      where: {
        id: input,
      },
    });
  }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.community.findMany();
  }),
});
