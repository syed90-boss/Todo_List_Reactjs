import React from 'react'

const Footer = ({length}) => {
    const year = new Date();

  return (
  <footer>
    {length} list {(length <= 1)? "item" : "items"}
  </footer>
  )
}

export default Footer