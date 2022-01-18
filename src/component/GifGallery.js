import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'
export const GifGallery = ({ category }) => {

    const { data, isLoading } = useFetchGifs(category)

    console.log(isLoading)
    return (
        <div className=' animate__animated animate__fadeIn' >
            <h3>{category}</h3>
            <div className='gif-gallery'>
                {
                    data.map(gif => <GifItem key={gif.id} {...gif} />)
                }
            </div>
            <hr />
        </div>
    )
}
