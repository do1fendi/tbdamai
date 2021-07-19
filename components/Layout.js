import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import { useEffect, useState, useContext } from "react";
import { StoreContext } from "../store/store";

export default function Layout({ children }) {
  const ctx = useContext(StoreContext);
  useEffect(() => {
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token")) {
      (async () => {
        const rawResponse = await fetch(`${process.env.BASEURL}/verifyToken`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const res = await rawResponse.json();
        console.log(res);
        if (res.status == "Success") {
          ctx.setLogged(true);
        } else {
          ctx.setLogged(false);
        }
      })();
    }
  }, []);
  return (
    <>
      <Nav />
      <Header />      
        {children}
      <Footer />
    </>
  );
}
