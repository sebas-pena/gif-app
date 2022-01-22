import React from 'react'
import { shallow } from 'enzyme'
import { GifGallery } from '../../component/GifGallery'
import { useFetchGifs } from '../../hooks/useFetchGifs'

jest.mock('../../hooks/useFetchGifs')

describe('Pruebas sobre <GifGallery />', () => {


    test('Se debe renderizar correctamente el componente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            isLoading: true
        })

        const wrapper = shallow(<GifGallery category='test' />)
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const firstGif = {
            id: 9090,
            url: 'http://localhost:80/algo.jpg',
            title: 'titulo del gif'
        }


        const secondGif = {
            id: 9091,
            url: 'http://localhost:80/algo2.jpg',
            title: '2do titulo del gif'
        }

        useFetchGifs.mockReturnValue({
            data: [firstGif, secondGif],
            isLoading: false
        })
        const wrapper = shallow(<GifGallery category='test' />)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifItem').length).toBe(2)
        expect(wrapper.find('GifItem').at(0).props()).toEqual(firstGif)

    })

})