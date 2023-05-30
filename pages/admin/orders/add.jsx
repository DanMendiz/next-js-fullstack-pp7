// import {useContext} from 'react'
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';
import Heading from '@/components/Heading';

import OrderForm from '@/components/forms/OrderForm';
import { useAdd } from '@/lib/tq/orders/mutations';

export default function AddOrder() {
  const router = useRouter();
  const addMutation = useAdd();

  const submitHandler = (data) => {
    addMutation.mutate(data);
    router.push('/admin/orders/');
  };
  return (
    <>
      <Head>
        <title>Admin Add Order</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Heading component="h1">Add Order</Heading>
        <OrderForm submitHandler={submitHandler} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}