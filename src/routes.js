import Portfolio from './Views/Portfolio';
import Calculator from './components/Calculator';
import WhatsappClone from './components/WhatsappClone';
import Weather from './components/WeatherApp';
import TodoApp from './components/TodoApp';
// import MyBlog from './components/MyBlog';
import Quiz from './components/Quiz';
import InterestClculator from './components/InterestCalculator';

export default [
    { path: '/', component: Portfolio },
    { path: '/calculator', component: Calculator },
    { path: '/whatsapp', component: WhatsappClone },
    { path: '/weather', component: Weather },
    { path: '/todo', component: TodoApp },
    // { path: '/blog', component: MyBlog },
    { path: '/quiz', component: Quiz },
    { path: '/interest', component: InterestClculator },
]