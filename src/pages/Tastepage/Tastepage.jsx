import React from 'react'
import Tastemakers from '../../components/Tastemakers'
import Tastepost1 from '../../components/Tastepost1';
import Tastepost2 from '../../components/Tastepost2';
import {useSelector} from 'react-redux'
import './Tastepage.css'


const Tastepage = () => {
  const tasteReducer = useSelector(state => state.tasteReducer);
  return (
    <div className='tastepage'>
       { tasteReducer === 0 ? (<Tastemakers />) : tasteReducer === 1 ? (<Tastepost1 />) : (<Tastepost2 />)}
    </div>
  )
}

export default Tastepage
