import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas sobre useFetchGifs', () => {


    test('Debe retornar el estado inicial', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('AJR'))
        const { data, isLoading } = result.current

        await waitForNextUpdate()

        expect(data).toEqual([])
        expect(isLoading).toBe(true)
    })

    test('Debe de retornar un arreglo de imagenes y isLoading: false', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('AJR'))

        await waitForNextUpdate()

        const { data, isLoading } = result.current
        expect(data.length > 0).toBe(true)
        expect(isLoading).toBe(false)
    })


})