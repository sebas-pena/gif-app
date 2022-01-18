import React, { useState } from 'react'
import PropTypes from 'prop-types'



export const AddCategory = ({ setCategories, categories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue && !categories.includes(inputValue)) {
            setCategories([inputValue, ...categories])
            setInputValue('')
        }
    }

    const handleInputChange = (e) => setInputValue(e.target.value)


    return (
        <form onSubmit={handleSubmit} >
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                name='category'
                placeholder='Add Category'
            />
        </form>
    )

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
