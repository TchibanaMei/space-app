import styled from "styled-components";

const FigureEstilizada = styled.figure`
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  max-width: 100%;
  min-height: 328px;
  margin: 0;
  flex-grow: 1;
  border-radius: 20px;
`;

const TituloEstilizado = styled.h1`
  max-width: 300px;
  padding: 0 64px;
  color: #fff;
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
`;

const Banner = ({ texto, backgroundImage }) => {
  return (
    <FigureEstilizada $backgroundImage={backgroundImage}>
      <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizada>
  );
};

export default Banner;
