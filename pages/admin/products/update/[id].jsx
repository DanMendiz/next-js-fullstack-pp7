// import { useContext } from 'react';
import Head from 'next/head';

import Layout from '@/components/Layout';
import Heading from '@/components/Heading';

import ProductForm from '@/components/forms/ProductForm';
import { useUpdate } from '@/lib/tq/products/mutations';

export default function UpdateProduct({ ssd }) {
  return (
    <>
      <Head>
        <title>My Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Heading component="h1">Edit Product</Heading>
        <ProductForm product={ssd} submitHandler={useUpdate} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const product = await fetchProduct(id).catch((err) => console.log(err));
  console.log('product', product);
  return { props: { ssd: JSON.parse(JSON.stringify(product)) } };
}
