import styled from 'styled-components'
// import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <FormStyle>
      <div>
        <FaSearch />
        <input type='text' name='search' id='search' />
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
  margin: 5rem auto 0 auto;
  width: 100%;
  text-align: center;

  div {
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.2rem;
    color: #fff;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    padding-right: 2rem;
    width: min(650px, 100%);
    letter-spacing: 1px;
  }

  svg {
    position: absolute;
    top: 35%;
    color: #fff;
    margin-left: 1rem;
    font-size: 1.275rem;
  }
`

export default Search
