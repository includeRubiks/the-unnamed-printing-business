import LinkBar from "./LinkBar";
import StoreProduct from "./StoreProduct";
import fabricimage from "./assets/Fabric Fidget.jpg"

function BuySomething(){
    return(
        <div className="text-center">
            <hr></hr>
            <LinkBar></LinkBar>
            <hr></hr>
            <h2>Welcome to the "shop" page, where you can find what you want to buy!</h2>
            <h4>Note the use of the quotes around "shop". This website selling products would violate Github Pages's terms of service.</h4>
            <hr></hr>
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

export default BuySomething;