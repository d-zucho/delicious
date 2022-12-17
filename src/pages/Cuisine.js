import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
// import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

//* useParams is a hook that allows us to access the params of the current route/url

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([])
  let params = useParams()

  const getCuisine = async (name) => {
    const req = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOON_API}&cuisine=${name}`
    )

    const data = await req.json() // this stores the data in a variable with an array of recipes as the value as .recipes

    setCuisine(data.results) // this sets the state of popular to the data from the API call
  }

  useEffect(() => {
    //get cuisine of italian
    getCuisine(params.type)

    console.log(params.type)
  }, [params.type])

  return (
    <>
      <Link className='block-display' to='/'>
        <h3>Home</h3>
      </Link>
      <Grid>
        <h1>{cuisine.type}</h1>
        {cuisine.map((recipe) => (
          <Card key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title}</h4>
          </Card>
        ))}
      </Grid>
    </>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 3rem;
`

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`

export default Cuisine
