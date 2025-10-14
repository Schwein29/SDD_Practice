import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import "./Copyright.css"

function Copyright() {
    const {d1} = useContext(AppContext)
    return ( 
        <>
        <p className="title">Derechos reservados por:</p>
        <h1 className="fake">{d1}</h1>
        </>
     );
}

export default Copyright;