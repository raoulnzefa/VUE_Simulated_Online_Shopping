import  Home from './components/Home'
import  Category from './components/Category'
import  Find from './components/Find'
import  Carter from './components/Carter'
import  Mine from './components/Mine'
import  ItemtDetail from './components/ItemDetail'
import  SearchMain from './components/SearchMain'

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
    }
]