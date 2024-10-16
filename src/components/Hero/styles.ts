import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Centraliza o conteúdo se necessário */
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
  }
`

export const HeroTitle = styled.h2`
  position: relative; /* Para garantir que o texto apareça sobre o fundo */
  color: #eee; /* Cor do texto */
  font-family: Gloock, serif;
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 32px; /* Tamanho do texto em telas pequenas */
  }
`
