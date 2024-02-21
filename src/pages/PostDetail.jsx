import React, { useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../store/PostContext";
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import styled from "styled-components";
import ReservationModal from "../components/Modal/ReservationModal";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export default function PostDetail() {
  const [isReserved, setIsReserved] = useState(false);

  const {id} = useParams();
  const { data : posts} = useContext(PostContext);
  const post = posts.find(p => p.id.toString() === id);
  
  const dialog = useRef();
  function openReservationModal() {
    dialog.current.open();
  }

  console.log(isReserved)
  return (
    <>
      {post ? (
        <>
          <ReservationModal ref={dialog} setIsReserved={setIsReserved} />
          <Div>
            <ImageGallery 
              items={images} 
              showPlayButton={false}
              showFullscreenButton={false}
              showIndex={true}
              style={{marginRight : "30px"}}
            />
            <Detail>
              <Title>{post.title}</Title>
              <Description>{post.description}</Description>
              <AuthorAndDate>
                <span>작성자: {post.author}</span>
                <span>작성일: {post.createdAt}</span> {/* post 객체에 작성 날짜가 있다고 가정 */}
              </AuthorAndDate>
              {/* 태그를 표시 */}
              <TagsContainer>
                {post.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagsContainer>
              {
                isReserved ?
  <Button onClick={() => setIsReserved(false)}>예약취소</Button>
  : <Button onClick={openReservationModal}>예약하기</Button>
  }
  </Detail>
  </Div>
  </>
  ) : (
  <p>포스트를 찾을 수 없습니다.</p>
  )}
  </>
  );
}

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const Tag = styled.span`
  display: inline-block;
  background: #eee;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 4px;
  color: #555;
`;

const Div = styled.div`
  display : flex;
  justify-content: center;
  padding: 50px 30px 50px;
`

const Detail = styled.div`
  margin-left: 40px;
  width: 600px;
  background: #fff; // 밝은 배경색
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content : space-between;
  height : 100%;
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
`;

const Button = styled.button`
  background-color: purple;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  width : 150px;

  &:hover {
    background-color: #C11B33;
  }
`;

const AuthorAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;
  color: #757575;
`;
