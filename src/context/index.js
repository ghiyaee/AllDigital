import { createContext, useReducer } from "react";


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
const Context = createContext();
const initail = {
    sidebar: 'Sidehiden',
    openMenu: 'openMenu',
    closeMenu: 'closeMenu',
    filtrMenu:'',
    showMobile: 'actv',
    showLabtab: 'actv',
    showFlash: 'actv',
    showHdd: 'actv',
    showSdd: 'actv',
    imgSlider: [img1_slider, img2_slider, img3_slider, img4_slider, img6_slider],
    listImg: [img1_slider, img2_slider, img3_slider, img4_slider, img6_slider,
             img5_slider, img7_slider, img8_slider, img9_slider, img10_slider,
             img11_slider, img12_slider, img13_slider, img14_slider, img15_slider],
    counter: 0,
    counter1:-3000,
    
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
                ...state,showMobile:state.showMobile = "show"
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
             showSdd : state.showSdd  = "show"
         }
         case 'DSDD':
         return {
             ...state,
             showSdd : state.showSdd  = "actv"
            }
          case 'GoToNext':
          return {
              ...state,
              counter: state.counter < state.imgSlider.length - 1 ? state.counter + 1 : state.counter = 0
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
             counter1: state.counter1 < 0 ? state.counter1 + 300 : state.counter1 =0
         }
          
        
        
        
        
        
        
        
        default:
            return state
    }
}
const PerProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initail)  
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
       )
}
export {Context,PerProvider}
