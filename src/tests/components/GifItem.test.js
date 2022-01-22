import { GifItem } from "../../component/GifItem"
import { shallow } from 'enzyme'

describe('Probando el componente GifItem', () => {

    const url = "https://localhost:3200/images.jpg"
    const title = "title"
    let wrapper = shallow(<GifItem title={title} url={url} />)

    test('debe de renderizar correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('deben de coincidir los titulos', () => {
        let titleRendered = wrapper.find('p').text()
        expect(titleRendered).toBe(title)
    })


    test('la imagen debe contener la url y el alt correctos', () => {
        const img = wrapper.find('img')

        expect(img.prop("alt")).toBe(title)
        expect(img.prop("src")).toBe(url)

    })

    test('el contenedor debe tener las clases correctas', () => {

        const div = wrapper.find('div')

        expect(div.prop('className')).toBe("card animate__animated animate__fadeIn")
    })


})