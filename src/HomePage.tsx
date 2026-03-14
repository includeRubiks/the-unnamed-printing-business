import LinkBar from "./LinkBar";
import StoreProduct from "./StoreProduct";
import fabricimage from "./assets/Fabric Fidget.jpg"

function HomePage(){
    return(
        <div className="text-center">
            <hr></hr>
            <LinkBar></LinkBar>
            <hr></hr>
            <h1>3D printed fidgets and other stuff</h1>
            <hr></hr>
            <h2>Want to buy something? Then navigate to the "Buy Something" page on the top of the page.</h2>
            <h2>We are so grateful for your traffic! Here are some services we offer:</h2>
            <h2>• Custom prints</h2>
            <h4>(from popular printing websites, we do not accept USBs or files for cybersecurity reasons)</h4>
            <h2>• Fidgets</h2>
            <h2>• Practical objects</h2>
            <h2>• Anything from our catalog</h2>
            <h2>Here's some examples of the fidgets we print:</h2>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <StoreProduct imagepath={fabricimage} name="Fabric Fidget" description="Credit to @tbutters_71729 on printables.com" price="$5"/>
                    </div>
                    <div className="col">
                        <StoreProduct imagepath={fabricimage} name="Gear Shifter Fidget" description="Credit to @Jerryie on printables.com" price="$2"/>
                    </div>
                    <div className="col">
                        <StoreProduct imagepath={fabricimage} name="Trap Cup Holder" description="Credit to none other than Doug!" price="$10"/>
                    </div>
                    <div className="col">
                        <StoreProduct imagepath={fabricimage} name="More coming Soon!" description="Check back again soon!" price="..."/>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default HomePage;