import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Ducati'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

    return (
        <>

            <h1>GifExpert</h1>

            {/* <AddCategory setCategories = {setCategories}/> */}
            <AddCategory onNewCategory={onAddCategory} />


            {
                categories.map(category => (<GifGrid key={category} category={category} />))
            }


        </>
    )
}

