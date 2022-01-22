import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"



export const useFetchGifs = (category) => {


    const [state, setState] = useState(
        {
            data: [],
            isLoading: true
        }
    );

    useEffect((async () => {
        const data = await getGifs(category)

        setState(
            {
                data,
                isLoading: false
            }
        )

    }), [])

    return state
}