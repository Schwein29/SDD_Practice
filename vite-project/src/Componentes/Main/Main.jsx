import Jumbotron from "./Jumbotron";

function Main({x1}) {
    return (
        <>
                <p>Maria Elena Deras Barrientos</p>
                <h1>Compartiendo: {x1} </h1>
                <Jumbotron otronomre = {x1} />
        </>
    );
}

export default Main;
