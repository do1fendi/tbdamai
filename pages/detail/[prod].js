import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function prod() {
  const router = useRouter();
  const { prod, id } = router.query;
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function fetchApi() {
        let response = await fetch(`https://api.tbdamai.net/frontend/detail/85`)
        response = await response.json()
        setData(response);
    })()
    
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}

export default prod;
