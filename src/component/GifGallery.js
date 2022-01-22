import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'
import PropTypes from 'prop-types'

export const GifGallery = ({ category }) => {

    const { data, isLoading } = useFetchGifs(category)

    return (
        <div className=' animate__animated animate__fadeIn' >
            <h3>{category}</h3>
            <div className='gif-gallery'>
                {isLoading && <p>Loading...</p>}
                {
                    data.map(gif => <GifItem key={gif.id} {...gif} />)
                }
            </div>
            <hr />
        </div>
    )
}


GifGallery.propTypes = {
    category: PropTypes.string.isRequired
}