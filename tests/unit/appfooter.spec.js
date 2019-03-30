import { shallowMount } from '@vue/test-utils'
import AppFooter from '@/components/AppFooter.vue'

describe( 'AppFooter Component', () => {

  it( 'renders footer text', () => {
    const wrapper = shallowMount( AppFooter )
    expect( wrapper.text() ).toMatch( 'Footer' )
  })

  it( 'renders h3 with footer', () => {
    const wrapper = shallowMount( AppFooter )
    expect( wrapper.find( 'h3' ).text() ).toEqual( 'Footer' )
  })
})
