import {
  STORE_CATEGORY_TEXTS,
  StoreCategory,
  CITY_TEXTS,
} from '../constants/restaurant.const';

export const getStoreCategoryText = (category: string) => {
  return (
    STORE_CATEGORY_TEXTS[category as keyof typeof STORE_CATEGORY_TEXTS] ||
    STORE_CATEGORY_TEXTS[StoreCategory.OTHER]
  );
};

export const getCityText = (city: string) => {
  return CITY_TEXTS[city as keyof typeof CITY_TEXTS] || '';
};
