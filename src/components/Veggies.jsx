import { useEffect, useState } from 'react'
import styled from 'styled-components'

// Splide imports and styles
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
// import Carousel from './Carousel'

const Vegetarian = () => {
  // State of vegetarian recipes
  const [vegetarian, setVegetarian] = useState([])

  // use hook useRef to fetch only once
  useEffect(() => {
    getVegetarian()
  }, [])

  //* Get vegetarian recipes
  const getVegetarian = async () => {
    const storageCheck = localStorage.getItem('vegetarian')

    // if there is data in local storage, dont fetch again
    if (storageCheck) {
      setVegetarian(JSON.parse(storageCheck))
      return
    } else {
      const req = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_API}&number=9&tags=vegetarian`
      )

      const data = await req.json() // this stores the data in a variable with an array of recipes as the value as .recipes

      localStorage.setItem('vegetarian', JSON.stringify(data.recipes))
      setVegetarian(data.recipes) // this sets the state of vegetarian to the data from the API call

      console.log(data)
    }
  }

  return (
    <div className='vegetarian-container'>
      <Wrapper className='vegetarian-wrapper'>
        <h3>Our Vegetarian Options</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: true,
            pagination: true,
            gap: '4rem',
            breakpoints: {
              489: {
                perPage: 1,
              },
              829: {
                perPage: 2,
              },
              978: {
                perPage: 3,
              },
            },
          }}
        >
          {vegetarian.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 5%;
`

const Card = styled.div`
  min-height: 12rem;
  border-radius: 2rem;
  overflow: hidden;
  ${'' /* background-color: #dfdfdf; */}
  position: relative;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5);

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    text-shadow: 2px 2px 5px black;
    padding: 0 0.25rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
    position: absolute;
    left: 0;
    object-fit: cover;
  }
`

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 255, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  position: absolute;
  z-index: 3;
  border-radius: 2rem;
`
export default Vegetarian
