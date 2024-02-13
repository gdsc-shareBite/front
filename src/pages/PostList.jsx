import React, { useRef, useState } from "react";
import styled from "styled-components";
import PostCard from "../components/PostCard";
import Map from "../components/Map";
import { IoOptions } from "react-icons/io5";
import { useFetch } from "../hooks/useFetch";
import FilterModal from "../components/Modal/FilterModal";

export default function PostList() {
  const [values, setValues] = useState("");
  // const [
  //   isFetching,
  //   error,
  //   fetchedData: availableFoods,
  //   setFetchedDat: setAvailableFoods,
  // ] = useFetch(fetchAvailableFoods, []);

  const dialog = useRef();

  function openFilterModal() {
    dialog.current.open();
  }

  return (
    <>
      <FilterModal ref={dialog} />
      <Div>
        <Map />
        <List>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <Input placeholder="검색어 입력" value={values.search} />
            <Button onClick={openFilterModal}>
              <IoOptions size="30" style={{ marginBottom: "3px" }} />
            </Button>
          </Form>
          <PostCard product={{ id: 1 }} />
          <PostCard product={{ id: 2 }} />
          <PostCard product={{ id: 3 }} />
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
