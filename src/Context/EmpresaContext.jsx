import {createContext, useState } from "react";
import PropTypes from "prop-types";

export const EmpresaContext = createContext();

export default function EmpresaProvider({children}) {
    const [empresa, setEmpresa] = useState({});

    return(
        <EmpresaContext.Provider value={{empresa, setEmpresa}}>
            {children}
        </EmpresaContext.Provider>
    );
}

EmpresaProvider.propTypes = {
    children: PropTypes.node.isRequired,
};