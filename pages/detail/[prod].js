import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useSWR from 'swr';

// const fetcher = (url) => fetch(url).then((res) => res.json())

function prod() {
  const router = useRouter();
  const [data, setData] = useState({});

  useEffect(() => {
    if (!router.isReady) return;
    const { id } = router.query;
    (async function fetchApi() {
      let response = await fetch(`https://api.tbdamai.net/frontend/detail/${id}`)
      response = await response.json()
      setData(response[0]);
    })()
  }, [router.isReady]);  

  return <div className="container p-5 grid grid-cols-1 md:grid-cols-2">
    
    <div className="p-5 md:float-right flex md:justify-end">
    <img
      src={data.url}
      height="400"
      width="400"
      layout="responsive"
    ></img>
    </div>
    <div className="p-5">
      <h1>Nama Produk: {data.prod_name}</h1>
      <h1>Category Produk: {data.prod_category}</h1>
      <h1>Hash Tag: #{data.prod_label1}</h1>
      <h1>Deskripsi: {data.prod_desc}</h1>
    </div>
    {/* {JSON.stringify(data)} */}
  </div>;
}

export default prod;
