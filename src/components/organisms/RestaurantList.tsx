import React, { FunctionComponent, Fragment } from 'react';
import type { Prisma } from '@prisma/client';
import RestaurantSummary from './RestaurantSummary';
import type { RestaurantPayload } from '../../types/restaurant.types';
import { trpc } from '~/utils/trpc.utils';

export type RestaurantListProps = {
  items: RestaurantPayload[];
};

const RestaurantList: FunctionComponent<RestaurantListProps> = ({ items }) => {
  const utils = trpc.useUtils();
  const toggleFavoriteMutation = trpc.restaurant.toggleFavorite.useMutation({
    async onSuccess() {
      // refetches restaurant after marking favorite a restaurant
      await utils.restaurant.list.invalidate();
    },
  });

  const toggleRestaurantFavoriteHandler = async (item: RestaurantPayload) => {
    await toggleFavoriteMutation.mutateAsync({
      id: item.id,
      is_favorite: !item.is_favorite,
    });
  };

  return (
    <div className="grid md:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <RestaurantSummary
          key={item.id}
          item={item}
          toggleRestaurantFavoriteHandler={toggleRestaurantFavoriteHandler}
          isFeaturedRestaurant={index === 0}
          appendClassName={index === 0 ? 'md:col-span-2' : ''}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
