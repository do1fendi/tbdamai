import React from "react";
import { useRouter } from "next/router";
import { Head } from "next/head";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

export const getStaticPaths = () => {
  const paths = [
    { params: { lbl: "tombak" } },
    { params: { lbl: "hewan" } },
    { params: { lbl: "lainnya" } },
  ];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const lbl = context.params.lbl;
  const res = await fetch(
    `https://api.tbdamai.net/frontend/product/coran/${lbl}`
  );
  const data = await res.json();
  return {
    props: { data },
  };
};

function cat({ data }) {
  // const router = useRouter();
  // const [data, setData] = useState([]);
  // const { cat, lbl } = router.query;

  // useEffect(() => {
  //   (async function fetchApi() {
  //     let response = await fetch(
  //       `https://api.tbdamai.net/frontend/product/${cat}/${lbl}`
  //     );
  //     response = await response.json();
  //     setData(response);
  //   })();
  // });
  return (
    <div className="container mx-auto p-5">
      {/* <Head>
        <title>Coran</title>
      </Head> */}
      <div className="uppercase text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-5 mb-5">
        {data[0].prod_label1}
      </div>
      <div className="grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto">
        <Card data={data}></Card>
      </div>
    </div>
  );
}

export default cat;
