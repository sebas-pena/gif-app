import React from 'react';
import { shallow } from 'enzyme'
import { GiphyApp } from '../GiphyApp';


describe('Pruebas sobre <GiphyApp />', () => {

    test('Debe renderizar <GiphyApp /> correctamente', () => {

        const wrapper = shallow(<GiphyApp />)
        expect(wrapper).toMatchSnapshot()

    })

    test('Debe renderizar la cantidad correctas de listas', () => {

        const categories = ['imagine dragons', 'AJR']
        const wrapper = shallow(<GiphyApp defaultCategories={categories} />)
        expect(wrapper.find('GifGallery').length).toBe(categories.length)

    })

})