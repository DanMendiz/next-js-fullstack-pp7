// import { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { dehydrate, QueryClient } from '@tanstack/react-query';
import { fetchOrders } from '@/lib/api-functions/server/orders/queries';
import { STORAGE_KEY } from '@/lib/tq/orders/settings';

import Layout from '@/components/Layout';
import Heading from '@/components/Heading';
import QueryBoundaries from '@/components/QueryBoundaries';
import OrderList from '@/components/OrderList';
import { Button } from '@mui/material';

import { useDelete } from '@/lib/tq/orders/mutations';
// import { UIContext } from '@/components/contexts/UI.context';

export default function AdminOrderList() {
  const removeMutation = useDelete();

  const removeHandler = (id) => {
    removeMutation.mutate(id);
  };
  return (
    <>
      <Head>
        <title>Admin List Orders</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Heading component="h2">Orders</Heading>
        {/* <Button
          variant="contained"
          component={Link}
          href={`/admin/orders/add`}
        >
          Add Order
        </Button> */}
        <QueryBoundaries>
          <OrderList deleteHandler={removeHandler}/>
        </QueryBoundaries>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  // console.log("LLLL", context);
  const orders = await fetchOrders().catch((err) => console.log(err));
  const queryClient = new QueryClient();

  // If this was remote we'd use 'prefetchQuery' but as we know it we use 'setQueryData'
  await queryClient.setQueryData(
    [STORAGE_KEY],
    JSON.parse(JSON.stringify(orders)),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
