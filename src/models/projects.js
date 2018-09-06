import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

let express = 'Express';
let mongodb = 'MongoDB';
let angular = 'Angular';
let node = 'Node.js';
let lodash = 'Lodash';
let jquery = 'jQuery';
let less = 'Less.js';
let sass = 'Sass';
let mithril = 'Mithril.js';
let stripe = 'Stripe';
let ionic = 'Ionic3';
let typeScript = 'TypeScript';
let ngrx = 'ngrx';

const PROJECTS = [
    { 
        id: '1', 
        src: full01, 
        thumbnail: thumb01, 
        caption: 'Oceanic Preservation Society', 
        description: 'Customized CMS template with shop, blog, and customized donation system built with Stripe and Node.js',
        img: 'https://res.cloudinary.com/dsne543uh/image/upload/v1513897092/ops.jpg',
        href: 'https://www.opsociety.org/',
        technologies: [jquery, less, node, express, stripe],
        roles: ['developer'],
        afterContent: 'VIEW'
    },
    { 
        id: '2', 
        src: full02, 
        thumbnail: thumb02, 
        caption: 'Common', 
        description: 'Customized CMS template with blog',
        img: 'https://res.cloudinary.com/dsne543uh/image/upload/v1513897092/common_2.jpg',
        href: 'https://common.is/',
        technologies: [jquery, less],
        roles: ['developer'],
        afterContent: 'VIEW'
    },
    { 
        id: '3', 
        src: full03, 
        thumbnail: thumb03, 
        caption: 'Enli Health Intelligence', 
        description: 'Customized CMS template with suite of sites including a blog for health care community',
        img: 'https://res.cloudinary.com/dsne543uh/image/upload/v1513897092/enli.jpg',
        href: 'https://www.enli.net/',
        technologies: [mithril, jquery, less],
        roles: ['lead developer'],
        afterContent: 'VIEW'
    },
    { 
        id: '4', 
        src: full04, 
        thumbnail: thumb04, 
        caption: 'Camera Goat', 
        description: 'Customized CMS template with online shop for Camera Goat, based in Boulder, CO',
        img: 'https://res.cloudinary.com/dsne543uh/image/upload/v1513897092/goat.jpg',
        href: 'https://www.cameragoat.com/',
        technologies: [jquery, less],
        roles: ['developer'],
        afterContent: 'VIEW'
    },
    { 
        id: '5', 
        src: full05, 
        thumbnail: thumb05, 
        caption: 'Skratch Labs', 
        description: 'Customized blog for sports nutrition company Skratch Labs',
        img: 'https://res.cloudinary.com/dsne543uh/image/upload/v1516060365/skratch.jpg',
        href: 'https://blog.skratchlabs.com/',
        technologies: [jquery, less],
        roles: ['developer'],
        afterContent: 'VIEW'
    },
    { 
        id: '6', 
        src: full06, 
        thumbnail: thumb06, 
        caption: 'HDS Doorways', 
        description: 'MEAN stack enterprise application for the Indian housing industry',
        img: 'https://res.cloudinary.com/dsne543uh/image/upload/v1536274704/kelvyn-ornettte-sol-marte-321650-unsplash_ziza3k.jpg',
        technologies: [angular, less, mongodb, express, node, lodash],
        roles: ['developer', 'vertical lead developer'],
        afterContent: 'VIEW ON REQUEST'
    },
    { 
        id: '7', 
        src: full06, 
        thumbnail: thumb06, 
        caption: 'HDS Work Orders', 
        description: 'Mobile work orders application written in Ionic 3 with Angular 6 and ngrx',
        img: 'https://res.cloudinary.com/dsne543uh/image/upload/v1536274344/WorkOrders_FinalSplash_jhi67g.png',
        technologies: [angular, ionic, sass, typeScript, ngrx],
        roles: ['developer', 'API developer', 'project management'],
        href: 'https://itunes.apple.com/us/app/hds-work-orders/id1383360604?mt=8',
        afterContent: 'VIEW'
    }
];

export default PROJECTS;
