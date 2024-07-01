import { trpc } from '../utils/trpc.utils';
import type { NextPageWithLayout } from './_app';
import HomePage from '~/components/templates/Home';

const IndexPage: NextPageWithLayout = () => {
  const restaurantsQuery = trpc.restaurant.list.useQuery({
    // limit to 100 restaurants (max in trpc) for dummy project, implement pagination later
    limit: 100,
  });

  return <HomePage restaurantItems={restaurantsQuery.data?.items || []} />;
};

export default IndexPage;
