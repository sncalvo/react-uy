import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';

export const eventsRouter = createTRPCRouter({
  get: publicProcedure.input(z.string()).query(async ({ input, ctx }) => {
    return await ctx.prisma.event.findUnique({
      where: {
        id: input,
      },
    });
  }),
  getAll: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.number().nullish(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const limit = input?.limit ?? 10;
      return await ctx.prisma.event.findMany({
        take: limit + 1,
        cursor: input.cursor ? { cursor: input.cursor } : undefined,
        include: {
          participants: true,
          tags: true,
        },
        orderBy: {
          cursor: 'asc',
        },
      });
    }),
});
