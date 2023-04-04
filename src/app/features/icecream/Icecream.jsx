import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

export const IcecreamView = () => {
    const [value, setvalue] = useState(1)
    const dispatch = useDispatch()
    const numOfIcecreams = useSelector((state)=>state.icecream.numOfIcecreams)
  return (
    <div>
        <h2>Number of icecreams - {numOfIcecreams}</h2>
        <button onClick  = {() => dispatch(ordered())}>Order Ice-cream</button>
        <input type = 'number' value = {value} onChange = {e => setvalue(parseInt(e.target.value))} />
        <button onClick  = {() => dispatch(restocked(value))}>Restock Ice-cream</button>
    </div>
  )
}
