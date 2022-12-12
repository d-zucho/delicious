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
        <NavLink to={'cousine/italian'}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </NavLink>
        <NavLink to={'cousine/american'}>
          <FaHamburger />
          <h4>American</h4>
        </NavLink>
        <NavLink to={'cousine/thai'}>
          <GiNoodles />
          <h4>Thai</h4>
        </NavLink>
        <NavLink to={'cousine/chinese'}>
          <GiChopsticks />
          <h4>Chinese</h4>
        </NavLink>

        {/* <div>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </div>
        <div>
          <FaHamburger />
          <h4>American</h4>
        </div>
        <div>
          <GiNoodles />
          <h4>Thai</h4>
        </div>
        <div>
          <GiChopsticks />
          <h4>Chinese</h4>
        </div> */}
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
`

export default Category
