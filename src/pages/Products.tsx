import Items from "../data/items.json"

export function Products(){
    return <div>
        <h1>Products</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {Items.map(item => (
                <div>{JSON.stringify(item)}</div>
            ))}
        </div>
    </div>
}