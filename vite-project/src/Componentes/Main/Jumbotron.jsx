import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import "./Jumbotron.css"

function Jumbotron({otronomre}) {
    const {c1 , setC1} = useContext(AppContext)
    const {d1 , setD1} = useContext(AppContext)

    return ( 
        <>
        <p>Jumbotron:</p>
        <h1>{otronomre}</h1>
        <h1 className="jumbotron__title jumbotron__title--purple">{c1}</h1>
        <button onClick={
            () => {
                setD1("UTLD");
            }
        }>Switch sides</button>
        </>
     );
}

export default Jumbotron;