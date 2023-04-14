import Shop from '../../img/onlineShop.png';
import LandingPage from '../../img/landing.png';
import Netflix from '../../img/netflix.png';
import Facebook from '../../img/facebook.png';

 const projects = [
    { 
        title: "интернет магазин",
        techStackShort: ['HTML', 'CSS', 'JS', 'React', 'NextJs'],
    },
    { 
        title: "лендинг",
        techStackShort: ['HTML', 'CSS', 'JS', 'React'],
    },
    { 
        title: "клон Netflix",
        techStackShort: ['HTML', 'CSS', 'JS', 'React'],
    },
    { 
        title: "клон Facebook",
        techStackShort: ['HTML', 'CSS', 'JS', 'React'],
    }
]

const projectsFull = [
    {
        idName: 'интернет магазин',
        techStackFull: ['HTML', 'CSS', 'JS', 'React','react hooks', 'NextJs', 'Tailwind', 'Tailwind ScrollBar',  'ReactSlick Слайдер', 'Intersection-Observer', 'Graphql Apollo', 'Prettier'],
        gitLink: 'https://github.com/mamasha59/online-shopping',
        projectLink: 'https://online-shopping-main.vercel.app/',
        shortDescription: 'Интернет магазин медицинский товаров, реализованно - корзина, база данных, роутинг, категории.',
        preview: Shop,

    },
    {
        idName: 'лендинг',
        techStackFull: ['HTML', 'CSS', 'JS', 'React', 'react hooks','Tailwind','Prettier'],
        gitLink: 'https://github.com/mamasha59/testovoe-lendingpage-count',
        projectLink: 'https://testovoe-lendingpage-count.vercel.app/',
        shortDescription: 'Лендинг пейдж, адаптированный под все устройства и браузеры.',
        preview: LandingPage,
    },
    {
        idName: 'клон Netflix',
        techStackFull: ['HTML', 'CSS', 'JS', 'React','react hooks', 'Tailwind','NodeJs','ExpressJs','Mongoose','Axios','Redux Toolkit','RTQ Query','Prettier'],
        gitLink: 'https://github.com/mamasha59/clonenetflix',
        projectLink: '',
        shortDescription: 'Клон Netflix с The Movie Database (TMDB) API. Реализованно - регистрация/авторизация на Esxpress, local-storage, создание user.',
        preview: Netflix,
    },
    {
        idName: 'клон Facebook',
        techStackFull: ['HTML', 'CSS', 'JS', 'React','react hooks','Typescript', 'Tailwind','Firebase log-in','Prettier'],
        gitLink: 'https://github.com/mamasha59/clonefacebook',
        projectLink: 'https://clonefacebook-psi.vercel.app/',
        shortDescription: 'Клон Facebook с авторизацией на firebase и добавление постов.',
        preview: Facebook,
    },
]

export {projectsFull, projects};