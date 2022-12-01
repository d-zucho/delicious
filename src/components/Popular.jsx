import { useEffect, useState, useRef } from 'react'

const Popular = () => {
  // State of popular recipes
  const [popular, setPopular] = useState([])
  // use hook useRef to fetch only once
  const dataFetchedRef = useRef(false)

  useEffect(() => {
    if (dataFetchedRef.current) return
    dataFetchedRef.current = true
    getPopular()
  }, [])

  //* Get popular recipes
  const getPopular = async () => {
    const req = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_API}&NUMBER=1`
    )

    const data = await req.json() // this stores the data in a variable with an array of recipes as the value as .recipes
    setPopular(data.recipes) // this sets the state of popular to the data from the API call

    console.log(data)
  }

  return (
    <div>
      <h1>Popular</h1>
      {popular.map((recipe) => {
        return (
          <div key={recipe.id} className='recipe'>
            <h2>{recipe.title}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default Popular
