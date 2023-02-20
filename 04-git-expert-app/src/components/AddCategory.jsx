import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('Marc Marquez')

    const onInputChange = ({target}) => {
        // console.log(target.value)
        setInputValue(target.value)
    }

    const onSubmit = (e)=> {
        e.preventDefault(); 
        // console.log(inputValue)
        if(inputValue.trim().length<=1) return; 


        onNewCategory(inputValue.trim())


        // setCategories( cat => [inputValue, ...cat])
        setInputValue('')

    }

    return (
        <form action="" onSubmit={ onSubmit }>
            <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={ onInputChange} />
        </form>
    )
}
