import { createContext, useState } from "react";

export const StoreContext = createContext()

const StoreContextProvider = (props) => {
    const [logged, setLogged] = useState(false)
    function login(){
        setLogged(true)
    }

    return (
        <StoreContext.Provider value={{logged, login}} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider

// import React, { Component } from 'react'

// export default class LoginProvider extends Component {
//     state ={
//         logged: true
//     }
//     render() {
//         return (
//            <UserContext.Provider value={{...this.state}}>
//                {this.props.children}
//            </UserContext.Provider>
//         )
//     }
// }


