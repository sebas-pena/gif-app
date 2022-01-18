import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"



export const useFetchGifs = (category) => {


    useEffect((async () => {
        const data = await getGifs(category)
        setState({
            data,
            isLoading: false
        })
    }), [])

    const [state, setState] = useState({

        data: [],
        isLoading: true
    });



    return state
}