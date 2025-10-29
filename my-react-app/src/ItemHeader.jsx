import PropTypes from 'prop-types'

function ItemHeader({itemCat, children}){

    return(
        <div className = "itemHeader">
            <h2>{itemCat}</h2>
            {children}
        </div>
    );

}


export default ItemHeader