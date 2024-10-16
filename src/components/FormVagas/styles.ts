import styled from 'styled-components'

// Definição do Form
type FormProps = React.FormHTMLAttributes<HTMLFormElement>

export const Form = styled.form<FormProps>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

// Definição do Campo
type CampoProps = React.InputHTMLAttributes<HTMLInputElement>

export const Campo = styled.input<CampoProps>`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`

// Definição do BtnPesquisar
type BtnPesquisarProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const BtnPesquisar = styled.button<BtnPesquisarProps>`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`
