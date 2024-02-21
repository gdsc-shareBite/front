import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PostCard from "../components/PostCard";
import Map from "../components/Map";
import { IoOptions } from "react-icons/io5";
import { useFetch } from "../hooks/useFetch";
import FilterModal from "../components/Modal/FilterModal";

import CoffeeThmbnail from "../assets/images/post/coffee1.jpg"
import CurryThmbnail from "../assets/images/post/curry1.jpg"
import SteakThmbnail from "../assets/images/post/steak1.jpg"

const coffeePaths = [
  "../assets/images/post/coffee1.jpg",
  "../assets/images/post/coffee2.jpg",
  "../assets/images/post/coffee3.jpg",
]
const curryPaths = [
  "../assets/images/post/curry1.jpg",
  "../assets/images/post/curry2.jpg",
  "../assets/images/post/curry3.jpg",
]
const steakPaths = [
  "../assets/images/post/steak1.jpg",
  "../assets/images/post/steak2.jpg",
  "../assets/images/post/steak3.jpg",
]
const data = [
  {
    id : 1,
    thumbnail : CurryThmbnail,
    photos : curryPaths.map((path) => require(`${path}`)),
    rating : 4.5,
    name :  "Curry Restaurant", 
    location : "서울시 강동구",
    coordinate : [37.560171, 127.164144],
    author : "Hose",
    title : "Curry Restaurant",
    description : "템 뿌려요."
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
    description : "템 뿌려요."
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
    description : "템 뿌려요."
  }
]

export default function PostList() {
  const [filterValues, setFilterValues] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const dialog = useRef();

  function openFilterModal() {
    dialog.current.open();
  }

  return (
    <>
      <FilterModal
        ref={dialog}
        initialValues={filterValues}
        setInitialValues={setFilterValues}
      />
      <Div>
        <Map />
        <List>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <Input placeholder="검색어 입력" value={filterValues.search} />
            <Button onClick={openFilterModal}>
              <IoOptions size="30" style={{ marginBottom: "3px" }} />
            </Button>
          </Form>
          {/* filter, includes 이용해서 PostCard 출력하기 */}
          {
            data.map((item) => (
              <PostCard key={item.id} product={item} />
            ))
          }
        </List>
      </Div>
    </>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 30px 50px;
  min-width: fit-content;
`;

const List = styled.div`
  margin-left: 100px;
`;

const Input = styled.input`
  width: 440px;
  padding: 10px;
  border-radius: 10px;
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
  width: 478px;
  align-items: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
`;
