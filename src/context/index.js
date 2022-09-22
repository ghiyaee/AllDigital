import { createContext ,useReducer} from "react";
const Context = createContext();
const initail = {
    sidebar: 'Sidehiden',
    openMenu: 'openMenu',
    closeMenu: 'closeMenu',
    showMobile: 'actv',
    showLabtab: 'actv',
    showFlash: 'actv',
    showHdd: 'actv',
    showSdd:'actv'
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
