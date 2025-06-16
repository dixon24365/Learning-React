import React from 'react'
import './form.css'

export default function Form(){
    const [ingredients, setIngredients] = React.useState([])

    const IngredientListItems= ingredients.map(Ingredient=>(
        <li key={Ingredient}>{Ingredient}</li>
    )
    )

    function handleSubmit(formData){
        const newIngredient= formData.get('ingredient')
        setIngredients(prevIngrdients => [...prevIngrdients, newIngredient])
    }

    return(
        <main>
        <form action={handleSubmit} className="chefClaudeForm">
            <input className='inputBox' type="text" placeholder="eg Eggs" name='ingredient'/>
            <button>Add Ingredient</button>
        </form>

        <ul>
            {IngredientListItems}
        </ul>
        </main>
    )
}