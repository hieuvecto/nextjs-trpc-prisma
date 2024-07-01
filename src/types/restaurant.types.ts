import type { Prisma } from '@prisma/client';

export type RestaurantPayload = Prisma.RestaurantGetPayload<{
  include: { images: true; featured: true };
}>;
