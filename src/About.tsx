import LinkBar from "./LinkBar";

function HomePage(){
    return(
        <div className="text-center">
            <hr></hr>
            <LinkBar></LinkBar>
            <hr></hr>
            <h1>Who we are</h1>
            <div className="container">
                <div className="row">
                    <div className="text-center border col">
                        <h2>Doug Mead</h2>
                        <h3>CEO, CFO, and Owner</h3>
                        <h4>Doug started the company, and is the CEO and CFO</h4>
                    </div>
                    <div className="text-center border col">
                        <h2>Casey Moots</h2>
                        <h3>Salesperson</h3>
                        <h4>Sells prints. I don't know what else to say.</h4>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default HomePage;