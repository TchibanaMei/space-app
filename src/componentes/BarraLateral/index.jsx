import styled from "styled-components";
import ItemNavegacao from "./ItemNavegação";

const ListaEstilizada = styled.ul`
  width: 212px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao
            ativo={true}
            iconeAtivo="/icones/home-ativo.png"
            iconeInativo="/icones/home-inativo.png"
          >
            Início
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/mais-vistas-ativo.png"
            iconeInativo="/icones/mais-vistas-inativo.png"
          >
            Mais vistas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/mais-curtidas-ativo.png"
            iconeInativo="/icones/mais-curtidas-inativo.png"
          >
            Mais curtidas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/novas-ativo.png"
            iconeInativo="/icones/novas-inativo.png"
          >
            Novas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/surpreenda-me-ativo.png"
            iconeInativo="/icones/surpreenda-me-inativo.png"
          >
            Surpreenda-me
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
