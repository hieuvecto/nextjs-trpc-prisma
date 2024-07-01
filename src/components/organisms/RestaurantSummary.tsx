import React, { FunctionComponent, Fragment } from 'react';
import type { Prisma } from '@prisma/client';
import Image from '../atoms/Image';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import { getStoreCategoryText } from '../../utils/restaurant';
import Rating from '../molecules/Rating';
import FavoriteButton from '../molecules/FavoriteButton';
import type { RestaurantPayload } from '../../types/restaurant.types';

export type RestaurantSummaryProps = {
  item: RestaurantPayload;
  toggleRestaurantFavoriteHandler: (item: RestaurantPayload) => void;
};

const RestaurantSummary: FunctionComponent<RestaurantSummaryProps> = ({
  item,
  toggleRestaurantFavoriteHandler,
}) => (
  <div className="bg-white rounded-lg overflow-hidden relative text-gray-600">
    <div className="w-full h-48 object-cover">
      <Image
        src={item.thumbnail_url || ''}
        alt={item.name}
        className="rounded-lg"
      />
    </div>

    <div className="absolute top-2 right-2">
      <FavoriteButton
        onClick={() => toggleRestaurantFavoriteHandler(item)}
        isActived={item.is_favorite}
      />
    </div>
    <div className="py-4">
      <div className="flex justify-between">
        <Title type="h2" className="text-gray-800 text-xl font-semibold">
          {item.name.length > 20 ? `${item.name.slice(0, 20)}...` : item.name}
        </Title>
        <div>
          <Rating rating={item.rating} ratingCount={item.rating_count} />
        </div>
      </div>
      <Text className="mt-2">
        {item.description && item.description.length > 100
          ? `${item.name.slice(0, 100)}...`
          : item.description}
        {!item.description && '설명이 없습니다.'}
      </Text>
      <Text className="mt-2">
        {item.city} · {getStoreCategoryText(item.category)}
        {item.price_range ? ` · ${item.price_range}만원` : ''}
      </Text>
    </div>
  </div>
);

export default RestaurantSummary;
