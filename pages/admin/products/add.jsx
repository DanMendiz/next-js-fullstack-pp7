// import {useContext} from 'react'
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';
import Heading from '@/components/Heading';

import ProductForm from '@/components/forms/ProductForm';
import { useAdd } from '@/lib/tq/products/mutations';

export default function AddProduct() {
  const router = useRouter();
  const addMutation = useAdd();

  const submitHandler = (data) => {
    addMutation.mutate(data);
    router.push('/admin/products/');
  };
  return (
    <>
      <Head>
        <title>Admin Add Product</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Heading component="h1">Add Product</Heading>
        <ProductForm submitHandler={submitHandler} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
