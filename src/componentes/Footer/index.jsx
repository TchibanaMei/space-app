import styled from "styled-components";
const FooterEstilizado = styled.footer`
  color: #fff;
  background-color: #04244f;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin-top: 73px;
  div {
    display: flex;
    gap: 35px;
    padding-left: 46px;
  }
  p {
    font-family: "Montseratt", sans-serif;
    padding-right: 46px;
  }
`;

const Footer = () => {
  return (
    <FooterEstilizado>
      <div>
        <img src="./imagens/sociais/facebook.svg" alt="Icone do Facebbok" />
        <img src="./imagens/sociais/twitter.svg" alt="Icone do Twitter" />
        <img src="./imagens/sociais/instagram.svg" alt="Icone do Instagram" />
      </div>
      <p>Desenvolvido por Alura.</p>
    </FooterEstilizado>
  );
};

export default Footer;
