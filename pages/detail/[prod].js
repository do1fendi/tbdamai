import Head from 'next/head';
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../store/store";
import Card from "../../components/Card/Card"

export const getStaticPaths = async () => {
  const res = await fetch("https://api.tbdamai.net/frontend/allproduct");
  const data = await res.json();
  const paths = data.map((path) => {
    return {
      params: { prod: path.prod_name.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  let similarProd = {}
  const prod = context.params.prod;
  const res = await fetch(
    `https://api.tbdamai.net/frontend/detail/${prod}`
  );
  const data = await res.json();

  // Get similar products
  const resSimilarProd = await fetch(`https://api.tbdamai.net/frontend/similar-product/${data[0].prod_category}`)
  const dt = await resSimilarProd.json()
  similarProd = dt

  return {
    props: { data, prod, similarProd },
  };
};

const prod = ({ data, prod, similarProd }) => {


  const ctx = useContext(StoreContext);
  useEffect(() => {
    // conversion api
    (async function runAsync() {
      let ip = await ctx.getIp();
      ctx.conversionApi({
        event_name: "ViewContent",
        action_source: "website",
        event_source_url: `https://tbdamai.net/detail/${prod}`,
        user_data: {
          client_ip_address: ip,
          client_user_agent: navigator.userAgent
            .toString()
            .replace(/([1-9][1-9]|[1-9])_\w+/g, "$1"),
        },
        content_ids: data[0].prod_name,
        content_type: "product",
      });

    })();
  }, []);
  return (
    <div className="container">
      <Head>
        <title>TBdamai | {data[0].prod_name}</title>
        <meta
          name="description"
          content="Menjual berbagai macam model coran untuk bahan pagar"
        />
        <meta
          name="keywords"
          content={data[0].prod_name}
        />

      </Head>
      <div className="container p-5 grid grid-cols-1 md:grid-cols-2">
        <div className="p-5 md:float-right flex md:justify-end">
          <img src={data[0].url} height="400" width="400" layout="responsive"></img>
        </div>
        <div className="p-5 uppercase">
          <h1><span className="font-bold">Nama Produk:</span> {data[0].prod_name.replace(/-/g, " ")}</h1>
          <h1><span className="font-bold">Category Produk:</span> {data[0].prod_category}</h1>
          <h1><span className="font-bold">Ukuran:</span> {data[0].prod_available_size != "" ? (
            <span className="">
              {data[0].prod_available_size}
            </span>
          ) : (
            <span>{data[0].prod_height} x {data[0].prod_width}</span>
          )} {data[0].prod_unit_size}</h1>
          <h1><span className="font-bold">Hash Tag:</span> #{data[0].prod_label1}</h1>
          <h1><span className="font-bold">Deskripsi:</span> {data[0].prod_desc}</h1>
        </div>
      </div>
      <div className="mt-5 mb-2 bg-blue-500 text-white lg:text-xl text-lg w-auto inline-block p-1 px-2">Produk Serupa</div>
      <div className="grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto">
        <Card data={similarProd}></Card>
      </div>
    </div>
  );
}

export default prod;
