import React from 'react';
import type { InferGetStaticPropsType } from 'next';
// import getAllProducts from 'framework/shopify/product/get-all-products';
import getAllProducts from '@framework/product/get-all-products';
import { getConfig } from '@framework/api/config';
import { Layout } from '@components/common';

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{JSON.stringify(products)}</div>;
}

Home.Layout = Layout;
