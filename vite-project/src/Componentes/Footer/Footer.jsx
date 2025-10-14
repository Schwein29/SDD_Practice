import Copyright from "../Copyright/Copyrighy";

function Footer({setX1, x1}) {
    let nombre = "Un nombre que no existe"
    nombre = "pq ya ha cambiado"
    return ( 
        <>
        <footer>
            <h1>Componente de React {x1}</h1>
            <p>El nombre que nunca existio {nombre}</p>
            <button onClick={
                () => {
                 setX1("OTRO VALOR");
                }
            }>Actualizar el estado</button>
        </footer>
        <Copyright/>
        </>
     );
}

export default Footer;