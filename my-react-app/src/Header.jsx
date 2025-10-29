import React, { useState } from 'react'


function Header({data}){
    const [headers, setHeaders] = useState(data);
    return(
        <>
        
        <header>
            <h1 id="title">Items Categories:</h1>
            
                <ul id='catList'>
                    
                    {headers.map( (headerName, index) =>
                       ( <li key={headerName}>
                
                         {headerName} 
                        
                        </li> )

                    )}
                    
 
                </ul>
            
        </header>

        </>

    );
    
}

export default Header;