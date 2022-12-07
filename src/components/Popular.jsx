import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

// Splide imports and styles
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
// import Carousel from './Carousel'

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
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_API}&number=4`
    )

    const data = await req.json() // this stores the data in a variable with an array of recipes as the value as .recipes
    setPopular(data.recipes) // this sets the state of popular to the data from the API call

    console.log(data)
  }

  return (
    <div>
      <h3>Popular</h3>

      <Splide
        options={{
          perPage: 2,
          gap: '1rem',
          drag: 'free',
          pauseOnHover: true,
          arrows: false,
        }}
        hasTrack={false}
      >
        {popular.map((recipe) => {
          return (
            <div className='populatSection-container'>
              <Wrapper key={recipe.id} className='recipe'>
                <SplideSlide>
                  <Card>
                    <h4>{recipe.title}</h4>
                    <img src={recipe.image} alt={recipe.title} />
                  </Card>
                </SplideSlide>
              </Wrapper>
            </div>
          )
        })}
      </Splide>
    </div>
  )
}

const Wrapper = styled.div`
  border: 1px solid red;
`

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
  }
`

export default Popular
