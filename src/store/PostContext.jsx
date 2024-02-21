import React from "react";
import { createContext } from "react";
import CoffeeThmbnail from "../assets/images/post/coffee1.jpg"
import CurryThmbnail from "../assets/images/post/curry1.jpg"
import SteakThmbnail from "../assets/images/post/steak1.jpg"

export const PostContext = createContext();

const data = [
  {
    id : 1,
    thumbnail : CurryThmbnail,
    photos : [],
    rating : 4.5,
    name :  "Curry Restaurant", 
    location : "서울시 강동구",
    coordinate : [37.560171, 127.164144],
    author : "Hose",
    title : "Curry Restaurant",
    description : "맛있는 카레입니다.",
    tags : ["고기", "조리"],
    createdAt : "2023-12-04"
  },  
  {
    id : 2,
    thumbnail : SteakThmbnail,
    photos : [],
    rating : 3.5,
    name :  "Steak House",
    location : "서울시 강동구",
    coordinate : [37.558318, 127.159590],
    author : "Jamse",
    title : "Steak House",
    description : "미디엄 레어 스테이크 3인분 뿌려요.",
    tags : ["고기", "조리"],
    createdAt : "2023-12-04"
  },
  {
    id : 3,
    thumbnail : CoffeeThmbnail,
    photos : [],
    rating : 4.2,
    name :  "Coffee Shop",
    location : "서울시 강동구",
    coordinate : [37.557346, 127.164798],
    author : "Mike",
    title : "Coffee Shop",
    description : "시원한 아이스 아메리카노와 크로와상 빵이 있습니다.",
    tags : ["유제품","베이커리"],
    createdAt : "2023-12-04"
  }
]
export function PostProvider({children}) {
    return (
        <PostContext.Provider value={{data}}>
            {children}
        </PostContext.Provider>
    )
}