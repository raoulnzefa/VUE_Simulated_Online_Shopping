import  Home from './components/Home'
import  Category from './components/Category'
import  Find from './components/Find'
// import  Cart from './components/Cart'
import  Cart from './components/Carter'
import  Mine from './components/Mine'
import  ItemtDetail from './components/ItemDetail'
import  SearchMain from './components/SearchMain'
import Login from './components/Login'

//These two is only for learning vuex
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
        component : Cart
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
        path : '/category/:id',
        component: Category
    },
    {
        path : '/login',
        component: Login
    },
    
    
    {
        path : '/vuexTest1',
        component: VuexTest1
    },

    {
        path : '/vuexTest2',
        component: VuexTest2
    },
    
]