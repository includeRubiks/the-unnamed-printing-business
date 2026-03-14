interface StoreProductProps{
    imagepath: string,
    price: string,
    description: string,
    name: string
}

function StoreProduct(props: StoreProductProps){
    return(
        <div className="border">
            <br></br>
            <img src={props.imagepath}/>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <h4><b>{props.price}</b></h4>
        </div>
    )
}

export default StoreProduct;