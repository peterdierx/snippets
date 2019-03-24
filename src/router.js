import Vue         from 'vue'
import Router      from 'vue-router'
import Home        from '@/views/Home'
import SnippetNew  from '@/components/SnippetNew'
import SnippetShow from '@/components/SnippetShow'
import SnippetEdit from '@/components/SnippetEdit'

Vue.use( Router )

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {  path: '/',                    name: 'home', component: Home },
    {  path: '/snippet/new',         name: 'new' , component: SnippetNew },
    {  path: '/snippet/:recid',      name: 'show', component: SnippetShow, props: true },
    {  path: '/snippet/edit/:recid', name: 'edit', component: SnippetEdit, props: true }
  ]
})
