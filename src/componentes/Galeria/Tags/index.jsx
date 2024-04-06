import styled from "styled-components";
import tags from "./tags.json";

const TagContainer = styled.div`
  display: flex;
  width: 870px;
  align-items: center;
  margin-top: 56px;
  gap: 24px;
`;

const TagEstilizado = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  color: #d9d9d9;
`;

const Tag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: #44566f;
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 10px 8px;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    border-color: rgba(201, 140, 241, 1);
  }
`;

const Div = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
`;

const Tags = ({ setTag }) => {
  return (
    <TagContainer>
      <TagEstilizado>Busque por tags: </TagEstilizado>
      <Div>
        {tags.map((tag) => (
          <Tag key={tag.id} onClick={() => setTag(tag.tag)}>
            {tag.titulo}
          </Tag>
        ))}
      </Div>
    </TagContainer>
  );
};

export default Tags;
