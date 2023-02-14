import * as React from 'react';
import { createContext } from 'react';

const Context = createContext()
const {Provider} = Context

const ContextProvider = (props) => {
    return ( 
        <Provider
            value={""}
        >
            {props.children}
        </Provider>
     );
}
 
export {ContextProvider, Context};