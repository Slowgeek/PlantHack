import React from 'react'
import Store from "./Store";
import { productData} from './Store/data';

const Ministore = () => {
    return (
        <div>
            <Store heading='WELCOME to our Mini Store!' data={productData} />
        </div>
    )
}

export default Ministore
