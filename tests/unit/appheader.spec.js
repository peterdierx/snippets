import { mount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

describe( 'AppHeader Component', () => {
  
  const title    = 'Snippets'
  const subtitle = 'Peter Dierx - 2019'

  it( 'has a title', () => {
    const wrapper = mount( AppHeader )
    expect( wrapper.text() ).toMatch( title )
  })

  it( 'has a subtitle', () => {
    const wrapper = mount( AppHeader )
    expect( wrapper.text() ).toMatch( subtitle )
  })
  
  it( 'renders h1 with title', () => {
    const wrapper = mount( AppHeader )
    expect( wrapper.find( 'h1' ).text() ).toEqual( title )
  })

  it( 'renders h2 with subtitle', () => {
    const wrapper = mount( AppHeader )
    expect( wrapper.find( 'h2' ).text() ).toEqual( subtitle )
  })

})
