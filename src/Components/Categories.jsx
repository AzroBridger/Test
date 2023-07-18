import React from 'react'
import './styles/Categories.css';

const Categories = (props) => {
  return (
    <div className='categories_div_categories'>
        {props.categories.map(el => (
            <div key={el.key} onClick={() => props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
  )
}

export default Categories
