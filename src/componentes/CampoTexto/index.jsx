import styled from "styled-components";
import search from "./search.png";
const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
  width: 566px;
  height: 56px;
  background: transparent;
  outline: none;
  border: 2px solid rgba(201, 140, 241, 1);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 12px 16px;
  color: #d9d9d9;
  font-size: 20px;
  line-height: 20px;
  &::placeholder {
    color: #d9d9d9;
  }
`;

const IconeLupa = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 10px;
  right: 10px;
`;

const CampoTexto = ({ setFiltro }) => {
  return (
    <ContainerEstilizado>
      <CampoTextoEstilizado
        onChange={(e) => {
          setFiltro(e.target.value);
        }}
        type="text"
        placeholder="O que você procura?"
      />
      <IconeLupa src={search} alt="ícone de lupa" />
    </ContainerEstilizado>
  );
};

export default CampoTexto;
