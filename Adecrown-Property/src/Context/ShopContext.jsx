import React, {createContext} from "react";
import Top_Demand from "../Mapping/Home-page-Property-Display";




export const ShopContext = createContext (null)



const ShopContextProvider = (props) => {
    const ContextValue = {Top_Demand}

    return(
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;