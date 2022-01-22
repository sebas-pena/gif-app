import React, { useState } from 'react'
import { AddCategory } from './component/AddCategory'
import { GifGallery } from './component/GifGallery'


export const GiphyApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories)

    return (
        <>
            <h1>AGAUGA</h1>
            <p><b>Another Gif App Using Giphy API</b></p>
            <AddCategory setCategories={setCategories} categories={categories} />
            <hr />

            <ol>
                {
                    categories.map(
                        category => <GifGallery key={category} category={category} />
                    )
                }
            </ol>

        </>
    )

}