// router
import { NavLink } from 'react-router-dom'
// icons
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'

// styled components
import styled from 'styled-components'

const Category = () => {
  return (
    <>
      <List>
        <SLink to={'cuisine/italian'}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </SLink>
        <SLink to={'cuisine/american'}>
          <FaHamburger />
          <h4>American</h4>
        </SLink>
        <SLink to={'cuisine/thai'}>
          <GiNoodles />
          <h4>Thai</h4>
        </SLink>
        <SLink to={'cuisine/chinese'}>
          <GiChopsticks />
          <h4>Chinese</h4>
        </SLink>
      </List>
    </>
  )
}

const List = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;
  text-align: center;
  background-color: #222424;
  color: #fff;
  padding: 2rem;
  border-radius: 1.25rem;

  ${
    '' /* a {
    border: 1px solid #fff;
    padding: 0.525rem 0.725rem;
    border-radius: 0.25rem;
  } */
  }
`

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  gap: 0.5rem;
  background: linear-gradient(35deg, #494949, #313131);
  width: 7rem;
  height: 7rem;
  font-size: 1rem;
  flex-shrink: 0;

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`

export default Category
