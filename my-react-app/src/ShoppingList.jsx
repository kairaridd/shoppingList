import React, {useState} from 'react'

function ShoppingList({item, index, onRemoveItem, onChangeNumUnits}){

    const [newUnitVal, setNewUnitVal] = useState(item.numUnits)

    function handleRemoveItem(){

        onRemoveItem(index);

    }

    function handleChangeNumUnits(){
        const newUnit = parseInt(newUnitVal);
        console.log(newUnit);
        onChangeNumUnits(index, newUnit);
    }
               
        
        return (
        <>

            
            <div className = "individual-item">
                
                <p>Item: {item.name}</p>
                <p>Price per unit: {item.unitPrice}</p>
                <p>Number of units: {item.numUnits}</p>
                <p>Total Cost: {item.numUnits * item.unitPrice}</p>

                <label htmlFor={"unitInput" + item.name}>Change number of items below:</label>
                <input type="number" id={"unitInput"+ item.name} value={newUnitVal} onChange = {(input) => setNewUnitVal(input.target.value) }></input>
                <button type="button" onClick = {handleChangeNumUnits} >Confirm</button>

                <p>Note: inputed value must be a positive integer for the change to occur.</p>

                <button onClick={handleRemoveItem}>Remove Item From List</button>
        
            </div>

        
        
        
        
        
        </>

    );

}

export default ShoppingList;