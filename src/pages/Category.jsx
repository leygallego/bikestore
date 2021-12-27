import React from 'react';
import { useParams } from 'react-router-dom';


function Category() {

    const { id } = useParams()

    return (
        <div>
        <h1>Esta es la categoría individual</h1>
        <h2>{id}</h2>
        </div>
        
    )
}

export default Category
