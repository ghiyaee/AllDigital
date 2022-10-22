import { createContext,useReducer} from "react";
import img1_slider from "../img/img-1.png"
import img2_slider from "../img/labap.png"
import img3_slider from "../img/flash3.png"
import img4_slider from "../img/hdd.png"
import img5_slider from "../img/labsam.png"
import img6_slider from "../img/samsdd2.png"
import img7_slider from "../img/flash1.png"
import img8_slider from "../img/flash2.png"
import img9_slider from "../img/flash4.png"
import img10_slider from "../img/img-2.png"
import img11_slider from "../img/img-3.png"
import img12_slider from "../img/img-4.png"
import img13_slider from "../img/img-5.png"
import img14_slider from "../img/samsdd.png"
import img15_slider from "../img/hddd.png"
import img16_slider from "../img/tablet.png"
import imgfooter1 from "../img/tell.jpg"
import imgfooter2 from "../img/tell.jpg"
import imgfooter3 from "../img/tell.jpg"
import img17_slider from "../img/appel 14.png"

const Context = createContext();
const initail = {
    sidebar: 'Sidehiden',
    openMenu: 'openMenu',
    closeMenu: 'closeMenu',
    filtrMenu: '',
    showMobile: 'actv',
    showLabtab: 'actv',
    showFlash: 'actv',
    showHdd: 'actv',
    showSdd: 'actv',
    upper: 'hidenUp',
    basket: 0,
    showCrad:false,
    card:[],
    backcolor: ['linear-gradient(130deg,#f9f8f3, blue 130% )',
                 'linear-gradient(130deg,#f9f8f3, gray 130%)',
                 'linear-gradient(130deg,#f9f8f3, black 130% )',
                 'linear-gradient(130deg,blue, lightblue 130%)',
                 'linear-gradient(130deg,#f9f8f3, blue 130% )',
                 'linear-gradient(130deg,#f9f8f3, black 130% )',
                   ],
    imgSlider: [{
            id: 1,model: 'mobile',titel: 'The latest version For You',img: img1_slider},
        {
            id: 2,model: 'labtab',titel: 'With High Elegance And Power', img: img2_slider },
        {
            id: 3,model: 'Flash Memory',titel: 'Small But Portable And Strong',img: img3_slider},
        {
            id: 4,model: 'Hdd Disk',titel: 'With High capacity',img: img4_slider},
        {
            id: 5,model: 'Sdd Disk',titel: 'High Speed For Operating System',img: img6_slider },
        {
            id: 6, model: 'Tablet',titel: 'High Speed For Operating System',img: img16_slider},
    ],
    productOffer: [{
        id: 1,model: 'appel 14 pro Max',price: 1500,img: img17_slider , count:0},
        {id: 2,model: 'labtab',price: 3500,img: img2_slider ,count:0},
        {id: 3,model: 'Flash Memory',price: 1000,img: img3_slider ,count:0}],
    imgfooter:[imgfooter1,imgfooter2,imgfooter3],
    products: [{
            id: 1,
            product: 'APPEL 12',
            price: 1000,
            img: img1_slider
        },
        {
            id: 2,
            product: 'labtab 12"',
            price: 3000,
            img: img2_slider
        },
        {
            id: 3,
            product: 'flash 2g',
            price: 500,
            img: img3_slider
        },
        {
            id: 4,
            product: 'hdd 2t"',
            price: 1500,
            img: img4_slider
        },
        {
            id: 5,
            product: 'sdd 1t"',
            price: 2000,
            img: img5_slider
        },
        {
            id: 6,
            product: ' samsung',
            price: 3300,
            img: img6_slider
        },
        {
            id: 7,
            product: 'flash 256',
            price: 1000,
            img: img7_slider
        },
        {
            id: 8,
            product: 'flash 128',
            price: 900,
            img: img8_slider
        },
        {
            id: 9,
            product: 'flash 64',
            price: 500,
            img: img9_slider
        },
        {
            id: 10,
            product: 'mobile ',
            price: 2700,
            img: img10_slider
        },
        {
            id: 11,
            product: 'mobile',
            price: 3500,
            img: img11_slider
        },
        {
            id: 12,
            product: 'mobile',
            price: 3100,
            img: img12_slider
        },
        {
            id: 13,
            product: 'mobile',
            price: 2000,
            img: img13_slider
        },
        {
            id: 14,
            product: 'sdd pc ',
            price: 3900,
            img: img14_slider
        },
        {
            id: 15,
            product: 'flash 256',
            price: 1000,
            img: img15_slider
        },
        {
            id: 16,
            product: 'tablet',
            price: 4000,
            img: img16_slider
        },
    ],
    counter: 0,
    counter1: 0,

}

const reducer = (state, action) => {
    switch (action) {
        case 'SHOW':
            return {
                ...state, sidebar: state.sidebar = 'SidehidenShow',
                openMenu: state.openMenu = 'closeMenu',
                closeMenu: state.closeMenu = 'openMenu',
                filtrMenu: state.filtrMenu = 'filter'
            }
        case 'HIDEN':
            return {
                ...state, sidebar: state.sidebar = 'Sidehiden',
                closeMenu: state.closeMenu = 'closeMenu',
                openMenu: state.openMenu = 'openMenu',
                filtrMenu: state.filtrMenu = ''
            }
        case 'MOBILE':
            return {
                ...state,
                showMobile: state.showMobile = "show"
            }
        case 'DMOBILE':
            return {
                ...state,
                showMobile: state.showMobile = "actv"
            }
        case 'LABTAB':
            return {
                ...state,
                showLabtab: state.showLabtab = "show"
            }
        case 'DLABTAB':
            return {
                ...state,
                showLabtab: state.showLabtab = "actv"
            }
        case 'FLASH':
            return {
                ...state,
                showFlash: state.showFlash = "show"
            }
        case 'DFLASH':
            return {
                ...state,
                showFlash: state.showFlash = "actv"
            }
        case 'HDD':
            return {
                ...state,
                showHdd: state.showHdd = "show"
            }
        case 'DHDD':
            return {
                ...state,
                showHdd: state.showHdd = "actv"
            }
        case 'SDD':
            return {
                ...state,
                showSdd: state.showSdd = "show"
            }
        case 'DSDD':
            return {
                ...state,
                showSdd: state.showSdd = "actv"
            }
        case 'GoToNext':
            return {
                ...state,
                counter: state.counter < state.imgSlider.length - 1 ? state.counter + 1 : state.counter = 0,
                   
            }
        case 'GoToPerv':
            return {
                ...state,
                counter: state.counter > 0 ? state.counter - 1 : state.counter = state.imgSlider.length - 1
            }
        case 'GoToNextList':
            return {
                ...state,
                counter1: state.counter1 <= 0 ? state.counter1 - 300 : state.counter1 = 0
            }
        case 'GoToPervList':
            return {
                ...state,
                counter1: state.counter1 < 0 ? state.counter1 + 300 : state.counter1 = 0
            }
        case 'Upper':
            return {
                ...state,
                upper: state.upper = 'showUp'
            }
        case 'Down':
            return {
                ...state,
                upper: state.upper = 'hidenUp'
            }
        
        case 'Scroll':
            return {
                ...state,
                upper: state.upper = 'hidenUp'
            }
         case 'Basket':
         return {
             ...state,
             basket: state.basket + 1,
            }
       
    
        default: return state
    }
}
const PerProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initail)
    return (
        <Context.Provider value={{ state, dispatch} } >
            {children}
        </Context.Provider>
    )
}
export {Context,PerProvider}