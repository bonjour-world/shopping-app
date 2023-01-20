import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/CartContext"

type ProductProps = {
    id : number
    name : string
    price : number
    imgUrl : string
}

export function Product({id, name, price, imgUrl}:ProductProps){
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      } = useShoppingCart()
    const quantity = getItemQuantity(id)
    
    return (
    <div className="card">
        <img src={imgUrl} />
        <h2>{name}</h2>
        <p>{formatCurrency(price)}</p>
        <div>
            {quantity===0?(
                <button onClick={() => increaseCartQuantity(id)}>+ Add to cart</button>
            ):(
                <div>
                    <button onClick={() => decreaseCartQuantity(id)}>-</button>
                    <span>{quantity} in cart</span>
                    <button onClick={() => increaseCartQuantity(id)}>+</button>
                    <button onClick={() => removeFromCart(id)}>Remove from cart</button>
                </div>
            )}
        </div>
    </div>
    )
}