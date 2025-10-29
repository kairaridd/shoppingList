import React, {useState, useEffect} from 'react'

function ItemDiv({itemData, onAddItem}){
    
    function handleAddItem(){
        onAddItem(itemData);
    }


    return( 
        <>
            <div id = {itemData.name} className="individual-item">

                <p>Item: {itemData.name} -- Price per unit: {itemData.unitPrice}</p>
                <button onClick={handleAddItem}>Add to Shopping List</button>

            </div>


            
        </>
    );
}

export default ItemDiv;