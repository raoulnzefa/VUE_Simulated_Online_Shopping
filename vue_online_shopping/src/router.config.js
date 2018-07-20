import  Home from './components/Home'
import  Category from './components/Category'
import  Find from './components/Find'
import  Carter from './components/Carter'
import  Mine from './components/Mine'
import  ItemtDetail from './components/ItemDetail'
import  SearchMain from './components/SearchMain'
import  VuexTest1 from './components/VuexTest1'
import  VuexTest2 from './components/VuexTest2'

export default[
    {
        path: '/home',
        component : Home
    },
    {
        path :'/',
        redirect : '/home'
    },
    {
        path :'*',
        redirect : '/home'
    },

    {
        path :'/category',
        component : Category
    },

    {
        path :'/find',
        component : Find
    },

    {
        path :'/cart',
        component : Carter
    },
    {
        path :'/mine',
        component : Mine
    },
    {
        path :'/detail/:id',
        component: ItemtDetail
    },
    {
        path:'/search',
        component: SearchMain
    },
    {
        path : '/vuexTest1',
        component: VuexTest1
    },

    {
        path : '/vuexTest2',
        component: VuexTest2
    },
    {
        path : '/category/:id',
        component: Category
    }
]