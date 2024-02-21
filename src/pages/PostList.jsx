import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PostCard from "../components/PostCard";
import Map from "../components/Map";
import { IoOptions } from "react-icons/io5";
import { useFetch } from "../hooks/useFetch";
import FilterModal from "../components/Modal/FilterModal";
import { PostContext } from "../store/PostContext";

export default function PostList() {
  const { data: posts } = useContext(PostContext); // 'posts' 변수에 'data' 할당
  const [filterValues, setFilterValues] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const dialog = useRef();

  function openFilterModal() {
    dialog.current.open();
  }

  const matchesSearchTerm = (post) => {
    return searchTerm === '' ||
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description?.toLowerCase().includes(searchTerm.toLowerCase());
  }
  

  const matchesSelectedTags = (post) => {
    const selectedTags = Object.keys(filterValues).filter(tag => filterValues[tag]);
  
    if(selectedTags.length === 0) {
      return true;
    }
  
    const postTagsLower = post.tags.map(tag => tag.toLowerCase());
    // const result = selectedTags.every(selectedTag => 
    //   postTagsLower.includes(selectedTag.toLowerCase())
    // );

    for(let i = 0; i < selectedTags.length; i++) {
      if(!post.tags.includes(selectedTags[i])){
        console.log(`선택된 태그: ${selectedTags[i]}`);
        console.log(post.tags)
        console.log(`${post.id}`)
        return false;
      }
    }
  
  
    // 디버깅을 위해 선택된 태그와 게시글 태그를 출력
    console.log(`선택된 태그: ${selectedTags}`);
    console.log(`${post.id} 게시글 태그: ${postTagsLower}`);
    // console.log(`${post.id}의 결과 : ` + result);
  
    return true;
  }
  

  // 필터링 된 포스트 계산
  const filteredPosts = posts.filter(post => matchesSearchTerm(post) && matchesSelectedTags(post));

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
            <Input
              placeholder="검색어 입력"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // 검색어 업데이트
            />
            <Button onClick={openFilterModal}>
              <IoOptions size="30" style={{ marginBottom: "3px" }} />
            </Button>
          </Form>
          {
            filteredPosts.map((post) => ( // 필터링 된 포스트 사용
              <PostCard key={post.id} product={post} />
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
