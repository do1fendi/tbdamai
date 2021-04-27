import { useState } from "react"

function login() {
    const [count, setCount] = useState(0)
    const add = (dd) => { setCount(prevCount => prevCount + dd) }

    return (
        <div>
            <h1 className="text-5xl font-bold text-susu">Hello world!</h1>
            <h1>
                {count}
            </h1>

            <button className="bg-blue-500" onClick={() => add(5)}>+</button>
            <button className="bg-red-500 hover:bg-red-700 ...">
  Hover me
</button>
        </div>
    )
}

export default login
