import styled from 'styled-components'

// Estilo para o container da lista de vagas
export const ListaContainer = styled.div`
  margin: 20px;
`

export const VagasList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;
  list-style-type: none; /* Remove os marcadores da lista */
  padding: 0; /* Remove o padding padrão */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Muda para uma coluna em telas pequenas */
  }
`

// VagaItem atualizado para aceitar props corretamente
export const VagaItem = styled.li<React.LiHTMLAttributes<HTMLLIElement>>`
  margin-bottom: 16px; /* Espaço entre as vagas */
`
