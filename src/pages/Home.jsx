import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (

        <div>
        <h1>COMPONENTE HOME</h1>
        <Link to={'/marcas'}>Motocicletas</Link>
        </div>
        
    )
}

export default Home
