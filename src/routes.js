import Portfolio from './Views/Portfolio'
// import Project from './Views/Project'
import Calculator from './components/Calculator'
import WhatsappClone from './components/WhatsappClone'
import Weather from './components/WeatherApp'
import TodoApp from './components/TodoApp'
import MyBlog from './components/MyBlog'

export default [
    {path: '/', component: Portfolio},
    // {path: '/project', component: Project},
    {path: '/calculator', component: Calculator},
    { path: '/whatsapp', component: WhatsappClone },
    { path: '/weather', component: Weather },
    {path: '/todo', component: TodoApp},
    {path: '/blog', component: MyBlog}
]