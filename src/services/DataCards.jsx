// Images projets
import piiquante from "../assets/piiquante.png"
import groupomania from "../assets/groupomania.png"
import nsm from "../assets/nsm.png"

//Images stacks
import angularjs from "../assets/icon-angularjs.png"
import bootstrap from "../assets/icon-bootstrap.png"
import mongodb from "../assets/icon-mongodb.png"
import nodejs from "../assets/icon-nodejs.png"
import reactjs from "../assets/icon-reactjs.png"
import build from "../assets/icon-build.png"

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
        lien_site: "https://keotiseuf.github.io/P6---Construisez-une-API-s-curis-e-pour-une-application-d-avis-gastronomiques/",
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
        lien_site: "https://keotiseuf.github.io/P7-Creez-un-reseau-social-d-entreprise/",
        lien_github: "https://github.com/KeotiseuF/P7-Creez-un-reseau-social-d-entreprise",
    },
    {
        id: 2,
        title: "No Sleep Money",
        url_image: nsm,
        alt: "No Sleep Money",
        stacks: [
            { icon: build, alt: 'build' },
            { icon: build, alt: 'build' },
            { icon: build, alt: 'build' }
        ],
        description: "nsm",
        lien_site: "",
        lien_github: "",
    },
]

export default DataCards;