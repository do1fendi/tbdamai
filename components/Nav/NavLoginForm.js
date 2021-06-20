import { useState, useContext } from 'react'
import {StoreContext} from '../../store/store'


export default function NavLoginForm() {
    const ctx = useContext(StoreContext)

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    function webLogin() {
        (async () => {
            const rawResponse = await fetch(`${process.env.BASEURL}/login`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            const res = await rawResponse.json();
            console.log(res);
            // if login success
            if(res.token){
                console.log(ctx.login)
                ctx.login
                console.log(ctx.login)
            }

        })();
    }
    return (
        <div>
            <input value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} type="text" className="w-full border border-sinbad-500 px-3 py-1 rounded-lg shadow-sm mb-2 focus:outline-none focus:border-sinbad-500 focus:ring-1 focus:ring-sinbad-500" placeholder="Username" />
            <input value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} type="password" className="w-full border border-sinbad-500 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-sinbad-500 focus:ring-1 focus:ring-sinbad-500" placeholder="Password" />
            <button onClick={() => webLogin()} className="bg-sinbad-700 hover:bg-sinbad-900 text-white font-bold py-1 px-4 rounded-lg mt-2 w-full focus:outline-none">Login</button>
        </div>
    )
}
