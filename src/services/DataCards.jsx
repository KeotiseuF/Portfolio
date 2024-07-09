// Images projets
import piiquante from "../assets/piiquante.png";
import groupomania from "../assets/groupomania.png";
import nsm from "../assets/nsm.png";

//Images stacks
import angularjs from "../assets/icon-angularjs.png";
import bootstrap from "../assets/icon-bootstrap.png";
import mongodb from "../assets/icon-mongodb.png";
import nodejs from "../assets/icon-nodejs.png";
import reactjs from "../assets/icon-reactjs.png";
import vitejs from "../assets/icon-vitejs.png";
import coingecko from "../assets/icon-coingecko.png";
import chartjs from "../assets/icon-chartjs.png";

const DataCards = [
    {
        id: 0,
        title: "Piiquante",
        url_image: piiquante,
        alt: "piiquante",
        stacks: [
            { icon: angularjs, alt: 'angularjs' },
            { icon: bootstrap, alt: 'bootstrap' },
            { icon: mongodb, alt: 'mongodb' },
            { icon: nodejs, alt: 'nodejs' }
        ],
        description: 'piiquante',
        lien_site: "https://piiquante.curtis-dev.eu",
        lien_github: "https://github.com/KeotiseuF/P6---Construisez-une-API-s-curis-e-pour-une-application-d-avis-gastronomiques",
    },
    {
        id: 1,
        title: "Groupomania",
        url_image: groupomania,
        alt: "groupomania",
        stacks: [
            { icon: reactjs, alt: 'reactjs' },
            { icon: mongodb, alt: 'mongodb' },
            { icon: nodejs, alt: 'nodejs' }
        ],
        description: "groupomania",
        lien_site: "https://groupomania.curtis-dev.eu",
        lien_github: "https://github.com/KeotiseuF/P7-Creez-un-reseau-social-d-entreprise",
    },
    {
        id: 2,
        title: "No Sleep Money",
        url_image: nsm,
        alt: "No Sleep Money",
        stacks: [
            { icon: vitejs, alt: 'vitejs' },
            { icon: nodejs, alt: 'nodejs' },
            { icon: chartjs, alt: 'chartjs' },
            { icon: coingecko, alt: 'coingecko' }
        ],
        description: "nsm",
        lien_site: "https://nsm.curtis-dev.eu",
        lien_github: "https://github.com/KeotiseuF/NSM",
    },
]

export default DataCards;