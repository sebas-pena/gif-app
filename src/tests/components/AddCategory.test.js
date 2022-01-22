import React from 'react'
import { shallow } from 'enzyme'
import { AddCategory } from '../../component/AddCategory'


describe('Pruebas sobre <AddCategory />', () => {

    const setCategories = jest.fn()
    const wrapper = shallow(<AddCategory setCategories={setCategories} categories={['']} />)

    beforeEach(() => {
        jest.clearAllMocks()
    })


    test('Debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot()

    })

    test('El input debe coincidir con lo tipado', () => {
        const input = wrapper.find('input')
        input.simulate("change", { target: { value: "foo" } })
    })

    test('NO debe postear la informacion con el input vacio', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { }, target: {} })

        expect(setCategories)

    })

    test('Debe postear la informacion y vaciar el input', () => {

        const input = wrapper.find('input')

        input.simulate('change', { target: { value: 'hola' } })

        wrapper.find('form').simulate('submit', { preventDefault() { }, target: {} })

        expect(setCategories).toHaveBeenCalledTimes(1)
        expect(input.prop('value')).toBe('')

    })

})