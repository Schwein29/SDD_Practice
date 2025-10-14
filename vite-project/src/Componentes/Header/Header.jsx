//los componentes siempre inician con mayuscula
import "./Header.css";
import Copyright from "../Copyright/Copyrighy";

function Header({setX1}) {
    return (
        <>
            <header className="header">
                <h1>Esto es el header</h1>
                <button onClick={
                    () => {
                     setX1("24/7 online para ti");
                    }
                }>Click del header</button>
            </header>
            <Copyright/>
        </>
    )
}

export default Header;
