import React, { useState } from "react";
import styled from "styled-components";
import Date from "../components/Date";

export default function Register() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0)); // 인원수가 0 미만으로 내려가지 않도록 설정
  };

  const [selectedTags, setSelectedTags] = useState({});

  // 태그 클릭 핸들러
  const handleTagClick = (tagName) => {
    setSelectedTags((prevTags) => ({
      ...prevTags,
      [tagName]: !prevTags[tagName], // 토글
    }));
  };
  return (
    <div>
      <MainLabel>Please enter the information of the item</MainLabel>
      <div style={{ display: "flex" }}>
        {/* 왼쪽: 사진, 제목, 상세내용 */}
        <Wrapper>
          <div>???</div>
        </Wrapper>

        {/* 오른쪽: 날짜, 인원, 태그 */}
        <Wrapper>
          <h2>Detail</h2>
          <DateWrapper>
            <Date label="Expiration date" />
            <Date label="Manufacturing date" />
          </DateWrapper>

          <h2>인원수</h2>
          <CounterWrapper>
            <Button onClick={handleDecrement}>-</Button>
            <CountDisplay>{count}</CountDisplay>
            <Button onClick={handleIncrement}>+</Button>
          </CounterWrapper>

          <div>
            <h2>Tags</h2>
            {/* 해시태그 리스트. 실제 사용 시 이 부분을 동적 데이터로 바꿀 수 있습니다. */}
            {[
              "청소/계란",
              "유유/유제품",
              "채소/과일",
              "고기",
              "반찬",
              "베이커리",
              "조리",
              "비조리",
            ].map((tag) => (
              <Tag
                key={tag}
                selected={selectedTags[tag]}
                onClick={() => handleTagClick(tag)}
              >
                {tag.startsWith("#") ? tag : `#${tag}`}
              </Tag>
            ))}
          </div>
        </Wrapper>
      </div>
    </div>
  );
}

const MainLabel = styled.div`
  color: #596e5a;
  font-size: larger;
  font-weight: bold;
  margin: 50px 50px 50px 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const DateWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  padding: 10px;
  max-width: 200px;
  justify-content: space-around;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: #596e5a;
`;

const CountDisplay = styled.div`
  min-width: 40px;
  text-align: center;
`;
const Tag = styled.button`
  background-color: ${(props) => (props.selected ? "#a0a0a0" : "transparent")};
  border: 1px solid black;
  border-radius: 20px;
  padding: 5px 15px;
  margin: 5px;
  cursor: pointer;
  font-size: 15px;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #c0c0c0;
  }
`;
