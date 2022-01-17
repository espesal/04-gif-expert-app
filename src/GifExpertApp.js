import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ( { value = 10 } ) => {


    const [categories, setCategories] = useState([]);

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={ setCategories }/>
            
            <ol>
                {
                    categories.map( category  => (
                        <GifGrid key={ category } category={ category } />
                    ))
                }
            </ol>
        </>
    );   
}

export default GifExpertApp;