import React from 'react'
import { Card } from '../../layouts'

const Grid = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      <Card/>
    </div>
  )
}

export default Grid
