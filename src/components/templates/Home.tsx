import React, { FunctionComponent, Fragment } from 'react';
import type { Prisma } from '@prisma/client';
import RestaurantList from '../organisms/RestaurantList';
import SearchBar from '../organisms/SearchBar';
import Navigator from '../organisms/Navigator';
import type { RestaurantPayload } from '../../types/restaurant.types';

export type HomePageProps = {
  restaurantItems: RestaurantPayload[];
};

const HomePage: FunctionComponent<HomePageProps> = ({ restaurantItems }) => (
  <div>
    <div className="p-4 container mx-auto">
      <div className="flex flex-col gap-8">
        <SearchBar />
        <RestaurantList items={restaurantItems} />
      </div>
    </div>
    <Navigator />
  </div>
);

export default HomePage;
