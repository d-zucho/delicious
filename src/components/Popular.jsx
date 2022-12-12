import { useEffect, useState } from 'react'
import styled from 'styled-components'

// Splide imports and styles
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
// import Carousel from './Carousel'

const Popular = () => {
  // State of popular recipes
  const [popular, setPopular] = useState([])
  // use hook useRef to fetch only once

  useEffect(() => {
    getPopular()
  }, [])

  //* Get popular recipes
  const getPopular = async () => {
    const storageCheck = localStorage.getItem('popular')

    // if there is data in local storage, dont fetch again
    if (storageCheck) {
      setPopular(JSON.parse(storageCheck))
      return
    } else {
      const req = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_API}&number=10`
      )

      const data = await req.json() // this stores the data in a variable with an array of recipes as the value as .recipes

      localStorage.setItem('popular', JSON.stringify(data.recipes))
      setPopular(data.recipes) // this sets the state of popular to the data from the API call

      console.log(data)
    }
  }

  return (
    <div className='popular-container'>
      <Wrapper className='popular-wrapper'>
        <h3>Popular</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: true,
            pagination: true,
            gap: '4rem',
            breakpoints: {
              568: {
                perPage: 1,
              },
              878: {
                perPage: 2,
              },
            },
          }}
        >
          {popular.map((recipe) => {
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
  margin: 4rem 0;
  h3 {
    margin-left: 5%;
    font-size: 1.5rem;
  }
`

const Card = styled.div`
  min-height: 17rem;
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
export default Popular
