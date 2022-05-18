import React, { useState } from "react";
import AddCategory from "./GifExpertApp/AddCategory";
import CategoryGrid from "./GifExpertApp/CategoryGrid";

const GifExpertApp = ()=>{

    //const categories = ["One Punch", "Dragon Ball", "One Piece"]

    const [categories, setCategories] = useState([""]);

    /*
    const handleAdd =()=>{
        //setCategories(categories.concat("Huntex X Hunter"));
        //setCategories(c=>{[...c, "Huntex X Hunter"]});
        setCategories([...categories, "Huntex X Hunter"]);
    } 
    */



    return(
        <>
            <h2>Gif App</h2>
            <AddCategory setCat ={setCategories} />
            <hr />
            {/*<button onClick={handleAdd}>Agregar Categoría</button>*/}
            <ul>
                {
                    categories.map((c, i)=>{
                        return <CategoryGrid 
                        category={c}
                        key={c}
                        />
                    })
                }
            </ul>
            
        </>
    );
};

export{
    GifExpertApp as default,
}