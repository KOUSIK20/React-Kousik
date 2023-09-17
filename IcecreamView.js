import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered,restocked } from './iceCreamSlice'

export const IcecreamView = () => {
  const numOfIcecreams = useSelector(reducer=>reducer.icecream.numOfIcecreams)
  const dispatch = useDispatch()
  const [value,setValue] = React.useState(1)
  return (
    <div>
        <h2>Number of icecreams -{numOfIcecreams} </h2>
        <button className='icecream button' onClick={()=>dispatch(ordered())}>Order icecream</button>
        <input type ='number' value={value} onChange={(e)=>{setValue(parseInt(e.target.value))}}>
        </input>
        <button className='icecream button' onClick ={()=>dispatch(restocked(value))}>Restock icecreams</button>
    </div>
  )
}
