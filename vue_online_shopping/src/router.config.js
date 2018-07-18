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
        redirect : '/home'
    },
    {
        path :'*',
        redirect : '/home'
    },

    {
        path :'/category',
        redirect : Category
    },

    {
        path :'/find',
        redirect : Find
    },

    {
        path :'/cart',
        redirect : Carter
    },
    {
        path :'/mine',
        redirect : Mine
    }
]