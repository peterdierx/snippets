import { mount } from '@vue/test-utils'
import AppFooter from '@/components/AppFooter.vue'

describe( 'AppFooter Component', () => {

  it( 'renders footer text', () => {
    const wrapper = mount( AppFooter )
    expect( wrapper.text() ).toMatch( 'Footer' )
  })

  it( 'renders h3 with footer', () => {
    const wrapper = mount( AppFooter )
    expect( wrapper.find( 'h3' ).text() ).toEqual( 'Footer' )
  })
})
