import {useState} from 'react'

export default function NavLoginForm() {
    const [form, setForm] = useState({
        username: "",
        password: ""
    })
    return (
        <div>
            <form>
                <input type="text" className="w-full border border-sinbad-500 px-3 py-1 rounded-lg shadow-sm mb-2 focus:outline-none focus:border-sinbad-500 focus:ring-1 focus:ring-sinbad-500" placeholder="Username" />
                <input type="password" className="w-full border border-sinbad-500 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-sinbad-500 focus:ring-1 focus:ring-sinbad-500" placeholder="Password" />
            </form>
        </div>
    )
}
