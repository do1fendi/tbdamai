import { createContext, useState } from "react";
import sha256 from "js-sha256";

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
    const json = JSON.stringify({
      data: [dt],
      test_event_code: "TEST13717",
    });
    const rawResponse = await fetch("https://api.tbdamai.net/conversionApi/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    });

    const res = await rawResponse;
    // console.log(res)
  };

  const hash = (dt) => {
    return sha256(dt);
  };

  const ga = (url) => {
    window.gtag("config", "UA-140006907-2", {
      page_path: url,
    });
  };

  const getUrlParameter = (sParam) => {
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split("&"),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split("=");

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined
          ? true
          : decodeURIComponent(sParameterName[1]);
      }
    }
  };

  return (
    <StoreContext.Provider
      value={{
        logged,
        setLogged,
        getIp,
        conversionApi,
        hash,
        ga,
        getUrlParameter
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
