import { router, publicProcedure } from '../../trpc';
import type { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { prisma } from '~/server/prisma';

/**
 * Default selector for Restaurant.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @link https://github.com/prisma/prisma/issues/9353
 */
const defaultRestaurantSelect = {
  id: true,
  name: true,
  description: true,
  rating: true,
  rating_count: true,
  category: true,
  city: true,
  price_range: true,
  featured: true,
  is_favorite: true,
  thumbnail_url: true,
  images: true,
  created_at: true,
  updated_at: true,
} satisfies Prisma.RestaurantSelect;

export const restaurantRouter = router({
  list: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(50),
        offset: z.number().min(0).default(0),
      }),
    )
    .query(async ({ input }) => {
      const { limit, offset } = input;

      const items = await prisma.restaurant.findMany({
        select: defaultRestaurantSelect,
        take: limit + 1,
        skip: offset,
        where: {},
        orderBy: {
          created_at: 'desc',
        },
      });

      return {
        items,
      };
    }),

  byId: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const { id } = input;
      const item = await prisma.restaurant.findUnique({
        where: { id },
        select: defaultRestaurantSelect,
      });
      if (!item) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No restaurant with id '${id}'`,
        });
      }
      return item;
    }),

  toggleFavorite: publicProcedure
    .input(
      z.object({
        id: z.string(),
        is_favorite: z.boolean(),
      }),
    )
    .mutation(async ({ input }) => {
      const { id, is_favorite } = input;
      const item = await prisma.restaurant.update({
        where: { id },
        data: { is_favorite },
        select: defaultRestaurantSelect,
      });
      return item;
    }),
});
