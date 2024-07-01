import React, { FunctionComponent, Fragment } from 'react';
import type { Prisma } from '@prisma/client';
import Image from '../atoms/Image';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import {
  getStoreCategoryText,
  getCityText,
} from '../../utils/restaurant.utils';
import Rating from '../molecules/Rating';
import FavoriteButton from '../molecules/FavoriteButton';
import type { RestaurantPayload } from '../../types/restaurant.types';
import SectionSlider from '../molecules/SectionSlider';
import { SwiperSlide } from 'swiper/react';

export type RestaurantSummaryProps = {
  item: RestaurantPayload;
  toggleRestaurantFavoriteHandler: (item: RestaurantPayload) => void;
  isFeaturedRestaurant?: boolean;
  appendClassName?: string;
};

const MAX_NAME_LENGTH = 15;
const MAX_DESCRIPTION_LENGTH = 50;

const RestaurantSummary: FunctionComponent<RestaurantSummaryProps> = ({
  item,
  toggleRestaurantFavoriteHandler,
  isFeaturedRestaurant = false,
  appendClassName = '',
}) => (
  <div
    className={`bg-white rounded-lg overflow-hidden relative text-gray-600 ${appendClassName}`}
  >
    <div className="w-full h-48 md:h-24 xl:h-48">
      {!isFeaturedRestaurant && (
        <Image
          src={item.thumbnail_url || ''}
          alt={item.name}
          className="rounded-lg"
        />
      )}
      {isFeaturedRestaurant && (
        <SectionSlider>
          {item.images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="w-full h-48 md:h-24 xl:h-48">
                <Image src={image.url} alt={item.name} className="rounded-lg" />
              </div>
            </SwiperSlide>
          ))}
        </SectionSlider>
      )}
    </div>

    <div className="absolute top-2 right-2 z-50">
      <FavoriteButton
        onClick={() => toggleRestaurantFavoriteHandler(item)}
        isActived={item.is_favorite}
      />
    </div>
    <div className="py-4">
      {isFeaturedRestaurant && (
        <div className="flex justify-between mb-2">
          <div className="flex gap-1 items-center">
            <div className="flex">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_11058)">
                  <path
                    d="M2.25 11V8.5M2.25 3.5V1M1 2.25H3.5M1 9.75H3.5M6.5 1.5L5.63291 3.75443C5.49191 4.12105 5.4214 4.30435 5.31177 4.45854C5.21459 4.5952 5.0952 4.71459 4.95854 4.81176C4.80435 4.9214 4.62105 4.99191 4.25443 5.13291L2 6L4.25443 6.86709C4.62105 7.00809 4.80435 7.0786 4.95854 7.18823C5.0952 7.28541 5.21459 7.4048 5.31177 7.54146C5.4214 7.69565 5.49191 7.87895 5.63291 8.24557L6.5 10.5L7.36709 8.24557C7.5081 7.87895 7.5786 7.69565 7.68824 7.54146C7.78541 7.4048 7.9048 7.28541 8.04146 7.18823C8.19565 7.0786 8.37895 7.00809 8.74557 6.86709L11 6L8.74557 5.13291C8.37895 4.99191 8.19565 4.9214 8.04146 4.81176C7.9048 4.71459 7.78541 4.5952 7.68824 4.45854C7.5786 4.30435 7.50809 4.12105 7.36709 3.75443L6.5 1.5Z"
                    stroke="#FF692E"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_11058">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <Title type="h3" className="text-orange-500 text-sm font-bold">
              {item.featured?.text || '추천 맛집'}
            </Title>
          </div>
          <div className="hidden md:block">
            <Rating rating={item.rating} ratingCount={item.rating_count} />
          </div>
        </div>
      )}
      <div className="flex justify-between">
        <Title type="h2" className="text-gray-800 text-xl font-semibold">
          {item.name.length > MAX_NAME_LENGTH
            ? `${item.name.slice(0, MAX_NAME_LENGTH)}...`
            : item.name}
        </Title>
        <div className={`${isFeaturedRestaurant ? 'md:hidden' : ''}`}>
          <Rating rating={item.rating} ratingCount={item.rating_count} />
        </div>
      </div>
      <Text className="mt-2">
        {item.description && item.description.length > MAX_DESCRIPTION_LENGTH
          ? `${item.name.slice(0, MAX_DESCRIPTION_LENGTH)}...`
          : item.description}
        {!item.description && '설명이 없습니다.'}
      </Text>
      <Text className="mt-2">
        {getCityText(item.city)} · {getStoreCategoryText(item.category)}
        {item.price_range ? ` · ${item.price_range}만원` : ''}
      </Text>
    </div>
  </div>
);

export default RestaurantSummary;
