import {
  STORE_CATEGORY_TEXTS,
  StoreCategory,
} from '../constants/restaurant.const';

export const getStoreCategoryText = (category: string) => {
  return (
    STORE_CATEGORY_TEXTS[category as keyof typeof STORE_CATEGORY_TEXTS] ||
    STORE_CATEGORY_TEXTS[StoreCategory.OTHER]
  );
};
