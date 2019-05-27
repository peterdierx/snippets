import { shallowMount } from '@vue/test-utils'
import AppMenu from '@/components/AppMenu'

describe( 'AppMenu Component', () => {

  it( 'renders a snippets button', () => {
    const wrapper = shallowMount( AppMenu, { stubs: [ 'router-link' ] } )
    expect( wrapper.find( 'button' ).text() ).toBe( 'Snippets' )
  })

})
