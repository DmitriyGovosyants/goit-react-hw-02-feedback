import styled from "@emotion/styled";

export const ControlsList = styled.ul`
  display: flex;
  margin-top: ${p => p.theme.spacing(5)};
  margin-bottom: ${p => p.theme.spacing(5)};
`

export const Item = styled.li`
  background-color: ${p => p.theme.colors.btnBackground};
  border-radius: 10px;
  :not(:last-child) {
    margin-right: ${p => p.theme.spacing(3)};
  }
`

export const Button = styled.button`
  color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.spacing(2)};
`