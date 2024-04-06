import styled from "styled-components";
import Titulo from "../../Titulo";
import fotos from "./fotos-populares.json";

const ColunaFotos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Imagem = styled.img`
  max-width: 212px;
  border-radius: 20px;
`;

const BotaoEstilizado = styled.button`
  background-color: transparent;
  width: 100%;
  margin-top: 24px;
  padding: 14px 29px;
  border: 2px solid rgba(201, 140, 241, 1);
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

const Populares = () => {
  return (
    <section>
      <Titulo $alinhamento="center">Populares</Titulo>
      <ColunaFotos>
        {fotos.map((foto) => (
          <Imagem key={foto.id} src={foto.path} alt={foto.alt} />
        ))}
      </ColunaFotos>
      <BotaoEstilizado>Ver mais</BotaoEstilizado>
    </section>
  );
};

export default Populares;
