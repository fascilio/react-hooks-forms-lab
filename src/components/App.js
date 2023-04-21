// import React, { useState } from "react";
// import ShoppingList from "./ShoppingList";
// import Header from "./Header";
// import itemData from "../data/items";

// function App() {
//   const [items, setItems] = useState(itemData);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   function handleDarkModeClick() {
//     setIsDarkMode((isDarkMode) => !isDarkMode);
//   }

//   return (
//     <div className={"App " + (isDarkMode ? "dark" : "light")}>
//       <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
//       <ShoppingList items={items} />
//     </div>
//   );
// }

// export default App;
 
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingList from "./ShoppingList";
import ItemForm from "./ItemForm";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
const [items, setItems] = useState([
{ id: uuid(), name: "Apples", category: "Produce" },
{ id: uuid(), name: "Cheese", category: "Dairy" },
{ id: uuid(), name: "Bread", category: "Bakery" },
{ id: uuid(), name: "Steak", category: "Meat" },
   
]);
function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }



function handleItemFormSubmit(newItem) {
setItems([...items, newItem]);
}

return (
<div className={"App " + (isDarkMode ? "dark" : "light")}>
<Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
<ItemForm onItemFormSubmit={handleItemFormSubmit} />
<ShoppingList items={items} />
</div>
);
}

export default App;