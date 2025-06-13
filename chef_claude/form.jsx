import './form.css'

export default function Form(){
    const ingredients = ['Oregano', 'Chicken', 'Tomatoes']

    const IngredientListItems= ingredients.map(Ingredient=>(
        <li key={Ingredient}>{Ingredient}</li>
    )
    )

    function handleSubmit(event){
        event.preventDefault()
        const formData= new formData(event.currentTarget)
        const newIngredient= formData.get('ingredient')

        return console.log('Form submitted')
    }

    return(
        <main>
        <form onSubmit={handleSubmit} className="chefClaudeForm" action="">
            <input className='inputBox' type="text" placeholder="eg Eggs" name='ingredient'/>
            <button>Add Ingredient</button>
        </form>

        <ul>
            {IngredientListItems}
        </ul>
        </main>
    )
}