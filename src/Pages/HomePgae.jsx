import React from 'react'
import { SideBar } from '../Components/SideBar'
import { ProductsList } from '../Components/ProductsList'
import styled from 'styled-components'

export const HomePgae = () => {
  return (

    <DIV>
      <div className='sidebar'>
        <SideBar/>
      </div>
    
    <div className='product-list'>
      <ProductsList/>
    </div>
    </DIV>
  )
}

const DIV = styled.div`
  display: flex;
  margin-top: 100px;
  
  .sidebar{
    width: 15%;

  }

  .product-list{
    width: 85%;
  }
`
