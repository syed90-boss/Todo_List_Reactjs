import React from 'react'
import { useState } from 'react';
import {FaTrashAlt} from "react-icons/fa"


const Content = ({items, handleCheck, handleDelete, isLoading}) => {
    
    

  return (
    <>
        {
            (items.length)?(
                <ul>
                {
                    items.map((item) => (
                        <li className='item' key={item.id}>
                            <input type="checkbox" checked={item.checked} 
                            onChange={() => handleCheck(item.id)}/>

                            <label onDoubleClick={() => handleCheck(item.id)}
                                style={(item.checked)? {textDecoration : 'line-through'} : null}>{item.item}</label>

                            <FaTrashAlt role="button" tabIndex="0" 
                            onClick={() => handleDelete(item.id)}/>
                        </li>
                    ))
                }
            </ul>
            ) : (

                <p style={{marginTop: '12rem'}}>Your list is empty</p>
            )
        }
    </>
  )
}

export default Content