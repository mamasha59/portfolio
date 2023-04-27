import Shop from '../../img/onlineShop.png';
import LandingPage from '../../img/landing.png';
import Netflix from '../../img/netflix.png';
import Facebook from '../../img/facebook.png';
import { IProject } from '@/Types/ProjectType';

interface IProjects {
    titleRu: string;
    titleEng: string;
    techStackShort: string[];
}

const projects:IProjects[] = [
    { 
        titleRu: "интернет магазин",
        titleEng: 'online store',
        techStackShort: ['HTML', 'CSS', 'JS', 'React', 'NextJs'],
    },
    { 
        titleRu: "лендинг",
        titleEng: 'landing page',
        techStackShort: ['HTML', 'CSS', 'JS', 'React'],
    },
    { 
        titleRu: "клон Netflix",
        titleEng: 'Netflix clone',
        techStackShort: ['HTML', 'CSS', 'JS', 'React'],
    },
    { 
        titleRu: "клон Facebook",
        titleEng: 'Facebook clone',
        techStackShort: ['HTML', 'CSS', 'JS', 'React'],
    }
]

const projectsFull:IProject[] = [
    {
        idName: 'интернет магазин',
        techStackFull: ['HTML', 'CSS', 'JS', 'React','react hooks', 'NextJs', 'Tailwind', 'Tailwind ScrollBar',  'ReactSlick Слайдер', 'Intersection-Observer', 'Graphql Apollo', 'Prettier'],
        gitLink: 'https://github.com/mamasha59/online-shopping',
        projectLink: 'https://online-shopping-main.vercel.app/',
        shortDescriptionRu: 'Интернет магазин медицинский товаров, реализованно - корзина, база данных, роутинг, категории.',
        shortDescriptionEng: 'Online store of medical goods, Implemented - cart, database, routing, categories.',
        preview: Shop,
    },
    {
        idName: 'лендинг',
        techStackFull: ['HTML', 'CSS', 'JS', 'React', 'react hooks','Tailwind','Prettier'],
        gitLink: 'https://github.com/mamasha59/testovoe-lendingpage-count',
        projectLink: 'https://testovoe-lendingpage-count.vercel.app/',
        shortDescriptionRu: 'Лендинг пейдж, адаптированный под все устройства и браузеры.',
        shortDescriptionEng: 'Landing page, adapted to all devices and browsers.',
        preview: LandingPage,
    },
    {
        idName: 'клон Netflix',
        techStackFull: ['HTML', 'CSS', 'JS', 'React','react hooks', 'Tailwind','NodeJs','ExpressJs','Mongoose','Axios','Redux Toolkit','RTQ Query','Prettier'],
        gitLink: 'https://github.com/mamasha59/clonenetflix',
        projectLink: '',
        shortDescriptionRu: 'Клон Netflix с The Movie Database (TMDB) API. Реализованно - регистрация/авторизация на Esxpress, local-storage, создание user.',
        shortDescriptionEng: 'Netflix clone with The Movie Database (TMDB) API. Implemented - sign in/up by Express, local-storage, make user.',
        preview: Netflix,
    },
    {
        idName: 'клон Facebook',
        techStackFull: ['HTML', 'CSS', 'JS', 'React','react hooks','Typescript', 'Tailwind','Firebase log-in','Prettier'],
        gitLink: 'https://github.com/mamasha59/clonefacebook',
        projectLink: 'https://clonefacebook-psi.vercel.app/',
        shortDescriptionRu: 'Клон Facebook с авторизацией на firebase и добавление постов.',
        shortDescriptionEng: 'Facebook clone with firebase authorization and adding posts.',
        preview: Facebook,
    },
]

export {projectsFull, projects};