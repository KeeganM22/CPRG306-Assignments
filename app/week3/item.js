import ItemList from "./item-list"

export default function Item({ name, quantity, category }) {

    return (
        <ul class = "list-decimal">
            <li>{ItemList.item1.name}</li>
            <li>{ItemList.item1.quantity}</li>
            <li>{ItemList.item1.category}</li>
        </ul>
        
    );
}