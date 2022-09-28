import { createContext, useReducer } from "react";
import img1 from "../imgs/img-4.jpg"
import img2 from "../imgs/labtab1.png"
import img3 from "../imgs/flash.jpg"
import img4 from "../imgs/hdd.jpg"
import img5 from "../imgs/sdd.png"
import img1_slider from "../img/img-1.png"
import img2_slider from "../img/img-2.png"
import img3_slider from "../img/img-3.png"
import img4_slider from "../img/img-4.png"
import img5_slider from "../img/img-5.png"


const Context = createContext();
const initail = {
    sidebar: 'Sidehiden',
    openMenu: 'openMenu',
    closeMenu: 'closeMenu',
    showMobile: 'actv',
    showLabtab: 'actv',
    showFlash: 'actv',
    showHdd: 'actv',
    showSdd: 'actv',
    imgs: [img1, img2, img3, img4, img5],
    imgSlider: [img1_slider, img2_slider, img3_slider, img4_slider, img5_slider],
    counter: 0,
}
const reducer = (state, action) => { 
    switch (action) {
        case 'SHOW':
            return {
                ...state, sidebar: state.sidebar = 'SidehidenShow',
                    openMenu: state.openMenu = 'closeMenu',
                    closeMenu: state.closeMenu = 'openMenu'
            }
        case 'HIDEN':
            return {
                ...state, sidebar: state.sidebar = 'Sidehiden',
                    closeMenu: state.closeMenu = 'closeMenu',
                    openMenu: state.openMenu = 'openMenu'
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
