import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import BotaoIcone from "../BotaoIcone";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 1156px;
  top: 294px;
  border: 0;
  border-radius: 10px;
  padding: 0;
  background: transparent;
  form {
    button {
      position: relative;
      top: 24px;
      right: 60px;
    }
  }
`;

//IMPLETAR O MÉTODO AOFECHAR

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
  return (
    <>
      {foto && (
        <>
          (<Overlay />
          <DialogEstilizado open={!!foto} onClose={aoFechar}>
            <Imagem
              foto={foto}
              expandida={true}
              aoAlternarFavorito={aoAlternarFavorito}
            />
            <form method="dialog">
              <BotaoIcone formMethod="dialog">
                <img src="./icones/fechar.png" alt="Icone de fechar" />
              </BotaoIcone>
            </form>
          </DialogEstilizado>
          )
        </>
      )}
    </>
  );
};

export default ModalZoom;
