import React, { useState } from 'react'
import { AddCategory } from './component/AddCategory'
import { GifGallery } from './component/GifGallery'


export const GiphyApp = () => {

    const [categories, setCategories] = useState(['Iron Man', 'AJR', 'Twenty One Pilots'])

    return (
        <>
            <h1>GiphyApp</h1>
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