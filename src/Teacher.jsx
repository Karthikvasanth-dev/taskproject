import React from 'react'

const Teacher = (props) => {
  return (
    <div>
<table>
    <tr>
        <th>Name</th>
        <td>{props.name}</td></tr>
        <tr><th>Age</th>
        <td>{props.age}</td></tr>
        <tr><th>Exp</th>
        <td>{props.Exp}</td></tr>
    
</table>
    </div>
  )
}

export default Teacher