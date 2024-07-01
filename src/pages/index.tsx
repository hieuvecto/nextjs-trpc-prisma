import { trpc } from '../utils/trpc.utils';
import type { NextPageWithLayout } from './_app';
import type { inferProcedureInput } from '@trpc/server';
import Link from 'next/link';
import { Fragment } from 'react';
import RestaurantSummary from '~/components/organisms/RestaurantSummary';
import HomePage from '~/components/templates/Home';
import type { AppRouter } from '~/server/routers/_app';
import type { Prisma } from '@prisma/client';
import type { RestaurantPayload } from '~/types/restaurant.types';

const IndexPage: NextPageWithLayout = () => {
  const restaurantsQuery = trpc.restaurant.list.useQuery({
    // limit to 100 restaurants (max in trpc) for dummy project, implement pagination later
    limit: 100,
  });

  return <HomePage restaurantItems={restaurantsQuery.data?.items || []} />;
};

export default IndexPage;

/**
 * If you want to statically render this page
 * - Export `appRouter` & `createContext` from [trpc].ts
 * - Make the `opts` object optional on `createContext()`
 *
 * @link https://trpc.io/docs/v11/ssg
 */
// export const getStaticProps = async (
//   context: GetStaticPropsContext<{ filter: string }>,
// ) => {
//   const ssg = createServerSideHelpers({
//     router: appRouter,
//     ctx: await createContext(),
//   });
//
//   await ssg.post.all.fetch();
//
//   return {
//     props: {
//       trpcState: ssg.dehydrate(),
//       filter: context.params?.filter ?? 'all',
//     },
//     revalidate: 1,
//   };
// };
