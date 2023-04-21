import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
const [itemName, setItemName] = useState("");
const [itemCategory, setItemCategory] = useState("Produce");

function handleNameInputChange(event) {
const name = event.target.value;
setItemName(name);
}

function handleCategoryInputChange(event) {
const category = event.target.value;
setItemCategory(category);
}

function handleSubmit(event) {
event.preventDefault();
const newItem = {
id: uuid(),
name: itemName,
category: itemCategory,
};
onItemFormSubmit(newItem);
setItemName("");
setItemCategory("Produce");
}

return (
<form onSubmit={handleSubmit}>
<label htmlFor="itemName">Item Name:</label>
<input
     type="text"
     id="itemName"
     name="itemName"
     value={itemName}
     onChange={handleNameInputChange}
   />
<label htmlFor="itemCategory">Category:</label>
<select
     id="itemCategory"
     name="itemCategory"
     value={itemCategory}
     onChange={handleCategoryInputChange}
   >
<option value="Produce">Produce</option>
<option value="Dairy">Dairy</option>
<option value="Bakery">Bakery</option>
<option value="Meat">Meat</option>
</select>
<button type="submit">Add Item</button>
</form>
);
}

export default ItemForm;