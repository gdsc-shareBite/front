import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const FilterModal = forwardRef(function FilterModal(
  { initialValues, setInitialValues },
  ref
) {
  const [selectedTags, setSelectedTags] = useState({ initialValues });
  const dialog = useRef();

  // 태그 클릭 핸들러
  const handleTagClick = (tagName) => {
    setSelectedTags((prevTags) => ({
      ...prevTags,
      [tagName]: !prevTags[tagName], // 토글
    }));
  };

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
        setInitialValues(selectedTags);
      },
    };
  });

  return createPortal(
    <ModalContainer ref={dialog}>
      <p>여기서 검색할 게시글의 필터를 선택해주세요.</p>
      <TagContainer>
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
      </TagContainer>
      <form method="dialog">
        <Button onClick={() => ref.current.close()}>Close</Button>
      </form>
    </ModalContainer>,
    document.getElementById("modal")
  );
});

export default FilterModal;

const ModalContainer = styled.dialog`
  border: none;
  border-radius: 8px;
  padding: 2rem;
  min-width: fit-content;
  width: 30%;

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
  p {
    margin: 0.5rem 0;
    font-size: 1.2remm;
  }
  form {
    text-align: right;
  }
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  color: white;
  background: #35314c;
  cursor: pointer;
`;

const TagContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 140px);
  margin: 0.5rem 0;
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
