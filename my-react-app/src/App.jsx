import './App.css'
import Header from './Header.jsx'
import ItemHeader from './ItemHeader.jsx'
import itemHeaderNames from './headerData.js'
import itemMatrix from './itemsData.js'
import ItemDiv from './ItemDiv.jsx'
import ShoppingList from './ShoppingList.jsx'
import ShoppingHeader from './ShoppingHeader.jsx'

import React, {useState, useEffect} from 'react'

function App() {
  {/*Initialize the headers array to be itemHeaderNames array */}
  const [headers, setHeaders] = useState(itemHeaderNames);
  const [itemDataMatrix, setItemData] = useState(itemMatrix);

  const [shoppingList, setShoppingList] = useState([]);
  
  function handleAddItem(item){
    console.log(item);
  
    if (!shoppingList.includes(item)){
      setShoppingList([...shoppingList, item]);
        }

      }//function handleAddItem close

  function handleRemoveItem(removeIndex){
    console.log("Element to be removed is at index: "+removeIndex);

    const newShoppingList = [...shoppingList];

    newShoppingList.splice(removeIndex, 1);

    console.log(newShoppingList);

    setShoppingList(newShoppingList);
  }

  function handleChangeNumUnits(index, newNumUnits){
    if (newNumUnits > 0) {
      const currentList = [...shoppingList];

      const itemToUpdate = { ...currentList[index], numUnits: newNumUnits };

      currentList[index] = itemToUpdate;

      setShoppingList(currentList);

    }//if close

  }//function close
  
      {/* if a change was made to shoppingList, print the list in console */}
      useEffect( () => {
              //side effect code runs here
              console.log("New shopping list:", shoppingList);
          }, [shoppingList]  );
  
  

  return(
    <>
        <Header data={headers} />
      

      {/* Loop through all elements in the headers array and creates an h2 element for each headerName*/}
      {headers.map((headerName, index) => (
        <ItemHeader key = {headerName} itemCat = {headerName}>

        {/*for every item object in the header's list of objects, make an item division for it*/}
          { itemDataMatrix[index].map( (item, index) => (
            
            <ItemDiv key={item.name} itemData = {item} onAddItem={handleAddItem}></ItemDiv>

          ))}
      
        </ItemHeader>

      ))}

      <ShoppingHeader></ShoppingHeader>

      {/*for every item in the shopping list, make a div for it*/}
      {shoppingList.map( (item, itemIndex) => 
    
        <ShoppingList key = {item.name + "ListElement"} item={item} index={itemIndex} onRemoveItem = {handleRemoveItem} onChangeNumUnits = {handleChangeNumUnits}></ShoppingList>

      )}
      


    </>
  );
}

export default App
