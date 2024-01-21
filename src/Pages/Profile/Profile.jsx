import { useContext } from "react";
import { EmpresaContext } from "../../Context/EmpresaContext";

export function Profile(){
    const {empresa} = useContext(EmpresaContext);
    return <h1>{empresa.name_empresa}</h1>
}