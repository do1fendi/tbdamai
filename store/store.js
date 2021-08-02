import { createContext, useState } from "react";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const [logged, setLogged] = useState(false);

  const getIp = async () => {
    const rawResponse = await fetch("https://api.ipify.org/?format=json", {
      method: "GET",
    });
    const res = await rawResponse.json();
    return res.ip;
  };

  const conversionApi = async (dt) => {
    const data = JSON.stringify({
      data: [dt],
      test_event_code: "TEST78447",
    });
    const rawResponse = await fetch("https://api.tbdamai.net/conversionApi/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    const res = await rawResponse;
    // console.log(res)
  };

  return (
    <StoreContext.Provider value={{ logged, setLogged, getIp, conversionApi }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
