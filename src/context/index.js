import { createContext, useReducer } from "react";
import img1_slider from "../img/img-1.png";
import img2_slider from "../img/labap.png";
import img3_slider from "../img/flash3.png";
import img4_slider from "../img/hdd.png";
import img5_slider from "../img/labsam.png";
import img6_slider from "../img/samsdd2.png";
import img7_slider from "../img/flash1.png";
import img8_slider from "../img/flash2.png";
import img9_slider from "../img/flash4.png";
import img10_slider from "../img/img-2.png";
import img11_slider from "../img/img-3.png";
import img12_slider from "../img/img-4.png";
import img13_slider from "../img/img-5.png";
import img14_slider from "../img/samsdd.png";
import img15_slider from "../img/hddd.png";
import img16_slider from "../img/tablet.png";
import imgfooter1 from "../img/tell.jpg";
import imgfooter2 from "../img/tell.jpg";
import imgfooter3 from "../img/tell.jpg";
import img17_slider from "../img/appel 14p.png";
import img18_slider from "../img/appel 14.png";
import img19_slider from "../img/googel 7.png";
import img20_slider from "../img/googel 7p.png";
import img21_slider from "../img/sam flip.png";
import img22_slider from "../img/fold.png";
import img23_slider from "../img/xio 12.png";
import img24_slider from "../img/lab.jpeg";
import img25_slider from "../img/lab1.jpeg";
import img26_slider from "../img/lab2.jpeg";
import img27_slider from "../img/lab3.jpeg";
import img28_slider from "../img/asus.jpeg";
import img29_slider from "../img/asus1.png";
import img30_slider from "../img/asus2.jpeg";
import img31_slider from "../img/asus3.jpeg";
import img32_slider from "../img/tablet.jpeg";
import img33_slider from "../img/tablet1.jpeg";
import img34_slider from "../img/tablet2.jpeg";
import img35_slider from "../img/tablet3.jpeg";
import { type } from "@testing-library/user-event/dist/type";

const Context = createContext();
const initail = {
  sidebar: "Sidehiden",
  openMenu: "openMenu",
  closeMenu: "closeMenu",
  filtrMenu: "",
  showMobile: "actv",
  showLabtab: "actv",
  showFlash: "actv",
  showHdd: "actv",
  showSdd: "actv",
  upper: "hidenUp",
  searchbar: "hidenbar",
  basket: 0,
  showCrad: false,
  card: [],
  backcolor: [
    "linear-gradient(130deg,#f9f8f3, blue 130% )",
    "linear-gradient(130deg,#f9f8f3, gray 130%)",
    "linear-gradient(130deg,#f9f8f3, black 130% )",
    "linear-gradient(130deg,blue, lightblue 130%)",
    "linear-gradient(130deg,#f9f8f3, blue 130% )",
    "linear-gradient(130deg,#f9f8f3, black 130% )",
  ],
  imgSlider: [
    {
      id: 1,
      model: "mobile",
      titel: "The latest version For You",
      img: img1_slider,
    },
    {
      id: 2,
      model: "labtab",
      titel: "With High Elegance And Power",
      img: img2_slider,
    },
    {
      id: 3,
      model: "Flash Memory",
      titel: "Small But Portable And Strong",
      img: img3_slider,
    },
    {
      id: 4,
      model: "Hdd Disk",
      titel: "With High capacity",
      img: img4_slider,
    },
    {
      id: 5,
      model: "Sdd Disk",
      titel: "High Speed For Operating System",
      img: img6_slider,
    },
    {
      id: 6,
      model: "Tablet",
      titel: "High Speed For Operating System",
      img: img16_slider,
    },
  ],
  productOffer: [
    {
      id: 1,
      model: "appel 14 pro",
      ram: 256,
      price: 1500,
      img: img17_slider,
      count: 0,
    },
    { id: 2, model: "labtab", price: 3500, img: img2_slider, count: 0 },
    { id: 3, model: "Flash Memory", price: 1000, img: img3_slider, count: 0 },
  ],
  imgfooter: [imgfooter1, imgfooter2, imgfooter3],
  productsMobile: [
    // {
    //     id: 1, model: 'appel 14 pro', ram: 256, price: 1500, img: img17_slider, count: 0
    //     },
    {
      id: 2,
      model: "samsung ",
      ram: 128,
      price: 3000,
      img: img10_slider,
      count: 0,
      star: 5,
    },
    {
      id: 3,
      model: "appel 12 ",
      ram: 128,
      price: 500,
      img: img1_slider,
      count: 0,
      star: 4,
    },
    {
      id: 4,
      model: "xiaomi ",
      ram: 64,
      price: 1500,
      img: img11_slider,
      count: 0,
      star: 4,
    },
    {
      id: 5,
      model: "motorola",
      ram: 128,
      price: 2000,
      img: img12_slider,
      count: 0,
      star: 5,
    },
    {
      id: 6,
      model: " motorola",
      ram: 64,
      price: 3300,
      img: img13_slider,
      count: 0,
      star: 5,
    },
    {
      id: 7,
      model: "appel 14",
      ram: 256,
      price: 1000,
      img: img18_slider,
      count: 0,
      star: 5,
    },
    {
      id: 8,
      model: "google 7 ",
      ram: 128,
      price: 3000,
      img: img19_slider,
      count: 0,
      star: 4,
    },
    {
      id: 9,
      model: "google 7 pro ",
      ram: 128,
      price: 500,
      img: img20_slider,
      count: 0,
      star: 5,
    },
    {
      id: 10,
      model: "samsung flip ",
      ram: 64,
      price: 1500,
      img: img21_slider,
      count: 0,
      star: 5,
    },
    {
      id: 11,
      model: "samsung fold",
      ram: 128,
      price: 2000,
      img: img22_slider,
      count: 0,
      star: 4,
    },
    {
      id: 12,
      model: " xioami 12",
      ram: 64,
      price: 3300,
      img: img23_slider,
      count: 0,
      star: 3,
    },
  ],
  productLabtab: [
    {
      id: 1,
      model: 'appel 12" ',
      ram: 8,
      sdd: 256,
      price: 3000,
      img: img24_slider,
      count: 0,
    },
    {
      id: 2,
      model: 'appel 13" ',
      ram: 16,
      sdd: 256,
      price: 500,
      img: img25_slider,
      count: 0,
    },
    {
      id: 3,
      model: 'appel 15" ',
      ram: 4,
      sdd: 256,
      price: 1500,
      img: img26_slider,
      count: 0,
    },
    {
      id: 4,
      model: 'appel 11"',
      ram: 8,
      sdd: 256,
      price: 2000,
      img: img27_slider,
      count: 0,
    },
    {
      id: 5,
      model: 'asus 12" ',
      ram: 8,
      sdd: 256,
      price: 3000,
      img: img28_slider,
      count: 0,
    },
    {
      id: 6,
      model: 'asus 13" ',
      ram: 16,
      sdd: 256,
      price: 500,
      img: img29_slider,
      count: 0,
    },
    {
      id: 7,
      model: 'asus 15" ',
      ram: 4,
      sdd: 256,
      price: 1500,
      img: img30_slider,
      count: 0,
    },
    {
      id: 8,
      model: 'asus 11"',
      ram: 8,
      sdd: 256,
      price: 2000,
      img: img31_slider,
      count: 0,
    },
  ],
  productTablet: [
    {
      id: 1,
      model: 'tablet 12" ',
      ram: 8,
      sdd: 256,
      price: 3000,
      img: img32_slider,
      count: 0,
    },
    {
      id: 2,
      model: 'tablet 13" ',
      ram: 16,
      sdd: 256,
      price: 500,
      img: img33_slider,
      count: 0,
    },
    {
      id: 3,
      model: 'tablet 15" ',
      ram: 4,
      sdd: 256,
      price: 1500,
      img: img34_slider,
      count: 0,
    },
    {
      id: 4,
      model: 'tablet 11"',
      ram: 8,
      sdd: 256,
      price: 2000,
      img: img35_slider,
      count: 0,
    },
  ],
  productFlash: [
    {
      id: 1,
      model: 'flash " ',
      ram: 32,
      price: 3000,
      img: img3_slider,
      count: 0,
    },
    {
      id: 2,
      model: 'flash " ',
      ram: 64,
      price: 500,
      img: img7_slider,
      count: 0,
    },
    {
      id: 3,
      model: 'flash " ',
      ram: 128,
      price: 1500,
      img: img8_slider,
      count: 0,
    },
    {
      id: 4,
      model: "flash ",
      ram: 512,
      price: 2000,
      img: img9_slider,
      count: 0,
    },
  ],
  productHard: [
    {
      id: 1,
      model: "hdd  ",
      ram: "1t",
      price: 3000,
      img: img4_slider,
      count: 0,
    },
    {
      id: 2,
      model: "hdd  ",
      ram: "2t",
      price: 500,
      img: img15_slider,
      count: 0,
    },
  ],
  productSdd: [
    {
      id: 1,
      model: 'sdd " ',
      ram: "1t",
      price: 3000,
      img: img6_slider,
      count: 0,
    },
    {
      id: 2,
      model: 'sdd " ',
      ram: 512,
      price: 500,
      img: img14_slider,
      count: 0,
    },
  ],
  products: [
    {
      id: 1,
      product: "Mobile ",
      price: 1000,
      img: img1_slider,
    },
    {
      id: 2,
      product: "labtab ",
      price: 3000,
      img: img2_slider,
    },
    {
      id: 3,
      product: "flash ",
      price: 500,
      img: img3_slider,
    },
    {
      id: 4,
      product: "hard pc ",
      price: 1500,
      img: img4_slider,
    },
    {
      id: 5,
      product: "labtab",
      price: 2000,
      img: img5_slider,
    },
    {
      id: 6,
      product: " hrad sdd",
      price: 3300,
      img: img6_slider,
    },
    {
      id: 7,
      product: "flash ",
      price: 1000,
      img: img7_slider,
    },
    {
      id: 8,
      product: "flash ",
      price: 900,
      img: img8_slider,
    },
    {
      id: 9,
      product: "flash",
      price: 500,
      img: img9_slider,
    },
    {
      id: 10,
      product: "mobile ",
      price: 2700,
      img: img10_slider,
    },
    {
      id: 11,
      product: "mobile",
      price: 3500,
      img: img11_slider,
    },
    {
      id: 12,
      product: "mobile",
      price: 3100,
      img: img12_slider,
    },
    {
      id: 13,
      product: "mobile",
      price: 2000,
      img: img13_slider,
    },
    {
      id: 14,
      product: " hrad sdd pc ",
      price: 3900,
      img: img14_slider,
    },
    {
      id: 15,
      product: "hrad pc ",
      price: 1000,
      img: img15_slider,
    },
    {
      id: 16,
      product: "tablet",
      price: 4000,
      img: img16_slider,
    },
  ],
  counter: 0,
  counter1: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW":
      return {
        ...state,
        sidebar: (state.sidebar = "SidehidenShow"),
        openMenu: (state.openMenu = "closeMenu"),
        closeMenu: (state.closeMenu = "openMenu"),
        filtrMenu: (state.filtrMenu = "filter"),
      };
    case "HIDEN":
      return {
        ...state,
        sidebar: (state.sidebar = "Sidehiden"),
        closeMenu: (state.closeMenu = "closeMenu"),
        openMenu: (state.openMenu = "openMenu"),
        filtrMenu: (state.filtrMenu = ""),
      };
    case "MOBILE":
      return {
        ...state,
        showMobile: (state.showMobile = "show"),
      };
    case "DMOBILE":
      return {
        ...state,
        showMobile: (state.showMobile = "actv"),
      };
    case "LABTAB":
      return {
        ...state,
        showLabtab: (state.showLabtab = "show"),
      };
    case "DLABTAB":
      return {
        ...state,
        showLabtab: (state.showLabtab = "actv"),
      };
    case "FLASH":
      return {
        ...state,
        showFlash: (state.showFlash = "show"),
      };
    case "DFLASH":
      return {
        ...state,
        showFlash: (state.showFlash = "actv"),
      };
    case "HDD":
      return {
        ...state,
        showHdd: (state.showHdd = "show"),
      };
    case "DHDD":
      return {
        ...state,
        showHdd: (state.showHdd = "actv"),
      };
    case "SDD":
      return {
        ...state,
        showSdd: (state.showSdd = "show"),
      };
    case "DSDD":
      return {
        ...state,
        showSdd: (state.showSdd = "actv"),
      };
    case "GoToNext":
      return {
        ...state,
        counter:
          state.counter < state.imgSlider.length - 1
            ? state.counter + 1
            : (state.counter = 0),
      };
    case "GoToPerv":
      return {
        ...state,
        counter:
          state.counter > 0
            ? state.counter - 1
            : (state.counter = state.imgSlider.length - 1),
      };
    case "GoToNextList":
      return {
        ...state,
        counter1:
          state.counter1 <= 0 ? state.counter1 - 300 : (state.counter1 = 0),
      };
    case "GoToPervList":
      return {
        ...state,
        counter1:
          state.counter1 < 0 ? state.counter1 + 300 : (state.counter1 = 0),
      };
    case "Upper":
      return {
        ...state,
        upper: (state.upper = "showUp"),
      };
    case "Down":
      return {
        ...state,
        upper: (state.upper = "hidenUp"),
      };
    case "Scroll":
      return {
        ...state,
        upper: (state.upper = "hidenUp"),
      };
    case "Basket":
      return {
        ...state,
        basket: state.basket + 1,
      };
    case "DecBasket":
      return {
        ...state,
        basket: state.basket > 0 ? state.basket - 1 : "",
      };
    case "SearchOn":
      return {
        ...state,
        searchbar: (state.searchbar = "showbar"),
      };
    case "SearchOff":
      return {
        ...state,
        searchbar: (state.searchbar = "hidenbar"),
      };
    case "SRCMO":
      return {
        ...state,
        productsMobile: action.payload
          ? initail.productsMobile.filter((item) =>
              item.model.includes(action.payload)
            )
          : initail.productsMobile,
      };
    case "SRCLB":
      return {
        ...state,
        productLabtab: action.payload
          ? initail.productLabtab.filter((item) =>
              item.model.includes(action.payload)
            )
          : initail.productLabtab,
      };

    default:
      return state;
  }
};
const PerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initail);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export { Context, PerProvider };
