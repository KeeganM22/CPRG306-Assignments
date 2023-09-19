import ItemList from "./item-list"

export default function Item({name, quantity, category}) {

    return (
        <ul class = "list-decimal">
            <li>{name}</li>
            <li>{quantity}</li>
            <li>{category}</li>
        </ul>
        
    );
}