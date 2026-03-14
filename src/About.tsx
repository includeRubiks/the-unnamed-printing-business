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
                        <h2>Henry Lynch</h2>
                        <h3>Owner</h3>
                        <h4>Henry started the business, and thus is the owner. He transferred the CEO role to Doug, and hired Jack.</h4>
                    </div>
                    <div className="text-center border col">
                        <h2>Doug Mead</h2>
                        <h3>CEO</h3>
                        <h4>Doug is in charge of the company for the moment being, and is also the one who set up this website!</h4>
                    </div>
                    <div className="text-center border col">
                        <h2>Jack Joyner</h2>
                        <h3>Salesperson - Employee of the month</h3>
                        <h4>Jack was the first employee of the company, other than Henry. He sells the prints.</h4>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default HomePage;