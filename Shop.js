import React from 'react'
import { CakeView } from './cakes/CakeView'
import { IcecreamView } from './iceCream/IcecreamView'

export const Shop = () => {
  return (
    <div className='shop'>
        <h1 className='a'>Welcome to the Shop</h1>
        <CakeView/>
        <IcecreamView/>
    </div>
  )
}
