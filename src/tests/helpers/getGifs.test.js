import { getGifs } from "../../helpers/getGifs"



describe('Pruebas sobre getGifs()', () => {


    test('Debe devolver 10 elementos', async () => {


        const gifs = await getGifs('ironman')

        expect(gifs.length).toBe(10)


    })

    test('Busqueda sin categoria debe devolver un array vacio', async () => {


        const gifs = await getGifs('')

        expect(gifs.length).toBe(0)


    })


})