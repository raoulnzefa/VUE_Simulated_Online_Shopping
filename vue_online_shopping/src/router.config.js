import  Home from './components/Home'
import  Category from './components/Category'
import  Find from './components/Find'
import  Carter from './components/Carter'
import  Mine from './components/Mine'

export default[
    {
        path: '/home',
        component : Home
    },
    {
        path :'/',
        component : Home
    },
    {
        path :'*',
        component : Home
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
    }
]