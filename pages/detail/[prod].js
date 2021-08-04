import Head from 'next/head';
import { useContext, useEffect } from "react";
import { StoreContext } from "../../store/store";

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
  const prod = context.params.prod; 
  const res = await fetch(
    `https://api.tbdamai.net/frontend/detail/${prod}`
  );
  const data = await res.json();
  return {
    props: { data, prod },
  };
};

const prod = ({ data, prod }) => {
  const ctx = useContext(StoreContext);
  useEffect(() => {
    // conversion api
    (async function fetchIp() {
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
    <>
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
      <div className="p-5">
        <h1>Nama Produk: {data[0].prod_name}</h1>
        <h1>Category Produk: {data[0].prod_category}</h1>
        <h1>Hash Tag: #{data[0].prod_label1}</h1>
        <h1>Deskripsi: {data[0].prod_desc}</h1>
      </div>
      {/* {JSON.stringify(data)} */}
    </div>
    </>
  );
}

export default prod;
