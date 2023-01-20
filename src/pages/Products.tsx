import Items from "../data/items.json"
import {Product}  from "../components/Product"

export function Products(){
    return (
    <>
        <h1>Products</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {Items.map(item => (
                <div key={item.id}>
                    <Product {...item} />
                </div>
            ))}
        </div>
    </>
    )
}