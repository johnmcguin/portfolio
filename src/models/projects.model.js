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
        caption: 'Oceanic Preservation Society', 
        description: 'Customized CMS template with shop, blog, and customized donation system built with Stripe and Node.js',
        img: 'https://res.cloudinary.com/dsne543uh/image/upload/v1513897092/ops.jpg',
        href: 'https://www.opsociety.org/',
        technologies: [jquery, less, node, express, stripe],
        roles: ['developer'],
        credits: ['created at Human Design'],
        afterContent: 'VIEW'
    },
    { 
        id: '2', 
        caption: 'Common', 
        description: 'Customized CMS template with blog',
        img: 'https://res.cloudinary.com/dsne543uh/image/upload/v1513897092/common_2.jpg',
        href: 'https://common.is/',
        technologies: [jquery, less],
        roles: ['developer'],
        credits: ['created at Human Design'],
        afterContent: 'VIEW'
    },
    { 
        id: '3', 
        caption: 'Enli Health Intelligence', 
        description: 'Customized CMS template with suite of sites including a blog for health care community',
        img: 'https://res.cloudinary.com/dsne543uh/image/upload/v1513897092/enli.jpg',
        href: 'https://www.enli.net/',
        technologies: [mithril, jquery, less],
        roles: ['lead developer'],
        credits: ['created at Human Design'],
        afterContent: 'VIEW'
    },
    { 
        id: '4', 
        caption: 'Camera Goat', 
        description: 'Customized CMS template with online shop for Camera Goat, based in Boulder, CO',
        img: 'https://res.cloudinary.com/dsne543uh/image/upload/v1513897092/goat.jpg',
        href: 'https://www.cameragoat.com/',
        technologies: [jquery, less],
        roles: ['developer'],
        credits: ['created at Human Design'],
        afterContent: 'VIEW'
    },
    { 
        id: '5', 
        caption: 'Skratch Labs', 
        description: 'Customized blog for sports nutrition company Skratch Labs',
        img: 'https://res.cloudinary.com/dsne543uh/image/upload/v1516060365/skratch.jpg',
        href: 'https://blog.skratchlabs.com/',
        technologies: [jquery, less],
        roles: ['developer'],
        credits: ['created at Human Design'],
        afterContent: 'VIEW'
    },
    { 
        id: '6', 
        caption: 'HDS Doorways', 
        description: 'MEAN stack enterprise application for the Indian housing industry',
        img: 'https://res.cloudinary.com/dsne543uh/image/upload/v1536274704/kelvyn-ornettte-sol-marte-321650-unsplash_ziza3k.jpg',
        technologies: [angular, less, mongodb, express, node, lodash],
        roles: ['developer', 'vertical lead developer'],
        credits: ['created at HDS'],
        afterContent: 'VIEW ON REQUEST'
    },
    { 
        id: '7', 
        caption: 'HDS Work Orders', 
        description: 'Mobile work orders application written in Ionic 3 with Angular 6 and ngrx',
        img: 'https://res.cloudinary.com/dsne543uh/image/upload/v1536274344/WorkOrders_FinalSplash_jhi67g.png',
        technologies: [angular, ionic, sass, typeScript, ngrx],
        roles: ['developer', 'API developer', 'project management'],
        credits: ['created at HDS'],
        href: 'https://itunes.apple.com/us/app/hds-work-orders/id1383360604?mt=8',
        afterContent: 'VIEW'
    }
];

export default PROJECTS;
