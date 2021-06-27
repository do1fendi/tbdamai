import { useState, useEffect, useContext, useRef } from 'react'
import { StoreContext } from "../store/store";
import Router from 'next/router'
import Head from 'next/head'

function register() {
    const name = useRef()
    const email = useRef()
    const pass = useRef()
    const ctx = useContext(StoreContext)

    const [form, setForm] = useState({
        name: "",
        email:"",
        password: "",
      });

    useEffect(() => {
        console.log(ctx.logged)
        if (ctx.logged) { Router.push('/') }
    })

    const webRegister = () =>{
        // validate form 
        if(!form.name){name.current.focus()}
        else if(!form.email){email.current.focus()}
        else if(!validateEmail(form.email))(email.current.focus())
        else if(!form.password){pass.current.focus()}
        // otherwise store to database
        else{
            (async () => {
                const rawResponse = await fetch(`${process.env.BASEURL}/register`, {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form),
                  });
                  const res = await rawResponse.json();
                  console.log(res)
                  if (res.status == 'Success') {
                    localStorage.setItem('token', res.token)
                    ctx.setLogged(true)
                  }
            })()
        }
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <div className="flex">
            <Head>
                <title>TBDamai | Register</title>
            </Head>
            <div className="m-auto mt-80">
                <input
                    ref={name}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    type="text"
                    className="w-full border border-sinbad-500 px-3 py-1 rounded-lg shadow-sm mb-2 focus:outline-none focus:border-sinbad-500 focus:ring-1 focus:ring-sinbad-500"
                    placeholder="Name"
                />
                <input
                    ref={email}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    type="email"
                    className="w-full border border-sinbad-500 px-3 py-1 rounded-lg shadow-sm mb-2 focus:outline-none focus:border-sinbad-500 focus:ring-1 focus:ring-sinbad-500"
                    placeholder="Email"
                />
                <input
                    ref={pass}
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    type="password"
                    className="w-full border border-sinbad-500 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-sinbad-500 focus:ring-1 focus:ring-sinbad-500"
                    placeholder="Password"
                />
                <button
                    onClick={() => webRegister()}
                    className="mb-2 bg-sinbad-700 hover:bg-sinbad-900 text-white font-bold py-1 px-4 rounded-lg mt-2 w-full focus:outline-none"
                >
                    Register
                </button>
            </div>
        </div>
    )
}

export default register
